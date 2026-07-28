import React, { useState } from 'react';
import {
  Send,
  Calendar,
  Clock,
  MessageSquare,
  CheckCircle2,
  Mail,
  Phone,
  Building,
  User,
  ShieldCheck
} from 'lucide-react';

interface ContactSectionProps {
  onOpenAiChat: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenAiChat }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    industry: 'Financial Services',
    budget: '$250,000 - $1,000,000',
    preferredDate: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [refId, setRefId] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      setRefId(data.referenceId || `NEXUS-${Math.floor(100000 + Math.random() * 900000)}`);
      setSubmitted(true);
    } catch (err) {
      setRefId(`NEXUS-${Math.floor(100000 + Math.random() * 900000)}`);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#08080a] relative overflow-hidden border-t border-white/10">
      {/* Glow */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-red-600/10 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Column: Direct Contact Narrative & Quick Actions */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="inline-flex items-center space-x-2 bg-red-500/10 border border-red-500/20 px-3.5 py-1.5 rounded-full text-xs text-red-400 font-semibold uppercase tracking-wider">
              <Mail className="w-3.5 h-3.5" />
              <span>Direct Strategic Inquiry</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Initiate Your <br />
              <span className="gradient-text">
                Enterprise Engagement
              </span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Connect directly with our Senior Client Directors and Chief Architects. We respond to all Fortune 500 inquiries within 2 business hours.
            </p>

            <div className="glass-panel p-6 rounded-2xl space-y-4">
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">Direct Channels:</h4>

              <div className="space-y-3 text-xs text-slate-200">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-red-600/20 flex items-center justify-center text-red-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">Executive Inquiries</span>
                    <span className="font-mono text-white font-bold">executive@nexus.global</span>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-red-600/20 flex items-center justify-center text-red-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">San Francisco HQ Phone</span>
                    <span className="font-mono text-white font-bold">+1 (415) 890-2000</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Live AI Assistant Trigger */}
            <div className="glass-panel p-6 rounded-2xl flex items-center justify-between border-rose-500/30">
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-rose-200">Need Immediate Answers?</h4>
                <p className="text-[11px] text-slate-300">NEXUS Executive AI is active 24/7 for instant consultation.</p>
              </div>
              <button
                onClick={onOpenAiChat}
                className="px-5 py-2.5 rounded-full bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs flex items-center space-x-1.5 shrink-0 shadow-lg shadow-rose-600/30"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Launch AI</span>
              </button>
            </div>
          </div>

          {/* Right Column: Executive Form / Demo Calendar Picker */}
          <div className="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-10 shadow-2xl">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">Engagement Inquiry Received</h3>
                <p className="text-xs text-slate-300 max-w-md mx-auto">
                  Reference ID: <span className="font-mono text-red-400 font-bold">{refId}</span>. A Senior Strategy Partner has been assigned to your account and will reach out shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-full glass-panel text-slate-200 text-xs font-semibold hover:bg-white/10"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-slate-400 block mb-1 font-medium">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="David Harrison"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-full glass-panel text-xs text-white focus:outline-none focus:border-red-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-slate-400 block mb-1 font-medium">Corporate Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="david@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-full glass-panel text-xs text-white focus:outline-none focus:border-red-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-slate-400 block mb-1 font-medium">Company Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Apex Global Capital"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-full glass-panel text-xs text-white focus:outline-none focus:border-red-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-slate-400 block mb-1 font-medium">Industry Vertical</label>
                    <select
                      value={formData.industry}
                      onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                      className="w-full px-4 py-3 rounded-full glass-panel text-xs text-white focus:outline-none focus:border-red-500"
                    >
                      <option>Financial Services & Banking</option>
                      <option>Healthcare & Life Sciences</option>
                      <option>Smart Manufacturing</option>
                      <option>Aerospace & Defense</option>
                      <option>Energy & Sustainability</option>
                      <option>Global Logistics</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-slate-400 block mb-1 font-medium">Estimated Budget Bracket</label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-full glass-panel text-xs text-white focus:outline-none focus:border-red-500"
                    >
                      <option>$100,000 - $250,000</option>
                      <option>$250,000 - $1,000,000</option>
                      <option>$1,000,000 - $5,000,000</option>
                      <option>$5,000,000+</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs text-slate-400 block mb-1 font-medium">Preferred Executive Consultation Date</label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full px-4 py-3 rounded-full glass-panel text-xs text-white focus:outline-none focus:border-red-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs text-slate-400 block mb-1 font-medium">Strategic Objectives & Project Scope</label>
                  <textarea
                    rows={3}
                    placeholder="Describe your current cloud architecture, AI targets, or digital transformation timeline..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl glass-panel text-xs text-white focus:outline-none focus:border-red-500"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-full bg-red-600 hover:bg-red-500 text-white font-bold text-xs shadow-xl shadow-red-600/30 flex items-center justify-center space-x-2 transition-all"
                >
                  <Send className="w-4 h-4 text-rose-200" />
                  <span>{isSubmitting ? 'Transmitting Inquiry...' : 'Submit Executive Inquiry'}</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
