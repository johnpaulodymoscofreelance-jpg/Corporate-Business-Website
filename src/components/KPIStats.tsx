import React from 'react';
import {
  DollarSign,
  Globe,
  Briefcase,
  ShieldCheck,
  Users,
  Award
} from 'lucide-react';

export const KPIStats: React.FC = () => {
  const kpis = [
    { label: 'Managed Client Enterprise Assets', value: '$42B+', icon: <DollarSign className="w-5 h-5 text-cyan-400" /> },
    { label: 'Countries & Global Regions', value: '140+', icon: <Globe className="w-5 h-5 text-blue-400" /> },
    { label: 'Enterprise Transformation Projects', value: '3,800+', icon: <Briefcase className="w-5 h-5 text-purple-400" /> },
    { label: 'System SLA Availability Guarantee', value: '99.999%', icon: <ShieldCheck className="w-5 h-5 text-emerald-400" /> },
    { label: 'Global Systems Engineers & Scientists', value: '18,000+', icon: <Users className="w-5 h-5 text-indigo-400" /> },
    { label: 'Customer Satisfaction Index (CSAT)', value: '98.8%', icon: <Award className="w-5 h-5 text-amber-400" /> },
  ];

  return (
    <section className="py-20 bg-[#071A35]/90 border-t border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-6">
          {kpis.map((kpi, idx) => (
            <div
              key={idx}
              className="glass-panel glass-panel-hover p-5 rounded-2xl text-center space-y-2 group"
            >
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                {kpi.icon}
              </div>
              <div className="text-2xl sm:text-3xl font-black text-white font-mono">{kpi.value}</div>
              <div className="text-[11px] text-slate-400 font-semibold leading-tight">{kpi.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
