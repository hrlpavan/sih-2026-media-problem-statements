import React from 'react';
import type { ExecutiveMemo, Citation } from '../../types';
import { Download, ExternalLink, Clock } from 'lucide-react';

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
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-surface-200">
        <div>
          <span className="text-xs font-bold text-sih-navy uppercase tracking-wider bg-sih-blue-light px-2.5 py-1 rounded-md border border-sih-blue/20">
            Format 1: Executive 1-Page Summary Brief
          </span>
          <h3 className="text-lg font-bold text-surface-900 mt-1">{memo.title}</h3>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => window.print()}
            className="px-3.5 py-2 rounded-lg bg-surface-100 hover:bg-surface-200 text-surface-700 font-semibold text-xs border border-surface-300 transition-all flex items-center gap-1.5"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export 1-Page PDF</span>
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl border-2 border-surface-300 p-8 shadow-sm font-serif">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pb-6 border-b border-surface-300 text-xs text-surface-700 font-sans">
          <div>
            <span className="text-surface-400 block font-bold uppercase text-[10px]">ISSUING AUTHORITY</span>
            <span className="font-bold text-sih-navy">{memo.organization}</span>
          </div>
          <div>
            <span className="text-surface-400 block font-bold uppercase text-[10px]">DOCUMENT DATE</span>
            <span className="font-bold">{memo.date}</span>
          </div>
          <div>
            <span className="text-surface-400 block font-bold uppercase text-[10px]">SECURITY LEVEL</span>
            <span className="font-bold text-rose-700">{memo.classification}</span>
          </div>
          <div>
            <span className="text-surface-400 block font-bold uppercase text-[10px]">TARGET AUDIENCE</span>
            <span className="font-bold text-sih-navy">Senior Leadership & C-Suite</span>
          </div>
        </div>

        <div className="mt-6">
          <h4 className="text-sm font-bold font-sans text-sih-navy uppercase tracking-wider mb-2">
            1. Executive Overview
          </h4>
          <p className="text-surface-800 leading-relaxed text-sm font-sans bg-surface-50 p-4 rounded-lg border border-surface-200">
            {memo.executiveSummary}
          </p>
        </div>

        <div className="mt-6">
          <h4 className="text-sm font-bold font-sans text-sih-navy uppercase tracking-wider mb-3">
            2. Strategic Intelligence Findings (Click any badge to verify source PDF)
          </h4>
          <div className="space-y-3 font-sans">
            {memo.keyFindings.map((finding, idx) => {
              const cit = getCitation(finding.citationId);

              return (
                <div
                  key={idx}
                  className="p-3.5 rounded-lg border border-surface-200 bg-white hover:border-sih-blue/60 hover:shadow-sm transition-all flex items-start justify-between gap-4"
                >
                  <div className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-sih-navy text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <p className="text-xs font-medium text-surface-800 leading-relaxed">
                      {finding.point}
                    </p>
                  </div>

                  {cit && (
                    <button
                      onClick={() => onOpenCitation(cit)}
                      className="shrink-0 text-[11px] font-bold px-2.5 py-1 rounded-md bg-sih-orange/10 hover:bg-sih-orange text-sih-orange hover:text-white border border-sih-orange/30 transition-all flex items-center gap-1 group"
                      title="Click to view exact source bounding box in raw PDF"
                    >
                      <span>Page {cit.pageNumber}</span>
                      <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-6">
          <h4 className="text-sm font-bold font-sans text-sih-navy uppercase tracking-wider mb-3">
            3. Recommended Action Matrix
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 font-sans">
            {memo.actionItems.map((item, idx) => (
              <div key={idx} className="p-3.5 rounded-lg bg-surface-50 border border-surface-200">
                <div className="flex items-center justify-between text-[11px] font-bold text-sih-navy mb-1.5">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-sih-orange" /> {item.priority}
                  </span>
                  <span className="text-surface-500">{item.owner}</span>
                </div>
                <p className="text-xs text-surface-700 font-medium leading-normal">{item.action}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
