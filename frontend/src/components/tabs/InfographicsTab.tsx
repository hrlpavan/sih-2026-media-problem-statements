import React from 'react';
import type { InfographicCard } from '../../types';
import { Download, Check } from 'lucide-react';

interface InfographicsTabProps {
  cards: InfographicCard[];
}

export const InfographicsTab: React.FC<InfographicsTabProps> = ({ cards }) => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-3 border-b border-zinc-200 no-print">
        <div>
          <span className="text-[11px] font-bold tracking-wider text-hrl-crimson uppercase">FORMAT 3 · VISUAL INFOGRAPHICS</span>
          <h3 className="font-bold text-base text-zinc-900 mt-1">
            Visual Key Metric Data Cards
          </h3>
        </div>
        <button
          onClick={() => alert('Downloading all metric cards as images...')}
          className="px-4 py-2 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-900 font-bold text-xs border border-zinc-300 transition-all flex items-center gap-1.5 cursor-pointer shadow-sm"
        >
          <Download className="w-3.5 h-3.5 text-zinc-600" />
          <span>Download All Cards (PNG)</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-3xl border border-zinc-200 p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <span className="text-[11px] font-bold text-zinc-500 uppercase tracking-wider block mb-1">
                {card.category}
              </span>
              <h4 className="font-bold text-sm text-zinc-900">{card.title}</h4>

              {/* Big Stat Box */}
              <div className="my-5 p-5 rounded-2xl bg-zinc-50 border border-zinc-200 text-center">
                <span
                  className="text-4xl font-extrabold block tracking-tight text-hrl-crimson"
                >
                  {card.statValue}
                </span>
                <span className="text-xs font-bold text-zinc-600 block mt-1">
                  {card.statLabel}
                </span>
              </div>

              <div className="space-y-2 mb-6">
                {card.details.map((d, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-zinc-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-hrl-crimson mt-1.5 shrink-0" />
                    <span>{d}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-zinc-100 flex items-center justify-between">
              <span className="text-xs font-bold text-emerald-700 flex items-center gap-1">
                <Check className="w-3.5 h-3.5" /> High-Resolution Ready
              </span>
              <button
                onClick={() => alert(`Downloaded ${card.title} as image`)}
                className="text-xs font-bold text-hrl-crimson hover:underline flex items-center gap-1 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" /> Download
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
