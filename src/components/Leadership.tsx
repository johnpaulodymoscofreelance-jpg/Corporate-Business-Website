import React from 'react';
import { LEADERSHIP_TEAM } from '../data/corporateData';
import { Users, Linkedin, Quote, Award, CheckCircle2 } from 'lucide-react';

export const Leadership: React.FC = () => {
  return (
    <section id="leadership" className="py-24 bg-[#08080a] relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-red-500/10 border border-red-500/20 px-3.5 py-1.5 rounded-full text-xs text-red-400 font-semibold uppercase tracking-wider">
            <Users className="w-3.5 h-3.5" />
            <span>Executive Governance</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Led by World-Class <span className="gradient-text">Visionaries</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Our executive leadership combines decades of experience at DARPA, MIT, Google Brain, IBM, and McKinsey.
          </p>
        </div>

        {/* Executive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {LEADERSHIP_TEAM.map((member) => (
            <div
              key={member.id}
              className="bg-slate-900/80 border border-red-900/40 rounded-3xl p-6 backdrop-blur-xl hover:border-red-500/60 transition-all group flex flex-col justify-between shadow-2xl hover:-translate-y-1.5"
            >
              <div>
                {/* Avatar with gradient border */}
                <div className="relative mb-6 rounded-2xl overflow-hidden p-[2px] bg-gradient-to-tr from-red-600 via-rose-600 to-amber-600">
                  <div className="w-full h-56 rounded-[14px] overflow-hidden relative">
                    <img
                      src={member.avatarUrl}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  </div>
                </div>

                <div className="space-y-1 mb-3">
                  <span className="text-[10px] font-mono text-red-400 uppercase tracking-widest block">{member.division}</span>
                  <h3 className="text-lg font-bold text-white group-hover:text-rose-300 transition-colors">{member.name}</h3>
                  <p className="text-xs text-slate-400 font-medium">{member.role}</p>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed mb-4 line-clamp-4">
                  {member.bio}
                </p>
              </div>

              {/* Quote & Achievements */}
              <div className="pt-4 border-t border-slate-800 space-y-3">
                <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 text-[11px] text-slate-300 italic">
                  <Quote className="w-3 h-3 text-red-400 mb-1" />
                  <span>"{member.quote}"</span>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <span className="text-[10px] text-slate-500 font-mono">MIT / Stanford Alum</span>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-red-600 text-slate-300 hover:text-white transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
