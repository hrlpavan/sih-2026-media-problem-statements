import React from 'react';
import type { ExecutiveMemo, Citation } from '../../types';
import { ArrowUpRight, Printer } from 'lucide-react';

interface ExecutiveMemoTabProps {
  memo: ExecutiveMemo;
  citations: Citation[];
  onOpenCitation: (cit: Citation) => void;
}

export const ExecutiveMemoTab: React.FC<ExecutiveMemoTabProps> = ({
  memo,
  citations,
  onOpenCitation
}) => {
  const getCitation = (id: string) => citations.find((c) => c.id === id);

  const handleExportPDF = () => {
    window.print();
  };

  return (
    <div className="space-y-5">
      {/* On-screen Toolbar (Hidden during Print) */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-3 border-b border-zinc-200 no-print action-toolbar">
        <div>
          <span className="font-mono text-[10px] font-semibold text-zinc-500 uppercase tracking-wider bg-zinc-100 px-2 py-0.5 rounded border border-zinc-200">
            FORMAT_01 // EXECUTIVE_MEMO
          </span>
          <h3 className="text-sm font-semibold text-zinc-900 mt-1">{memo.title}</h3>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handleExportPDF}
            className="px-3 py-1.5 rounded bg-zinc-900 hover:bg-black text-white font-medium text-xs transition-all flex items-center gap-1.5 shadow-sm"
          >
            <Printer className="w-3.5 h-3.5 text-orange-400" />
            <span>Export Clean PDF (A4)</span>
          </button>
        </div>
      </div>

      {/* Pristine Document Sheet (Print Optimized) */}
      <div className="bg-white rounded-lg border border-zinc-200 p-8 shadow-sm print-document-container">
        {/* Document Metadata Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pb-5 border-b border-zinc-200 text-xs print-section">
          <div>
            <span className="font-mono text-[9px] text-zinc-400 uppercase block font-semibold">AUTHORITY</span>
            <span className="font-semibold text-zinc-900">{memo.organization}</span>
          </div>
          <div>
            <span className="font-mono text-[9px] text-zinc-400 uppercase block font-semibold">DATE</span>
            <span className="font-semibold text-zinc-900">{memo.date}</span>
          </div>
          <div>
            <span className="font-mono text-[9px] text-zinc-400 uppercase block font-semibold">SECURITY CLASSIFICATION</span>
            <span className="font-semibold text-rose-700 font-mono text-[11px]">{memo.classification}</span>
          </div>
          <div>
            <span className="font-mono text-[9px] text-zinc-400 uppercase block font-semibold">DISTRIBUTION</span>
            <span className="font-semibold text-zinc-900">Senior Leadership</span>
          </div>
        </div>

        {/* Section 1: Executive Overview */}
        <div className="mt-5 print-section">
          <h4 className="font-mono text-[10px] font-semibold text-zinc-500 uppercase tracking-wider mb-2">
            01. EXECUTIVE SUMMARY
          </h4>
          <p className="text-xs sm:text-sm text-zinc-800 leading-relaxed bg-zinc-50/80 p-4 rounded border border-zinc-200">
            {memo.executiveSummary}
          </p>
        </div>

        {/* Section 2: Key Findings with Citations */}
        <div className="mt-5 print-section">
          <h4 className="font-mono text-[10px] font-semibold text-zinc-500 uppercase tracking-wider mb-2">
            02. STRATEGIC INTELLIGENCE FINDINGS
          </h4>
          <div className="space-y-2.5">
            {memo.keyFindings.map((finding, idx) => {
              const cit = getCitation(finding.citationId);

              return (
                <div
                  key={idx}
                  className="p-3.5 rounded border border-zinc-200 bg-white hover:border-zinc-400 transition-all flex items-start justify-between gap-3"
                >
                  <div className="flex items-start gap-2.5">
                    <span className="font-mono text-[10px] font-bold text-zinc-500 mt-0.5">
                      [{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}]
                    </span>
                    <p className="text-xs text-zinc-800 leading-relaxed font-medium">
                      {finding.point}
                    </p>
                  </div>

                  {cit && (
                    <button
                      onClick={() => onOpenCitation(cit)}
                      className="shrink-0 font-mono text-[10px] font-semibold px-2 py-0.5 rounded bg-zinc-100 hover:bg-zinc-900 text-zinc-700 hover:text-white border border-zinc-200 transition-all flex items-center gap-1 group print-citation-badge"
                    >
                      <span>PAGE {cit.pageNumber}</span>
                      <ArrowUpRight className="w-3 h-3 opacity-60 group-hover:opacity-100 no-print" />
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Section 3: Action Matrix */}
        <div className="mt-5 print-section">
          <h4 className="font-mono text-[10px] font-semibold text-zinc-500 uppercase tracking-wider mb-2">
            03. MANDATORY ACTION MATRIX
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
            {memo.actionItems.map((item, idx) => (
              <div key={idx} className="p-3 rounded bg-zinc-50 border border-zinc-200">
                <div className="flex items-center justify-between font-mono text-[10px] font-semibold text-zinc-900 mb-1">
                  <span className="text-orange-600">{item.priority}</span>
                  <span className="text-zinc-500">{item.owner}</span>
                </div>
                <p className="text-xs text-zinc-700 leading-normal">{item.action}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Print Only Verification Footer */}
        <div className="mt-6 pt-3 border-t border-zinc-200 font-mono text-[9px] text-zinc-400 flex items-center justify-between">
          <span>NTRO CYBER INTELLIGENCE SPECIFICATION // SIH 2026 PS ID 26154</span>
          <span>AUTHENTICATED DETERMINISTIC RAG EXTRACTION</span>
        </div>
      </div>
    </div>
  );
};
