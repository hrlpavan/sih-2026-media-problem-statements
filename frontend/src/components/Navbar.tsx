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
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-hrl-border shadow-hrl-subtle no-print transition-all w-full">
      {/* Main Navigation Container */}
      <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 gap-2 sm:gap-3 overflow-x-auto no-scrollbar py-1">
          {/* Brand Logo & Platform Title */}
          <div className="flex items-center space-x-2.5 sm:space-x-3 shrink-0">
            <a href="#" className="flex items-center">
              <img
                src="./hrl_logo_transparent.png"
                alt="HRL International"
                className="h-4 xs:h-4.5 sm:h-5 object-contain"
              />
            </a>
            <div className="hidden sm:block pl-2.5 sm:pl-3 border-l border-hrl-border">
              <span className="font-bold text-xs sm:text-[13px] tracking-tight text-zinc-900 block leading-tight">OmniTransform AI</span>
              <span className="text-[8px] sm:text-[9px] text-zinc-400 font-medium tracking-wider uppercase block leading-none mt-0.5">Content Transformation Platform</span>
            </div>
          </div>

          {/* Symmetrical Segmented Persona Selector - Constant Height & Mobile Touch Friendly */}
          <div className="flex items-center bg-[#F2F2F7] p-0.5 sm:p-1 rounded-full border border-black/5 h-8 sm:h-9 shrink-0">
            <span className="text-[10px] sm:text-[11px] text-[#86868B] font-semibold px-2 hidden md:inline whitespace-nowrap">Audience:</span>
            <button
              onClick={() => onPersonaChange('executive')}
              disabled={isProcessing}
              className={`text-[11px] sm:text-xs px-2.5 sm:px-3 h-6 sm:h-7 rounded-full font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap flex items-center justify-center ${
                currentPersona === 'executive'
                  ? 'bg-zinc-900 text-white shadow-xs'
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              Executive
            </button>
            <button
              onClick={() => onPersonaChange('analyst')}
              disabled={isProcessing}
              className={`text-[11px] sm:text-xs px-2.5 sm:px-3 h-6 sm:h-7 rounded-full font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap flex items-center justify-center ${
                currentPersona === 'analyst'
                  ? 'bg-zinc-900 text-white shadow-xs'
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              Technical
            </button>
            <button
              onClick={() => onPersonaChange('citizen')}
              disabled={isProcessing}
              className={`text-[11px] sm:text-xs px-2.5 sm:px-3 h-6 sm:h-7 rounded-full font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap flex items-center justify-center ${
                currentPersona === 'citizen'
                  ? 'bg-zinc-900 text-white shadow-xs'
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              Public
            </button>
          </div>

          {/* Right Actions - Fully fluid across screens */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <a
              href="#project-updates-hub"
              className="hidden lg:flex items-center gap-1.5 px-3 sm:px-3.5 h-8 sm:h-9 rounded-full bg-[#F2F2F7] hover:bg-[#E5E5EA] text-[#1D1D1F] text-xs font-semibold transition-all border border-black/5 cursor-pointer shadow-xs whitespace-nowrap"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-hrl-crimson animate-ping" />
              <span>Audio Updates</span>
            </a>

            <a
              href="#voice-faq-hub"
              className="hidden xl:flex items-center gap-1.5 px-3 sm:px-3.5 h-8 sm:h-9 rounded-full bg-[#F2F2F7] hover:bg-[#E5E5EA] text-[#1D1D1F] text-xs font-semibold transition-all border border-black/5 cursor-pointer shadow-xs whitespace-nowrap"
            >
              <HelpCircle className="w-3.5 h-3.5 text-zinc-700" />
              <span>Voice FAQ</span>
            </a>

            <button
              onClick={onOpenVentureModal}
              className="flex items-center gap-1.5 px-2.5 sm:px-3.5 h-8 sm:h-9 rounded-full bg-[#F2F2F7] hover:bg-[#E5E5EA] text-[#1D1D1F] text-[11px] sm:text-xs font-semibold transition-all border border-black/5 cursor-pointer shadow-xs whitespace-nowrap"
            >
              <TrendingUp className="w-3.5 h-3.5 text-hrl-crimson" />
              <span className="hidden xs:inline">Venture & GTM</span>
              <span className="xs:hidden">VC/GTM</span>
            </button>

            <a
              href="https://github.com/hrlpavan/omnitransform-ai-resources/raw/main/SIH2026_Idea_Presentation_PS26154.pptx"
              className="bg-hrl-blue hover:bg-hrl-blue-dark text-white px-3 sm:px-4 md:px-5 h-8 sm:h-9 rounded-full text-[11px] sm:text-xs font-semibold shadow-xs hover:shadow transition-all duration-200 flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Pitch Deck</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
