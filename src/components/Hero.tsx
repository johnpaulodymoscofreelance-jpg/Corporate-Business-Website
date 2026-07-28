import React, { useState } from 'react';
import { Globe3D } from './3d/Globe3D';
import { Building3D } from './3d/Building3D';
import { PARTNER_LOGOS } from '../data/corporateData';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Cpu,
  Globe2,
  Building2,
  Play,
  TrendingUp,
  Activity,
  Layers,
  ChevronRight
} from 'lucide-react';

interface HeroProps {
  onOpenDemo: () => void;
  onOpenVideo: () => void;
  onOpenRoi: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenDemo,
  onOpenVideo,
  onOpenRoi
}) => {
  const [active3dView, setActive3dView] = useState<'globe' | 'building'>('globe');

  return (
    <section className="relative min-h-screen pt-28 pb-16 flex flex-col justify-between overflow-hidden bg-[#071A35] text-white">
      {/* Background Gradients & Mesh Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#0057FF]/15 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[300px] bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none" />

      {/* Main Grid Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* Left Column - Content & Narrative */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Tagline Badge */}
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-400/20 px-3 py-1 rounded-full text-blue-400 text-[10px] font-bold uppercase tracking-[0.2em]">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              <span>Global Leader in Enterprise Transformation</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tighter leading-[0.98] text-white">
              Pioneering the <br />
              <span className="gradient-text">
                Digital Frontier
              </span>
            </h1>

            {/* Sub-description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-xl font-normal leading-relaxed">
              Architecting high-performance enterprise systems with integrated AI intelligence and seamless cloud scalability for the world's most ambitious organizations.
            </p>

            {/* CTAs Group */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenDemo}
                className="px-6 py-3.5 rounded-full bg-[#0057FF] hover:bg-blue-500 text-white font-semibold text-sm flex items-center space-x-2 shadow-lg shadow-blue-600/30 transition-all transform hover:-translate-y-0.5"
              >
                <span>Consult Experts</span>
                <ArrowRight className="w-4 h-4 text-cyan-300" />
              </button>

              <button
                onClick={onOpenVideo}
                className="px-6 py-3.5 rounded-full glass-panel hover:bg-white/10 text-slate-200 hover:text-white font-semibold text-sm flex items-center space-x-2 transition-all group"
              >
                <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-cyan-400 group-hover:bg-blue-500 transition-colors">
                  <Play className="w-3 h-3 fill-current ml-0.5" />
                </div>
                <span>Watch Keynote</span>
              </button>

              <button
                onClick={onOpenRoi}
                className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 underline underline-offset-4 flex items-center space-x-1 py-2"
              >
                <span>Calculate Corporate ROI →</span>
              </button>
            </div>

            {/* Floating Live Metrics Panel */}
            <div className="pt-6 grid grid-cols-3 gap-3 border-t border-white/10 max-w-lg">
              <div className="glass-panel p-3.5 rounded-2xl">
                <div className="text-[10px] text-slate-400 font-mono uppercase">Global Latency</div>
                <div className="text-lg font-bold text-cyan-400 flex items-center space-x-1">
                  <span>12.4 ms</span>
                  <Activity className="w-3.5 h-3.5 text-emerald-400" />
                </div>
              </div>

              <div className="glass-panel p-3.5 rounded-2xl">
                <div className="text-[10px] text-slate-400 font-mono uppercase">Active Nodes</div>
                <div className="text-lg font-bold text-blue-400 flex items-center space-x-1">
                  <span>1,420</span>
                  <Cpu className="w-3.5 h-3.5 text-blue-400" />
                </div>
              </div>

              <div className="glass-panel p-3.5 rounded-2xl">
                <div className="text-[10px] text-slate-400 font-mono uppercase">Data Streamed</div>
                <div className="text-lg font-bold text-purple-400 flex items-center space-x-1">
                  <span>4.8 PB/s</span>
                  <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
                </div>
              </div>
            </div>

          </div>

          {/* Right Column - 3D Canvas Showcase */}
          <div className="lg:col-span-6 relative">

            {/* Toggle bar between 3D Globe & 3D Skyscraper HQ */}
            <div className="flex items-center justify-between mb-3 glass-panel p-1.5 rounded-2xl">
              <span className="text-xs text-slate-300 font-medium px-2 flex items-center space-x-1.5">
                <Layers className="w-3.5 h-3.5 text-cyan-400" />
                <span>Interactive 3D Engine:</span>
              </span>

              <div className="flex space-x-1">
                <button
                  onClick={() => setActive3dView('globe')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center space-x-1.5 transition-all ${
                    active3dView === 'globe'
                      ? 'bg-[#0057FF] text-white shadow-md'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Globe2 className="w-3.5 h-3.5" />
                  <span>3D World Hub</span>
                </button>

                <button
                  onClick={() => setActive3dView('building')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center space-x-1.5 transition-all ${
                    active3dView === 'building'
                      ? 'bg-[#0057FF] text-white shadow-md'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Building2 className="w-3.5 h-3.5" />
                  <span>3D HQ Twin</span>
                </button>
              </div>
            </div>

            {/* Render selected 3D Component */}
            <div className="relative">
              {active3dView === 'globe' ? (
                <Globe3D height="h-[480px] sm:h-[540px]" />
              ) : (
                <Building3D height="h-[480px] sm:h-[540px]" />
              )}
            </div>

          </div>

        </div>
      </div>

      {/* Partners Marquee Footer Ticker */}
      <div className="relative z-10 mt-12 border-t border-b border-slate-900 bg-slate-950/80 py-5 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xs font-mono text-slate-400 uppercase tracking-widest whitespace-nowrap">
            Trusted by Global Enterprise Leaders:
          </div>

          <div className="flex items-center space-x-8 overflow-x-auto no-scrollbar py-1 w-full md:w-auto">
            {PARTNER_LOGOS.map((partner) => (
              <div
                key={partner.name}
                className="flex items-center space-x-2 text-slate-400 hover:text-cyan-400 transition-colors whitespace-nowrap group cursor-default"
              >
                <span className="font-bold text-sm tracking-wider">{partner.name}</span>
                <span className="text-[10px] text-slate-600 group-hover:text-cyan-500 font-mono">({partner.symbol})</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
