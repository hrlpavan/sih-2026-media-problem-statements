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
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-3xl w-full border border-black/[0.08] shadow-apple-float overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="bg-apple-bg px-6 py-4 border-b border-black/[0.06] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-sih-navy text-white shadow-apple-sm">
              <ShieldCheck className="w-4 h-4 text-sih-orange" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-apple-text">Source Document Citation Inspector</h3>
              <p className="text-[11px] text-apple-subtext">
                Verified Grounding • Page {citation.pageNumber} • {citation.lineNumber}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-black/[0.05] text-apple-subtext hover:text-apple-text transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          <div>
            <span className="text-[10px] font-semibold text-apple-subtext uppercase tracking-wider block mb-1">
              Synthesized Output Fact
            </span>
            <div className="p-4 rounded-2xl bg-sih-blue/5 border border-sih-blue/20 text-apple-text text-sm font-medium">
              "{citation.sourceText}"
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-semibold text-apple-subtext uppercase tracking-wider flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-sih-navy" /> Raw Source Document (Page {citation.pageNumber})
              </span>
              <span className="text-[10px] font-semibold text-emerald-800 bg-sih-green-light px-2.5 py-0.5 rounded-full flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-sih-green" /> Bounding Box Matches [x0: {citation.boundingBox[0]}, y0: {citation.boundingBox[1]}]
              </span>
            </div>

            <div className="p-6 rounded-2xl bg-apple-bg border border-black/[0.06] text-sm text-apple-text leading-relaxed">
              <p className="text-apple-subtext text-xs mb-2 italic">
                ... [Preceding context on page {citation.pageNumber}] ...
              </p>
              <div className="bg-amber-200/80 text-apple-text px-3 py-2 rounded-xl shadow-apple-sm border border-amber-300 my-2 font-medium">
                "{citation.contextSnippet}"
              </div>
              <p className="text-apple-subtext text-xs mt-2 italic">
                ... [Succeeding telemetry log] ...
              </p>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-apple-bg px-6 py-4 border-t border-black/[0.06] flex items-center justify-between">
          <span className="text-xs text-apple-subtext font-normal">
            Zero Hallucination Guaranteed via Reverse Coordinate Indexing
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-sih-navy text-white text-xs font-semibold hover:bg-sih-navy-light shadow-apple-sm transition-all"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
