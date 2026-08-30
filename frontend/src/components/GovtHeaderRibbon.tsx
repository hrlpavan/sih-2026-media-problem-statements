import React from 'react';

export const GovtHeaderRibbon: React.FC = () => {
  return (
    <div className="bg-white border-b border-zinc-200/80 py-2 select-none no-print transition-all w-full">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24 flex flex-col sm:flex-row items-center justify-between gap-3">
        {/* Government of India & Hackathon Logos Strip */}
        <div className="flex items-center gap-3 sm:gap-5 overflow-x-auto no-scrollbar py-0.5 max-w-full">
          {/* Ministry of Education */}
          <div className="flex items-center shrink-0">
            <img
              src="./gov_moe_logo.jpg"
              alt="Ministry of Education - Government of India"
              className="h-6 sm:h-7 md:h-8 object-contain"
            />
          </div>

          <div className="h-4 sm:h-5 w-px bg-zinc-200 shrink-0" />

          {/* AICTE */}
          <div className="flex items-center shrink-0">
            <img
              src="./gov_aicte_logo.png"
              alt="AICTE"
              className="h-6 sm:h-7 md:h-8 object-contain"
            />
          </div>

          <div className="h-4 sm:h-5 w-px bg-zinc-200 shrink-0" />

          {/* MoE's Innovation Cell */}
          <div className="flex items-center shrink-0">
            <img
              src="./gov_mic_logo.jpg"
              alt="MoE's Innovation Cell"
              className="h-5 sm:h-6 md:h-7 object-contain mix-blend-multiply"
            />
          </div>

          <div className="h-4 sm:h-5 w-px bg-zinc-200 shrink-0" />

          {/* Smart India Hackathon 2026 */}
          <div className="flex items-center shrink-0">
            <img
              src="./gov_sih_logo.png"
              alt="Smart India Hackathon 2026"
              className="h-6 sm:h-7 md:h-8 object-contain"
            />
          </div>
        </div>

        {/* Right Initiative Badge */}
        <div className="flex items-center gap-2 shrink-0">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
          <span className="text-xs sm:text-[13px] md:text-sm font-semibold text-zinc-700 tracking-tight whitespace-nowrap">
            Government of India Innovation Initiative
          </span>
        </div>
      </div>
    </div>
  );
};
