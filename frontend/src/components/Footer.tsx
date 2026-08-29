import React from 'react';
import { ArrowUpRight, Download, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-zinc-200 mt-16 text-zinc-900 no-print">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-7 h-7 rounded-lg bg-zinc-900 flex items-center justify-center text-white">
                <Sparkles className="w-4 h-4 text-orange-500" />
              </div>
              <span className="font-bold text-sm">OmniTransform AI</span>
            </div>
            <p className="text-xs text-zinc-600 leading-relaxed">
              Automated Content Transformation Platform built for Smart India Hackathon 2026 (PS ID: 26154) for the National Technical Research Organisation (NTRO).
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-wider mb-2">
              Competition Details
            </h4>
            <ul className="space-y-1 text-xs text-zinc-600">
              <li>Problem ID: <strong>26154</strong></li>
              <li>Organization: <strong>NTRO (Govt. of India)</strong></li>
              <li>Team Name: <strong>OmniTransform</strong></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-wider mb-2">
              Project Links & Deck
            </h4>
            <div className="space-y-2">
              <a
                href="https://github.com/hrlpavan/omnitransform-ai-resources"
                target="_blank"
                rel="noreferrer"
                className="text-xs text-zinc-600 hover:text-zinc-900 flex items-center gap-1 transition-colors font-medium"
              >
                <span>GitHub Repository</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
              <a
                href="https://github.com/hrlpavan/omnitransform-ai-resources/raw/main/SIH2026_Idea_Presentation_PS26154.pptx"
                className="text-xs text-orange-600 hover:text-orange-700 flex items-center gap-1 transition-colors font-bold"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Official PPTX Deck</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-zinc-100 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-400">
          <span>Smart India Hackathon 2026 Submission</span>
          <span>Single-Pass Multi-Format AI Pipeline</span>
        </div>
      </div>
    </footer>
  );
};
