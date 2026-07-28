import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/corporateData';
import { ServiceItem } from '../types';
import { NeuralNet3D } from './3d/NeuralNet3D';
import { ProductShowcase3D } from './3d/ProductShowcase3D';
import {
  Cpu,
  Cloud,
  ShieldCheck,
  Zap,
  BarChart3,
  Workflow,
  Code2,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  X,
  Sparkles,
  Layers
} from 'lucide-react';

interface ServicesProps {
  onOpenRoi: () => void;
  onOpenDemo: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenRoi, onOpenDemo }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Cpu': return <Cpu className="w-6 h-6" />;
      case 'Cloud': return <Cloud className="w-6 h-6" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6" />;
      case 'Zap': return <Zap className="w-6 h-6" />;
      case 'BarChart3': return <BarChart3 className="w-6 h-6" />;
      case 'Workflow': return <Workflow className="w-6 h-6" />;
      case 'Code2': return <Code2 className="w-6 h-6" />;
      default: return <TrendingUp className="w-6 h-6" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-[#071A35] relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-[#0057FF]/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-400/20 px-3.5 py-1.5 rounded-full text-xs text-cyan-400 font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Core Enterprise Capabilities</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Bespoke Digital <br />
              <span className="gradient-text">
                Solutions at Scale
              </span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Every service is backed by sub-millisecond architecture, sovereign security protocols, and rigorous SLA guarantees.
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={onOpenRoi}
              className="px-6 py-3 rounded-full glass-panel hover:bg-white/10 text-cyan-400 text-xs font-bold transition-all"
            >
              Calculate Service ROI
            </button>
            <button
              onClick={onOpenDemo}
              className="px-6 py-3 rounded-full bg-[#0057FF] hover:bg-blue-500 text-white text-xs font-bold transition-all shadow-lg shadow-blue-600/30"
            >
              Consult an Architect
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              onClick={() => setSelectedService(service)}
              className="group relative glass-panel glass-panel-hover rounded-2xl p-6 cursor-pointer flex flex-col justify-between shadow-xl"
            >
              {/* Card Top */}
              <div>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0057FF] to-[#00FFFF] flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-all shadow-md">
                  {getIcon(service.iconName)}
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs text-slate-400 line-clamp-3 mb-4 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Card Bottom / Key Metric */}
              <div>
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-500 block uppercase">{service.metrics[0].label}</span>
                    <span className="text-sm font-bold text-emerald-400 font-mono">{service.metrics[0].value}</span>
                  </div>

                  <span className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-[#0057FF] flex items-center justify-center text-slate-300 group-hover:text-white transition-all">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Expanded Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-slate-900 border border-blue-500/40 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative text-white shadow-2xl">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white">
                {getIcon(selectedService.iconName)}
              </div>
              <div>
                <h3 className="text-2xl font-bold">{selectedService.title}</h3>
                <p className="text-xs text-cyan-400 font-mono">{selectedService.tagline}</p>
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              {selectedService.description}
            </p>

            {/* Interactive 3D Canvas Preview inside Modal */}
            <div className="mb-6">
              <div className="text-xs font-mono text-slate-400 mb-2 flex items-center space-x-1.5">
                <Layers className="w-3.5 h-3.5 text-cyan-400" />
                <span>Live Service Architecture Blueprint Visualization:</span>
              </div>
              {selectedService.id === 'ai-neural' || selectedService.id === 'data-analytics' ? (
                <NeuralNet3D height="h-[260px]" />
              ) : (
                <ProductShowcase3D height="h-[260px]" />
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Key Technical Capabilities:</h4>
                <ul className="space-y-2 text-xs text-slate-200">
                  {selectedService.features.map((feat, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Architecture Blueprint:</h4>
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs font-mono text-cyan-300 space-y-2">
                  <div>{selectedService.architectureBlueprint}</div>
                  <div className="pt-2 border-t border-slate-800 text-slate-400 text-[11px]">
                    SLA Guarantee: 99.999% • Zero-Trust Compliance Enabled
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end space-x-3 pt-4 border-t border-slate-800">
              <button
                onClick={() => setSelectedService(null)}
                className="px-5 py-2.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white text-xs font-semibold"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setSelectedService(null);
                  onOpenDemo();
                }}
                className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold shadow-lg"
              >
                Schedule Executive Demo
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
