import React from 'react';
import { ArrowUpRight, Download } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A0A0C] text-white border-t border-white/10 mt-20 no-print">
      {/* Top Banner Ribbon */}
      <div className="border-b border-white/5 py-4 bg-black/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2.5">
            <img src="/hrl_logo_transparent.png" alt="HRL" className="h-4.5 object-contain brightness-0 invert" />
            <span className="font-semibold text-zinc-300">
              HRL International Private Limited™ · Smart India Hackathon 2026
            </span>
          </div>
          <span className="font-mono text-zinc-400 text-[11px]">
            PS ID: 26154 · NTRO · TEAM ID: 104580
          </span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Column 1: Organization Bio */}
          <div>
            <div className="flex items-center space-x-2.5 mb-3">
              <img src="/hrl_logo_transparent.png" alt="HRL" className="h-4.5 object-contain brightness-0 invert" />
              <span className="font-bold text-sm text-white tracking-tight">OmniTransform AI</span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed mb-3">
              Sovereign Gen AI Platform for Automated Content Transformation. Engineered by HRL for the National Technical Research Organisation (NTRO).
            </p>
            <p className="text-[11px] text-hrl-crimson italic font-medium">
              "We Can Do Everything Related To Software Sector Without Any Excuses!"
            </p>
          </div>

          {/* Column 2: Organized Submission Credentials Card */}
          <div className="bg-white/5 border border-white/10 rounded-[20px] p-4 sm:p-5">
            <div className="flex items-center gap-2 mb-3.5 pb-2 border-b border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-hrl-crimson" />
              <h4 className="font-bold text-xs text-white uppercase tracking-wider">
                Submission Credentials
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 gap-x-4 text-xs">
              <div>
                <span className="text-zinc-400 block text-[10px] uppercase font-mono tracking-wider">Problem Statement</span>
                <strong className="text-white font-medium">PS ID: 26154</strong>
              </div>
              <div>
                <span className="text-zinc-400 block text-[10px] uppercase font-mono tracking-wider">Organization</span>
                <strong className="text-white font-medium">NTRO (Govt. of India)</strong>
              </div>
              <div>
                <span className="text-zinc-400 block text-[10px] uppercase font-mono tracking-wider">Theme / Category</span>
                <strong className="text-white font-medium">Software · AI & Cyber Security</strong>
              </div>
              <div>
                <span className="text-zinc-400 block text-[10px] uppercase font-mono tracking-wider">Organization Entity</span>
                <strong className="text-white font-medium">HRL (ID: 104580)</strong>
              </div>
              <div className="sm:col-span-2 pt-2 border-t border-white/5">
                <span className="text-zinc-400 block text-[10px] uppercase font-mono tracking-wider">Founder & Managing Director</span>
                <strong className="text-white font-medium">Pavan Kumar Sadashiv</strong>
              </div>
            </div>
          </div>

          {/* Column 3: Corporate Links & Resources */}
          <div>
            <h4 className="font-bold text-xs text-zinc-300 uppercase tracking-wider mb-3.5">
              Corporate Links & Resources
            </h4>
            <div className="space-y-2.5">
              <a
                href="https://github.com/hrlpavan/omnitransform-ai-resources"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-zinc-200 hover:text-white flex items-center justify-between transition-all"
              >
                <span>GitHub Resource Repository</span>
                <ArrowUpRight className="w-4 h-4 text-zinc-400" />
              </a>
              <a
                href="https://github.com/hrlpavan/omnitransform-ai-resources/raw/main/SIH2026_Idea_Presentation_PS26154.pptx"
                className="p-3 rounded-xl bg-hrl-crimson/20 hover:bg-hrl-crimson/30 border border-hrl-crimson/30 text-xs text-white flex items-center justify-between transition-all font-semibold"
              >
                <span>Download Official PPTX Pitch Deck</span>
                <Download className="w-4 h-4 text-hrl-crimson" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-2">
          <span>© 2026 HRL International Private Limited™ · All rights reserved</span>
          <span>Sovereign Local Architecture · Enterprise Gen AI Engine</span>
        </div>
      </div>
    </footer>
  );
};
