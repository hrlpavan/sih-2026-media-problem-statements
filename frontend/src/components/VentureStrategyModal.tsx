import React, { useState, useEffect } from 'react';
import { X, TrendingUp, DollarSign, Target, Shield, Zap, Layers, Globe, Award, ExternalLink } from 'lucide-react';

interface VentureStrategyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VentureStrategyModal: React.FC<VentureStrategyModalProps> = ({ isOpen, onClose }) => {
  const [activeSection, setActiveSection] = useState<'economics' | 'market' | 'growth' | 'flywheel'>('economics');

  // Close on Escape key press and lock background scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
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

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-md transition-opacity"
      onClick={onClose}
    >
      <div className="min-h-full flex items-center justify-center p-3 sm:p-6 text-center">
        {/* Main Modal Card */}
        <div 
          className="w-full max-w-4xl bg-white rounded-[24px] sm:rounded-[28px] border border-black/10 shadow-2xl overflow-hidden text-left flex flex-col max-h-[88vh] relative my-auto animate-in fade-in zoom-in-95 duration-150"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Sticky Modal Header */}
          <div className="p-5 sm:p-6 border-b border-zinc-100 bg-white flex items-center justify-between sticky top-0 z-20 shrink-0">
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <div className="flex items-center gap-1.5 text-[11px] font-bold font-mono text-hrl-crimson tracking-wider uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-hrl-crimson" />
                  <span>HRL INTERNATIONAL™ VENTURE ARCHITECTURE</span>
                </div>
                <span className="text-xs text-zinc-400">·</span>
                <span className="text-xs text-zinc-500 font-mono">PS ID: 26154 // NTRO</span>
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-[#1D1D1F] tracking-tight mt-1">
                Startup, Venture Capital & Go-To-Market (GTM) Strategy
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

          {/* Navigation Tabs */}
          <div className="px-5 sm:px-6 pt-3 pb-2 border-b border-zinc-100 bg-[#F9F9FB] flex items-center gap-2 overflow-x-auto shrink-0">
            <button
              onClick={() => setActiveSection('economics')}
              className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                activeSection === 'economics'
                  ? 'bg-zinc-900 text-white shadow-sm'
                  : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200/50'
              }`}
            >
              <DollarSign className="w-3.5 h-3.5" />
              <span>1. Unit Economics & Capital</span>
            </button>

            <button
              onClick={() => setActiveSection('market')}
              className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                activeSection === 'market'
                  ? 'bg-zinc-900 text-white shadow-sm'
                  : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200/50'
              }`}
            >
              <Target className="w-3.5 h-3.5" />
              <span>2. TAM/SAM/SOM & ICP</span>
            </button>

            <button
              onClick={() => setActiveSection('growth')}
              className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                activeSection === 'growth'
                  ? 'bg-zinc-900 text-white shadow-sm'
                  : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200/50'
              }`}
            >
              <TrendingUp className="w-3.5 h-3.5" />
              <span>3. GTM, PLG & SLG</span>
            </button>

            <button
              onClick={() => setActiveSection('flywheel')}
              className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                activeSection === 'flywheel'
                  ? 'bg-zinc-900 text-white shadow-sm'
                  : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200/50'
              }`}
            >
              <Zap className="w-3.5 h-3.5" />
              <span>4. Moat, Flywheel & Virality</span>
            </button>
          </div>

          {/* Modal Scrollable Content Body */}
          <div className="p-5 sm:p-6 overflow-y-auto space-y-6 text-sm text-zinc-800 flex-1">
            {activeSection === 'economics' && (
              <div className="space-y-6">
                {/* Top 4 Metrics Strip */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-center">
                  <div className="p-4 rounded-2xl bg-[#F9F9FB] border border-black/5">
                    <span className="text-[10px] sm:text-xs font-bold text-zinc-500 uppercase tracking-wider block">PRE-SEED CAPITAL</span>
                    <span className="text-xl sm:text-2xl font-extrabold text-[#1D1D1F] block mt-1">₹50 Lakhs</span>
                    <span className="text-[10px] sm:text-[11px] text-zinc-500 block mt-0.5">Bootstrap + Grants</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#F9F9FB] border border-black/5">
                    <span className="text-[10px] sm:text-xs font-bold text-zinc-500 uppercase tracking-wider block">SERIES A TARGET</span>
                    <span className="text-xl sm:text-2xl font-extrabold text-hrl-crimson block mt-1">₹15 Cr</span>
                    <span className="text-[10px] sm:text-[11px] text-zinc-500 block mt-0.5">@ ₹75 Cr Valuation</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#F9F9FB] border border-black/5">
                    <span className="text-[10px] sm:text-xs font-bold text-zinc-500 uppercase tracking-wider block">NET BURN RATE</span>
                    <span className="text-xl sm:text-2xl font-extrabold text-[#1D1D1F] block mt-1">₹1.8L / mo</span>
                    <span className="text-[10px] sm:text-[11px] text-zinc-500 block mt-0.5">Lean Architecture</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#F9F9FB] border border-black/5">
                    <span className="text-[10px] sm:text-xs font-bold text-zinc-500 uppercase tracking-wider block">TOTAL RUNWAY</span>
                    <span className="text-xl sm:text-2xl font-extrabold text-emerald-600 block mt-1">18 Months</span>
                    <span className="text-[10px] sm:text-[11px] text-zinc-500 block mt-0.5">Zero Debt Base</span>
                  </div>
                </div>

                {/* 4 Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 sm:p-5 rounded-2xl border border-black/5 bg-[#F9F9FB] space-y-2">
                    <h4 className="font-bold text-sm text-[#1D1D1F] flex items-center gap-2">
                      <Layers className="w-4 h-4 text-hrl-crimson" />
                      <span>MAP (Milestones & Monthly Active Payers)</span>
                    </h4>
                    <p className="text-xs text-zinc-600 leading-relaxed">
                      Scaling from 5 sovereign pilots (Q4 2026) to 50 enterprise payers (Q2 2027) reaching <strong>₹15 Cr ARR</strong>, and 150 payers (Q4 2027) generating <strong>₹54 Cr ARR</strong>.
                    </p>
                  </div>

                  <div className="p-4 sm:p-5 rounded-2xl border border-black/5 bg-[#F9F9FB] space-y-2">
                    <h4 className="font-bold text-sm text-[#1D1D1F] flex items-center gap-2">
                      <Shield className="w-4 h-4 text-hrl-crimson" />
                      <span>SAFE & Bridge Round Architecture</span>
                    </h4>
                    <p className="text-xs text-zinc-600 leading-relaxed">
                      Post-Money SAFE structured at <strong>₹20 Cr Valuation Cap</strong> with 20% discount. ₹2 Cr convertible note bridge buffer for local GPU hardware procurement.
                    </p>
                  </div>

                  <div className="p-4 sm:p-5 rounded-2xl border border-black/5 bg-[#F9F9FB] space-y-2">
                    <h4 className="font-bold text-sm text-[#1D1D1F] flex items-center gap-2">
                      <Award className="w-4 h-4 text-hrl-crimson" />
                      <span>Founder-Market Fit (FMF)</span>
                    </h4>
                    <p className="text-xs text-zinc-600 leading-relaxed">
                      Founded by <strong>Pavan Kumar Sadashiv</strong> (B.E. CSE AIML, SCEM Mangaluru), combining proprietary media scaling models with sovereign LLM optimization.
                    </p>
                  </div>

                  <div className="p-4 sm:p-5 rounded-2xl border border-black/5 bg-[#F9F9FB] space-y-2">
                    <h4 className="font-bold text-sm text-[#1D1D1F] flex items-center gap-2">
                      <Zap className="w-4 h-4 text-hrl-crimson" />
                      <span>Product-Market Fit (PMF) Metrics</span>
                    </h4>
                    <p className="text-xs text-zinc-600 leading-relaxed">
                      <strong>98.4% Grounding Accuracy</strong> with zero hallucinations verified across 14 power grid incident advisories in under 10 seconds.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'market' && (
              <div className="space-y-6">
                {/* TAM SAM SOM */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div className="p-4 sm:p-5 rounded-2xl bg-zinc-900 text-white">
                    <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider block">TAM (GLOBAL)</span>
                    <span className="text-2xl sm:text-3xl font-extrabold text-white block mt-1">$18.4 Billion</span>
                    <span className="text-xs text-zinc-400 block mt-1">Global GovTech & Document AI</span>
                  </div>
                  <div className="p-4 sm:p-5 rounded-2xl bg-[#F9F9FB] border border-black/5">
                    <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider block">SAM (INDIA & APAC)</span>
                    <span className="text-2xl sm:text-3xl font-extrabold text-[#1D1D1F] block mt-1">$3.2 Billion</span>
                    <span className="text-xs text-zinc-500 block mt-1">Defense, PSUs & Regulated BFSI</span>
                  </div>
                  <div className="p-4 sm:p-5 rounded-2xl bg-hrl-crimson-tint border border-hrl-crimson/20">
                    <span className="text-xs font-bold text-hrl-crimson uppercase tracking-wider block">SOM (36-MONTH TARGET)</span>
                    <span className="text-2xl sm:text-3xl font-extrabold text-hrl-crimson block mt-1">₹700 Cr ($85M)</span>
                    <span className="text-xs text-zinc-600 block mt-1">India Sovereign & Critical Infra</span>
                  </div>
                </div>

                {/* ICP Tiers */}
                <div className="space-y-3">
                  <h4 className="font-bold text-xs text-zinc-500 uppercase tracking-wider">
                    Ideal Customer Profile (ICP) Segmentation
                  </h4>
                  <div className="p-4 rounded-2xl border border-black/5 bg-[#F9F9FB] flex items-start gap-4">
                    <span className="px-2.5 py-1 rounded-full bg-zinc-900 text-white text-xs font-bold shrink-0">Tier 1</span>
                    <div>
                      <h5 className="font-bold text-xs text-zinc-900">National Security & Intelligence (NTRO, DRDO, RAW, CERT-In)</h5>
                      <p className="text-xs text-zinc-600 mt-0.5">Air-gapped on-prem sovereign license · ₹50L - ₹1.5 Cr Annual Contract Value.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl border border-black/5 bg-[#F9F9FB] flex items-start gap-4">
                    <span className="px-2.5 py-1 rounded-full bg-zinc-700 text-white text-xs font-bold shrink-0">Tier 2</span>
                    <div>
                      <h5 className="font-bold text-xs text-zinc-900">Critical Infrastructure & PSUs (PowerGrid, Railways, ONGC, NPCIL)</h5>
                      <p className="text-xs text-zinc-600 mt-0.5">SCADA/OT advisory translation into Indic vernaculars · ₹25L - ₹60L ACV.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl border border-black/5 bg-[#F9F9FB] flex items-start gap-4">
                    <span className="px-2.5 py-1 rounded-full bg-zinc-500 text-white text-xs font-bold shrink-0">Tier 3</span>
                    <div>
                      <h5 className="font-bold text-xs text-zinc-900">Regulated Commercial Enterprises (BFSI, Healthcare Compliance)</h5>
                      <p className="text-xs text-zinc-600 mt-0.5">Audit acceleration and zero-hallucination compliance synthesis · ₹15L - ₹40L ACV.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'growth' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 sm:p-5 rounded-2xl bg-[#F9F9FB] border border-black/5 space-y-2">
                    <span className="text-[10px] font-bold text-hrl-crimson uppercase tracking-wider">
                      PRODUCT-LED GROWTH (PLG)
                    </span>
                    <h4 className="font-bold text-sm text-[#1D1D1F]">Self-Serve Ingestion & Open SDK</h4>
                    <p className="text-xs text-zinc-600 leading-relaxed">
                      1-Click demo testbeds, open GitHub resource documentation, and instant browser synthesis generate viral bottom-up adoption among analysts and operators.
                    </p>
                  </div>

                  <div className="p-4 sm:p-5 rounded-2xl bg-[#F9F9FB] border border-black/5 space-y-2">
                    <span className="text-[10px] font-bold text-hrl-blue uppercase tracking-wider">
                      SALES-LED GROWTH (SLG)
                    </span>
                    <h4 className="font-bold text-sm text-[#1D1D1F]">Government e-Marketplace (GeM) & RFPs</h4>
                    <p className="text-xs text-zinc-600 leading-relaxed">
                      Enterprise sales team targeting government tenders, SIH fast-track procurement, and direct defense ministry integration.
                    </p>
                  </div>
                </div>

                {/* Wedge Strategy */}
                <div className="p-4 sm:p-5 rounded-2xl border border-black/5 bg-[#F9F9FB] space-y-2">
                  <h4 className="font-bold text-sm text-[#1D1D1F] flex items-center gap-2">
                    <Zap className="w-4 h-4 text-hrl-crimson" />
                    <span>The Market Wedge Strategy</span>
                  </h4>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    <strong>Initial Wedge:</strong> Free 24-hour sovereign audit transformation for urgent national security incident feeds (NTRO/CERT-In). Once approved inside the air-gapped node, expand horizontally into inter-departmental briefs, press releases, and multi-format dissemination across all state utilities.
                  </p>
                </div>
              </div>
            )}

            {activeSection === 'flywheel' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 sm:p-5 rounded-2xl bg-[#F9F9FB] border border-black/5 space-y-2">
                    <Shield className="w-5 h-5 text-hrl-crimson" />
                    <h4 className="font-bold text-xs text-[#1D1D1F] uppercase tracking-wider">Defensive Moat</h4>
                    <p className="text-xs text-zinc-600 leading-relaxed">
                      100% air-gapped sovereign compliance, spatial coordinate citation tracking, and unified single-pass 5-format synchronization.
                    </p>
                  </div>

                  <div className="p-4 sm:p-5 rounded-2xl bg-[#F9F9FB] border border-black/5 space-y-2">
                    <Globe className="w-5 h-5 text-hrl-blue" />
                    <h4 className="font-bold text-xs text-[#1D1D1F] uppercase tracking-wider">Network Effects</h4>
                    <p className="text-xs text-zinc-600 leading-relaxed">
                      Universal advisory taxonomy standard locks in inter-agency compatibility across defense, utilities, and emergency response teams.
                    </p>
                  </div>

                  <div className="p-4 sm:p-5 rounded-2xl bg-[#F9F9FB] border border-black/5 space-y-2">
                    <TrendingUp className="w-5 h-5 text-emerald-600" />
                    <h4 className="font-bold text-xs text-[#1D1D1F] uppercase tracking-wider">Virality Coefficient</h4>
                    <p className="text-xs text-zinc-600 leading-relaxed">
                      <strong>K = 1.42</strong>: Every generated memo and regional press release embeds verified citation badges driving inbound agency adoption.
                    </p>
                  </div>
                </div>

                {/* Flywheel Banner */}
                <div className="p-4 sm:p-5 rounded-2xl bg-zinc-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <h4 className="font-bold text-sm text-white">Download Complete Strategy Document</h4>
                    <p className="text-xs text-zinc-400 mt-0.5">Read the full 19-framework institutional venture whitepaper on GitHub.</p>
                  </div>
                  <a
                    href="https://github.com/hrlpavan/omnitransform-ai-resources/blob/main/STARTUP_VENTURE_AND_GTM_STRATEGY.md"
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2 rounded-full bg-hrl-crimson hover:bg-hrl-crimson-dark text-white font-semibold text-xs transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
                  >
                    <span>View Markdown</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
