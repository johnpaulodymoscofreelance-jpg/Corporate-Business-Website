import React, { useState } from 'react';
import {
  Globe2,
  CheckCircle2,
  Send,
  ShieldCheck,
  Globe,
  ArrowUpRight
} from 'lucide-react';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSubscribed(true);
    setTimeout(() => {
      setNewsletterSubscribed(false);
      setNewsletterEmail('');
    }, 3000);
  };

  return (
    <footer className="bg-[#071A35] text-slate-400 text-xs border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Top Newsletter & System Status Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-white/10 items-center">
          <div className="lg:col-span-6 space-y-2">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-400 font-mono font-semibold text-xs">All 1,420 Global Nodes Operational (99.999% SLA)</span>
            </div>
            <p className="text-slate-300 text-sm font-semibold">Subscribe to NEXUS Executive Intelligence Briefings</p>
            <p className="text-slate-500 text-xs">Quarterly analysis on sovereign AI, quantum readiness, and cybersecurity benchmarks.</p>
          </div>

          <div className="lg:col-span-6">
            {newsletterSubscribed ? (
              <div className="glass-panel p-3.5 rounded-full text-emerald-300 flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-bold">Subscribed! Check your inbox for the Q3 Executive Briefing.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex space-x-2">
                <input
                  type="email"
                  required
                  placeholder="exec@company.com"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="px-5 py-3 rounded-full glass-panel text-xs text-white focus:outline-none focus:border-blue-500 grow"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-full bg-[#0057FF] hover:bg-blue-500 text-white font-bold text-xs shrink-0 flex items-center space-x-1 shadow-lg shadow-blue-600/30"
                >
                  <span>Subscribe</span>
                  <Send className="w-3.5 h-3.5 text-cyan-300" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Multi-Column Links */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Col 1 Brand */}
          <div className="col-span-2 space-y-4">
            <a href="#" className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0057FF] to-[#00FFFF] flex items-center justify-center">
                <Globe2 className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-extrabold tracking-tight text-white italic">NEXUS GLOBAL</span>
            </a>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              The premier Fortune 500 technology conglomerate engineering sovereign AI systems, zero-trust cloud infrastructure, and 3D industrial telemetry.
            </p>
            <div className="text-slate-500 font-mono text-[11px]">
              San Francisco • Zurich • London • Tokyo • Singapore
            </div>
          </div>

          {/* Col 2 Capabilities */}
          <div className="space-y-3">
            <h4 className="text-slate-200 font-bold uppercase tracking-wider text-[11px]">Capabilities</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#services" className="hover:text-white">Enterprise AI & LLMs</a></li>
              <li><a href="#services" className="hover:text-white">Sovereign Cloud</a></li>
              <li><a href="#services" className="hover:text-white">Next-Gen Cyber Defense</a></li>
              <li><a href="#services" className="hover:text-white">3D Digital Twins</a></li>
              <li><a href="#services" className="hover:text-white">Predictive Data Lakes</a></li>
            </ul>
          </div>

          {/* Col 3 Industries */}
          <div className="space-y-3">
            <h4 className="text-slate-200 font-bold uppercase tracking-wider text-[11px]">Industries</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#industries" className="hover:text-white">Capital Markets</a></li>
              <li><a href="#industries" className="hover:text-white">Healthcare & Pharma</a></li>
              <li><a href="#industries" className="hover:text-white">Smart Manufacturing</a></li>
              <li><a href="#industries" className="hover:text-white">Aerospace & Satellite</a></li>
              <li><a href="#industries" className="hover:text-white">Energy & Sustainability</a></li>
            </ul>
          </div>

          {/* Col 4 Company */}
          <div className="space-y-3">
            <h4 className="text-slate-200 font-bold uppercase tracking-wider text-[11px]">Corporate</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#about" className="hover:text-white">About Heritage</a></li>
              <li><a href="#leadership" className="hover:text-white">Executive Team</a></li>
              <li><a href="#case-studies" className="hover:text-white">Case Studies</a></li>
              <li><a href="#careers" className="hover:text-white">Global Careers</a></li>
              <li><a href="#insights" className="hover:text-white">Research & Reports</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Copyright */}
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-600 text-[11px]">
          <div>
            © {new Date().getFullYear()} NEXUS Global Enterprise Inc. All rights reserved.
          </div>

          <div className="flex space-x-6">
            <a href="#" className="hover:text-slate-400">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400">Zero-Trust SLA Terms</a>
            <a href="#" className="hover:text-slate-400">Sovereign Security Audit</a>
            <a href="#" className="hover:text-slate-400">Cookie Preferences</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
