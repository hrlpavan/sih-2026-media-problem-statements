import React, { useState } from 'react';
import { ArrowRight, X, Users } from 'lucide-react';

interface WorkforceAwarenessBannerProps {
  onOpenReport: () => void;
}

export const WorkforceAwarenessBanner: React.FC<WorkforceAwarenessBannerProps> = ({ onOpenReport }) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-[#1C1C1E] via-[#2C2C2E] to-[#1C1C1E] text-white rounded-[22px] p-4 sm:p-5 border border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.08)] relative overflow-hidden transition-all">
      {/* Subtle Apple Radial Glow */}
      <div className="absolute -top-12 -right-12 w-48 h-48 bg-hrl-crimson/15 rounded-full blur-2xl pointer-events-none" />

      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 relative z-10">
        <div className="flex items-center gap-3.5">
          <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center shrink-0">
            <Users className="w-4 h-4 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-bold font-mono text-rose-400 tracking-wider uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                <span>WORKFORCE IMPACT AND JOB CREATION REPORT</span>
              </div>
              <span className="text-xs text-white/30 hidden sm:inline">·</span>
              <span className="text-[11px] text-zinc-400 font-mono hidden sm:inline">25,500 High-Skilled Positions</span>
            </div>
            <p className="text-xs sm:text-[13px] text-zinc-300 mt-1 max-w-2xl leading-relaxed font-normal">
              Automating 6,200 routine copy-paste formatting hours to create 25,500+ net new sovereign AI and cyber defense jobs with our 30-Day Upskilling Blueprint.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2.5 w-full md:w-auto justify-end shrink-0 pt-2 md:pt-0 border-t border-white/10 md:border-t-0">
          <button
            onClick={onOpenReport}
            className="px-4 py-2 rounded-full bg-white hover:bg-zinc-100 text-zinc-900 font-semibold text-xs transition-all duration-200 flex items-center gap-1.5 cursor-pointer shadow-sm hover:shadow"
          >
            <span>Explore Workforce Report</span>
            <ArrowRight className="w-3.5 h-3.5 text-hrl-crimson" />
          </button>
          <button
            onClick={() => setIsVisible(false)}
            className="p-1.5 rounded-full hover:bg-white/10 text-zinc-400 hover:text-white transition-all cursor-pointer"
            title="Dismiss"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
