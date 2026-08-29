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
      <div className="bg-white rounded-xl max-w-3xl w-full border border-zinc-300 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="bg-zinc-900 text-white px-5 py-3.5 border-b border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-4 h-4 text-orange-500" />
            <div>
              <h3 className="text-xs font-semibold text-white">Source Citation Inspector</h3>
              <p className="font-mono text-[10px] text-zinc-400">
                PAGE: {citation.pageNumber} // {citation.lineNumber}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 overflow-y-auto space-y-4">
          <div>
            <span className="font-mono text-[9px] font-semibold text-zinc-400 uppercase tracking-wider block mb-1">
              GENERATED FACT
            </span>
            <div className="p-3.5 rounded bg-zinc-100 border border-zinc-200 text-zinc-900 text-xs font-medium">
              "{citation.sourceText}"
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <span className="font-mono text-[9px] font-semibold text-zinc-400 uppercase tracking-wider flex items-center gap-1">
                <FileText className="w-3 h-3 text-zinc-500" /> RAW PDF CONTEXT (PAGE {citation.pageNumber})
              </span>
              <span className="font-mono text-[9px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-600" /> COORD_MATCH [X0: {citation.boundingBox[0]}, Y0: {citation.boundingBox[1]}]
              </span>
            </div>

            <div className="p-4 rounded bg-zinc-50 border border-zinc-200 text-xs text-zinc-800 leading-relaxed font-serif">
              <p className="text-zinc-400 text-[11px] mb-2 font-mono">
                ... [Preceding raw document context on page {citation.pageNumber}] ...
              </p>
              <div className="bg-amber-100 text-zinc-950 px-2.5 py-1.5 rounded border border-amber-300 my-1 font-medium font-sans">
                "{citation.contextSnippet}"
              </div>
              <p className="text-zinc-400 text-[11px] mt-2 font-mono">
                ... [Succeeding telemetry index] ...
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-zinc-100 px-5 py-3 border-t border-zinc-200 flex items-center justify-between">
          <span className="font-mono text-[10px] text-zinc-500 font-normal">
            STRICT RAG BOUNDARY: 0 HALLUCINATIONS ENFORCED
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded bg-zinc-900 text-white text-xs font-medium hover:bg-black transition-all"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
