import React from 'react';
import type { InfographicCard } from '../../types';
import { Download, Check } from 'lucide-react';

interface InfographicsTabProps {
  cards: InfographicCard[];
}

export const InfographicsTab: React.FC<InfographicsTabProps> = ({ cards }) => {
  return (
    <div className="space-y-5">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-3 border-b border-zinc-200 no-print">
        <div>
          <span className="font-mono text-[10px] font-semibold text-zinc-500 uppercase tracking-wider bg-zinc-100 px-2 py-0.5 rounded border border-zinc-200">
            FORMAT_03 // METRIC_TELEMETRY
          </span>
          <h3 className="text-sm font-semibold text-zinc-900 mt-1">
            Visual Metric Cards & Statistical Data
          </h3>
        </div>
        <button
          onClick={() => alert('Exporting SVG/PNG metric cards...')}
          className="px-3 py-1.5 rounded bg-white hover:bg-zinc-100 text-zinc-700 font-medium text-xs border border-zinc-200 transition-all flex items-center gap-1.5 shadow-sm"
        >
          <Download className="w-3.5 h-3.5 text-zinc-500" />
          <span>Export Cards (PNG)</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-lg border border-zinc-200 p-5 shadow-sm hover:border-zinc-300 transition-all flex flex-col justify-between"
          >
            <div>
              <span className="font-mono text-[9px] font-semibold text-zinc-400 uppercase tracking-wider block mb-1">
                {card.category}
              </span>
              <h4 className="font-semibold text-xs text-zinc-900">{card.title}</h4>

              <div className="my-4 p-4 rounded bg-zinc-50 border border-zinc-200 text-center">
                <span
                  className="text-3xl font-extrabold block font-mono tracking-tight text-zinc-900"
                >
                  {card.statValue}
                </span>
                <span className="font-mono text-[10px] text-zinc-500 block mt-0.5 font-medium">
                  {card.statLabel}
                </span>
              </div>

              <div className="space-y-1.5 mb-4">
                {card.details.map((d, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-zinc-700">
                    <span className="font-mono text-[10px] text-orange-600">-</span>
                    <span>{d}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-zinc-100 flex items-center justify-between">
              <span className="font-mono text-[10px] text-emerald-700 flex items-center gap-1 font-semibold">
                <Check className="w-3 h-3" /> READY
              </span>
              <button
                onClick={() => alert(`Downloaded ${card.title} asset`)}
                className="font-mono text-[10px] font-semibold text-zinc-600 hover:text-zinc-900 transition-colors flex items-center gap-1"
              >
                <Download className="w-3 h-3" /> EXPORT
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
