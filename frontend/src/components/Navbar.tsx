import React from 'react';
import type { AudiencePersona } from '../types';
import { Download, TrendingUp } from 'lucide-react';
import { VentureStrategyModal } from './VentureStrategyModal';

interface NavbarProps {
  currentPersona: AudiencePersona;
  onPersonaChange: (p: AudiencePersona) => void;
  isProcessing: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPersona, onPersonaChange, isProcessing }) => {
  const [showVentureModal, setShowVentureModal] = React.useState(false);
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-hrl-border shadow-hrl-subtle no-print transition-all">
      {/* Main Navigation */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo & Platform Title */}
          <div className="flex items-center space-x-3.5">
            <a href="#" className="flex items-center">
              <img
                src="/hrl_logo_transparent.png"
                alt="HRL International"
                className="h-6 sm:h-7 object-contain"
              />
            </a>
            <div className="hidden sm:block pl-3 border-l border-hrl-border">
              <span className="font-bold text-xs tracking-tight text-hrl-dark block">OmniTransform AI</span>
              <span className="text-[10px] text-hrl-muted block leading-none">Content Transformation Platform</span>
            </div>
          </div>

          {/* Symmetrical Segmented Persona Selector */}
          <div className="flex items-center space-x-1 bg-hrl-surface p-1 rounded-full border border-hrl-border">
            <span className="text-[11px] text-hrl-muted font-medium px-2.5 hidden sm:inline">Audience:</span>
            <button
              onClick={() => onPersonaChange('executive')}
              disabled={isProcessing}
              className={`text-xs px-3.5 py-1.5 rounded-full font-medium transition-all duration-200 cursor-pointer ${
                currentPersona === 'executive'
                  ? 'bg-hrl-dark text-white shadow-sm font-semibold'
                  : 'text-hrl-body hover:text-hrl-dark'
              }`}
            >
              Executive
            </button>
            <button
              onClick={() => onPersonaChange('analyst')}
              disabled={isProcessing}
              className={`text-xs px-3.5 py-1.5 rounded-full font-medium transition-all duration-200 cursor-pointer ${
                currentPersona === 'analyst'
                  ? 'bg-hrl-dark text-white shadow-sm font-semibold'
                  : 'text-hrl-body hover:text-hrl-dark'
              }`}
            >
              Technical
            </button>
            <button
              onClick={() => onPersonaChange('citizen')}
              disabled={isProcessing}
              className={`text-xs px-3.5 py-1.5 rounded-full font-medium transition-all duration-200 cursor-pointer ${
                currentPersona === 'citizen'
                  ? 'bg-hrl-dark text-white shadow-sm font-semibold'
                  : 'text-hrl-body hover:text-hrl-dark'
              }`}
            >
              Public
            </button>
          </div>

          {/* Right Action: Pitch Deck Download Button */}
          <div className="flex items-center gap-2">
            <a
              href="#project-updates-hub"
              className="hidden lg:flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#F2F2F7] hover:bg-[#E5E5EA] text-[#1D1D1F] text-xs font-semibold transition-all border border-black/5 cursor-pointer shadow-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-hrl-crimson animate-ping" />
              <span>Audio Updates</span>
            </a>
            <button
              onClick={() => setShowVentureModal(true)}
              className="hidden md:flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-zinc-100 hover:bg-zinc-200 text-[#1D1D1F] text-xs font-semibold transition-all border border-black/5 cursor-pointer shadow-sm"
            >
              <TrendingUp className="w-3.5 h-3.5 text-hrl-crimson" />
              <span>Venture & GTM</span>
            </button>
            <a
              href="https://github.com/hrlpavan/omnitransform-ai-resources/raw/main/SIH2026_Idea_Presentation_PS26154.pptx"
              className="bg-hrl-blue hover:bg-hrl-blue-dark text-white px-4 sm:px-5 py-2 rounded-full text-xs font-semibold shadow-sm hover:shadow transition-all duration-200 flex items-center gap-1.5 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Pitch Deck</span>
            </a>
          </div>
        </div>
      </div>
      <VentureStrategyModal isOpen={showVentureModal} onClose={() => setShowVentureModal(false)} />
    </header>
  );
};
