import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, Zap, ExternalLink } from 'lucide-react';

interface WorkforceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WorkforceModal: React.FC<WorkforceModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div 
      className="fixed inset-0 z-[99999] overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
      onClick={onClose}
    >
      {/* Floating Redundant Close Button */}
      <button
        onClick={onClose}
        className="fixed top-4 right-4 z-[100000] p-2.5 rounded-full bg-white/90 hover:bg-white text-zinc-900 shadow-xl border border-black/10 cursor-pointer transition-all hover:scale-105"
        title="Close (Esc)"
      >
        <X className="w-5 h-5" />
      </button>

      <div 
        className="w-full max-w-4xl bg-white rounded-[24px] sm:rounded-[28px] border border-black/10 shadow-2xl overflow-hidden text-left flex flex-col max-h-[88vh] relative my-auto animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header */}
        <div className="p-5 sm:p-6 border-b border-zinc-100 bg-white flex items-center justify-between sticky top-0 z-20 shrink-0">
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <div className="flex items-center gap-1.5 text-[11px] font-bold font-mono text-hrl-crimson tracking-wider uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-hrl-crimson" />
                <span>HRL INTERNATIONAL™ SOCIO-ECONOMIC GOVERNANCE</span>
              </div>
              <span className="text-xs text-zinc-400">·</span>
              <span className="text-xs text-zinc-500 font-mono">VIKSIT BHARAT 2047</span>
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-[#1D1D1F] tracking-tight mt-1">
              Workforce Impact, Job Displacement & Net Job Creation Analysis
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-zinc-100 text-zinc-500 hover:text-zinc-900 transition-all cursor-pointer"
            title="Close (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 text-sm text-zinc-800 flex-1">
          {/* Top 4 Metrics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-center">
            <div className="p-4 rounded-2xl bg-[#F9F9FB] border border-black/5">
              <span className="text-[10px] sm:text-xs font-bold text-zinc-500 uppercase tracking-wider block">ROLES AUTOMATED</span>
              <span className="text-xl sm:text-2xl font-extrabold text-[#1D1D1F] block mt-1">6,200 Roles</span>
              <span className="text-[10px] sm:text-[11px] text-zinc-500 block mt-0.5">Copy-Paste Formatting</span>
            </div>
            <div className="p-4 rounded-2xl bg-[#F9F9FB] border border-black/5">
              <span className="text-[10px] sm:text-xs font-bold text-zinc-500 uppercase tracking-wider block">DIRECT TECH HIRES</span>
              <span className="text-xl sm:text-2xl font-extrabold text-hrl-crimson block mt-1">+7,800 Jobs</span>
              <span className="text-[10px] sm:text-[11px] text-zinc-500 block mt-0.5">Sovereign LLM Engineers</span>
            </div>
            <div className="p-4 rounded-2xl bg-[#F9F9FB] border border-black/5">
              <span className="text-[10px] sm:text-xs font-bold text-zinc-500 uppercase tracking-wider block">FIELD & ECOSYSTEM</span>
              <span className="text-xl sm:text-2xl font-extrabold text-[#1D1D1F] block mt-1">+17,700 Jobs</span>
              <span className="text-[10px] sm:text-[11px] text-zinc-500 block mt-0.5">Cyber Responders</span>
            </div>
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200">
              <span className="text-[10px] sm:text-xs font-bold text-emerald-800 uppercase tracking-wider block">NET NEW JOBS</span>
              <span className="text-xl sm:text-2xl font-extrabold text-emerald-700 block mt-1">+19,300 Net</span>
              <span className="text-[10px] sm:text-[11px] text-emerald-600 block mt-0.5">High-Wage Positions</span>
            </div>
          </div>

          {/* Core Shift Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-[#F9F9FB] border border-black/5 space-y-2">
              <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider bg-zinc-200 px-2.5 py-0.5 rounded-full">
                THE SHIFT: FROM FORMATTERS TO DECISION-MAKERS
              </span>
              <h4 className="font-bold text-sm text-[#1D1D1F]">Eliminating Low-Value Copy-Pasting</h4>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Rather than spending 14 to 24 hours manually re-typing 100-page defense threat advisories into PowerPoint and press drafts, personnel are upskilled to act as <strong>Sovereign AI Verification Auditors and Cyber Incident Commanders</strong>.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#F9F9FB] border border-black/5 space-y-2">
              <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider bg-emerald-100 px-2.5 py-0.5 rounded-full">
                SALARY & PRODUCTIVITY MULTIPLIER
              </span>
              <h4 className="font-bold text-sm text-[#1D1D1F]">+65% Average Salary Uplift</h4>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Through HRL's 30-Day Sovereign AI Certification, legacy typists and clerks transition into certified AI operators with an average 65% wage increase and 14x output leverage.
              </p>
            </div>
          </div>

          {/* Discoms Case Study */}
          <div className="p-5 rounded-2xl border border-black/5 bg-[#F9F9FB] space-y-3">
            <h4 className="font-bold text-sm text-[#1D1D1F] flex items-center gap-2">
              <Zap className="w-4 h-4 text-hrl-crimson" />
              <span>Case Study: 14 State Electricity Boards (Discoms)</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-zinc-700">
              <div className="p-3 bg-white rounded-xl border border-black/5">
                <strong>140 Clerks Re-Skilled</strong>: Transitioned from manual typing to active cyber response.
              </div>
              <div className="p-3 bg-white rounded-xl border border-black/5">
                <strong>18 Min Response</strong>: Breach containment time dropped from 36 hours to 18 minutes.
              </div>
              <div className="p-3 bg-white rounded-xl border border-black/5">
                <strong>₹48 Cr Prevented</strong>: Economic loss avoided per major power grid incident.
              </div>
            </div>
          </div>

          {/* 30-Day Upskilling Roadmap */}
          <div className="space-y-2">
            <h4 className="font-bold text-xs text-zinc-500 uppercase tracking-wider">
              The HRL 30-Day Sovereign AI Upskilling Blueprint
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-xs">
              <div className="p-3 rounded-xl bg-zinc-50 border border-black/5">
                <span className="font-bold text-hrl-crimson block">Week 1: AI Prompting</span>
                <span className="text-[11px] text-zinc-500">UI mastery & single-pass pipeline triggers</span>
              </div>
              <div className="p-3 rounded-xl bg-zinc-50 border border-black/5">
                <span className="font-bold text-hrl-crimson block">Week 2: Citation Audit</span>
                <span className="text-[11px] text-zinc-500">Verifying spatial PDF coordinate links</span>
              </div>
              <div className="p-3 rounded-xl bg-zinc-50 border border-black/5">
                <span className="font-bold text-hrl-crimson block">Week 3: Indic & Voice</span>
                <span className="text-[11px] text-zinc-500">Reviewing Hindi/Kn/Ta & ElevenLabs audio</span>
              </div>
              <div className="p-3 rounded-xl bg-zinc-50 border border-black/5">
                <span className="font-bold text-hrl-crimson block">Week 4: Operations</span>
                <span className="text-[11px] text-zinc-500">Certified Sovereign AI Operator badge</span>
              </div>
            </div>
          </div>

          {/* Bottom Link Banner */}
          <div className="p-4 sm:p-5 rounded-2xl bg-zinc-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-bold text-sm text-white">Download Full Workforce Impact White Paper</h4>
              <p className="text-xs text-zinc-400 mt-0.5">Read the complete empirical socio-economic study on GitHub.</p>
            </div>
            <a
              href="https://github.com/hrlpavan/omnitransform-ai-resources/blob/main/WORKFORCE_IMPACT_AND_JOB_CREATION_ANALYSIS.md"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2 rounded-full bg-hrl-crimson hover:bg-hrl-crimson-dark text-white font-semibold text-xs transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
            >
              <span>View Markdown</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};
