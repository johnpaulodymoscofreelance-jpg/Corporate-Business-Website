import React, { useState } from 'react';
import { INDUSTRIES_DATA } from '../data/corporateData';
import { IndustryItem } from '../types';
import {
  Landmark,
  HeartPulse,
  Building2,
  Heart,
  Plane,
  Truck,
  Radio,
  Zap,
  CheckCircle2,
  ShieldAlert,
  ArrowRight
} from 'lucide-react';

interface IndustriesProps {
  onOpenDemo: () => void;
}

export const Industries: React.FC<IndustriesProps> = ({ onOpenDemo }) => {
  const [activeIndustry, setActiveIndustry] = useState<IndustryItem>(INDUSTRIES_DATA[0]);

  const getIndustryIcon = (name: string) => {
    switch (name) {
      case 'Landmark': return <Landmark className="w-5 h-5" />;
      case 'HeartPulse': return <HeartPulse className="w-5 h-5" />;
      case 'Heart': return <Heart className="w-5 h-5" />;
      case 'Plane': return <Plane className="w-5 h-5" />;
      case 'Truck': return <Truck className="w-5 h-5" />;
      case 'Radio': return <Radio className="w-5 h-5" />;
      case 'Zap': return <Zap className="w-5 h-5" />;
      default: return <Building2 className="w-5 h-5" />;
    }
  };

  return (
    <section id="industries" className="py-24 bg-slate-900/40 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-950/80 border border-blue-500/30 px-3.5 py-1.5 rounded-full text-xs text-cyan-400 font-semibold uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5" />
            <span>Vertical Expertise</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Tailored for <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Mission-Critical Domains</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            From tier-1 investment banks to low-earth orbit satellite fleets, NEXUS powers complex regulatory and operational environments.
          </p>
        </div>

        {/* Horizontal Scrollable Tabs */}
        <div className="flex overflow-x-auto space-x-2 pb-4 mb-8 no-scrollbar justify-start lg:justify-center">
          {INDUSTRIES_DATA.map((ind) => {
            const isSelected = activeIndustry.id === ind.id;
            return (
              <button
                key={ind.id}
                onClick={() => setActiveIndustry(ind)}
                className={`flex items-center space-x-2.5 px-4 py-3 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border ${
                  isSelected
                    ? 'bg-blue-600 border-blue-400 text-white shadow-lg shadow-blue-600/30 scale-105'
                    : 'bg-slate-950/80 border-slate-800 text-slate-300 hover:border-slate-600 hover:text-white'
                }`}
              >
                {getIndustryIcon(ind.iconName)}
                <span>{ind.name}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Industry Spotlight Card */}
        <div className="bg-slate-950/90 border border-blue-900/40 rounded-3xl p-6 sm:p-10 backdrop-blur-2xl shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-cyan-400">
                  {getIndustryIcon(activeIndustry.iconName)}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{activeIndustry.name}</h3>
                  <p className="text-xs text-cyan-400 font-mono">{activeIndustry.tagline}</p>
                </div>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {activeIndustry.description}
              </p>

              {/* Case Highlight Banner */}
              <div className="bg-slate-900/80 p-4 rounded-2xl border border-blue-500/20">
                <span className="text-[10px] text-cyan-400 uppercase font-mono tracking-wider block mb-1">PROVEN IMPACT:</span>
                <p className="text-xs text-slate-200 font-semibold">{activeIndustry.caseHighlight}</p>
              </div>

              {/* Compliance Badges */}
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">Regulatory Compliance & Security Certification:</span>
                <div className="flex flex-wrap gap-2">
                  {activeIndustry.compliance.map((c) => (
                    <span key={c} className="px-3 py-1 rounded-lg bg-blue-950/60 border border-blue-800/40 text-[11px] font-mono text-blue-300 flex items-center space-x-1">
                      <ShieldAlert className="w-3 h-3 text-cyan-400" />
                      <span>{c}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Metrics & Solutions */}
            <div className="lg:col-span-5 bg-slate-900/60 p-6 rounded-2xl border border-slate-800 space-y-6">
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider border-b border-slate-800 pb-2">
                Industry Benchmark Metrics:
              </h4>

              <div className="grid grid-cols-2 gap-4">
                {activeIndustry.keyMetrics.map((m, i) => (
                  <div key={i} className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                    <span className="text-[10px] text-slate-400 block uppercase">{m.label}</span>
                    <span className="text-xl font-bold text-cyan-400 font-mono">{m.value}</span>
                  </div>
                ))}
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  Recommended Architecture Modules:
                </h4>
                <ul className="space-y-2 text-xs text-slate-300">
                  {activeIndustry.recommendedSolutions.map((sol, i) => (
                    <li key={i} className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{sol}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={onOpenDemo}
                className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center justify-center space-x-2 transition-all shadow-lg shadow-blue-600/30"
              >
                <span>Request {activeIndustry.name} Blueprint</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
