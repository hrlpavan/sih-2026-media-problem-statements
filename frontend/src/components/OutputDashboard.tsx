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
    { id: 'memo', label: '01 Memo', icon: FileText, desc: 'Executive Brief' },
    { id: 'slides', label: '02 Slides', icon: Presentation, desc: 'Meeting Deck' },
    { id: 'infographics', label: '03 Metrics', icon: BarChart3, desc: 'Data Cards' },
    { id: 'press', label: '04 Press', icon: Newspaper, desc: 'Multilingual' },
    { id: 'audio', label: '05 Audio', icon: Radio, desc: '60s Voice Brief' }
  ];

  return (
    <div className="industrial-panel rounded-xl p-6 mb-8">
      {/* Telemetry Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-zinc-200 no-print">
        <div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-900">
              Single-Pass Multi-Format Transformation Complete
            </h2>
          </div>
          <p className="font-mono text-[11px] text-zinc-500 mt-0.5">
            PAGES: {output.sourcePageCount} // LATENCY: {(output.processingTimeMs / 1000).toFixed(2)}S // STATUS: VERIFIED
          </p>
        </div>

        <span className="font-mono text-[10px] font-medium text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
          REVERSE_CITATION_INDEX: 100% GROUNDED
        </span>
      </div>

      {/* Industrial Segmented Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-1.5 my-5 p-1 bg-zinc-100 rounded-lg border border-zinc-200 tabs-nav-bar no-print">
        {tabs.map((t) => {
          const Icon = t.icon;
          const isActive = activeTab === t.id;

          return (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id as any)}
              className={`p-2.5 rounded font-medium transition-all text-left flex flex-col justify-between ${
                isActive
                  ? 'bg-white text-zinc-900 shadow-sm border border-zinc-200 font-semibold'
                  : 'text-zinc-500 hover:text-zinc-900 hover:bg-zinc-200/50'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-orange-600' : 'text-zinc-400'}`} />
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-orange-600" />}
              </div>
              <span className="text-xs font-semibold block leading-tight">{t.label}</span>
              <span className="font-mono text-[9px] block text-zinc-400 mt-0.5">
                {t.desc}
              </span>
            </button>
          );
        })}
      </div>

      {/* Output Content Panes */}
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
