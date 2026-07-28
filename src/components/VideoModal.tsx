import React from 'react';
import { X, Play, ShieldCheck, Sparkles } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-red-500/40 rounded-3xl max-w-4xl w-full p-6 sm:p-8 relative text-white shadow-2xl space-y-4">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center space-x-2 text-xs text-red-400 font-mono">
          <Sparkles className="w-4 h-4" />
          <span>ANNUAL EXECUTIVE SUMMIT KEYNOTE (2026)</span>
        </div>

        <h3 className="text-2xl font-bold">Architecting Autonomous Sovereign Intelligence</h3>

        {/* Video Player Container / Simulated Keynote Player */}
        <div className="relative aspect-video w-full bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 flex flex-col items-center justify-center group">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

          {/* Keynote Preview Canvas Image */}
          <img
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop"
            alt="Keynote"
            className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
          />

          <div className="relative z-10 text-center space-y-4 p-6">
            <div className="w-16 h-16 rounded-full bg-red-600/90 border-2 border-rose-400 flex items-center justify-center text-white mx-auto shadow-2xl shadow-red-500/50 hover:scale-110 transition-transform cursor-pointer">
              <Play className="w-8 h-8 fill-current ml-1" />
            </div>

            <div>
              <p className="text-sm font-bold text-white">Dr. Alexander Vance & Elena Rostova</p>
              <p className="text-xs text-slate-300">"Sovereign LLMs, Post-Quantum Vaults & 3D Industrial Telemetry"</p>
            </div>
          </div>

          <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between text-xs font-mono text-slate-400">
            <span>00:00 / 14:20</span>
            <span className="flex items-center space-x-1 text-emerald-400">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>4K High-Bitrate Stream</span>
            </span>
          </div>
        </div>

        <p className="text-xs text-slate-400 leading-relaxed">
          Abstract: In this keynote, Dr. Vance outlines NEXUS's multi-tier architecture for deploying fine-tuned LLMs inside air-gapped sovereign clouds while guaranteeing sub-millisecond execution for global trading and manufacturing networks.
        </p>
      </div>
    </div>
  );
};
