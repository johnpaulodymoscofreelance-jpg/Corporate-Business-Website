import React, { useState } from 'react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip } from 'recharts';
import {
  Activity,
  Cpu,
  Database,
  Layers,
  Play,
  CheckCircle,
  Zap,
  TrendingUp,
  Server,
  Terminal,
  ShieldCheck,
  RefreshCw
} from 'lucide-react';

const chartData = [
  { time: '00:00', throughput: 2400, efficiency: 88, latency: 14 },
  { time: '04:00', throughput: 3800, efficiency: 92, latency: 12 },
  { time: '08:00', throughput: 7200, efficiency: 97, latency: 9 },
  { time: '12:00', throughput: 9400, efficiency: 98, latency: 8 },
  { time: '16:00', throughput: 8100, efficiency: 96, latency: 10 },
  { time: '20:00', throughput: 5600, efficiency: 94, latency: 11 },
  { time: '24:00', throughput: 4200, efficiency: 90, latency: 13 },
];

export const SolutionsDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'analytics' | 'workflow' | 'logs'>('analytics');
  const [nodesSim, setNodesSim] = useState([
    { id: 'node-1', name: 'Sovereign Vector Ingress', status: 'Healthy', load: '32%' },
    { id: 'node-2', name: 'Quantum Cryptography Vault', status: 'Encrypted', load: '18%' },
    { id: 'node-3', name: 'Multi-Agent LLM Swarm', status: 'Active', load: '64%' },
    { id: 'node-4', name: 'Global Kafka Event Bus', status: 'Optimal', load: '45%' },
  ]);

  const [logs, setLogs] = useState([
    '[00:09:02] NEXUS Core Ingress: Re-routed 48,000 sub-second packets via Zurich Edge.',
    '[00:09:03] Zero-Trust Guard: Verified TLS 1.3 Hardware Vault token in 0.4ms.',
    '[00:09:04] Autonomous Agent: Executed portfolio rebalance simulation across 14 markets.',
    '[00:09:05] System Telemetry: All 1,420 global nodes operating within 99.999% SLA parameters.'
  ]);

  const refreshLogs = () => {
    const timestamp = new Date().toTimeString().split(' ')[0];
    const newLog = `[${timestamp}] NEXUS Telemetry: Executed live health check across global clusters. All systems 100% operational.`;
    setLogs(prev => [newLog, ...prev.slice(0, 3)]);
  };

  return (
    <section id="solutions" className="py-24 bg-[#071A35] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#0057FF]/10 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-400/20 px-3.5 py-1.5 rounded-full text-xs text-cyan-400 font-semibold uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5" />
            <span>Interactive Platform Simulation</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            NEXUS Enterprise <span className="gradient-text">Control Center</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Experience the real-time operational dashboard that powers Fortune 500 decision-making.
          </p>
        </div>

        {/* Dashboard Shell Frame */}
        <div className="glass-panel rounded-3xl overflow-hidden shadow-2xl">
          {/* Top Bar Window Controls */}
          <div className="bg-[#071A35]/80 px-6 py-4 border-b border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              <div className="flex space-x-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-xs font-mono text-slate-400 border-l border-white/10 pl-3">
                nexus://live-telemetry.control.global
              </span>
            </div>

            {/* View Switcher Tabs */}
            <div className="flex glass-panel p-1 rounded-full space-x-1">
              <button
                onClick={() => setActiveTab('analytics')}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold flex items-center space-x-1.5 transition-all ${
                  activeTab === 'analytics'
                    ? 'bg-[#0057FF] text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <TrendingUp className="w-3.5 h-3.5" />
                <span>Real-Time Telemetry</span>
              </button>

              <button
                onClick={() => setActiveTab('workflow')}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold flex items-center space-x-1.5 transition-all ${
                  activeTab === 'workflow'
                    ? 'bg-[#0057FF] text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Node Mesh Status</span>
              </button>

              <button
                onClick={() => setActiveTab('logs')}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold flex items-center space-x-1.5 transition-all ${
                  activeTab === 'logs'
                    ? 'bg-[#0057FF] text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Terminal className="w-3.5 h-3.5" />
                <span>Audit Stream</span>
              </button>
            </div>
          </div>

          {/* Dashboard Body */}
          <div className="p-6 sm:p-8">
            {activeTab === 'analytics' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800">
                    <span className="text-xs text-slate-400 block mb-1">Global System Efficiency</span>
                    <span className="text-2xl font-black text-cyan-400 font-mono">98.4%</span>
                    <span className="text-[10px] text-emerald-400 block mt-1">+2.1% from baseline</span>
                  </div>
                  <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800">
                    <span className="text-xs text-slate-400 block mb-1">Throughput Rate</span>
                    <span className="text-2xl font-black text-blue-400 font-mono">9,400 req/sec</span>
                    <span className="text-[10px] text-blue-400 block mt-1">Sub-10ms processing</span>
                  </div>
                  <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800">
                    <span className="text-xs text-slate-400 block mb-1">Security Intercepts</span>
                    <span className="text-2xl font-black text-purple-400 font-mono">0 Incidents</span>
                    <span className="text-[10px] text-emerald-400 block mt-1">Zero-Trust Active</span>
                  </div>
                </div>

                {/* Recharts Analytics Chart */}
                <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between text-xs text-slate-400 font-mono mb-4">
                    <span>LIVE 24-HOUR THROUGHPUT & EFFICIENCY CURVE:</span>
                    <span className="text-cyan-400">P99 Latency: 8.4ms</span>
                  </div>
                  <div className="h-64 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={chartData}>
                        <defs>
                          <linearGradient id="colorThroughput" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#0057FF" stopOpacity={0.6}/>
                            <stop offset="95%" stopColor="#0057FF" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <XAxis dataKey="time" stroke="#64748b" fontSize={11} />
                        <YAxis stroke="#64748b" fontSize={11} />
                        <Tooltip contentStyle={{ backgroundColor: '#071A35', borderColor: '#0057FF', borderRadius: '8px', fontSize: '12px' }} />
                        <Area type="monotone" dataKey="throughput" stroke="#00D2FF" strokeWidth={2} fillOpacity={1} fill="url(#colorThroughput)" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'workflow' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {nodesSim.map((node) => (
                  <div key={node.id} className="bg-slate-950 p-5 rounded-2xl border border-slate-800 flex items-center justify-between">
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-white">{node.name}</h4>
                      <div className="flex items-center space-x-2 text-xs">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-emerald-400">{node.status}</span>
                      </div>
                    </div>
                    <div className="text-right font-mono text-xs">
                      <span className="text-slate-400 block text-[10px]">Current Load</span>
                      <span className="text-cyan-400 font-bold text-sm">{node.load}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'logs' && (
              <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 font-mono text-xs text-slate-300 space-y-3">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2 text-slate-500">
                  <span>AUDIT TELEMETRY STREAM</span>
                  <button onClick={refreshLogs} className="text-cyan-400 hover:underline flex items-center space-x-1 text-[11px]">
                    <RefreshCw className="w-3 h-3" />
                    <span>Trigger Refresh</span>
                  </button>
                </div>
                {logs.map((log, idx) => (
                  <div key={idx} className="text-cyan-300 border-l-2 border-cyan-500 pl-3 py-1 bg-blue-950/20 rounded-r">
                    {log}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
