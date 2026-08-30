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
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-3 border-b border-zinc-200 no-print action-toolbar">
        <div>
          <span className="text-[11px] font-bold tracking-wider text-hrl-crimson uppercase">FORMAT 1 · EXECUTIVE BRIEFING MEMORANDUM</span>
          <h3 className="font-bold text-base text-zinc-900 mt-1">{memo.title}</h3>
        </div>
        <button
          onClick={() => window.print()}
          className="px-4 py-2 rounded-full bg-zinc-900 hover:bg-black text-white font-bold text-xs transition-all flex items-center gap-2 shadow-sm cursor-pointer"
        >
          <Printer className="w-4 h-4 text-hrl-crimson" />
          <span>Save Clean 1-Page PDF</span>
        </button>
      </div>

      {/* Pristine Document Sheet */}
      <div className="bg-white rounded-2xl border border-zinc-200 p-8 shadow-sm print-document-container">
        {/* Document Header Metadata with HRL Logo */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-zinc-200">
          <div className="flex items-center gap-3">
            <img src="./hrl_logo_transparent.png" alt="HRL Logo" className="h-6 object-contain" />
            <div>
              <span className="font-bold text-sm text-zinc-900 block">OMNITRANSFORM INTELLIGENCE BRIEF</span>
              <span className="font-mono text-[10px] text-zinc-500 block">SIH 2026 // NTRO PS-26154 // HRL</span>
            </div>
          </div>
          <div className="flex items-center gap-1.5 text-xs font-bold font-mono text-rose-700 tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-600" />
            <span>{memo.classification}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pb-6 border-b border-zinc-200 text-xs print-section">
          <div>
            <span className="text-zinc-500 font-bold uppercase text-[10px] block">ISSUING AUTHORITY</span>
            <span className="font-bold text-zinc-900">{memo.organization}</span>
          </div>
          <div>
            <span className="text-zinc-500 font-bold uppercase text-[10px] block">DOCUMENT DATE</span>
            <span className="font-bold text-zinc-900">{memo.date}</span>
          </div>
          <div>
            <span className="text-zinc-500 font-bold uppercase text-[10px] block">PREPARED BY</span>
            <span className="font-bold text-zinc-900">HRL (ID: 104580)</span>
          </div>
          <div>
            <span className="text-zinc-500 font-bold uppercase text-[10px] block">DISTRIBUTION</span>
            <span className="font-bold text-zinc-900">Senior Leadership</span>
          </div>
        </div>

        {/* Section 1 */}
        <div className="mt-6 print-section">
          <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-wider mb-2">
            1. Executive Overview
          </h4>
          <p className="text-sm text-zinc-800 leading-relaxed bg-zinc-50 p-4 rounded-xl border border-zinc-200">
            {memo.executiveSummary}
          </p>
        </div>

        {/* Section 2 */}
        <div className="mt-6 print-section">
          <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-wider mb-3">
            2. Strategic Intelligence Findings (Verified Citations)
          </h4>
          <div className="space-y-3">
            {memo.keyFindings.map((finding, idx) => {
              const cit = getCitation(finding.citationId);

              return (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl border border-zinc-200 bg-white hover:border-zinc-300 transition-all flex items-start justify-between gap-3"
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
                      className="shrink-0 text-xs font-bold px-3 py-1 rounded-full bg-hrl-crimson-tint hover:bg-hrl-crimson text-hrl-crimson hover:text-white border border-hrl-crimson/30 transition-all flex items-center gap-1 group cursor-pointer print-citation-badge"
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
        <div className="mt-6 print-section">
          <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-wider mb-3">
            3. Recommended Action Matrix
          </h4>
          <div className="space-y-2.5">
            {memo.actionItems.map((item, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-zinc-300 transition-all"
              >
                <div className="flex items-center gap-3 flex-1">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-rose-50 text-hrl-crimson border border-rose-200/60 shrink-0 whitespace-nowrap">
                    {item.priority}
                  </span>
                  <p className="text-xs sm:text-sm text-zinc-800 font-medium leading-normal">
                    {item.action}
                  </p>
                </div>
                <div className="text-[11px] sm:text-xs font-semibold text-zinc-500 bg-white px-3 py-1 rounded-lg border border-zinc-200 shrink-0 whitespace-nowrap self-start sm:self-auto">
                  {item.owner}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
