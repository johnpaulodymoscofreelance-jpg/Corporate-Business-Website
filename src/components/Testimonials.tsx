import React from 'react';
import { TESTIMONIALS } from '../data/corporateData';
import { Star, Play, Quote, Award } from 'lucide-react';

interface TestimonialsProps {
  onOpenVideo: () => void;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ onOpenVideo }) => {
  return (
    <section className="py-24 bg-slate-900/40 relative border-t border-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-950/80 border border-blue-500/30 px-3.5 py-1.5 rounded-full text-xs text-cyan-400 font-semibold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>Client Endorsements</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Validated by <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Fortune 500 C-Suites</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Read how global technology officers, line-of-business vice presidents, and managing directors quantify the NEXUS advantage.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {TESTIMONIALS.map((test) => (
            <div
              key={test.id}
              className="bg-slate-950/90 border border-blue-900/40 rounded-3xl p-8 backdrop-blur-xl shadow-2xl flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400 space-x-1">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs font-mono font-bold text-cyan-400 bg-blue-950 px-2.5 py-1 rounded-md border border-blue-800">
                    {test.company}
                  </span>
                </div>

                <Quote className="w-8 h-8 text-blue-500/30" />

                <p className="text-sm text-slate-300 leading-relaxed italic">
                  "{test.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <img
                    src={test.avatar}
                    alt={test.author}
                    className="w-10 h-10 rounded-full object-cover border border-blue-500/40"
                  />
                  <div>
                    <h4 className="text-xs font-bold text-white">{test.author}</h4>
                    <p className="text-[10px] text-slate-400">{test.role}</p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[9px] text-slate-500 block uppercase">Key Outcome</span>
                  <span className="text-xs font-bold text-emerald-400 font-mono">{test.impactMetric}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Keynote Video Teaser Banner */}
        <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 p-8 sm:p-10 rounded-3xl border border-blue-500/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 max-w-xl text-left">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">ANNUAL EXECUTIVE SUMMIT 2026</span>
            <h3 className="text-2xl font-bold text-white">Watch Dr. Alexander Vance Keynote</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              "Architecting Autonomous Enterprise Neural Systems & Post-Quantum Cryptography Guardrails" (Length: 14 mins).
            </p>
          </div>

          <button
            onClick={onOpenVideo}
            className="px-6 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center space-x-3 shadow-xl shadow-blue-600/40 transition-all shrink-0"
          >
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white">
              <Play className="w-4 h-4 fill-current ml-0.5" />
            </div>
            <span>Play Executive Keynote</span>
          </button>
        </div>
      </div>
    </section>
  );
};
