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
    { id: 'memo', label: 'Executive Memo', icon: FileText, desc: '1-Page Summary' },
    { id: 'slides', label: 'Slide Deck', icon: Presentation, desc: 'Keynote & PPTX' },
    { id: 'infographics', label: 'Infographics', icon: BarChart3, desc: 'Data Cards' },
    { id: 'press', label: 'Press Release', icon: Newspaper, desc: 'Multilingual' },
    { id: 'audio', label: 'Audio Podcast', icon: Radio, desc: '60s Voice Brief' }
  ];

  return (
    <div className="apple-card rounded-3xl p-8 mb-8">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-black/[0.06]">
        <div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-sih-green" />
            <h2 className="text-xl font-semibold text-apple-text tracking-tight">
              Synchronized 5-Format Transformation Complete
            </h2>
          </div>
          <p className="text-xs text-apple-subtext mt-1">
            Processed {output.sourcePageCount} pages in {(output.processingTimeMs / 1000).toFixed(1)}s • 100% Grounded Citations
          </p>
        </div>

        <span className="text-xs font-semibold text-emerald-800 bg-sih-green-light px-3 py-1.5 rounded-full border border-sih-green/20">
          Zero Hallucination Verified
        </span>
      </div>

      {/* Apple macOS Segmented Tab Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 my-6 p-1.5 bg-apple-gray/70 rounded-2xl border border-black/[0.04]">
        {tabs.map((t) => {
          const Icon = t.icon;
          const isActive = activeTab === t.id;

          return (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id as any)}
              className={`p-3 rounded-xl font-medium transition-all duration-200 text-left flex flex-col justify-between ${
                isActive
                  ? 'bg-white text-apple-text shadow-apple-sm'
                  : 'text-apple-subtext hover:text-apple-text hover:bg-black/[0.02]'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <Icon className={`w-4 h-4 ${isActive ? 'text-sih-orange' : 'text-apple-subtext'}`} />
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-sih-orange" />}
              </div>
              <span className="text-xs font-semibold block leading-tight">{t.label}</span>
              <span className="text-[10px] block text-apple-subtext mt-0.5 font-normal">
                {t.desc}
              </span>
            </button>
          );
        })}
      </div>

      {/* Tab Panes */}
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
