import React from 'react';
import { Sparkles, ArrowUpRight, Download } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-black/[0.06] mt-16 text-apple-text">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-3">
              <div className="w-8 h-8 rounded-xl bg-sih-navy flex items-center justify-center text-white font-bold">
                <Sparkles className="w-4 h-4 text-sih-orange" />
              </div>
              <span className="font-semibold text-base tracking-tight">OmniTransform AI</span>
            </div>
            <p className="text-xs text-apple-subtext leading-relaxed max-w-sm">
              Sovereign Gen AI Platform for Automated Content Transformation. Developed for Smart India Hackathon 2026 (PS ID: 26154) for the National Technical Research Organisation (NTRO).
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-apple-text uppercase tracking-wider mb-3">
              Submission Details
            </h4>
            <ul className="space-y-1 text-xs text-apple-subtext">
              <li>• Problem Statement ID: <strong className="text-apple-text">26154</strong></li>
              <li>• Organization: <strong className="text-apple-text">NTRO (Govt. of India)</strong></li>
              <li>• Category: <strong className="text-apple-text">Software / AI</strong></li>
              <li>• Team: <strong className="text-apple-text">OmniTransform</strong></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-apple-text uppercase tracking-wider mb-3">
              Resources & Artifacts
            </h4>
            <div className="space-y-2">
              <a
                href="https://github.com/hrlpavan/omnitransform-ai-resources"
                target="_blank"
                rel="noreferrer"
                className="text-xs text-apple-subtext hover:text-sih-blue flex items-center gap-1 transition-colors"
              >
                <span>github.com/hrlpavan/omnitransform-ai-resources</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://github.com/hrlpavan/omnitransform-ai-resources/raw/main/SIH2026_Idea_Presentation_PS26154.pptx"
                className="text-xs text-apple-subtext hover:text-sih-blue flex items-center gap-1 transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Official PPTX Pitch Deck</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-black/[0.06] flex flex-col sm:flex-row items-center justify-between text-xs text-apple-subtext">
          <span>@SIH Idea submission - OmniTransform AI Team</span>
          <span>Apple-Grade UI/UX Design System • SF Pro Typography</span>
        </div>
      </div>
    </footer>
  );
};
