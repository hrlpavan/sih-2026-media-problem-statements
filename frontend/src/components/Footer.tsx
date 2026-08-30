import React from 'react';
import { ArrowUpRight, Download } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-hrl-dark-base text-white border-t border-hrl-dark-border mt-20 no-print">
      {/* Top Banner Ribbon */}
      <div className="border-b border-hrl-dark-border py-5 bg-black/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src="/hrl_logo_transparent.png" alt="HRL" className="h-5 sm:h-6 object-contain brightness-0 invert" />
            <span className="text-xs font-semibold text-zinc-300">
              HRL International Private Limited™ · Smart India Hackathon 2026
            </span>
          </div>
          <span className="text-xs font-mono text-zinc-400">
            PS ID: 26154 · NTRO · TEAM ID: 104580
          </span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2.5 mb-3">
              <img src="/hrl_logo_transparent.png" alt="HRL" className="h-5 sm:h-6 object-contain brightness-0 invert" />
              <span className="font-bold text-sm text-white">OmniTransform AI</span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed mb-3">
              Sovereign Gen AI Platform for Automated Content Transformation. Engineered by Team HRL for the National Technical Research Organisation (NTRO).
            </p>
            <p className="text-[11px] text-hrl-crimson italic font-medium">
              "We Can Do Everything Related To Software Sector Without Any Excuses!"
            </p>
          </div>

          <div>
            <h4 className="font-bold text-xs text-zinc-300 uppercase tracking-wider mb-3">
              Submission Credentials
            </h4>
            <ul className="space-y-1.5 text-xs text-zinc-400">
              <li>Problem Statement ID: <strong className="text-white">26154</strong></li>
              <li>Organization: <strong className="text-white">NTRO (Govt. of India)</strong></li>
              <li>Theme / Category: <strong className="text-white">Software / AI & Cyber Security</strong></li>
              <li>Team Name: <strong className="text-white">HRL (Team ID: 104580)</strong></li>
              <li>Founder & MD: <strong className="text-white">Pavan Kumar Sadashiv</strong></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xs text-zinc-300 uppercase tracking-wider mb-3">
              Corporate Links & Resources
            </h4>
            <div className="space-y-2.5">
              <a
                href="https://github.com/hrlpavan/omnitransform-ai-resources"
                target="_blank"
                rel="noreferrer"
                className="text-xs text-zinc-300 hover:text-white flex items-center gap-1.5 transition-colors font-medium"
              >
                <span>GitHub Resource Repository</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
              </a>
              <a
                href="https://github.com/hrlpavan/omnitransform-ai-resources/raw/main/SIH2026_Idea_Presentation_PS26154.pptx"
                className="text-xs text-hrl-blue hover:underline flex items-center gap-1.5 transition-colors font-bold"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Official PPTX Pitch Deck</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-hrl-dark-border flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500">
          <span>© 2026 HRL International Private Limited™ · All rights reserved</span>
          <span>Sovereign Local Architecture · Enterprise Gen AI Engine</span>
        </div>
      </div>
    </footer>
  );
};
