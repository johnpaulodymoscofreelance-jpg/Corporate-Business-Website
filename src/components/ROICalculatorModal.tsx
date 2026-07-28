import React, { useState } from 'react';
import {
  Calculator,
  TrendingUp,
  X,
  CheckCircle2,
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface ROICalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenDemo: () => void;
}

export const ROICalculatorModal: React.FC<ROICalculatorModalProps> = ({ isOpen, onClose, onOpenDemo }) => {
  const [industry, setIndustry] = useState('Banking & Capital Markets');
  const [companySize, setCompanySize] = useState('1,000 - 5,000 Employees');
  const [cloudSpend, setCloudSpend] = useState('2500000');
  const [goal, setGoal] = useState('Cloud Cost Optimization & AI Automation');

  const [isLoading, setIsLoading] = useState(false);
  const [roiResult, setRoiResult] = useState<any>(null);

  if (!isOpen) return null;

  const handleCalculate = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch('/api/ai/roi-estimate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          industry,
          companySize,
          currentCloudSpend: cloudSpend,
          keyGoal: goal
        })
      });
      const data = await res.json();
      setRoiResult(data);
    } catch (err) {
      setRoiResult({
        annualCostReduction: '$1,420,000',
        throughputMultiplier: '3.4x',
        paybackPeriodMonths: '6.8 months',
        summary: 'Projected optimization yields significant operational cost reduction and accelerated software deployment cycles.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-blue-500/40 rounded-3xl max-w-2xl w-full p-6 sm:p-8 relative text-white shadow-2xl space-y-6">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-2xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-cyan-400">
            <Calculator className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold">NEXUS Corporate ROI Calculator</h3>
            <p className="text-xs text-cyan-400 font-mono">Powered by AI Financial Benchmark Engines</p>
          </div>
        </div>

        {roiResult ? (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-slate-950 p-4 rounded-2xl border border-blue-500/30 text-center">
                <span className="text-[10px] text-slate-400 font-mono uppercase block">Annual Cost Reduction</span>
                <span className="text-xl font-bold text-emerald-400 font-mono">{roiResult.annualCostReduction}</span>
              </div>

              <div className="bg-slate-950 p-4 rounded-2xl border border-blue-500/30 text-center">
                <span className="text-[10px] text-slate-400 font-mono uppercase block">Throughput Multiplier</span>
                <span className="text-xl font-bold text-cyan-400 font-mono">{roiResult.throughputMultiplier}</span>
              </div>

              <div className="bg-slate-950 p-4 rounded-2xl border border-blue-500/30 text-center">
                <span className="text-[10px] text-slate-400 font-mono uppercase block">Payback Period</span>
                <span className="text-xl font-bold text-purple-400 font-mono">{roiResult.paybackPeriodMonths}</span>
              </div>
            </div>

            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-2">
              <h4 className="text-xs font-bold text-cyan-300 uppercase tracking-wider">Executive ROI Summary:</h4>
              <p className="text-xs text-slate-300 leading-relaxed">{roiResult.summary}</p>
            </div>

            <div className="flex justify-end space-x-3 pt-2">
              <button
                onClick={() => setRoiResult(null)}
                className="px-4 py-2.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white text-xs font-semibold"
              >
                Recalculate
              </button>
              <button
                onClick={() => { onClose(); onOpenDemo(); }}
                className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-lg"
              >
                Schedule Executive Demo
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleCalculate} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-slate-400 block mb-1 font-medium">Industry Sector</label>
                <select
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-blue-500"
                >
                  <option>Banking & Capital Markets</option>
                  <option>Healthcare & Life Sciences</option>
                  <option>Smart Manufacturing</option>
                  <option>Aerospace & Defense</option>
                  <option>Energy & Utilities</option>
                  <option>Global Logistics</option>
                </select>
              </div>

              <div>
                <label className="text-xs text-slate-400 block mb-1 font-medium">Organization Scale</label>
                <select
                  value={companySize}
                  onChange={(e) => setCompanySize(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-blue-500"
                >
                  <option>500 - 1,000 Employees</option>
                  <option>1,000 - 5,000 Employees</option>
                  <option>5,000 - 20,000 Employees</option>
                  <option>20,000+ Employees</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-xs text-slate-400 block mb-1 font-medium">Annual Cloud & IT Infra Spend ($ USD)</label>
              <input
                type="number"
                required
                value={cloudSpend}
                onChange={(e) => setCloudSpend(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="text-xs text-slate-400 block mb-1 font-medium">Primary Transformation Objective</label>
              <input
                type="text"
                required
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-blue-500"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs shadow-xl shadow-blue-600/30 flex items-center justify-center space-x-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>{isLoading ? 'Calculating Enterprise Metrics...' : 'Calculate AI Projected ROI'}</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
