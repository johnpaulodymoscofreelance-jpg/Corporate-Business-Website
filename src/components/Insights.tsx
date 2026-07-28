import React, { useState } from 'react';
import { ARTICLES_DATA } from '../data/corporateData';
import { ArticleItem } from '../types';
import {
  BookOpen,
  Download,
  Clock,
  ArrowRight,
  FileText,
  CheckCircle2,
  X
} from 'lucide-react';

export const Insights: React.FC = () => {
  const [downloadArticle, setDownloadArticle] = useState<ArticleItem | null>(null);
  const [emailInput, setEmailInput] = useState('');
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownloadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput) return;
    setDownloadSuccess(true);
    setTimeout(() => {
      setDownloadSuccess(false);
      setDownloadArticle(null);
      setEmailInput('');
    }, 2500);
  };

  return (
    <section id="insights" className="py-24 bg-[#08080a] relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-red-500/10 border border-red-500/20 px-3.5 py-1.5 rounded-full text-xs text-red-400 font-semibold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Research & Whitepapers</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            NEXUS Executive <span className="gradient-text">Thought Leadership</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            In-depth analysis, benchmark indices, and architectural blueprints written by our chief scientists and advisory partners.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ARTICLES_DATA.map((art) => (
            <div
              key={art.id}
              className="bg-slate-900/80 border border-red-900/40 rounded-3xl p-6 backdrop-blur-xl hover:border-red-500/60 transition-all flex flex-col justify-between shadow-2xl group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="px-2.5 py-1 rounded-md bg-red-950 text-rose-300 font-mono text-[10px] uppercase border border-red-800">
                    {art.type}
                  </span>
                  <span className="flex items-center space-x-1 font-mono text-[11px]">
                    <Clock className="w-3 h-3 text-red-400" />
                    <span>{art.readTime}</span>
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-rose-300 transition-colors">
                  {art.title}
                </h3>

                <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                  {art.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between mt-6">
                <span className="text-[11px] text-slate-400 font-medium">By {art.author}</span>

                {art.downloadable ? (
                  <button
                    onClick={() => setDownloadArticle(art)}
                    className="flex items-center space-x-1.5 text-xs font-bold text-red-400 hover:text-red-300 bg-red-950/60 px-3 py-1.5 rounded-lg border border-red-800/60 transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>PDF Download</span>
                  </button>
                ) : (
                  <span className="text-xs font-bold text-slate-500 flex items-center space-x-1">
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PDF Download Modal */}
      {downloadArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-slate-900 border border-red-500/40 rounded-3xl max-w-md w-full p-6 sm:p-8 relative text-white shadow-2xl space-y-4">
            <button
              onClick={() => setDownloadArticle(null)}
              className="absolute top-4 right-4 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-12 h-12 rounded-2xl bg-red-600/20 border border-red-500/40 flex items-center justify-center text-red-400">
              <FileText className="w-6 h-6" />
            </div>

            <h3 className="text-xl font-bold">Download Executive Whitepaper</h3>
            <p className="text-xs text-slate-300">{downloadArticle.title}</p>

            {downloadSuccess ? (
              <div className="bg-emerald-950/80 border border-emerald-500/40 p-4 rounded-xl text-center space-y-2 text-emerald-300">
                <CheckCircle2 className="w-8 h-8 mx-auto text-emerald-400" />
                <p className="text-xs font-bold">Whitepaper PDF Transmitted!</p>
                <p className="text-[10px] text-slate-400">Check your inbox for your secure download link.</p>
              </div>
            ) : (
              <form onSubmit={handleDownloadSubmit} className="space-y-4 pt-2">
                <div>
                  <label className="text-xs text-slate-400 block mb-1 font-medium">Corporate Email Address:</label>
                  <input
                    type="email"
                    required
                    placeholder="exec@company.com"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-red-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs shadow-lg shadow-red-600/30 flex items-center justify-center space-x-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Send PDF Whitepaper Now</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
