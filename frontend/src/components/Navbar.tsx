import React from 'react';
import type { AudiencePersona } from '../types';
import { Download } from 'lucide-react';

interface NavbarProps {
  currentPersona: AudiencePersona;
  onPersonaChange: (p: AudiencePersona) => void;
  isProcessing: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPersona, onPersonaChange, isProcessing }) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-hrl-border shadow-hrl-subtle no-print transition-all">
      {/* Official Corporate Motto Bar */}
      <div className="bg-hrl-surface border-b border-hrl-border py-1.5 px-4 text-center top-motto-bar">
        <div className="max-w-6xl mx-auto flex items-center justify-between text-xs text-hrl-body flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-hrl-dark">HRL International Private Limited™</span>
            <span className="text-zinc-300">·</span>
            <span className="italic text-hrl-crimson font-medium">
              "We Can Do Everything Related To Software Sector Without Any Excuses!"
            </span>
          </div>
          <div className="text-xs text-hrl-muted font-medium hidden sm:block">
            Mangaluru, Karnataka, India
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo & Platform Title */}
          <div className="flex items-center space-x-3.5">
            <a href="#" className="flex items-center">
              <img
                src="/hrl_logo_transparent.png"
                alt="HRL International"
                className="h-8 sm:h-9 object-contain"
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
              href="https://github.com/hrlpavan/omnitransform-ai-resources/raw/main/SIH2026_Idea_Presentation_PS26154.pptx"
              className="bg-hrl-blue hover:bg-hrl-blue-dark text-white px-4 sm:px-5 py-2 rounded-full text-xs font-semibold shadow-sm hover:shadow transition-all duration-200 flex items-center gap-1.5 cursor-pointer"
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
