import React from 'react';
import type { AudiencePersona } from '../types';
import { Sparkles, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  currentPersona: AudiencePersona;
  onPersonaChange: (p: AudiencePersona) => void;
  isProcessing: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPersona, onPersonaChange, isProcessing }) => {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-black/[0.06] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Product Title */}
          <div className="flex items-center space-x-3.5">
            <div className="w-9 h-9 rounded-xl bg-sih-navy flex items-center justify-center text-white shadow-apple-sm">
              <Sparkles className="w-4 h-4 text-sih-orange" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-semibold text-base text-apple-text tracking-tight">OmniTransform AI</span>
                <span className="bg-sih-orange/10 text-sih-orange text-[11px] font-semibold px-2 py-0.5 rounded-full border border-sih-orange/20">
                  SIH 2026 PS #26154
                </span>
              </div>
              <p className="text-[11px] text-apple-subtext font-normal leading-none mt-0.5">NTRO • Gen AI Content Transformation</p>
            </div>
          </div>

          {/* Apple macOS Segmented Control */}
          <div className="flex items-center bg-apple-gray/70 p-1 rounded-xl border border-black/[0.04]">
            <span className="text-[11px] font-medium text-apple-subtext px-2.5 hidden md:block">Persona:</span>
            <button
              onClick={() => onPersonaChange('executive')}
              disabled={isProcessing}
              className={`text-xs px-3.5 py-1.5 rounded-lg font-medium transition-all duration-200 ${
                currentPersona === 'executive'
                  ? 'bg-white text-apple-text shadow-apple-sm font-semibold'
                  : 'text-apple-subtext hover:text-apple-text'
              }`}
            >
              Executive
            </button>
            <button
              onClick={() => onPersonaChange('analyst')}
              disabled={isProcessing}
              className={`text-xs px-3.5 py-1.5 rounded-lg font-medium transition-all duration-200 ${
                currentPersona === 'analyst'
                  ? 'bg-white text-apple-text shadow-apple-sm font-semibold'
                  : 'text-apple-subtext hover:text-apple-text'
              }`}
            >
              Technical Analyst
            </button>
            <button
              onClick={() => onPersonaChange('citizen')}
              disabled={isProcessing}
              className={`text-xs px-3.5 py-1.5 rounded-lg font-medium transition-all duration-200 ${
                currentPersona === 'citizen'
                  ? 'bg-white text-apple-text shadow-apple-sm font-semibold'
                  : 'text-apple-subtext hover:text-apple-text'
              }`}
            >
              Public
            </button>
          </div>

          {/* Action Link */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href="https://github.com/hrlpavan/omnitransform-ai-resources"
              target="_blank"
              rel="noreferrer"
              className="text-xs text-apple-text hover:text-sih-blue font-medium flex items-center gap-1 transition-colors px-3 py-1.5 rounded-lg bg-black/[0.03] hover:bg-black/[0.06] border border-black/[0.04]"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-apple-subtext" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
