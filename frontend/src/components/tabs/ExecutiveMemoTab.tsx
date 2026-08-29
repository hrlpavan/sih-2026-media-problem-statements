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
      {/* On-screen Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-3 border-b border-classic-border no-print action-toolbar">
        <div>
          <span className="text-xs font-bold text-classic-navy bg-classic-bg px-2.5 py-1 rounded border border-classic-border">
            FORMAT 1: EXECUTIVE BRIEFING MEMORANDUM
          </span>
          <h3 className="font-serif font-bold text-base text-classic-navy mt-1">{memo.title}</h3>
        </div>
        <button
          onClick={() => window.print()}
          className="px-4 py-2 rounded-lg bg-classic-navy hover:bg-classic-navy-dark text-white font-bold text-xs transition-all flex items-center gap-2 shadow-classic-sm cursor-pointer"
        >
          <Printer className="w-4 h-4 text-classic-ochre" />
          <span>Save Clean 1-Page PDF</span>
        </button>
      </div>

      {/* Pristine Document Sheet */}
      <div className="bg-white rounded-xl border border-classic-border p-8 shadow-classic-sm print-document-container font-serif">
        {/* Document Header Metadata */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pb-6 border-b border-classic-border text-xs print-section font-sans">
          <div>
            <span className="text-classic-slate-muted font-bold uppercase text-[10px] block">ISSUING AUTHORITY</span>
            <span className="font-bold text-classic-navy">{memo.organization}</span>
          </div>
          <div>
            <span className="text-classic-slate-muted font-bold uppercase text-[10px] block">DOCUMENT DATE</span>
            <span className="font-bold text-classic-navy">{memo.date}</span>
          </div>
          <div>
            <span className="text-classic-slate-muted font-bold uppercase text-[10px] block">SECURITY LEVEL</span>
            <span className="font-bold text-rose-700">{memo.classification}</span>
          </div>
          <div>
            <span className="text-classic-slate-muted font-bold uppercase text-[10px] block">PREPARED BY TEAM</span>
            <span className="font-bold text-classic-navy">Team HRL (ID: 104580)</span>
          </div>
        </div>

        {/* Section 1 */}
        <div className="mt-6 print-section">
          <h4 className="font-sans text-xs font-bold text-classic-navy uppercase tracking-wider mb-2">
            1. Executive Overview
          </h4>
          <p className="text-sm text-classic-slate leading-relaxed bg-classic-bg p-4 rounded-lg border border-classic-border font-serif">
            {memo.executiveSummary}
          </p>
        </div>

        {/* Section 2 */}
        <div className="mt-6 print-section font-sans">
          <h4 className="text-xs font-bold text-classic-navy uppercase tracking-wider mb-3">
            2. Strategic Intelligence Findings (Verified Citations)
          </h4>
          <div className="space-y-3">
            {memo.keyFindings.map((finding, idx) => {
              const cit = getCitation(finding.citationId);

              return (
                <div
                  key={idx}
                  className="p-3.5 rounded-lg border border-classic-border bg-white hover:border-classic-navy/40 transition-all flex items-start justify-between gap-3"
                >
                  <div className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-classic-navy text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <p className="text-xs sm:text-sm text-classic-slate font-medium leading-relaxed">
                      {finding.point}
                    </p>
                  </div>

                  {cit && (
                    <button
                      onClick={() => onOpenCitation(cit)}
                      className="shrink-0 text-xs font-bold px-3 py-1 rounded bg-classic-ochre-light hover:bg-classic-navy text-classic-ochre hover:text-white border border-classic-ochre/30 transition-all flex items-center gap-1 group cursor-pointer print-citation-badge"
                      title="Click to view original source PDF page"
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

        {/* Section 3 */}
        <div className="mt-6 print-section font-sans">
          <h4 className="text-xs font-bold text-classic-navy uppercase tracking-wider mb-3">
            3. Recommended Action Matrix
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {memo.actionItems.map((item, idx) => (
              <div key={idx} className="p-3.5 rounded-lg bg-classic-bg border border-classic-border">
                <div className="flex items-center justify-between text-xs font-bold text-classic-navy mb-1">
                  <span className="text-classic-ochre">{item.priority}</span>
                  <span className="text-classic-slate-muted font-normal">{item.owner}</span>
                </div>
                <p className="text-xs text-classic-slate leading-normal">{item.action}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
