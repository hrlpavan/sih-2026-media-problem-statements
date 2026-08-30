import React, { useState } from 'react';
import { ArrowRight, X, Users } from 'lucide-react';

interface WorkforceAwarenessBannerProps {
  onOpenReport: () => void;
}

export const WorkforceAwarenessBanner: React.FC<WorkforceAwarenessBannerProps> = ({ onOpenReport }) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-[#1D1D1F] via-zinc-900 to-[#1D1D1F] text-white rounded-[20px] p-4 sm:p-5 border border-white/10 shadow-lg relative overflow-hidden animate-in fade-in slide-in-from-top-3 duration-200">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-hrl-crimson/10 rounded-full blur-3xl pointer-events-none" />

      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 relative z-10">
        <div className="flex items-start sm:items-center gap-3.5">
          <div className="w-10 h-10 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center shrink-0">
            <Users className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-bold font-mono text-rose-400 tracking-wider uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-ping" />
                <span>WORKFORCE IMPACT & JOB CREATION ANNOUNCEMENT</span>
              </div>
              <span className="text-xs text-white/30 hidden sm:inline">·</span>
              <span className="text-[11px] text-zinc-400 font-mono hidden sm:inline">+25,500 High-Skilled Jobs</span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-300 mt-1 max-w-2xl leading-relaxed">
              Automating <strong>6,200 routine copy-paste hours</strong> to create <strong>25,500+ net new sovereign AI & cyber defense jobs</strong> with our 30-Day Upskilling Blueprint.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 w-full md:w-auto justify-end shrink-0 pt-2 md:pt-0 border-t border-white/10 md:border-t-0">
          <button
            onClick={onOpenReport}
            className="px-4 py-2 rounded-full bg-white text-zinc-900 hover:bg-zinc-100 font-bold text-xs transition-all flex items-center gap-1.5 cursor-pointer shadow-md hover:scale-105"
          >
            <span>Explore Workforce Report</span>
            <ArrowRight className="w-3.5 h-3.5 text-hrl-crimson" />
          </button>
          <button
            onClick={() => setIsVisible(false)}
            className="p-2 rounded-full hover:bg-white/10 text-zinc-400 hover:text-white transition-all cursor-pointer"
            title="Dismiss Announcement"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
