import React from 'react';
import type { AudiencePersona } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  currentPersona: AudiencePersona;
  onPersonaChange: (p: AudiencePersona) => void;
  isProcessing: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPersona, onPersonaChange, isProcessing }) => {
  return (
    <header className="sticky top-0 z-40 bg-white border-b border-classic-border shadow-classic-sm no-print">
      {/* Top Institutional Header Banner (Ministry of Education | AICTE | Innovation Cell | SIH 2026) */}
      <div className="bg-white border-b border-zinc-100 py-1.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center">
            <img
              src="/sih_official_header_banner.jpg"
              alt="Ministry of Education | AICTE | MoE Innovation Cell | Smart India Hackathon 2026"
              className="h-9 sm:h-11 object-contain"
            />
          </div>
          <div className="flex items-center space-x-2 text-xs font-semibold text-classic-slate-muted">
            <span className="font-mono bg-classic-bg px-2.5 py-0.5 rounded border border-classic-border text-classic-navy">
              PS ID: 26154
            </span>
            <span className="font-mono bg-classic-ochre-light text-classic-ochre font-bold px-2.5 py-0.5 rounded border border-classic-ochre/30">
              TEAM: HRL (104580)
            </span>
            <span className="text-zinc-300 hidden sm:inline">|</span>
            <span className="text-classic-navy font-bold hidden sm:inline">NTRO</span>
          </div>
        </div>
      </div>

      {/* Main App Navigation Bar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Brand & Subtitle */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-classic-navy flex items-center justify-center text-white font-serif font-bold text-sm shadow-sm">
              OT
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-serif font-bold text-base text-classic-navy tracking-tight">
                  OmniTransform AI
                </span>
                <span className="bg-classic-ochre-light text-classic-ochre text-[11px] font-bold px-2 py-0.5 rounded border border-classic-ochre/20">
                  Team HRL
                </span>
              </div>
              <p className="text-[11px] text-classic-slate-muted font-normal leading-none mt-0.5">
                Single-Pass Automated Content Transformation
              </p>
            </div>
          </div>

          {/* Persona Segmented Switcher */}
          <div className="flex items-center space-x-1 bg-classic-bg p-1 rounded-lg border border-classic-border">
            <span className="text-[11px] text-classic-slate-muted font-medium px-2 hidden sm:inline">View:</span>
            <button
              onClick={() => onPersonaChange('executive')}
              disabled={isProcessing}
              className={`text-xs px-3 py-1 rounded-md font-medium transition-all ${
                currentPersona === 'executive'
                  ? 'bg-classic-navy text-white shadow-sm font-bold'
                  : 'text-classic-slate-muted hover:text-classic-navy'
              }`}
            >
              Executive
            </button>
            <button
              onClick={() => onPersonaChange('analyst')}
              disabled={isProcessing}
              className={`text-xs px-3 py-1 rounded-md font-medium transition-all ${
                currentPersona === 'analyst'
                  ? 'bg-classic-navy text-white shadow-sm font-bold'
                  : 'text-classic-slate-muted hover:text-classic-navy'
              }`}
            >
              Technical
            </button>
            <button
              onClick={() => onPersonaChange('citizen')}
              disabled={isProcessing}
              className={`text-xs px-3 py-1 rounded-md font-medium transition-all ${
                currentPersona === 'citizen'
                  ? 'bg-classic-navy text-white shadow-sm font-bold'
                  : 'text-classic-slate-muted hover:text-classic-navy'
              }`}
            >
              Public
            </button>
          </div>

          {/* GitHub Source Link */}
          <a
            href="https://github.com/hrlpavan/omnitransform-ai-resources"
            target="_blank"
            rel="noreferrer"
            className="hidden md:flex items-center gap-1 text-xs font-semibold text-classic-navy hover:text-classic-ochre bg-classic-bg hover:bg-zinc-100 px-3 py-1.5 rounded-lg border border-classic-border transition-colors"
          >
            <span>Repository</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-classic-slate-muted" />
          </a>
        </div>
      </div>
    </header>
  );
};
