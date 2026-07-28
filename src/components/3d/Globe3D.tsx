import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLOBAL_OFFICES } from '../../data/corporateData';
import { GlobalOffice } from '../../types';

interface Globe3DProps {
  onSelectOffice?: (office: GlobalOffice) => void;
  activeOfficeId?: string;
  height?: string;
}

export const Globe3D: React.FC<Globe3DProps> = ({
  onSelectOffice,
  activeOfficeId,
  height = 'h-[500px] lg:h-[600px]'
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredOffice, setHoveredOffice] = useState<GlobalOffice | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const heightPx = container.clientHeight;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / heightPx, 0.1, 1000);
    camera.position.z = 240;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, heightPx);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Globe Group
    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    // Outer Glow Halo
    const atmosphereGeo = new THREE.SphereGeometry(82, 48, 48);
    const atmosphereMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color('#DC2626'),
      transparent: true,
      opacity: 0.15,
      side: THREE.BackSide,
    });
    const atmosphere = new THREE.Mesh(atmosphereGeo, atmosphereMat);
    globeGroup.add(atmosphere);

    // Main Sphere Wireframe/Dots
    const sphereRadius = 75;
    const globeGeo = new THREE.SphereGeometry(sphereRadius, 48, 48);

    // Procedural Dot Texture
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.fillStyle = '#08080A';
      ctx.fillRect(0, 0, 1024, 512);

      // Grid Lines & Dots
      ctx.strokeStyle = '#DC2626';
      ctx.lineWidth = 1;
      ctx.globalAlpha = 0.25;

      for (let x = 0; x < 1024; x += 32) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, 512);
        ctx.stroke();
      }
      for (let y = 0; y < 512; y += 32) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(1024, y);
        ctx.stroke();
      }

      // Bright Dots for continents simulation
      ctx.fillStyle = '#F43F5E';
      ctx.globalAlpha = 0.8;
      for (let i = 0; i < 2500; i++) {
        const rx = Math.random() * 1024;
        const ry = Math.random() * 512;
        ctx.beginPath();
        ctx.arc(rx, ry, Math.random() > 0.8 ? 2 : 1, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const texture = new THREE.CanvasTexture(canvas);
    const globeMat = new THREE.MeshStandardMaterial({
      map: texture,
      roughness: 0.4,
      metalness: 0.7,
      emissive: new THREE.Color('#1C0A0E'),
      emissiveIntensity: 0.6,
      transparent: true,
      opacity: 0.95
    });

    const globeMesh = new THREE.Mesh(globeGeo, globeMat);
    globeGroup.add(globeMesh);

    // Inner Glowing Core
    const coreGeo = new THREE.SphereGeometry(72, 32, 32);
    const coreMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color('#DC2626'),
      wireframe: true,
      transparent: true,
      opacity: 0.2,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    globeGroup.add(coreMesh);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xdc2626, 3);
    dirLight1.position.set(150, 150, 150);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xf43f5e, 2);
    dirLight2.position.set(-150, -100, -150);
    scene.add(dirLight2);

    // Convert Lat/Lng to 3D Coordinates
    const latLngToVector3 = (lat: number, lng: number, radius: number) => {
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lng + 180) * (Math.PI / 180);

      const x = -(radius * Math.sin(phi) * Math.cos(theta));
      const z = radius * Math.sin(phi) * Math.sin(theta);
      const y = radius * Math.cos(phi);

      return new THREE.Vector3(x, y, z);
    };

    // Hotspot Markers & Pulse Rings
    const officeMarkers: { mesh: THREE.Mesh; office: GlobalOffice; pos: THREE.Vector3 }[] = [];

    GLOBAL_OFFICES.forEach((office) => {
      const pos = latLngToVector3(office.coordinates.lat, office.coordinates.lng, sphereRadius + 1.5);

      // Marker Dot
      const markerGeo = new THREE.SphereGeometry(office.isHQ ? 2.5 : 1.8, 16, 16);
      const markerMat = new THREE.MeshBasicMaterial({
        color: office.isHQ ? new THREE.Color('#FF0055') : new THREE.Color('#00E676')
      });
      const markerMesh = new THREE.Mesh(markerGeo, markerMat);
      markerMesh.position.copy(pos);
      globeGroup.add(markerMesh);

      // Pulsing Ring
      const ringGeo = new THREE.RingGeometry(2, 3.5, 24);
      const ringMat = new THREE.MeshBasicMaterial({
        color: office.isHQ ? new THREE.Color('#FF0055') : new THREE.Color('#00E676'),
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.6
      });
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      ringMesh.position.copy(pos.clone().multiplyScalar(1.01));
      ringMesh.lookAt(new THREE.Vector3(0, 0, 0));
      globeGroup.add(ringMesh);

      officeMarkers.push({ mesh: markerMesh, office, pos });
    });

    // Create 3D Curved Arcs connecting HQ (SF) to other offices
    const hqOffice = GLOBAL_OFFICES.find(o => o.isHQ) || GLOBAL_OFFICES[0];
    const hqPos = latLngToVector3(hqOffice.coordinates.lat, hqOffice.coordinates.lng, sphereRadius);

    GLOBAL_OFFICES.filter(o => !o.isHQ).forEach((office) => {
      const targetPos = latLngToVector3(office.coordinates.lat, office.coordinates.lng, sphereRadius);

      // Interpolate midpoint for arc height
      const midPoint = new THREE.Vector3()
        .addVectors(hqPos, targetPos)
        .multiplyScalar(0.5);
      const distance = hqPos.distanceTo(targetPos);
      midPoint.setLength(sphereRadius + distance * 0.35);

      const curve = new THREE.QuadraticBezierCurve3(hqPos, midPoint, targetPos);
      const points = curve.getPoints(40);
      const arcGeo = new THREE.BufferGeometry().setFromPoints(points);

      const arcMat = new THREE.LineBasicMaterial({
        color: new THREE.Color('#00D2FF'),
        transparent: true,
        opacity: 0.45,
      });

      const arcLine = new THREE.Line(arcGeo, arcMat);
      globeGroup.add(arcLine);
    });

    // Particle Cloud orbiting Globe
    const particleCount = 400;
    const particleGeo = new THREE.BufferGeometry();
    const particlePos = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = sphereRadius + 15 + Math.random() * 25;

      particlePos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      particlePos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      particlePos[i * 3 + 2] = r * Math.cos(phi);
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePos, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x0057ff,
      size: 1.2,
      transparent: true,
      opacity: 0.6
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    globeGroup.add(particles);

    // Mouse Interaction
    let targetRotationX = 0;
    let targetRotationY = 0;
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      setMousePos({ x, y });

      mouse.x = (x / width) * 2 - 1;
      mouse.y = -(y / heightPx) * 2 + 1;

      if (isDragging) {
        const deltaX = e.clientX - previousMousePosition.x;
        const deltaY = e.clientY - previousMousePosition.y;

        targetRotationY += deltaX * 0.008;
        targetRotationX += deltaY * 0.008;

        previousMousePosition = { x: e.clientX, y: e.clientY };
      } else {
        // Hover raycasting
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(officeMarkers.map(m => m.mesh));

        if (intersects.length > 0) {
          const hitMesh = intersects[0].object;
          const matched = officeMarkers.find(m => m.mesh === hitMesh);
          if (matched) {
            setHoveredOffice(matched.office);
            container.style.cursor = 'pointer';
            return;
          }
        }
        setHoveredOffice(null);
        container.style.cursor = isDragging ? 'grabbing' : 'grab';
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    const handleClick = () => {
      if (hoveredOffice && onSelectOffice) {
        onSelectOffice(hoveredOffice);
      }
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    container.addEventListener('click', handleClick);

    // Resize Observer
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Auto rotation if not dragging
      if (!isDragging) {
        targetRotationY += 0.002;
      }

      globeGroup.rotation.y += (targetRotationY - globeGroup.rotation.y) * 0.05;
      globeGroup.rotation.x += (targetRotationX - globeGroup.rotation.x) * 0.05;

      // Pulse ring animations
      particles.rotation.y = elapsedTime * 0.02;
      coreMesh.rotation.y = -elapsedTime * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      container.removeEventListener('click', handleClick);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className={`relative ${height} w-full overflow-hidden rounded-2xl bg-slate-950/40 backdrop-blur-xl border border-blue-900/30 shadow-2xl group`}>
      <div ref={containerRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Floating Control Tips */}
      <div className="absolute top-4 left-4 z-10 flex items-center space-x-2 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-blue-500/20 text-xs text-blue-200">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span>Live Global Network Nodes (3D Interactive)</span>
      </div>

      <div className="absolute bottom-4 right-4 z-10 text-[11px] text-slate-400 bg-slate-950/70 px-3 py-1 rounded-lg border border-slate-800">
        Drag to orbit globe • Hover node for telemetry
      </div>

      {/* Hover Info Card Overlay */}
      {hoveredOffice && (
        <div
          className="pointer-events-none absolute z-20 transform -translate-x-1/2 -translate-y-full mb-3 bg-slate-900/95 backdrop-blur-xl border border-blue-500/40 p-4 rounded-xl shadow-2xl text-white w-64 animate-in fade-in zoom-in-95 duration-150"
          style={{ left: mousePos.x, top: mousePos.y }}
        >
          <div className="flex items-center justify-between border-b border-blue-500/20 pb-2 mb-2">
            <div>
              <h4 className="font-bold text-sm text-blue-100">{hoveredOffice.city}</h4>
              <p className="text-xs text-slate-400">{hoveredOffice.country}</p>
            </div>
            {hoveredOffice.isHQ && (
              <span className="px-2 py-0.5 text-[10px] font-bold tracking-wider uppercase bg-rose-500/20 text-rose-300 border border-rose-500/40 rounded">
                Global HQ
              </span>
            )}
          </div>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div>
              <span className="text-slate-400 block text-[10px]">Staff Count</span>
              <span className="font-semibold text-emerald-400">{hoveredOffice.staffCount} Execs</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px]">Node Latency</span>
              <span className="font-semibold text-cyan-400">{hoveredOffice.latencyMs} ms</span>
            </div>
          </div>
          <div className="mt-2 text-[10px] text-blue-300 flex items-center justify-between pt-1 border-t border-slate-800">
            <span>Region: {hoveredOffice.region}</span>
            <span className="text-emerald-400">Click to view details →</span>
          </div>
        </div>
      )}
    </div>
  );
};
