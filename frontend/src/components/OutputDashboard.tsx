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
    { id: 'memo', label: '1. Summary Memo', icon: FileText, desc: '1-Page Executive Brief' },
    { id: 'slides', label: '2. Slide Deck', icon: Presentation, desc: 'Meeting-Ready PPT' },
    { id: 'infographics', label: '3. Infographics', icon: BarChart3, desc: 'Key Metric Cards' },
    { id: 'press', label: '4. Regional News', icon: Newspaper, desc: '4 Indian Languages' },
    { id: 'audio', label: '5. Voice Podcast', icon: Radio, desc: '60s Audio Briefing' }
  ];

  return (
    <div className="bg-white rounded-2xl border border-classic-border p-6 sm:p-8 shadow-classic-sm mb-8">
      {/* Success Title */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-classic-border no-print">
        <div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-classic-green" />
            <h2 className="font-serif text-lg sm:text-xl font-bold text-classic-navy">
              Single-Pass Multi-Format Transformation Complete
            </h2>
          </div>
          <p className="text-xs text-classic-slate-muted mt-1">
            Processed {output.sourcePageCount} pages in {(output.processingTimeMs / 1000).toFixed(1)}s • Reverse citations active across all generated formats.
          </p>
        </div>

        <span className="text-xs font-bold text-classic-green bg-classic-green-light px-3 py-1.5 rounded-full border border-emerald-200">
          100% Grounded in Source Document
        </span>
      </div>

      {/* 5 Classic Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 my-6 p-1.5 bg-classic-bg rounded-xl border border-classic-border tabs-nav-bar no-print">
        {tabs.map((t) => {
          const Icon = t.icon;
          const isActive = activeTab === t.id;

          return (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id as any)}
              className={`p-3 rounded-lg font-medium transition-all text-left flex flex-col justify-between cursor-pointer ${
                isActive
                  ? 'bg-white text-classic-navy shadow-classic-sm border border-classic-border font-bold'
                  : 'text-classic-slate-muted hover:text-classic-navy hover:bg-zinc-200/50'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <Icon className={`w-4 h-4 ${isActive ? 'text-classic-ochre' : 'text-classic-slate-muted'}`} />
                {isActive && <span className="w-2 h-2 rounded-full bg-classic-ochre" />}
              </div>
              <span className="text-xs font-bold block leading-tight">{t.label}</span>
              <span className="text-[11px] block text-classic-slate-muted mt-0.5 font-normal">
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
