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
    { id: 'memo', label: '1. Executive Memo', icon: FileText, desc: '1-Page Summary Brief' },
    { id: 'slides', label: '2. Meeting Slides', icon: Presentation, desc: 'Ready-to-Present PPT' },
    { id: 'infographics', label: '3. Infographics', icon: BarChart3, desc: 'Visual Metric Cards' },
    { id: 'press', label: '4. Regional News', icon: Newspaper, desc: '4 Indian Languages' },
    { id: 'audio', label: '5. Voice AI', icon: Radio, desc: '60s Neural Audio' }
  ];

  return (
    <div className="bg-white rounded-3xl border border-zinc-200 p-6 sm:p-8 shadow-hrl-card max-w-4xl mx-auto mb-12">
      {/* Title & Grounding Badge */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-zinc-100 no-print">
        <div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            <h2 className="text-lg sm:text-xl font-bold text-zinc-900 tracking-tight">
              Transformation Complete · 5 Formats Ready
            </h2>
          </div>
          <p className="text-xs text-zinc-500 mt-1">
            Processed {output.sourcePageCount} pages in {(output.processingTimeMs / 1000).toFixed(1)}s · Every fact verified with spatial coordinate citations.
          </p>
        </div>

        <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200">
          100% Grounded in Source Document
        </span>
      </div>

      {/* HRL Segmented Tabs Navigation */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 my-6 p-1.5 bg-zinc-100 rounded-2xl border border-zinc-200/70 tabs-navigation-strip no-print">
        {tabs.map((t) => {
          const Icon = t.icon;
          const isActive = activeTab === t.id;

          return (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id as any)}
              className={`p-3 rounded-xl font-medium transition-all text-left flex flex-col justify-between cursor-pointer ${
                isActive
                  ? 'bg-white text-zinc-900 shadow-sm border border-zinc-200 font-bold scale-[1.01]'
                  : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200/50'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <Icon className={`w-4 h-4 ${isActive ? 'text-hrl-red' : 'text-zinc-500'}`} />
                {isActive && <span className="w-2 h-2 rounded-full bg-hrl-red" />}
              </div>
              <span className="text-xs font-bold block leading-tight">{t.label}</span>
              <span className="text-[10px] block text-zinc-500 mt-0.5 font-normal">
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
