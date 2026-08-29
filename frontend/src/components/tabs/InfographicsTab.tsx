import React from 'react';
import type { InfographicCard } from '../../types';
import { BarChart3, Download, Check } from 'lucide-react';

interface InfographicsTabProps {
  cards: InfographicCard[];
}

export const InfographicsTab: React.FC<InfographicsTabProps> = ({ cards }) => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-surface-200">
        <div>
          <span className="text-xs font-bold text-sih-navy uppercase tracking-wider bg-sih-blue-light px-2.5 py-1 rounded-md border border-sih-blue/20">
            Format 3: Visual Infographics & Social Cards
          </span>
          <h3 className="text-lg font-bold text-surface-900 mt-1">
            Auto-Generated Metric Visualizations & Social Cards
          </h3>
        </div>
        <button
          onClick={() => alert('Exporting all high-res SVG & PNG data cards...')}
          className="px-3.5 py-2 rounded-lg bg-surface-100 hover:bg-surface-200 text-surface-700 font-semibold text-xs border border-surface-300 transition-all flex items-center gap-1.5"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Export All Cards (PNG)</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-2xl border border-surface-200 p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative overflow-hidden group"
          >
            <div
              className="absolute top-0 left-0 right-0 h-1.5"
              style={{ backgroundColor: card.color }}
            />

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-bold text-surface-500 uppercase tracking-wider">
                  {card.category}
                </span>
                <span className="p-1.5 rounded-lg bg-surface-100 text-surface-600 group-hover:bg-sih-navy group-hover:text-white transition-colors">
                  <BarChart3 className="w-4 h-4" />
                </span>
              </div>

              <h4 className="font-bold text-base text-surface-900 mb-1">{card.title}</h4>

              <div className="my-6 p-4 rounded-xl bg-surface-50 border border-surface-200 text-center">
                <span
                  className="text-4xl font-extrabold block tracking-tight"
                  style={{ color: card.color }}
                >
                  {card.statValue}
                </span>
                <span className="text-xs font-bold text-surface-600 block mt-1">
                  {card.statLabel}
                </span>
              </div>

              <div className="space-y-2 mb-6">
                {card.details.map((d, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-surface-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-sih-orange mt-1.5 shrink-0" />
                    <span>{d}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-surface-100 flex items-center justify-between">
              <span className="text-[11px] font-semibold text-emerald-700 flex items-center gap-1">
                <Check className="w-3.5 h-3.5" /> High-Res SVG Ready
              </span>
              <button
                onClick={() => alert(`Downloaded ${card.title} card as PNG`)}
                className="text-xs font-bold text-sih-navy hover:text-sih-orange transition-colors flex items-center gap-1"
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
