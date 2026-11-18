import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Layers, Terminal, CheckCircle2, BookOpen, Sparkles, ArrowRight, Award, ShieldCheck } from 'lucide-react';

interface Hero3DProps {
  onOpenRubric?: () => void;
  onSwitchToWorkbench?: () => void;
  totalSessions: number;
  totalDemos: number;
  totalLabs: number;
}

export const Hero3D: React.FC<Hero3DProps> = ({
  totalSessions,
  totalDemos,
  totalLabs
}) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Clear previous canvas if any
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }

    const width = container.clientWidth;
    const height = container.clientHeight || 280;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 1000);
    camera.position.z = 80;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Create interconnected Banking Nodes & Constellations
    const particleCount = 80;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const colorOrange = new THREE.Color('#f06634');
    const colorNavy = new THREE.Color('#1d3d70');
    const colorTeal = new THREE.Color('#005e6a');

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 160;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 75;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50;

      const choice = Math.random();
      const col = choice < 0.4 ? colorOrange : (choice < 0.75 ? colorNavy : colorTeal);
      colors[i * 3] = col.r;
      colors[i * 3 + 1] = col.g;
      colors[i * 3 + 2] = col.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const pMaterial = new THREE.PointsMaterial({
      size: 2.5,
      vertexColors: true,
      transparent: true,
      opacity: 0.85
    });

    const particleSystem = new THREE.Points(geometry, pMaterial);
    scene.add(particleSystem);

    let animationFrameId: number;
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((event.clientX - rect.left) / width - 0.5) * 2;
      mouseY = -((event.clientY - rect.top) / height - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight || 280;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Smooth camera interpolation
      targetX += (mouseX * 12 - targetX) * 0.05;
      targetY += (mouseY * 8 - targetY) * 0.05;
      camera.position.x = targetX;
      camera.position.y = targetY;
      camera.lookAt(scene.position);

      particleSystem.rotation.y += 0.0012;
      particleSystem.rotation.x += 0.0006;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      pMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#fcfbf9] to-[#f8fafc] border-b border-slate-200">
      {/* 3D Canvas Background Container */}
      <div
        ref={mountRef}
        className="absolute inset-0 z-0 pointer-events-none opacity-60"
        style={{ minHeight: '260px' }}
      />

      {/* Decorative Hacktiv8 Arcs */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#f06634]/10 to-transparent pointer-events-none rounded-full blur-2xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-[#1d3d70]/10 to-transparent pointer-events-none rounded-full blur-2xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-6 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          {/* Main Title & Description */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#1d3d70]/5 text-[#1d3d70] border border-[#1d3d70]/15 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#f06634] animate-pulse" />
              <span>Hacktiv8 × PT Bank Negara Indonesia (Persero) Tbk</span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 font-worksans tracking-tight leading-tight">
              Web Development Fundamentals <span className="text-[#1d3d70]">ODP IT 2026</span>
            </h1>

            <p className="mt-2 text-xs sm:text-sm text-slate-600 font-normal leading-relaxed max-w-2xl">
              Portal laboratorium terintegrasi: 12 sesi (42 jam) penguasaan HTML5 semantik, CSS responsif modern, 
              logika pemrograman JavaScript ES6+, integrasi REST API Frankfurter, serta evaluasi Capstone Kalkulator Kurs Rupiah.
            </p>

            {/* Quick Stats Strip */}
            <div className="flex flex-wrap items-center gap-4 mt-4 text-xs font-semibold">
              <div className="flex items-center gap-1.5 text-[#1d3d70]">
                <Layers className="w-4 h-4 text-[#f06634]" />
                <span>{totalSessions} Sesi Pelatihan (42 Jam)</span>
              </div>
              <div className="h-3 w-[1px] bg-slate-300 hidden sm:block" />
              <div className="flex items-center gap-1.5 text-slate-700">
                <Terminal className="w-4 h-4 text-indigo-600" />
                <span>{totalDemos} Demos & {totalLabs} Labs Interaktif</span>
              </div>
              <div className="h-3 w-[1px] bg-slate-300 hidden sm:block" />
              <div className="flex items-center gap-1.5 text-emerald-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Dual-Folder Starter & Solution</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
