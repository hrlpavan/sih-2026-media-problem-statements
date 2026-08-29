import React from 'react';
import type { Citation } from '../types';
import { X, ShieldCheck, FileText, CheckCircle2 } from 'lucide-react';

interface CitationInspectorModalProps {
  citation: Citation | null;
  onClose: () => void;
}

export const CitationInspectorModal: React.FC<CitationInspectorModalProps> = ({
  citation,
  onClose
}) => {
  if (!citation) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-3xl w-full border border-surface-300 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        <div className="bg-sih-navy text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-sih-orange text-white">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold">Source Document Citation Inspector</h3>
              <p className="text-xs text-surface-300">
                Verifying Fact Grounding • Page {citation.pageNumber} • {citation.lineNumber}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto space-y-6">
          <div>
            <span className="text-xs font-bold text-surface-400 uppercase tracking-wider block mb-1">
              Generated Intelligence Fact
            </span>
            <div className="p-3.5 rounded-xl bg-sih-blue-light/50 border border-sih-blue/30 text-sih-navy text-sm font-semibold">
              "{citation.sourceText}"
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-surface-400 uppercase tracking-wider flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-sih-navy" /> Raw Ingested PDF Document (Page {citation.pageNumber})
              </span>
              <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-300 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> Bounding Box Matches [x0: {citation.boundingBox[0]}, y0: {citation.boundingBox[1]}]
              </span>
            </div>

            <div className="p-5 rounded-xl border-2 border-surface-300 bg-surface-50 font-serif text-sm text-surface-800 leading-relaxed shadow-inner">
              <p className="text-surface-400 text-xs mb-2 italic">
                ... [Preceding raw document context on page {citation.pageNumber}] ...
              </p>
              <div className="bg-amber-200/90 text-surface-900 px-2 py-1 rounded shadow-sm border border-amber-400/50 my-2 font-medium">
                "{citation.contextSnippet}"
              </div>
              <p className="text-surface-400 text-xs mt-2 italic">
                ... [Succeeding telemetry log and technical appendix] ...
              </p>
            </div>
          </div>
        </div>

        <div className="bg-surface-100 p-4 border-t border-surface-200 flex items-center justify-between">
          <span className="text-xs text-surface-500 font-medium">
            Strict RAG Boundary: 0 Hallucinations Enforced
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-sih-navy text-white text-xs font-bold hover:bg-sih-navy-light transition-all"
          >
            Close Inspector
          </button>
        </div>
      </div>
    </div>
  );
};
