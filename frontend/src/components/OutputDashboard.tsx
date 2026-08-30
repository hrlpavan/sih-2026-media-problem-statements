import React, { useState } from 'react';
import type { TransformedOutput, Citation } from '../types';
import { ExecutiveMemoTab } from './tabs/ExecutiveMemoTab';
import { SlideDeckTab } from './tabs/SlideDeckTab';
import { InfographicsTab } from './tabs/InfographicsTab';
import { PressReleaseTab } from './tabs/PressReleaseTab';
import { VoicePodcastTab } from './tabs/VoicePodcastTab';
import { FileText, Presentation, BarChart3, Newspaper, Radio, CheckCircle2 } from 'lucide-react';

interface OutputDashboardProps {
  output: TransformedOutput;
  onOpenCitation: (cit: Citation) => void;
}

export const OutputDashboard: React.FC<OutputDashboardProps> = ({ output, onOpenCitation }) => {
  const [activeTab, setActiveTab] = useState<'memo' | 'slides' | 'infographics' | 'press' | 'audio'>('memo');

  const tabs = [
    { id: 'memo', label: '1. Executive Memo', icon: FileText, desc: '1-Page Decision Brief' },
    { id: 'slides', label: '2. Meeting Slides', icon: Presentation, desc: 'Ready-to-Present PPT' },
    { id: 'infographics', label: '3. Infographics', icon: BarChart3, desc: 'Visual Metric Cards' },
    { id: 'press', label: '4. Regional News', icon: Newspaper, desc: '4 Indian Languages' },
    { id: 'audio', label: '5. Voice AI', icon: Radio, desc: '60s Neural Audio' }
  ];

  return (
    <div className="bg-white rounded-[28px] border border-black/5 p-6 sm:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04),0_1px_2px_rgba(0,0,0,0.02)] max-w-4xl mx-auto mb-12">
      {/* Title & Verification Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-5 border-b border-zinc-100 no-print">
        <div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <h2 className="text-lg font-bold text-[#1D1D1F] tracking-tight">
              Transformation Complete · 5 Formats Ready
            </h2>
          </div>
          <p className="text-xs text-[#86868B] mt-0.5 font-normal">
            Synthesized {output.sourcePageCount} pages in {(output.processingTimeMs / 1000).toFixed(1)}s · Verified source citations.
          </p>
        </div>

        <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50/80 px-3 py-1 rounded-full border border-emerald-200/60">
          100% Grounded in Source
        </span>
      </div>

      {/* Apple Squircle Segmented Tabs Bar (macOS / iOS HIG Design) */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-1.5 my-6 p-1.5 bg-[#F2F2F7] rounded-[20px] border border-black/5 tabs-navigation-strip no-print">
        {tabs.map((t) => {
          const Icon = t.icon;
          const isActive = activeTab === t.id;

          return (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id as any)}
              className={`p-3 rounded-[14px] text-left transition-all duration-200 flex flex-col justify-between cursor-pointer ${
                isActive
                  ? 'bg-white text-[#1D1D1F] shadow-[0_3px_10px_rgba(0,0,0,0.08),0_1px_2px_rgba(0,0,0,0.04)] border border-black/5 font-semibold'
                  : 'text-[#86868B] hover:text-[#1D1D1F] hover:bg-white/40 font-normal'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <Icon className={`w-4 h-4 transition-colors ${isActive ? 'text-hrl-crimson' : 'text-[#86868B]'}`} />
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-hrl-crimson" />}
              </div>
              <span className={`text-[12px] block leading-tight tracking-tight ${isActive ? 'font-bold text-[#1D1D1F]' : 'font-medium'}`}>
                {t.label}
              </span>
              <span className="text-[10.5px] block text-[#86868B] mt-0.5 leading-tight font-normal">
                {t.desc}
              </span>
            </button>
          );
        })}
      </div>

      {/* Tab Panes */}
      <div>
        {activeTab === 'memo' && (
          <ExecutiveMemoTab
            memo={output.executiveMemo}
            citations={output.citations}
            onOpenCitation={onOpenCitation}
          />
        )}

        {activeTab === 'slides' && (
          <SlideDeckTab slides={output.slideDeck} />
        )}

        {activeTab === 'infographics' && (
          <InfographicsTab cards={output.infographics} />
        )}

        {activeTab === 'press' && (
          <PressReleaseTab pressReleases={output.pressReleases} />
        )}

        {activeTab === 'audio' && (
          <VoicePodcastTab podcast={output.audioPodcast} />
        )}
      </div>
    </div>
  );
};
