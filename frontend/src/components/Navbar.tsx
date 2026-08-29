import React from 'react';
import type { AudiencePersona } from '../types';
import { Sparkles, Terminal, UserCheck } from 'lucide-react';

interface NavbarProps {
  currentPersona: AudiencePersona;
  onPersonaChange: (p: AudiencePersona) => void;
  isProcessing: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPersona, onPersonaChange, isProcessing }) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-surface-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg bg-sih-navy flex items-center justify-center text-white shadow-md">
              <Sparkles className="w-5 h-5 text-sih-orange" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-bold text-lg text-sih-navy tracking-tight">OmniTransform AI</span>
                <span className="bg-sih-orange/10 text-sih-orange text-xs font-semibold px-2 py-0.5 rounded-full border border-sih-orange/20">
                  SIH 2026 PS #26154
                </span>
              </div>
              <p className="text-xs text-surface-500 font-medium">NTRO • Gen AI Platform for Automated Content Transformation</p>
            </div>
          </div>

          <div className="flex items-center space-x-2 bg-surface-100 p-1 rounded-xl border border-surface-200">
            <span className="text-xs font-semibold text-surface-500 px-2 flex items-center gap-1 hidden md:flex">
              <UserCheck className="w-3.5 h-3.5 text-sih-navy" /> Persona View:
            </span>
            <button
              onClick={() => onPersonaChange('executive')}
              disabled={isProcessing}
              className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-all ${
                currentPersona === 'executive'
                  ? 'bg-sih-navy text-white shadow-sm'
                  : 'text-surface-600 hover:text-surface-900 hover:bg-surface-200'
              }`}
            >
              Executive (C-Suite)
            </button>
            <button
              onClick={() => onPersonaChange('analyst')}
              disabled={isProcessing}
              className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-all ${
                currentPersona === 'analyst'
                  ? 'bg-sih-navy text-white shadow-sm'
                  : 'text-surface-600 hover:text-surface-900 hover:bg-surface-200'
              }`}
            >
              Technical Analyst
            </button>
            <button
              onClick={() => onPersonaChange('citizen')}
              disabled={isProcessing}
              className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-all ${
                currentPersona === 'citizen'
                  ? 'bg-sih-navy text-white shadow-sm'
                  : 'text-surface-600 hover:text-surface-900 hover:bg-surface-200'
              }`}
            >
              Public / Citizen
            </button>
          </div>

          <div className="hidden lg:flex items-center space-x-3">
            <a
              href="https://github.com/hrlpavan/omnitransform-ai-resources"
              target="_blank"
              rel="noreferrer"
              className="text-xs text-sih-navy hover:text-sih-orange font-semibold flex items-center gap-1.5 transition-colors bg-sih-blue-light/50 px-3 py-1.5 rounded-lg border border-sih-blue/20"
            >
              <Terminal className="w-3.5 h-3.5 text-sih-blue" />
              <span>GitHub Repo</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
