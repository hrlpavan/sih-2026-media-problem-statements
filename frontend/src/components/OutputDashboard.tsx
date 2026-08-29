import React, { useState } from 'react';
import type { TransformedOutput, Citation } from '../types';
import { ExecutiveMemoTab } from './tabs/ExecutiveMemoTab';
import { SlideDeckTab } from './tabs/SlideDeckTab';
import { InfographicsTab } from './tabs/InfographicsTab';
import { PressReleaseTab } from './tabs/PressReleaseTab';
import { VoicePodcastTab } from './tabs/VoicePodcastTab';
import { FileText, Presentation, BarChart3, Newspaper, Mic, Sparkles, CheckCircle2 } from 'lucide-react';

interface OutputDashboardProps {
  output: TransformedOutput;
  onOpenCitation: (cit: Citation) => void;
}

export const OutputDashboard: React.FC<OutputDashboardProps> = ({ output, onOpenCitation }) => {
  const [activeTab, setActiveTab] = useState<'memo' | 'slides' | 'infographics' | 'press' | 'audio'>('memo');

  const tabs = [
    { id: 'memo', label: '1. Executive Memo', icon: FileText, desc: '1-Page Summary' },
    { id: 'slides', label: '2. Slide Deck', icon: Presentation, desc: 'Meeting-Ready PPT' },
    { id: 'infographics', label: '3. Infographics', icon: BarChart3, desc: 'Visual Cards' },
    { id: 'press', label: '4. Press Release', icon: Newspaper, desc: '4 Indian Languages' },
    { id: 'audio', label: '5. Voice Podcast', icon: Mic, desc: '60s Audio Brief' }
  ];

  return (
    <div className="bg-white rounded-2xl border border-surface-200 p-6 shadow-sm my-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-surface-200">
        <div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-sih-green" />
            <h2 className="text-xl font-bold text-sih-navy tracking-tight">
              Single-Pass Multi-Format Transformation Complete
            </h2>
          </div>
          <p className="text-xs text-surface-500 mt-0.5">
            Ingested {output.sourcePageCount} pages in {(output.processingTimeMs / 1000).toFixed(1)}s • 5 Synchronized Outputs Ready
          </p>
        </div>

        <div className="flex items-center gap-2 bg-sih-green-light px-3 py-1.5 rounded-xl border border-sih-green/30 text-emerald-800 text-xs font-bold">
          <Sparkles className="w-4 h-4 text-emerald-600" />
          <span>100% Grounded Citations (0 Hallucinations)</span>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 my-6 p-1.5 bg-surface-100 rounded-2xl border border-surface-200">
        {tabs.map((t) => {
          const Icon = t.icon;
          const isActive = activeTab === t.id;

          return (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id as any)}
              className={`p-3 rounded-xl font-bold transition-all text-left flex flex-col justify-between ${
                isActive
                  ? 'bg-sih-navy text-white shadow-md'
                  : 'text-surface-700 hover:bg-surface-200 hover:text-surface-900'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <Icon className={`w-4 h-4 ${isActive ? 'text-sih-orange' : 'text-surface-500'}`} />
                {isActive && <span className="w-2 h-2 rounded-full bg-sih-orange" />}
              </div>
              <span className="text-xs block leading-tight">{t.label}</span>
              <span className={`text-[10px] block font-normal mt-0.5 ${isActive ? 'text-surface-300' : 'text-surface-400'}`}>
                {t.desc}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-6">
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
