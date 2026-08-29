import React from 'react';
import type { AudiencePersona } from '../types';
import { ArrowUpRight, Cpu } from 'lucide-react';

interface NavbarProps {
  currentPersona: AudiencePersona;
  onPersonaChange: (p: AudiencePersona) => void;
  isProcessing: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPersona, onPersonaChange, isProcessing }) => {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-zinc-200 no-print transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Industrial Brand & Build Tag */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded bg-zinc-900 flex items-center justify-center text-white shadow-sm">
              <Cpu className="w-4 h-4 text-orange-500" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-semibold text-sm tracking-tight text-zinc-900">OmniTransform AI</span>
                <span className="font-mono text-[10px] bg-zinc-100 text-zinc-600 px-1.5 py-0.5 rounded border border-zinc-200 uppercase font-medium">
                  SIH-2026 // PS-26154
                </span>
              </div>
              <p className="text-[10px] text-zinc-500 font-mono leading-none mt-0.5">
                ENGINE: SOVEREIGN RAG // LATENCY &lt;10S
              </p>
            </div>
          </div>

          {/* Persona Segmented Control */}
          <div className="flex items-center bg-zinc-100 p-0.5 rounded-lg border border-zinc-200">
            <button
              onClick={() => onPersonaChange('executive')}
              disabled={isProcessing}
              className={`text-xs px-3 py-1 rounded-md font-medium transition-all ${
                currentPersona === 'executive'
                  ? 'bg-white text-zinc-900 shadow-sm font-semibold'
                  : 'text-zinc-500 hover:text-zinc-900'
              }`}
            >
              Executive
            </button>
            <button
              onClick={() => onPersonaChange('analyst')}
              disabled={isProcessing}
              className={`text-xs px-3 py-1 rounded-md font-medium transition-all ${
                currentPersona === 'analyst'
                  ? 'bg-white text-zinc-900 shadow-sm font-semibold'
                  : 'text-zinc-500 hover:text-zinc-900'
              }`}
            >
              Technical Analyst
            </button>
            <button
              onClick={() => onPersonaChange('citizen')}
              disabled={isProcessing}
              className={`text-xs px-3 py-1 rounded-md font-medium transition-all ${
                currentPersona === 'citizen'
                  ? 'bg-white text-zinc-900 shadow-sm font-semibold'
                  : 'text-zinc-500 hover:text-zinc-900'
              }`}
            >
              Public
            </button>
          </div>

          {/* Action Link */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href="https://github.com/hrlpavan/omnitransform-ai-resources"
              target="_blank"
              rel="noreferrer"
              className="text-xs text-zinc-600 hover:text-zinc-900 font-mono flex items-center gap-1 transition-colors px-2.5 py-1 rounded border border-zinc-200 bg-white hover:bg-zinc-50"
            >
              <span>SRC_REPO</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
