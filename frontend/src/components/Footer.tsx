import React from 'react';
import { ArrowUpRight, Download } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-classic-border mt-16 text-classic-slate no-print">
      {/* Top Banner Strip in Footer */}
      <div className="border-b border-classic-border py-4 bg-classic-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <img
            src="/sih_official_header_banner.jpg"
            alt="Official SIH 2026 Institutional Partners"
            className="h-9 sm:h-10 object-contain"
          />
          <span className="text-xs font-serif font-semibold text-classic-navy">
            Smart India Hackathon 2026 • Official Platform Solution
          </span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-7 h-7 rounded-lg bg-classic-navy flex items-center justify-center text-white font-serif font-bold text-xs">
                OT
              </div>
              <span className="font-serif font-bold text-sm text-classic-navy">OmniTransform AI</span>
            </div>
            <p className="text-xs text-classic-slate-muted leading-relaxed">
              Sovereign Gen AI Platform for Automated Content Transformation. Developed for Smart India Hackathon 2026 (PS ID: 26154) for the National Technical Research Organisation (NTRO).
            </p>
          </div>

          <div>
            <h4 className="font-serif font-bold text-xs text-classic-navy uppercase tracking-wider mb-2">
              Submission Details
            </h4>
            <ul className="space-y-1 text-xs text-classic-slate-muted">
              <li>Problem ID: <strong className="text-classic-navy">26154</strong></li>
              <li>Organization: <strong className="text-classic-navy">NTRO (Govt. of India)</strong></li>
              <li>Category: <strong className="text-classic-navy">Software / AI & Cyber Defense</strong></li>
              <li>Team Name: <strong className="text-classic-navy">OmniTransform</strong></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-xs text-classic-navy uppercase tracking-wider mb-2">
              Official Resources
            </h4>
            <div className="space-y-2">
              <a
                href="https://github.com/hrlpavan/omnitransform-ai-resources"
                target="_blank"
                rel="noreferrer"
                className="text-xs text-classic-navy hover:text-classic-ochre flex items-center gap-1 transition-colors font-semibold"
              >
                <span>GitHub Resource Repository</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
              <a
                href="https://github.com/hrlpavan/omnitransform-ai-resources/raw/main/SIH2026_Idea_Presentation_PS26154.pptx"
                className="text-xs text-classic-ochre hover:text-classic-ochre-dark flex items-center gap-1 transition-colors font-bold"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Official PPTX Pitch Deck</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-classic-border flex flex-col sm:flex-row items-center justify-between text-xs text-classic-slate-muted">
          <span>@SIH Idea Submission - OmniTransform AI Team</span>
          <span>Classic Color Theory • Single-Pass Multi-Format AI Pipeline</span>
        </div>
      </div>
    </footer>
  );
};
