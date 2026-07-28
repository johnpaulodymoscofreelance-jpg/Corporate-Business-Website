import React, { useState, useEffect } from 'react';
import { GLOBAL_OFFICES } from '../data/corporateData';
import { GlobalOffice } from '../types';
import { Globe3D } from './3d/Globe3D';
import {
  Globe,
  Clock,
  Phone,
  MapPin,
  Users,
  Activity,
  CheckCircle2,
  Building2
} from 'lucide-react';

export const GlobalPresence: React.FC = () => {
  const [selectedOffice, setSelectedOffice] = useState<GlobalOffice>(GLOBAL_OFFICES[0]);
  const [activeRegion, setActiveRegion] = useState<string>('All');
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const updateTimes = () => {
      try {
        const timeString = new Date().toLocaleTimeString('en-US', {
          timeZone: selectedOffice.timezone,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        });
        setCurrentTime(timeString);
      } catch (err) {
        setCurrentTime(new Date().toLocaleTimeString());
      }
    };
    updateTimes();
    const timer = setInterval(updateTimes, 1000);
    return () => clearInterval(timer);
  }, [selectedOffice]);

  const regions = ['All', 'Americas', 'EMEA', 'APAC'];

  const filteredOffices = activeRegion === 'All'
    ? GLOBAL_OFFICES
    : GLOBAL_OFFICES.filter(o => o.region === activeRegion);

  return (
    <section id="global-presence" className="py-24 bg-slate-900/60 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-950/80 border border-blue-500/30 px-3.5 py-1.5 rounded-full text-xs text-cyan-400 font-semibold uppercase tracking-wider">
            <Globe className="w-3.5 h-3.5" />
            <span>Worldwide Infrastructure</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Global Office Network & <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Sovereign Data Hubs</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Operating 8 global headquarters and sovereign data centers across Americas, EMEA, and APAC with 24/7 client support.
          </p>
        </div>

        {/* Region Filter Bar */}
        <div className="flex justify-center space-x-2 mb-8">
          {regions.map((reg) => (
            <button
              key={reg}
              onClick={() => setActiveRegion(reg)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all border ${
                activeRegion === reg
                  ? 'bg-blue-600 border-blue-400 text-white shadow-lg'
                  : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              {reg} Region
            </button>
          ))}
        </div>

        {/* Main Grid: Interactive 3D Globe + Office Selector List */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* Left: Interactive 3D Globe Canvas */}
          <div className="lg:col-span-7">
            <Globe3D
              onSelectOffice={(off) => setSelectedOffice(off)}
              activeOfficeId={selectedOffice.id}
              height="h-[480px] sm:h-[550px]"
            />
          </div>

          {/* Right: Selected Office Details Card & List */}
          <div className="lg:col-span-5 space-y-4">
            {/* Spotlight Office Card */}
            <div className="bg-slate-950/90 border border-blue-500/40 rounded-3xl p-6 backdrop-blur-xl shadow-2xl space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div>
                  <h3 className="text-2xl font-bold text-white flex items-center space-x-2">
                    <span>{selectedOffice.city}</span>
                    {selectedOffice.isHQ && (
                      <span className="text-[10px] bg-rose-500/20 text-rose-300 border border-rose-500/40 px-2 py-0.5 rounded font-mono uppercase">
                        Global HQ
                      </span>
                    )}
                  </h3>
                  <p className="text-xs text-slate-400">{selectedOffice.country} • {selectedOffice.region}</p>
                </div>

                <div className="text-right">
                  <div className="text-xs font-mono text-cyan-400 font-bold flex items-center space-x-1 justify-end">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{currentTime || '12:00 PM'}</span>
                  </div>
                  <span className="text-[10px] text-slate-500 font-mono block">Local Office Time</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="bg-slate-900 p-3 rounded-xl border border-slate-800">
                  <span className="text-slate-400 text-[10px] block">Active Workforce</span>
                  <span className="text-sm font-bold text-emerald-400 font-mono">{selectedOffice.staffCount} Staff</span>
                </div>
                <div className="bg-slate-900 p-3 rounded-xl border border-slate-800">
                  <span className="text-slate-400 text-[10px] block">Node Latency Ping</span>
                  <span className="text-sm font-bold text-cyan-400 font-mono">{selectedOffice.latencyMs} ms</span>
                </div>
              </div>

              <div className="space-y-2 text-xs text-slate-300 pt-2 border-t border-slate-800">
                <div className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{selectedOffice.address}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span className="font-mono">{selectedOffice.phone}</span>
                </div>
              </div>
            </div>

            {/* Quick List of Other Hubs */}
            <div className="grid grid-cols-2 gap-2 max-h-56 overflow-y-auto pr-1 no-scrollbar">
              {filteredOffices.map((office) => {
                const isSelected = selectedOffice.id === office.id;
                return (
                  <button
                    key={office.id}
                    onClick={() => setSelectedOffice(office)}
                    className={`p-3 rounded-xl text-left border transition-all text-xs ${
                      isSelected
                        ? 'bg-blue-600/30 border-blue-400 text-white font-bold'
                        : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{office.city}</span>
                      <span className="text-[10px] font-mono text-cyan-400">{office.latencyMs}ms</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
