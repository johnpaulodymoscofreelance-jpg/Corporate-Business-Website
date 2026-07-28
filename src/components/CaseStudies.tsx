import React, { useState } from 'react';
import { CASE_STUDIES } from '../data/corporateData';
import { CaseStudy } from '../types';
import {
  Briefcase,
  ArrowRight,
  TrendingUp,
  CheckCircle2,
  X,
  Sparkles
} from 'lucide-react';

export const CaseStudies: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categories = ['All', 'Banking & Capital Markets', 'Smart Manufacturing', 'Healthcare & Life Sciences', 'Global Logistics'];

  const filteredCases = activeFilter === 'All'
    ? CASE_STUDIES
    : CASE_STUDIES.filter(c => c.industry === activeFilter);

  return (
    <section id="case-studies" className="py-24 bg-[#08080a] relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center space-x-2 bg-red-500/10 border border-red-500/20 px-3.5 py-1.5 rounded-full text-xs text-red-400 font-semibold uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Proven Enterprise Impact</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Case Studies in <span className="gradient-text">Transformation</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Real outcomes measured in hundreds of millions of dollars saved, sub-millisecond execution speeds, and zero-downtime reliability.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex justify-center space-x-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border ${
                activeFilter === cat
                  ? 'bg-red-600 border-red-400 text-white shadow-lg'
                  : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Case Studies Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCases.map((cs) => (
            <div
              key={cs.id}
              onClick={() => setSelectedCase(cs)}
              className="bg-slate-900/80 border border-red-900/40 rounded-3xl p-6 sm:p-8 backdrop-blur-xl hover:border-red-500/60 transition-all cursor-pointer group flex flex-col justify-between shadow-2xl hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono tracking-wider uppercase px-3 py-1 rounded-full bg-red-950 text-rose-300 border border-red-800/50">
                    {cs.industry}
                  </span>
                  <span className="text-xs font-bold text-slate-400 group-hover:text-white transition-colors">
                    {cs.logoText}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-rose-300 transition-colors">
                  {cs.title}
                </h3>

                <p className="text-xs text-slate-300 line-clamp-3 mb-6 leading-relaxed">
                  {cs.challenge}
                </p>
              </div>

              {/* Metrics Highlights Bar */}
              <div className="space-y-4 pt-4 border-t border-slate-800">
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800">
                    <span className="text-[9px] text-slate-400 block uppercase">Throughput</span>
                    <span className="text-xs sm:text-sm font-bold text-emerald-400 font-mono">{cs.results.throughputImprovement}</span>
                  </div>
                  <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800">
                    <span className="text-[9px] text-slate-400 block uppercase">Cost Impact</span>
                    <span className="text-xs sm:text-sm font-bold text-red-400 font-mono">{cs.results.costReduction}</span>
                  </div>
                  <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800">
                    <span className="text-[9px] text-slate-400 block uppercase">Velocity</span>
                    <span className="text-xs sm:text-sm font-bold text-amber-400 font-mono">{cs.results.deploymentSpeed}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-red-400 font-semibold group-hover:underline">
                  <span>View Complete Architecture & Impact Analysis</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Detail Modal */}
      {selectedCase && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-slate-900 border border-red-500/40 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative text-white shadow-2xl space-y-6">
            <button
              onClick={() => setSelectedCase(null)}
              className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <span className="text-xs font-mono text-red-400 uppercase tracking-wider">{selectedCase.client} • {selectedCase.industry}</span>
              <h3 className="text-2xl font-bold">{selectedCase.title}</h3>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">The Enterprise Challenge:</h4>
                <p className="text-sm text-slate-300 leading-relaxed bg-slate-950 p-4 rounded-xl border border-slate-800">{selectedCase.challenge}</p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">The NEXUS Solution Architecture:</h4>
                <p className="text-sm text-slate-300 leading-relaxed bg-slate-950 p-4 rounded-xl border border-slate-800">{selectedCase.solution}</p>
              </div>
            </div>

            {/* Before vs After Comparison */}
            <div className="bg-gradient-to-r from-red-950 to-slate-950 p-6 rounded-2xl border border-red-500/30 space-y-3">
              <h4 className="text-xs font-bold text-rose-300 uppercase tracking-wider">Before & After Performance Metrics:</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-950/80 p-4 rounded-xl border border-rose-500/30">
                  <span className="text-[10px] text-rose-400 block font-mono uppercase">{selectedCase.beforeAfter.beforeLabel}</span>
                  <span className="text-lg font-bold text-white font-mono">{selectedCase.beforeAfter.beforeValue}</span>
                </div>
                <div className="bg-slate-950/80 p-4 rounded-xl border border-emerald-500/30">
                  <span className="text-[10px] text-emerald-400 block font-mono uppercase">{selectedCase.beforeAfter.afterLabel}</span>
                  <span className="text-lg font-bold text-emerald-300 font-mono">{selectedCase.beforeAfter.afterValue}</span>
                </div>
              </div>
            </div>

            <div className="flex justify-end pt-4 border-t border-slate-800">
              <button
                onClick={() => setSelectedCase(null)}
                className="px-6 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs"
              >
                Close Case Study
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
