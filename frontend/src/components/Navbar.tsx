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
    <header className="sticky top-0 z-40 bg-white border-b border-zinc-200 shadow-sm no-print">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-lg bg-zinc-900 flex items-center justify-center text-white">
              <Sparkles className="w-4 h-4 text-orange-500" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-bold text-base text-zinc-900">OmniTransform AI</span>
                <span className="bg-orange-50 text-orange-700 text-xs font-semibold px-2 py-0.5 rounded border border-orange-200">
                  SIH 2026
                </span>
              </div>
              <p className="text-xs text-zinc-500">Document to 5 Formats in 10 Seconds</p>
            </div>
          </div>

          {/* Simple Audience View Switcher */}
          <div className="flex items-center space-x-1 bg-zinc-100 p-1 rounded-lg border border-zinc-200">
            <span className="text-xs text-zinc-500 font-medium px-2 hidden sm:inline">Tone:</span>
            <button
              onClick={() => onPersonaChange('executive')}
              disabled={isProcessing}
              className={`text-xs px-3 py-1.5 rounded-md font-medium transition-all ${
                currentPersona === 'executive'
                  ? 'bg-white text-zinc-900 shadow-sm font-bold'
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              Executive
            </button>
            <button
              onClick={() => onPersonaChange('analyst')}
              disabled={isProcessing}
              className={`text-xs px-3 py-1.5 rounded-md font-medium transition-all ${
                currentPersona === 'analyst'
                  ? 'bg-white text-zinc-900 shadow-sm font-bold'
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              Detailed Analyst
            </button>
            <button
              onClick={() => onPersonaChange('citizen')}
              disabled={isProcessing}
              className={`text-xs px-3 py-1.5 rounded-md font-medium transition-all ${
                currentPersona === 'citizen'
                  ? 'bg-white text-zinc-900 shadow-sm font-bold'
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              Simple Public
            </button>
          </div>

          {/* Source Link */}
          <a
            href="https://github.com/hrlpavan/omnitransform-ai-resources"
            target="_blank"
            rel="noreferrer"
            className="hidden md:flex items-center gap-1 text-xs font-medium text-zinc-600 hover:text-zinc-900 bg-zinc-50 hover:bg-zinc-100 px-3 py-1.5 rounded-lg border border-zinc-200 transition-colors"
          >
            <span>GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
          </a>
        </div>
      </div>
    </header>
  );
};
