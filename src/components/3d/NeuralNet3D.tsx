import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface NeuralNet3DProps {
  height?: string;
  nodeCount?: number;
}

export const NeuralNet3D: React.FC<NeuralNet3DProps> = ({
  height = 'h-[300px] sm:h-[400px]',
  nodeCount = 45
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const heightPx = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / heightPx, 0.1, 1000);
    camera.position.z = 180;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, heightPx);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    // Generate Nodes
    const nodes: THREE.Vector3[] = [];
    const nodeVelocities: THREE.Vector3[] = [];

    for (let i = 0; i < nodeCount; i++) {
      const pos = new THREE.Vector3(
        (Math.random() - 0.5) * 180,
        (Math.random() - 0.5) * 120,
        (Math.random() - 0.5) * 120
      );
      nodes.push(pos);
      nodeVelocities.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 0.15,
          (Math.random() - 0.5) * 0.15,
          (Math.random() - 0.5) * 0.15
        )
      );
    }

    // Node Mesh Instances
    const nodeGeo = new THREE.SphereGeometry(1.8, 16, 16);
    const nodeMat = new THREE.MeshBasicMaterial({ color: 0x00d2ff });

    const nodeMeshes: THREE.Mesh[] = [];
    nodes.forEach((pos) => {
      const mesh = new THREE.Mesh(nodeGeo, nodeMat);
      mesh.position.copy(pos);
      group.add(mesh);
      nodeMeshes.push(mesh);
    });

    // Dynamic Connections Line Geometry
    const maxConnections = 120;
    const linePositions = new Float32Array(maxConnections * 2 * 3);
    const lineColors = new Float32Array(maxConnections * 2 * 3);

    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    lineGeo.setAttribute('color', new THREE.BufferAttribute(lineColors, 3));

    const lineMat = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending
    });

    const linesMesh = new THREE.LineSegments(lineGeo, lineMat);
    group.add(linesMesh);

    // Mouse Parallax
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / width - 0.5) * 2;
      mouseY = ((e.clientY - rect.top) / heightPx - 0.5) * 2;
    };

    container.addEventListener('mousemove', handleMouseMove);

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

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Update Node Positions
      let lineIndex = 0;
      const positions = lineGeo.attributes.position.array as Float32Array;
      const colors = lineGeo.attributes.color.array as Float32Array;

      for (let i = 0; i < nodeCount; i++) {
        const p = nodes[i];
        const v = nodeVelocities[i];

        p.add(v);

        // Boundary bounce
        if (Math.abs(p.x) > 90) v.x *= -1;
        if (Math.abs(p.y) > 60) v.y *= -1;
        if (Math.abs(p.z) > 60) v.z *= -1;

        nodeMeshes[i].position.copy(p);
      }

      // Rebuild Connections based on distance
      let connectionCount = 0;
      for (let i = 0; i < nodeCount; i++) {
        for (let j = i + 1; j < nodeCount; j++) {
          const dist = nodes[i].distanceTo(nodes[j]);
          if (dist < 42 && connectionCount < maxConnections) {
            const p1 = nodes[i];
            const p2 = nodes[j];

            positions[lineIndex * 6] = p1.x;
            positions[lineIndex * 6 + 1] = p1.y;
            positions[lineIndex * 6 + 2] = p1.z;

            positions[lineIndex * 6 + 3] = p2.x;
            positions[lineIndex * 6 + 4] = p2.y;
            positions[lineIndex * 6 + 5] = p2.z;

            const alpha = 1 - dist / 42;
            colors[lineIndex * 6] = 0.0;
            colors[lineIndex * 6 + 1] = 0.34 * alpha;
            colors[lineIndex * 6 + 2] = 1.0 * alpha;

            colors[lineIndex * 6 + 3] = 0.6 * alpha;
            colors[lineIndex * 6 + 4] = 0.0 * alpha;
            colors[lineIndex * 6 + 5] = 1.0 * alpha;

            lineIndex++;
            connectionCount++;
          }
        }
      }

      lineGeo.setDrawRange(0, connectionCount * 2);
      lineGeo.attributes.position.needsUpdate = true;
      lineGeo.attributes.color.needsUpdate = true;

      // Group Rotation
      group.rotation.y += 0.003 + mouseX * 0.01;
      group.rotation.x += mouseY * 0.008;

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
  }, [nodeCount]);

  return (
    <div className={`relative ${height} w-full rounded-2xl bg-slate-950/60 border border-blue-900/30 overflow-hidden shadow-2xl`}>
      <div ref={containerRef} className="w-full h-full" />
      <div className="absolute top-3 left-3 text-[11px] font-mono text-cyan-400 bg-slate-900/80 px-2.5 py-1 rounded border border-blue-500/20">
        NEXUS Neural Network Active Stream: 1.4 TB/s
      </div>
    </div>
  );
};
