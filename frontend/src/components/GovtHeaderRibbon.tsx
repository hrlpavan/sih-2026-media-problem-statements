import React from 'react';

export const GovtHeaderRibbon: React.FC = () => {
  return (
    <div className="bg-white border-b border-zinc-200/80 py-1.5 sm:py-2 select-none no-print transition-all w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-3">
        {/* Government of India & Hackathon Logos Strip */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0 overflow-x-auto no-scrollbar py-0.5">
          {/* Ministry of Education */}
          <div className="flex items-center shrink-0">
            <img
              src="./gov_moe_logo.jpg"
              alt="Ministry of Education - Government of India"
              className="h-5 sm:h-6 md:h-7 object-contain"
            />
          </div>

          <div className="h-3.5 sm:h-4 w-px bg-zinc-200 shrink-0" />

          {/* AICTE */}
          <div className="flex items-center shrink-0">
            <img
              src="./gov_aicte_logo.png"
              alt="AICTE"
              className="h-5 sm:h-6 md:h-7 object-contain"
            />
          </div>

          <div className="h-3.5 sm:h-4 w-px bg-zinc-200 shrink-0" />

          {/* MoE's Innovation Cell */}
          <div className="flex items-center shrink-0">
            <img
              src="./gov_mic_logo.jpg"
              alt="MoE's Innovation Cell"
              className="h-4.5 sm:h-5.5 md:h-6 object-contain mix-blend-multiply"
            />
          </div>

          <div className="h-3.5 sm:h-4 w-px bg-zinc-200 shrink-0" />

          {/* Smart India Hackathon 2026 */}
          <div className="flex items-center shrink-0">
            <img
              src="./gov_sih_logo.png"
              alt="Smart India Hackathon 2026"
              className="h-5 sm:h-6 md:h-7 object-contain"
            />
          </div>
        </div>

        {/* Right Initiative Badge */}
        <div className="flex items-center gap-2 shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
          <span className="text-[11px] sm:text-xs md:text-[13px] font-medium text-zinc-700 tracking-tight whitespace-nowrap">
            Government of India Innovation Initiative
          </span>
        </div>
      </div>
    </div>
  );
};
