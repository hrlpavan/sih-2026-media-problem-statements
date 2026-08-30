import React from 'react';
import type { AudiencePersona } from '../types';
import { Download, TrendingUp, HelpCircle } from 'lucide-react';

interface NavbarProps {
  currentPersona: AudiencePersona;
  onPersonaChange: (p: AudiencePersona) => void;
  isProcessing: boolean;
  onOpenVentureModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPersona, onPersonaChange, isProcessing, onOpenVentureModal }) => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl backdrop-saturate-180 border-b border-black/[0.08] shadow-[0_1px_2px_rgba(0,0,0,0.02)] no-print transition-all w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 gap-3 overflow-x-auto no-scrollbar py-1">
          {/* Brand Logo & Platform Title */}
          <div className="flex items-center space-x-3 shrink-0">
            <a href="#" className="flex items-center">
              <img
                src="./hrl_logo_transparent.png"
                alt="HRL International"
                className="h-4.5 sm:h-5 object-contain"
              />
            </a>
            <div className="hidden sm:block pl-3 border-l border-black/[0.08]">
              <span className="font-semibold text-xs sm:text-[13px] tracking-tight text-[#1D1D1F] block leading-tight">OmniTransform AI</span>
              <span className="text-[8px] sm:text-[9px] text-[#86868B] font-medium tracking-wider uppercase block leading-none mt-0.5">Content Transformation Platform</span>
            </div>
          </div>

          {/* Symmetrical Segmented Persona Selector (Apple macOS / iOS Style) */}
          <div className="flex items-center bg-[#000000]/[0.05] p-1 rounded-full border border-black/[0.04] h-9 shrink-0">
            <span className="text-[11px] text-[#86868B] font-semibold px-2.5 hidden md:inline whitespace-nowrap">Audience:</span>
            <button
              onClick={() => onPersonaChange('executive')}
              disabled={isProcessing}
              className={`text-xs px-3.5 h-7 rounded-full font-medium transition-all duration-200 cursor-pointer whitespace-nowrap flex items-center justify-center ${
                currentPersona === 'executive'
                  ? 'bg-white text-[#1D1D1F] shadow-[0_1px_3px_rgba(0,0,0,0.1),0_1px_2px_rgba(0,0,0,0.06)] font-semibold'
                  : 'text-[#6E6E73] hover:text-[#1D1D1F]'
              }`}
            >
              Executive
            </button>
            <button
              onClick={() => onPersonaChange('analyst')}
              disabled={isProcessing}
              className={`text-xs px-3.5 h-7 rounded-full font-medium transition-all duration-200 cursor-pointer whitespace-nowrap flex items-center justify-center ${
                currentPersona === 'analyst'
                  ? 'bg-white text-[#1D1D1F] shadow-[0_1px_3px_rgba(0,0,0,0.1),0_1px_2px_rgba(0,0,0,0.06)] font-semibold'
                  : 'text-[#6E6E73] hover:text-[#1D1D1F]'
              }`}
            >
              Technical
            </button>
            <button
              onClick={() => onPersonaChange('citizen')}
              disabled={isProcessing}
              className={`text-xs px-3.5 h-7 rounded-full font-medium transition-all duration-200 cursor-pointer whitespace-nowrap flex items-center justify-center ${
                currentPersona === 'citizen'
                  ? 'bg-white text-[#1D1D1F] shadow-[0_1px_3px_rgba(0,0,0,0.1),0_1px_2px_rgba(0,0,0,0.06)] font-semibold'
                  : 'text-[#6E6E73] hover:text-[#1D1D1F]'
              }`}
            >
              Public
            </button>
          </div>

          {/* Action Pills - Apple Minimalist Aesthetic */}
          <div className="flex items-center gap-2 shrink-0 pr-1">
            <a
              href="#project-updates-hub"
              className="flex items-center gap-1.5 px-3.5 h-9 rounded-full bg-[#000000]/[0.05] hover:bg-[#000000]/[0.08] active:scale-[0.98] text-[#1D1D1F] text-xs font-medium transition-all border border-black/[0.04] cursor-pointer shadow-none whitespace-nowrap shrink-0"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-hrl-crimson animate-ping" />
              <span>Audio Updates</span>
            </a>

            <a
              href="#voice-faq-hub"
              className="flex items-center gap-1.5 px-3.5 h-9 rounded-full bg-[#000000]/[0.05] hover:bg-[#000000]/[0.08] active:scale-[0.98] text-[#1D1D1F] text-xs font-medium transition-all border border-black/[0.04] cursor-pointer shadow-none whitespace-nowrap shrink-0"
            >
              <HelpCircle className="w-3.5 h-3.5 text-[#6E6E73]" />
              <span>Voice FAQ</span>
            </a>

            <button
              onClick={onOpenVentureModal}
              className="flex items-center gap-1.5 px-3.5 h-9 rounded-full bg-[#000000]/[0.05] hover:bg-[#000000]/[0.08] active:scale-[0.98] text-[#1D1D1F] text-xs font-medium transition-all border border-black/[0.04] cursor-pointer shadow-none whitespace-nowrap shrink-0"
            >
              <TrendingUp className="w-3.5 h-3.5 text-hrl-crimson" />
              <span>Venture & GTM</span>
            </button>

            <a
              href="https://github.com/hrlpavan/omnitransform-ai-resources/raw/main/SIH2026_Idea_Presentation_PS26154.pptx"
              className="bg-[#0071E3] hover:bg-[#0077ED] active:bg-[#006EDB] active:scale-[0.98] text-white pl-4 pr-5 h-9 rounded-full text-xs font-medium shadow-none hover:shadow-sm transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap shrink-0"
            >
              <Download className="w-3.5 h-3.5 shrink-0" />
              <span className="tracking-normal">Pitch Deck</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
