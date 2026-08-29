import React from 'react';
import { Terminal, Download, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-sih-navy text-white mt-16 border-t-4 border-sih-orange">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-sih-orange flex items-center justify-center text-white font-bold">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="font-bold text-lg tracking-tight">OmniTransform AI</span>
            </div>
            <p className="text-xs text-surface-300 leading-relaxed max-w-sm">
              Sovereign Gen AI Platform for Automated Content Transformation. Developed for Smart India Hackathon 2026 (PS ID: 26154) for the National Technical Research Organisation (NTRO).
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold text-sih-orange uppercase tracking-wider mb-3">
              Competition Information
            </h4>
            <ul className="space-y-1.5 text-xs text-surface-300">
              <li>• Problem Statement ID: <strong>26154</strong></li>
              <li>• Organization: <strong>NTRO (Govt. of India)</strong></li>
              <li>• Category: <strong>Software / AI & Cyber Security</strong></li>
              <li>• Team Name: <strong>OmniTransform</strong></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-sih-orange uppercase tracking-wider mb-3">
              Repository & Submissions
            </h4>
            <div className="space-y-2">
              <a
                href="https://github.com/hrlpavan/omnitransform-ai-resources"
                target="_blank"
                rel="noreferrer"
                className="text-xs text-surface-200 hover:text-white flex items-center gap-1.5 transition-colors"
              >
                <Terminal className="w-3.5 h-3.5 text-sih-orange" />
                <span>github.com/hrlpavan/omnitransform-ai-resources</span>
              </a>
              <a
                href="https://github.com/hrlpavan/omnitransform-ai-resources/raw/main/SIH2026_Idea_Presentation_PS26154.pptx"
                className="text-xs text-surface-200 hover:text-white flex items-center gap-1.5 transition-colors"
              >
                <Download className="w-3.5 h-3.5 text-sih-orange" />
                <span>Download Official PPTX Pitch Deck</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-surface-400">
          <span>@SIH Idea submission - OmniTransform AI Team</span>
          <span>Air-Gapped Sovereign On-Premise Execution Framework</span>
        </div>
      </div>
    </footer>
  );
};
