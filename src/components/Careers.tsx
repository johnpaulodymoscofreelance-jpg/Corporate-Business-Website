import React, { useState } from 'react';
import { CAREERS_DATA } from '../data/corporateData';
import { JobOpening } from '../types';
import {
  Briefcase,
  MapPin,
  CheckCircle2,
  ArrowRight,
  X,
  Sparkles,
  Users
} from 'lucide-react';

export const Careers: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantNotes, setApplicantNotes] = useState('');
  const [appliedSuccess, setAppliedSuccess] = useState(false);

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    setAppliedSuccess(true);
    setTimeout(() => {
      setAppliedSuccess(false);
      setSelectedJob(null);
      setApplicantName('');
      setApplicantEmail('');
      setApplicantNotes('');
    }, 2500);
  };

  return (
    <section id="careers" className="py-24 bg-slate-900/40 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-950/80 border border-blue-500/30 px-3.5 py-1.5 rounded-full text-xs text-cyan-400 font-semibold uppercase tracking-wider">
            <Users className="w-3.5 h-3.5" />
            <span>Join Our Global Team</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Build the Next Generation of <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Sovereign AI</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            We are hiring world-class systems engineers, AI research scientists, and technology advisory directors in San Francisco, Zurich, New York, and Remote.
          </p>
        </div>

        {/* Jobs List */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {CAREERS_DATA.map((job) => (
            <div
              key={job.id}
              className="bg-slate-950/90 border border-blue-900/40 rounded-2xl p-6 backdrop-blur-xl hover:border-blue-500/60 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-xl"
            >
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-xs">
                  <span className="px-2.5 py-0.5 rounded bg-blue-950 text-cyan-400 font-mono text-[10px] uppercase border border-blue-800">
                    {job.department}
                  </span>
                  <span className="text-slate-500">•</span>
                  <span className="text-slate-400 font-medium flex items-center space-x-1">
                    <MapPin className="w-3 h-3 text-cyan-400" />
                    <span>{job.location}</span>
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white">{job.title}</h3>
                <p className="text-xs text-slate-300 max-w-2xl">{job.description}</p>
              </div>

              <button
                onClick={() => setSelectedJob(job)}
                className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shrink-0 flex items-center space-x-1.5 transition-all shadow-lg shadow-blue-600/30"
              >
                <span>Apply Role</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Application Modal */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-slate-900 border border-blue-500/40 rounded-3xl max-w-lg w-full p-6 sm:p-8 relative text-white shadow-2xl space-y-4">
            <button
              onClick={() => setSelectedJob(null)}
              className="absolute top-4 right-4 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1">
              <span className="text-xs font-mono text-cyan-400 uppercase">{selectedJob.department} • {selectedJob.location}</span>
              <h3 className="text-xl font-bold">{selectedJob.title}</h3>
            </div>

            {appliedSuccess ? (
              <div className="bg-emerald-950/80 border border-emerald-500/40 p-6 rounded-2xl text-center space-y-2 text-emerald-300">
                <CheckCircle2 className="w-10 h-10 mx-auto text-emerald-400" />
                <h4 className="text-sm font-bold">Application Transmitted!</h4>
                <p className="text-xs text-slate-400">Our Talent & Engineering panel will review your submission within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleApply} className="space-y-4 pt-2">
                <div>
                  <label className="text-xs text-slate-400 block mb-1 font-medium">Full Name:</label>
                  <input
                    type="text"
                    required
                    placeholder="Dr. Alex Rivera"
                    value={applicantName}
                    onChange={(e) => setApplicantName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="text-xs text-slate-400 block mb-1 font-medium">Email Address:</label>
                  <input
                    type="email"
                    required
                    placeholder="alex@domain.com"
                    value={applicantEmail}
                    onChange={(e) => setApplicantEmail(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="text-xs text-slate-400 block mb-1 font-medium">Portfolio / LinkedIn / GitHub URL:</label>
                  <textarea
                    rows={2}
                    placeholder="Share your technical background or project links..."
                    value={applicantNotes}
                    onChange={(e) => setApplicantNotes(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-blue-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-lg shadow-blue-600/30"
                >
                  Submit Executive Application
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
