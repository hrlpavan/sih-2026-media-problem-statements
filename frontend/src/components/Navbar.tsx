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
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-zinc-100 no-print transition-all">
      {/* Top Announcement Bar (Exact HRL Website Style) */}
      <div className="bg-zinc-50 border-b border-zinc-100 py-1.5 px-4 text-center top-announcement-bar">
        <div className="max-w-6xl mx-auto flex items-center justify-between text-xs text-zinc-600 font-normal">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-zinc-900">HRL International</span>
            <span className="text-zinc-400">·</span>
            <span>Smart India Hackathon 2026 Submission</span>
          </div>
          <div className="hidden sm:flex items-center gap-3">
            <span className="font-mono text-zinc-500">PS ID: 26154 · NTRO</span>
            <span className="text-zinc-400">·</span>
            <span className="font-semibold text-hrl-red">Team HRL (ID: 104580)</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* HRL Brand Logo */}
          <div className="flex items-center space-x-3">
            <a href="#" className="flex items-center">
              <img
                src="/hrl_logo_transparent.png"
                alt="HRL"
                className="h-8 sm:h-9 object-contain"
              />
            </a>
            <div className="hidden md:block pl-3 border-l border-zinc-200">
              <span className="font-bold text-xs tracking-tight text-zinc-900 block">OmniTransform AI</span>
              <span className="text-[10px] text-zinc-500 block leading-none">Content Transformation Platform</span>
            </div>
          </div>

          {/* Navigation Persona Selector */}
          <div className="flex items-center space-x-1 bg-zinc-100 p-1 rounded-full border border-zinc-200/80">
            <button
              onClick={() => onPersonaChange('executive')}
              disabled={isProcessing}
              className={`text-xs px-3.5 py-1.5 rounded-full font-medium transition-all cursor-pointer ${
                currentPersona === 'executive'
                  ? 'bg-zinc-900 text-white shadow-sm font-semibold'
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              Executive
            </button>
            <button
              onClick={() => onPersonaChange('analyst')}
              disabled={isProcessing}
              className={`text-xs px-3.5 py-1.5 rounded-full font-medium transition-all cursor-pointer ${
                currentPersona === 'analyst'
                  ? 'bg-zinc-900 text-white shadow-sm font-semibold'
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              Technical
            </button>
            <button
              onClick={() => onPersonaChange('citizen')}
              disabled={isProcessing}
              className={`text-xs px-3.5 py-1.5 rounded-full font-medium transition-all cursor-pointer ${
                currentPersona === 'citizen'
                  ? 'bg-zinc-900 text-white shadow-sm font-semibold'
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              Public
            </button>
          </div>

          {/* Right Action: Download PPTX (Exact HRL Blue Pill Button) */}
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/hrlpavan/omnitransform-ai-resources/raw/main/SIH2026_Idea_Presentation_PS26154.pptx"
              className="bg-hrl-blue hover:bg-hrl-blue-dark text-white px-4 sm:px-5 py-2 rounded-full text-xs font-semibold shadow-sm hover:shadow transition-all flex items-center gap-1.5 cursor-pointer"
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
