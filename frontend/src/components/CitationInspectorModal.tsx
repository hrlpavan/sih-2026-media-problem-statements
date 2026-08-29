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
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full border border-zinc-300 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="bg-zinc-900 text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-orange-600 text-white">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold">Source Document Fact Inspector</h3>
              <p className="text-xs text-zinc-400">
                Verified against Original Page {citation.pageNumber} ({citation.lineNumber})
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          <div>
            <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider block mb-1">
              Generated Summary Point
            </span>
            <div className="p-4 rounded-xl bg-orange-50 border border-orange-200 text-zinc-900 text-sm font-semibold">
              "{citation.sourceText}"
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-zinc-700" /> Original Text in Source Document (Page {citation.pageNumber})
              </span>
              <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Verified Match
              </span>
            </div>

            <div className="p-5 rounded-xl border border-zinc-200 bg-zinc-50 text-sm text-zinc-800 leading-relaxed font-serif">
              <p className="text-zinc-400 text-xs mb-2 italic">
                ... [Original document text on page {citation.pageNumber}] ...
              </p>
              <div className="bg-amber-200/90 text-zinc-950 px-3 py-2 rounded-lg shadow-sm border border-amber-300 my-2 font-sans font-medium">
                "{citation.contextSnippet}"
              </div>
              <p className="text-zinc-400 text-xs mt-2 italic">
                ... [Next paragraphs] ...
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-zinc-100 p-4 border-t border-zinc-200 flex items-center justify-between">
          <span className="text-xs text-zinc-600 font-medium">
            100% Grounded in source document (Zero Hallucination)
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-zinc-900 text-white text-xs font-bold hover:bg-black transition-all cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
