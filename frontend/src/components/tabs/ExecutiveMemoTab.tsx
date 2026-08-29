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

  return (
    <div className="space-y-6">
      {/* On-screen Header with Big Print Button */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-3 border-b border-zinc-200 no-print action-toolbar">
        <div>
          <span className="text-xs font-bold text-orange-700 bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
            Format 1: Executive 1-Page Summary
          </span>
          <h3 className="text-base font-bold text-zinc-900 mt-1">{memo.title}</h3>
        </div>
        <button
          onClick={() => window.print()}
          className="px-4 py-2 rounded-lg bg-zinc-900 hover:bg-black text-white font-bold text-xs transition-all flex items-center gap-2 shadow-sm cursor-pointer"
        >
          <Printer className="w-4 h-4 text-orange-400" />
          <span>Save as Clean 1-Page PDF</span>
        </button>
      </div>

      {/* Pristine Memo Sheet */}
      <div className="bg-white rounded-xl border border-zinc-200 p-8 shadow-sm print-document-container">
        {/* Metadata Header */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pb-6 border-b border-zinc-200 text-xs print-section">
          <div>
            <span className="text-zinc-500 font-bold uppercase text-[10px] block">ORGANIZATION</span>
            <span className="font-bold text-zinc-900">{memo.organization}</span>
          </div>
          <div>
            <span className="text-zinc-500 font-bold uppercase text-[10px] block">DATE</span>
            <span className="font-bold text-zinc-900">{memo.date}</span>
          </div>
          <div>
            <span className="text-zinc-500 font-bold uppercase text-[10px] block">CLASSIFICATION</span>
            <span className="font-bold text-rose-700">{memo.classification}</span>
          </div>
          <div>
            <span className="text-zinc-500 font-bold uppercase text-[10px] block">RECIPIENT</span>
            <span className="font-bold text-zinc-900">Leadership & Team</span>
          </div>
        </div>

        {/* Section 1: Summary */}
        <div className="mt-6 print-section">
          <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-wider mb-2">
            1. Executive Overview
          </h4>
          <p className="text-sm text-zinc-800 leading-relaxed bg-zinc-50 p-4 rounded-lg border border-zinc-200">
            {memo.executiveSummary}
          </p>
        </div>

        {/* Section 2: Key Facts with Citations */}
        <div className="mt-6 print-section">
          <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-wider mb-3">
            2. Key Findings & Facts (Click any button to view original PDF page)
          </h4>
          <div className="space-y-3">
            {memo.keyFindings.map((finding, idx) => {
              const cit = getCitation(finding.citationId);

              return (
                <div
                  key={idx}
                  className="p-3.5 rounded-lg border border-zinc-200 bg-white hover:border-zinc-400 transition-all flex items-start justify-between gap-3"
                >
                  <div className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-zinc-900 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <p className="text-xs sm:text-sm text-zinc-800 font-medium leading-relaxed">
                      {finding.point}
                    </p>
                  </div>

                  {cit && (
                    <button
                      onClick={() => onOpenCitation(cit)}
                      className="shrink-0 text-xs font-bold px-3 py-1 rounded bg-orange-100 hover:bg-orange-600 text-orange-800 hover:text-white border border-orange-300 transition-all flex items-center gap-1 group cursor-pointer print-citation-badge"
                      title="Click to view original source page in PDF"
                    >
                      <span>Page {cit.pageNumber}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 no-print" />
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Section 3: Recommended Actions */}
        <div className="mt-6 print-section">
          <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-wider mb-3">
            3. Recommended Action Plan
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {memo.actionItems.map((item, idx) => (
              <div key={idx} className="p-3.5 rounded-lg bg-zinc-50 border border-zinc-200">
                <div className="flex items-center justify-between text-xs font-bold text-zinc-900 mb-1">
                  <span className="text-orange-700">{item.priority}</span>
                  <span className="text-zinc-500 font-normal">{item.owner}</span>
                </div>
                <p className="text-xs text-zinc-700 leading-normal">{item.action}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
