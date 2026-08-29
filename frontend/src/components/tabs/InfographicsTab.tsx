import React from 'react';
import type { InfographicCard } from '../../types';
import { Download, Check } from 'lucide-react';

interface InfographicsTabProps {
  cards: InfographicCard[];
}

export const InfographicsTab: React.FC<InfographicsTabProps> = ({ cards }) => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-3 border-b border-classic-border no-print">
        <div>
          <span className="text-xs font-bold text-classic-navy bg-classic-bg px-2.5 py-1 rounded border border-classic-border">
            FORMAT 3: VISUAL INFOGRAPHICS
          </span>
          <h3 className="font-serif font-bold text-base text-classic-navy mt-1">
            Visual Key Metric Data Cards
          </h3>
        </div>
        <button
          onClick={() => alert('Downloading all metric cards as images...')}
          className="px-4 py-2 rounded-lg bg-classic-bg hover:bg-zinc-200 text-classic-navy font-bold text-xs border border-classic-border transition-all flex items-center gap-1.5 cursor-pointer shadow-classic-sm"
        >
          <Download className="w-3.5 h-3.5 text-classic-slate-muted" />
          <span>Download All Cards (PNG)</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-2xl border border-classic-border p-6 shadow-classic-sm hover:shadow-classic-md transition-all flex flex-col justify-between"
          >
            <div>
              <span className="text-[11px] font-bold text-classic-slate-muted uppercase tracking-wider block mb-1">
                {card.category}
              </span>
              <h4 className="font-serif font-bold text-sm text-classic-navy">{card.title}</h4>

              {/* Big Stat Box */}
              <div className="my-5 p-5 rounded-xl bg-classic-bg border border-classic-border text-center">
                <span
                  className="font-serif text-4xl font-extrabold block tracking-tight"
                  style={{ color: card.color }}
                >
                  {card.statValue}
                </span>
                <span className="text-xs font-bold text-classic-slate-muted block mt-1">
                  {card.statLabel}
                </span>
              </div>

              <div className="space-y-2 mb-6">
                {card.details.map((d, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-classic-slate">
                    <span className="w-1.5 h-1.5 rounded-full bg-classic-ochre mt-1.5 shrink-0" />
                    <span>{d}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-classic-border flex items-center justify-between">
              <span className="text-xs font-bold text-classic-green flex items-center gap-1">
                <Check className="w-3.5 h-3.5" /> High-Resolution Ready
              </span>
              <button
                onClick={() => alert(`Downloaded ${card.title} as image`)}
                className="text-xs font-bold text-classic-navy hover:text-classic-ochre flex items-center gap-1 cursor-pointer"
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
