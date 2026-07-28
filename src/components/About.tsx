import React, { useState } from 'react';
import { MILESTONES } from '../data/corporateData';
import {
  ShieldCheck,
  Target,
  Compass,
  Award,
  Users,
  Building2,
  TrendingUp,
  CheckCircle2,
  Globe
} from 'lucide-react';

export const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'timeline' | 'mission' | 'achievements'>('timeline');

  return (
    <section id="about" className="py-24 bg-[#071A35] relative overflow-hidden border-t border-white/10">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#0057FF]/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-400/20 px-3.5 py-1.5 rounded-full text-xs text-cyan-400 font-semibold tracking-wider uppercase">
            <Building2 className="w-3.5 h-3.5" />
            <span>Corporate Identity & Heritage</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Engineered for <span className="gradient-text">Uncompromising Resilience</span>
          </h2>

          <p className="text-base text-slate-300 leading-relaxed">
            Since 2012, NEXUS Global Enterprise has pioneered high-availability system architecture and sovereign artificial intelligence for the world’s most demanding industries.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-full glass-panel space-x-1">
            <button
              onClick={() => setActiveTab('timeline')}
              className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all ${
                activeTab === 'timeline'
                  ? 'bg-[#0057FF] text-white shadow-lg'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Interactive Corporate Timeline
            </button>
            <button
              onClick={() => setActiveTab('mission')}
              className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all ${
                activeTab === 'mission'
                  ? 'bg-[#0057FF] text-white shadow-lg'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Mission, Vision & Principles
            </button>
            <button
              onClick={() => setActiveTab('achievements')}
              className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all ${
                activeTab === 'achievements'
                  ? 'bg-[#0057FF] text-white shadow-lg'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Global Footprint & Achievements
            </button>
          </div>
        </div>

        {/* Tab Content 1: Timeline */}
        {activeTab === 'timeline' && (
          <div className="relative border-l-2 border-[#0057FF]/40 ml-4 sm:ml-32 space-y-10 my-8">
            {MILESTONES.map((item, idx) => (
              <div key={item.year} className="relative pl-8 sm:pl-12 group">
                {/* Timeline Dot */}
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#071A35] border-2 border-cyan-400 group-hover:scale-125 group-hover:bg-cyan-400 transition-all shadow-md shadow-cyan-400/50" />

                {/* Year Badge */}
                <div className="hidden sm:block absolute -left-32 top-0 text-right w-24">
                  <span className="text-xl font-black text-cyan-400 font-mono">{item.year}</span>
                  <div className="text-[10px] text-slate-500 uppercase tracking-widest">{item.category}</div>
                </div>

                {/* Card Container */}
                <div className="glass-panel glass-panel-hover p-6 rounded-2xl shadow-xl">
                  <div className="sm:hidden text-cyan-400 font-mono font-bold text-sm mb-1">{item.year} • {item.category}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-4">{item.description}</p>
                  <div className="inline-flex items-center space-x-2 bg-blue-500/10 px-3 py-1 rounded-md text-xs font-mono text-cyan-300 border border-blue-400/20">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Benchmark: {item.metric}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab Content 2: Mission & Vision */}
        {activeTab === 'mission' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
            <div className="glass-panel p-8 rounded-2xl space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-cyan-400">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">Our Corporate Mission</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                To build sovereign, hyper-scalable digital infrastructure that protects critical national assets, optimizes global enterprise operations, and safely accelerates human progress through trustworthy artificial intelligence.
              </p>
              <ul className="space-y-2 pt-2 text-xs text-slate-300">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>Zero Data Leakage & Sovereign Guardrails</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>Sub-Millisecond System Performance</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>Unwavering Ethical AI Governance</span>
                </li>
              </ul>
            </div>

            <div className="glass-panel p-8 rounded-2xl space-y-4">
              <div className="w-12 h-12 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-400">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">Our 2030 Vision</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                To serve as the definitive neural operating system for Fortune 500 enterprises, connecting global supply chains, financial exchanges, and autonomous manufacturing plants in a synchronized 3D interactive ecosystem.
              </p>
              <ul className="space-y-2 pt-2 text-xs text-slate-300">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-400" />
                  <span>Post-Quantum Cryptography Readiness</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-400" />
                  <span>Autonomous Multi-Agent Swarm Integration</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-400" />
                  <span>Net-Zero Carbon Neural Data Centers</span>
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* Tab Content 3: Achievements */}
        {activeTab === 'achievements' && (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 my-8">
            <div className="glass-panel p-6 rounded-2xl text-center space-y-2">
              <div className="text-3xl font-black text-cyan-400 font-mono">$42 Billion+</div>
              <div className="text-xs text-slate-300 font-semibold">Client Enterprise Value Created</div>
              <p className="text-[11px] text-slate-500">Validated across 3,800+ global transformation engagements.</p>
            </div>

            <div className="glass-panel p-6 rounded-2xl text-center space-y-2">
              <div className="text-3xl font-black text-blue-400 font-mono">140+</div>
              <div className="text-xs text-slate-300 font-semibold">Countries & Territories Served</div>
              <p className="text-[11px] text-slate-500">24/7 sovereign cloud mesh coverage across all continents.</p>
            </div>

            <div className="glass-panel p-6 rounded-2xl text-center space-y-2">
              <div className="text-3xl font-black text-emerald-400 font-mono">99.999%</div>
              <div className="text-xs text-slate-300 font-semibold">SLA Continuous Availability</div>
              <p className="text-[11px] text-slate-500">Guaranteed by hardware security vaults & redundant mesh.</p>
            </div>

            <div className="glass-panel p-6 rounded-2xl text-center space-y-2">
              <div className="text-3xl font-black text-purple-400 font-mono">18,000+</div>
              <div className="text-xs text-slate-300 font-semibold">Global Workforce</div>
              <p className="text-[11px] text-slate-500">Engineers, AI research scientists, and strategic directors.</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
