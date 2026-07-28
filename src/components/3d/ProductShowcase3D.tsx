import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface ProductShowcase3DProps {
  height?: string;
}

export const ProductShowcase3D: React.FC<ProductShowcase3DProps> = ({
  height = 'h-[450px] sm:h-[550px]'
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [wireframeMode, setWireframeMode] = useState(false);
  const [explodeValue, setExplodeValue] = useState(0);
  const [activeHue, setActiveHue] = useState<string>('Electric Blue');

  const hues = [
    { name: 'Electric Blue', hex: '#0057FF' },
    { name: 'Cyan Glow', hex: '#00D2FF' },
    { name: 'Purple Cyber', hex: '#9D00FF' },
    { name: 'Emerald AI', hex: '#00E676' }
  ];

  const wireframeRef = useRef(wireframeMode);
  const explodeRef = useRef(explodeValue);
  const hueRef = useRef(activeHue);

  useEffect(() => {
    wireframeRef.current = wireframeMode;
    explodeRef.current = explodeValue;
    hueRef.current = activeHue;
  }, [wireframeMode, explodeValue, activeHue]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const heightPx = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / heightPx, 0.1, 1000);
    camera.position.set(0, 0, 160);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, heightPx);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // Inner Glowing Core Sphere
    const coreGeo = new THREE.IcosahedronGeometry(22, 3);
    const coreMat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#0057FF'),
      roughness: 0.1,
      metalness: 0.8,
      clearcoat: 1.0,
      emissive: new THREE.Color('#002A80'),
      emissiveIntensity: 0.5
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    coreGroup.add(coreMesh);

    // Outer Translucent Glass Cube
    const cubeGeo = new THREE.BoxGeometry(50, 50, 50);
    const cubeMat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#071A35'),
      roughness: 0.1,
      transmission: 0.85,
      transparent: true,
      opacity: 0.7,
      thickness: 10
    });
    const cubeMesh = new THREE.Mesh(cubeGeo, cubeMat);
    coreGroup.add(cubeMesh);

    // Dynamic Rings
    const ringGroup = new THREE.Group();
    coreGroup.add(ringGroup);

    const ringMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#00D2FF'),
      metalness: 0.9,
      roughness: 0.1,
      wireframe: false
    });

    const ring1 = new THREE.Mesh(new THREE.TorusGeometry(38, 1.2, 16, 64), ringMat);
    const ring2 = new THREE.Mesh(new THREE.TorusGeometry(45, 1.2, 16, 64), ringMat);
    ring2.rotation.x = Math.PI / 3;
    ringGroup.add(ring1);
    ringGroup.add(ring2);

    // Floating Corner Nodes (For explode animation)
    const cornerNodes: THREE.Mesh[] = [];
    const cornerInitialPositions: THREE.Vector3[] = [];

    const cornerGeo = new THREE.OctahedronGeometry(4);
    const cornerMat = new THREE.MeshStandardMaterial({
      color: 0x00e676,
      metalness: 0.9,
      roughness: 0.2
    });

    const offsets = [
      [-30, -30, -30], [30, -30, -30], [-30, 30, -30], [30, 30, -30],
      [-30, -30, 30], [30, -30, 30], [-30, 30, 30], [30, 30, 30]
    ];

    offsets.forEach(([x, y, z]) => {
      const node = new THREE.Mesh(cornerGeo, cornerMat);
      const vec = new THREE.Vector3(x, y, z);
      node.position.copy(vec);
      coreGroup.add(node);
      cornerNodes.push(node);
      cornerInitialPositions.push(vec.clone());
    });

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const mainLight = new THREE.PointLight(0x0057ff, 3, 300);
    mainLight.position.set(100, 100, 100);
    scene.add(mainLight);

    const subLight = new THREE.PointLight(0x00d2ff, 2, 300);
    subLight.position.set(-100, -100, -100);
    scene.add(subLight);

    // Mouse Controls
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
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Apply Wireframe toggle
      cubeMat.wireframe = wireframeRef.current;
      coreMat.wireframe = wireframeRef.current;

      // Color Hue update
      const targetColorHex = hues.find(h => h.name === hueRef.current)?.hex || '#0057FF';
      mainLight.color.set(targetColorHex);
      ringMat.color.set(targetColorHex);

      // Explode View Interpolation
      const explodeFactor = 1 + explodeRef.current * 0.8;
      cornerNodes.forEach((node, idx) => {
        const init = cornerInitialPositions[idx];
        node.position.copy(init.clone().multiplyScalar(explodeFactor));
      });

      // Rotation & Parallax
      coreGroup.rotation.y = elapsedTime * 0.3 + mouseX * 0.5;
      coreGroup.rotation.x = mouseY * 0.3;

      ring1.rotation.z = elapsedTime * 0.8;
      ring2.rotation.y = -elapsedTime * 0.6;

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
    <div className={`relative ${height} w-full rounded-2xl bg-slate-950/70 border border-blue-900/40 backdrop-blur-2xl overflow-hidden shadow-2xl flex flex-col justify-between p-4`}>
      <div className="flex items-center justify-between z-10">
        <div className="flex items-center space-x-2 bg-slate-900/80 px-3 py-1.5 rounded-full border border-blue-500/30 text-xs text-blue-200">
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping" />
          <span>Interactive 3D Quantum Neural Core</span>
        </div>
        <button
          onClick={() => setWireframeMode(!wireframeMode)}
          className={`text-xs px-3 py-1.5 rounded-lg border transition-all ${
            wireframeMode
              ? 'bg-blue-600 text-white border-blue-400'
              : 'bg-slate-900/80 text-slate-300 border-slate-700 hover:border-slate-500'
          }`}
        >
          {wireframeMode ? 'Wireframe Mode: ON' : 'Solid Glass Mode'}
        </button>
      </div>

      <div ref={containerRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Control Panel */}
      <div className="z-10 bg-slate-900/90 backdrop-blur-md p-3 rounded-xl border border-blue-500/20 space-y-3">
        <div className="flex items-center justify-between text-xs text-slate-300">
          <span>Explode Core Topology:</span>
          <span className="font-mono text-cyan-400">{Math.round(explodeValue * 100)}%</span>
        </div>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={explodeValue}
          onChange={(e) => setExplodeValue(parseFloat(e.target.value))}
          className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
        />

        <div className="flex items-center justify-between text-xs pt-1 border-t border-slate-800">
          <span className="text-slate-400">Energy Aura Hue:</span>
          <div className="flex space-x-2">
            {hues.map((h) => (
              <button
                key={h.name}
                onClick={() => setActiveHue(h.name)}
                className={`w-5 h-5 rounded-full border transition-all ${
                  activeHue === h.name ? 'scale-125 border-white ring-2 ring-blue-500' : 'border-transparent opacity-70 hover:opacity-100'
                }`}
                style={{ backgroundColor: h.hex }}
                title={h.name}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
