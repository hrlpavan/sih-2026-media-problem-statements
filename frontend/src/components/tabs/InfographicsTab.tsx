import React from 'react';
import type { InfographicCard } from '../../types';
import { Download, Check } from 'lucide-react';

interface InfographicsTabProps {
  cards: InfographicCard[];
}

export const InfographicsTab: React.FC<InfographicsTabProps> = ({ cards }) => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-black/[0.06]">
        <div>
          <span className="text-[11px] font-semibold text-sih-navy uppercase tracking-wider bg-sih-blue-light px-2.5 py-1 rounded-full">
            Format 3: Visual Infographics & Cards
          </span>
          <h3 className="text-lg font-semibold text-apple-text mt-1">
            Visual Intelligence Cards & Statistics
          </h3>
        </div>
        <button
          onClick={() => alert('Exporting all data cards as high-res PNG...')}
          className="px-4 py-2 rounded-xl bg-apple-bg hover:bg-apple-gray text-apple-text font-medium text-xs border border-black/[0.08] transition-all flex items-center gap-1.5 shadow-apple-sm"
        >
          <Download className="w-3.5 h-3.5 text-apple-subtext" />
          <span>Export All Cards</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-3xl border border-black/[0.08] p-6 shadow-apple-sm hover:shadow-apple-md transition-all flex flex-col justify-between"
          >
            <div>
              <span className="text-[10px] font-semibold text-apple-subtext uppercase tracking-wider block mb-1">
                {card.category}
              </span>
              <h4 className="font-semibold text-sm text-apple-text">{card.title}</h4>

              <div className="my-6 p-5 rounded-2xl bg-apple-bg text-center">
                <span
                  className="text-4xl font-extrabold block tracking-tight"
                  style={{ color: card.color }}
                >
                  {card.statValue}
                </span>
                <span className="text-xs font-medium text-apple-subtext block mt-1">
                  {card.statLabel}
                </span>
              </div>

              <div className="space-y-2 mb-6">
                {card.details.map((d, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-apple-text">
                    <span className="w-1.5 h-1.5 rounded-full bg-sih-orange mt-1.5 shrink-0" />
                    <span>{d}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-black/[0.06] flex items-center justify-between">
              <span className="text-[11px] font-medium text-sih-green flex items-center gap-1">
                <Check className="w-3.5 h-3.5" /> Ready
              </span>
              <button
                onClick={() => alert(`Downloaded ${card.title} card as PNG`)}
                className="text-xs font-semibold text-sih-blue hover:text-sih-navy transition-colors flex items-center gap-1"
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
