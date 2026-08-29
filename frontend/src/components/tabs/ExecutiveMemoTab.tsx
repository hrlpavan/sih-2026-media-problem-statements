import React from 'react';
import type { ExecutiveMemo, Citation } from '../../types';
import { Download, ArrowUpRight, Clock } from 'lucide-react';

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
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-black/[0.06]">
        <div>
          <span className="text-[11px] font-semibold text-sih-navy uppercase tracking-wider bg-sih-blue-light px-2.5 py-1 rounded-full">
            Format 1: Executive 1-Page Summary Brief
          </span>
          <h3 className="text-lg font-semibold text-apple-text mt-1">{memo.title}</h3>
        </div>
        <button
          onClick={() => window.print()}
          className="px-4 py-2 rounded-xl bg-apple-bg hover:bg-apple-gray text-apple-text font-medium text-xs border border-black/[0.08] transition-all flex items-center gap-1.5 shadow-apple-sm"
        >
          <Download className="w-3.5 h-3.5 text-apple-subtext" />
          <span>Export PDF</span>
        </button>
      </div>

      {/* Document Sheet */}
      <div className="bg-white rounded-2xl border border-black/[0.08] p-8 shadow-apple-sm">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pb-6 border-b border-black/[0.06] text-xs">
          <div>
            <span className="text-apple-subtext block font-medium uppercase text-[10px]">ISSUING AUTHORITY</span>
            <span className="font-semibold text-apple-text">{memo.organization}</span>
          </div>
          <div>
            <span className="text-apple-subtext block font-medium uppercase text-[10px]">DATE</span>
            <span className="font-semibold text-apple-text">{memo.date}</span>
          </div>
          <div>
            <span className="text-apple-subtext block font-medium uppercase text-[10px]">CLASSIFICATION</span>
            <span className="font-semibold text-rose-700">{memo.classification}</span>
          </div>
          <div>
            <span className="text-apple-subtext block font-medium uppercase text-[10px]">AUDIENCE</span>
            <span className="font-semibold text-apple-text">Senior Leadership</span>
          </div>
        </div>

        <div className="mt-6">
          <h4 className="text-xs font-semibold text-apple-text uppercase tracking-wider mb-2">
            1. Executive Summary
          </h4>
          <p className="text-apple-text text-sm leading-relaxed bg-apple-bg p-4 rounded-xl border border-black/[0.04]">
            {memo.executiveSummary}
          </p>
        </div>

        <div className="mt-6">
          <h4 className="text-xs font-semibold text-apple-text uppercase tracking-wider mb-3">
            2. Strategic Intelligence Findings (Verified Citations)
          </h4>
          <div className="space-y-3">
            {memo.keyFindings.map((finding, idx) => {
              const cit = getCitation(finding.citationId);

              return (
                <div
                  key={idx}
                  className="p-4 rounded-xl border border-black/[0.06] bg-white hover:border-sih-blue/40 hover:shadow-apple-sm transition-all flex items-start justify-between gap-4"
                >
                  <div className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-sih-navy text-white text-[11px] font-semibold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <p className="text-xs font-medium text-apple-text leading-relaxed">
                      {finding.point}
                    </p>
                  </div>

                  {cit && (
                    <button
                      onClick={() => onOpenCitation(cit)}
                      className="shrink-0 text-[11px] font-semibold px-2.5 py-1 rounded-full bg-sih-orange/10 hover:bg-sih-orange text-sih-orange hover:text-white transition-all flex items-center gap-1 group"
                    >
                      <span>Page {cit.pageNumber}</span>
                      <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-6">
          <h4 className="text-xs font-semibold text-apple-text uppercase tracking-wider mb-3">
            3. Recommended Action Matrix
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {memo.actionItems.map((item, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-apple-bg border border-black/[0.04]">
                <div className="flex items-center justify-between text-[11px] font-semibold text-apple-text mb-1.5">
                  <span className="flex items-center gap-1 text-sih-orange">
                    <Clock className="w-3 h-3" /> {item.priority}
                  </span>
                  <span className="text-apple-subtext">{item.owner}</span>
                </div>
                <p className="text-xs text-apple-text leading-normal">{item.action}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
