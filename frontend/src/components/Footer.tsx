import React from 'react';
import { ArrowUpRight, Download } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-zinc-200 mt-16 text-zinc-900 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-6 h-6 rounded bg-zinc-900 flex items-center justify-center text-white font-mono text-xs font-bold">
                OT
              </div>
              <span className="font-semibold text-sm tracking-tight">OmniTransform AI</span>
            </div>
            <p className="font-mono text-[11px] text-zinc-500 leading-relaxed max-w-sm">
              Sovereign Gen AI Platform for Automated Content Transformation. Smart India Hackathon 2026 (PS ID: 26154) // NTRO.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-[10px] font-semibold text-zinc-400 uppercase tracking-wider mb-2">
              SUBMISSION SPECIFICATIONS
            </h4>
            <ul className="space-y-1 font-mono text-[11px] text-zinc-600">
              <li>PROBLEM ID: <strong>26154</strong></li>
              <li>ORGANIZATION: <strong>NTRO (Govt. of India)</strong></li>
              <li>THEME: <strong>Software / AI & Security</strong></li>
              <li>TEAM: <strong>OmniTransform</strong></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[10px] font-semibold text-zinc-400 uppercase tracking-wider mb-2">
              ARTIFACT REPOSITORIES
            </h4>
            <div className="space-y-1.5">
              <a
                href="https://github.com/hrlpavan/omnitransform-ai-resources"
                target="_blank"
                rel="noreferrer"
                className="font-mono text-[11px] text-zinc-600 hover:text-zinc-900 flex items-center gap-1 transition-colors"
              >
                <span>github.com/hrlpavan/omnitransform-ai-resources</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
              <a
                href="https://github.com/hrlpavan/omnitransform-ai-resources/raw/main/SIH2026_Idea_Presentation_PS26154.pptx"
                className="font-mono text-[11px] text-zinc-600 hover:text-zinc-900 flex items-center gap-1 transition-colors"
              >
                <Download className="w-3 h-3 text-orange-600" />
                <span>SIH2026_Idea_Presentation_PS26154.pptx</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-zinc-100 flex flex-col sm:flex-row items-center justify-between font-mono text-[10px] text-zinc-400">
          <span>OMNITRANSFORM_AI // SOVEREIGN ENGINE</span>
          <span>INDUSTRIAL DESIGN SPECIFICATION // 0 EMOJIS</span>
        </div>
      </div>
    </footer>
  );
};
