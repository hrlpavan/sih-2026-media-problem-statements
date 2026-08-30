import React from 'react';

export const GovtHeaderRibbon: React.FC = () => {
  return (
    <div className="bg-white border-b border-zinc-200 py-1.5 select-none no-print transition-all w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Government of India & Hackathon Logos Strip with Seamless Transparency */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0 overflow-x-auto no-scrollbar py-0.5">
          {/* Ministry of Education */}
          <div className="flex items-center h-6 sm:h-7 shrink-0">
            <img
              src="./gov_moe_logo_transparent.png"
              alt="Ministry of Education - Government of India"
              className="h-5 sm:h-6 max-h-6 w-auto object-contain block"
            />
          </div>

          <div className="h-3.5 w-px bg-zinc-200 shrink-0" />

          {/* AICTE */}
          <div className="flex items-center h-6 sm:h-7 shrink-0">
            <img
              src="./gov_aicte_logo_transparent.png"
              alt="AICTE"
              className="h-5 sm:h-6 max-h-6 w-auto object-contain block"
            />
          </div>

          <div className="h-3.5 w-px bg-zinc-200 shrink-0" />

          {/* MoE's Innovation Cell */}
          <div className="flex items-center h-6 sm:h-7 shrink-0">
            <img
              src="./gov_mic_logo_transparent.png"
              alt="MoE's Innovation Cell"
              className="h-5 sm:h-6 max-h-6 w-auto object-contain block"
            />
          </div>

          <div className="h-3.5 w-px bg-zinc-200 shrink-0" />

          {/* Smart India Hackathon 2026 */}
          <div className="flex items-center h-6 sm:h-7 shrink-0">
            <img
              src="./gov_sih_logo_transparent.png"
              alt="Smart India Hackathon 2026"
              className="h-5 sm:h-6 max-h-6 w-auto object-contain block"
            />
          </div>
        </div>

        {/* Right Initiative Badge */}
        <div className="flex items-center gap-2 shrink-0">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
          <span className="text-[11px] sm:text-xs font-semibold text-zinc-700 tracking-tight whitespace-nowrap">
            Government of India Innovation Initiative
          </span>
        </div>
      </div>
    </div>
  );
};
