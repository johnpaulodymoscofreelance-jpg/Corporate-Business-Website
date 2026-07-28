import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface Building3DProps {
  height?: string;
}

export const Building3D: React.FC<Building3DProps> = ({
  height = 'h-[500px] lg:h-[600px]'
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSector, setActiveSector] = useState<string>('AI Innovation Lab');

  const sectors = [
    { name: 'AI Innovation Lab', floor: 'Floors 40-50', metric: '100 PetaFLOPS Compute' },
    { name: 'Executive Tower', floor: 'Floors 30-39', metric: 'Global Board Room' },
    { name: 'R&D Quantum Hub', floor: 'Floors 15-29', metric: '1,024 Qubit Cryo Rig' },
    { name: 'Global Data Center', floor: 'Floors 01-14', metric: 'Sub-1ms Fiber Backbone' }
  ];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const heightPx = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / heightPx, 0.1, 1000);
    camera.position.set(120, 80, 160);
    camera.lookAt(0, 30, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, heightPx);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);

    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // Ground Grid & Base Ring
    const gridHelper = new THREE.GridHelper(200, 30, 0xdc2626, 0x1c0a0e);
    gridHelper.position.y = -20;
    mainGroup.add(gridHelper);

    // Skyscraper Glass Materials
    const glassMat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#1C0A0E'),
      metalness: 0.9,
      roughness: 0.1,
      transmission: 0.6,
      transparent: true,
      opacity: 0.85,
      reflectivity: 0.9,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1
    });

    const windowGlowMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color('#F43F5E'),
      wireframe: true,
      transparent: true,
      opacity: 0.35
    });

    const metallicFrameMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#DC2626'),
      metalness: 0.9,
      roughness: 0.2
    });

    // Building Section 1 - Base Data Center
    const baseGeo = new THREE.BoxGeometry(40, 30, 40);
    const baseMesh = new THREE.Mesh(baseGeo, glassMat);
    baseMesh.position.y = -5;
    mainGroup.add(baseMesh);

    const baseFrameGeo = new THREE.BoxGeometry(40.5, 30.5, 40.5);
    const baseFrameMesh = new THREE.Mesh(baseFrameGeo, windowGlowMat);
    baseFrameMesh.position.y = -5;
    mainGroup.add(baseFrameMesh);

    // Building Section 2 - Quantum Hub
    const sec2Geo = new THREE.BoxGeometry(32, 35, 32);
    const sec2Mesh = new THREE.Mesh(sec2Geo, glassMat);
    sec2Mesh.position.y = 27.5;
    mainGroup.add(sec2Mesh);

    const sec2Frame = new THREE.Mesh(new THREE.BoxGeometry(32.5, 35.5, 32.5), windowGlowMat);
    sec2Frame.position.y = 27.5;
    mainGroup.add(sec2Frame);

    // Building Section 3 - Executive Tower
    const sec3Geo = new THREE.BoxGeometry(24, 30, 24);
    const sec3Mesh = new THREE.Mesh(sec3Geo, glassMat);
    sec3Mesh.position.y = 60;
    mainGroup.add(sec3Mesh);

    const sec3Frame = new THREE.Mesh(new THREE.BoxGeometry(24.5, 30.5, 24.5), windowGlowMat);
    sec3Frame.position.y = 60;
    mainGroup.add(sec3Frame);

    // Building Section 4 - AI Innovation Lab (Top)
    const sec4Geo = new THREE.BoxGeometry(16, 25, 16);
    const sec4Mesh = new THREE.Mesh(sec4Geo, glassMat);
    sec4Mesh.position.y = 87.5;
    mainGroup.add(sec4Mesh);

    // Top Crown Spire & Beacons
    const spireGeo = new THREE.CylinderGeometry(0.5, 2, 25, 16);
    const spireMat = new THREE.MeshBasicMaterial({ color: new THREE.Color('#FF0055') });
    const spireMesh = new THREE.Mesh(spireGeo, spireMat);
    spireMesh.position.y = 112.5;
    mainGroup.add(spireMesh);

    // Volumetric Light Shaft Beam
    const beamGeo = new THREE.CylinderGeometry(2, 30, 180, 32, 1, true);
    const beamMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color('#DC2626'),
      transparent: true,
      opacity: 0.12,
      side: THREE.DoubleSide
    });
    const lightBeam = new THREE.Mesh(beamGeo, beamMat);
    lightBeam.position.y = 90;
    mainGroup.add(lightBeam);

    // Orbiting Drone Light Particles
    const droneGroup = new THREE.Group();
    mainGroup.add(droneGroup);

    const droneGeom = new THREE.SphereGeometry(1.2, 12, 12);
    const droneMat = new THREE.MeshBasicMaterial({ color: 0x34d399 });

    const drones: { mesh: THREE.Mesh; angle: number; radius: number; speed: number; y: number }[] = [];
    for (let i = 0; i < 8; i++) {
      const drone = new THREE.Mesh(droneGeom, droneMat);
      const angle = (i / 8) * Math.PI * 2;
      const radius = 35 + Math.random() * 20;
      const speed = 0.01 + Math.random() * 0.01;
      const y = Math.random() * 90;

      drone.position.set(Math.cos(angle) * radius, y, Math.sin(angle) * radius);
      droneGroup.add(drone);
      drones.push({ mesh: drone, angle, radius, speed, y });
    }

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xf43f5e, 3, 200);
    pointLight.position.set(60, 90, 60);
    scene.add(pointLight);

    const redLight = new THREE.PointLight(0xdc2626, 2, 200);
    redLight.position.set(-60, 20, -60);
    scene.add(redLight);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / width - 0.5) * 2;
      mouseY = ((e.clientY - rect.top) / heightPx - 0.5) * 2;
    };

    container.addEventListener('mousemove', handleMouseMove);

    // Resize Handler
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

    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth camera parallax
      mainGroup.rotation.y = elapsedTime * 0.1 + mouseX * 0.4;
      mainGroup.rotation.x = mouseY * 0.15;

      // Update Drones
      drones.forEach((d) => {
        d.angle += d.speed;
        d.mesh.position.x = Math.cos(d.angle) * d.radius;
        d.mesh.position.z = Math.sin(d.angle) * d.radius;
      });

      // Pulse Beam
      beamMat.opacity = 0.1 + Math.sin(elapsedTime * 2) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      container.removeEventListener('mousemove', handleMouseMove);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className={`relative ${height} w-full rounded-2xl bg-slate-950/40 backdrop-blur-xl border border-red-900/30 shadow-2xl overflow-hidden`}>
      <div ref={containerRef} className="w-full h-full cursor-crosshair" />

      {/* Floating Header */}
      <div className="absolute top-4 left-4 z-10 flex items-center space-x-2 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-red-500/20 text-xs text-rose-200">
        <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
        <span>NEXUS Global HQ 3D Architectural Twin</span>
      </div>

      {/* Sector Inspector Overlay */}
      <div className="absolute bottom-4 left-4 right-4 z-10 grid grid-cols-2 sm:grid-cols-4 gap-2 bg-slate-900/90 backdrop-blur-xl p-2 rounded-xl border border-red-500/30">
        {sectors.map((sec) => {
          const isSelected = activeSector === sec.name;
          return (
            <button
              key={sec.name}
              onClick={() => setActiveSector(sec.name)}
              className={`p-2 rounded-lg text-left transition-all ${
                isSelected
                  ? 'bg-red-600/30 border border-red-400 text-white shadow-lg'
                  : 'bg-slate-800/40 border border-slate-700/50 text-slate-300 hover:bg-slate-800/80'
              }`}
            >
              <div className="text-[10px] font-semibold text-red-400 uppercase tracking-wider">{sec.floor}</div>
              <div className="text-xs font-bold truncate text-white">{sec.name}</div>
              <div className="text-[10px] text-slate-400 truncate">{sec.metric}</div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
