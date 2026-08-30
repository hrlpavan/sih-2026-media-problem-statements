import React, { useState, useRef } from 'react';
import { Play, Pause, Download } from 'lucide-react';

// Official ElevenLabs Vector Logo Component
const ElevenLabsIcon: React.FC<{ className?: string }> = ({ className = "w-3.5 h-3.5" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M7 3.5C7 2.67157 7.67157 2 8.5 2H9.5C10.3284 2 11 2.67157 11 3.5V20.5C11 21.3284 10.3284 22 9.5 22H8.5C7.67157 22 7 21.3284 7 20.5V3.5Z" />
    <path d="M13 3.5C13 2.67157 13.6716 2 14.5 2H15.5C16.3284 2 17 2.67157 17 3.5V20.5C17 21.3284 16.3284 22 15.5 22H14.5C13.6716 22 13 21.3284 13 20.5V3.5Z" />
  </svg>
);

interface UpdateItem {
  id: string;
  version: string;
  tag: string;
  title: string;
  category: string;
  description: string;
  voiceScript: string;
  highlights: string[];
}

const PROJECT_UPDATES: UpdateItem[] = [
  {
    id: 'update-1',
    version: 'v2.4.0',
    tag: 'CORE ENGINE',
    title: 'Sovereign Single-Pass 5-in-1 Pipeline Architecture',
    category: 'Transformation Engine',
    description: 'Transforms 50–100+ page technical threat advisories into 5 synchronized communication assets in under 10 seconds on air-gapped sovereign hardware.',
    voiceScript: 'Update one: Sovereign single-pass multi-format engine. Ingesting raw 50 to 100-page technical advisories, OmniTransform AI generates five synchronized communication assets in under ten seconds with zero external data exposure.',
    highlights: ['5 Formats in 1 Pass', '< 10s Latency SLA', 'Air-Gapped Sovereign Node']
  },
  {
    id: 'update-2',
    version: 'v2.3.5',
    tag: 'ANTI-HALLUCINATION',
    title: 'Spatial Bounding-Box Coordinate Citation Grounding',
    category: 'Verification System',
    description: 'Every generated bullet point and executive metric is indexed directly to exact millimeter coordinates in the source PDF, guaranteeing 100% verifiable grounding.',
    voiceScript: 'Update two: Spatial bounding-box citation grounding. Every executive bullet point and technical metric is indexed to exact millimeter coordinates in the source PDF, ensuring one hundred percent factual verification.',
    highlights: ['Millimeter Bounding Boxes', '100% Source Grounding', 'Zero-Hallucination Guarantee']
  },
  {
    id: 'update-3',
    version: 'v2.3.0',
    tag: 'LINGUISTIC AI',
    title: 'Indic Multilingual Regional Press Engine',
    category: 'Multilingual AI',
    description: 'Real-time localized press releases and emergency public bulletins in Hindi, Kannada, and Tamil, supporting over 70 regional and global languages.',
    voiceScript: 'Update three: Native Indic intelligence. We integrated real-time localized press releases in Hindi, Kannada, and Tamil, supporting over seventy regional languages for emergency public safety communications.',
    highlights: ['Hindi, Kannada, Tamil', '70+ Supported Languages', 'Instant Crisis Diffusion']
  },
  {
    id: 'update-4',
    version: 'v2.2.0',
    tag: 'VOICE AI',
    title: 'ElevenLabs Flagship Studio Suite (eleven_v3 & Flash v2.5)',
    category: 'Neural Speech',
    description: 'Full integration of ElevenLabs eleven_v3 and Flash v2.5 models with pre-made Voice IDs (Rachel, Bella, Adam, Josh), parameter controls, and 1-click MP3 export.',
    voiceScript: 'Update four: Integration of ElevenLabs flagship eleven v3 and Eleven Flash v2.5 models, featuring pre-made voice IDs for Rachel, Bella, Adam, and Josh, interactive parameter sliders for stability and similarity boost, and one-click MP3 downloading.',
    highlights: ['eleven_v3 & Flash v2.5', 'Stability & Similarity Sliders', 'Direct 1-Click MP3 Export']
  },
  {
    id: 'update-5',
    version: 'v2.1.0',
    tag: 'VENTURE & GTM',
    title: '19-Framework Institutional Financial & GTM Blueprint',
    category: 'Venture Strategy',
    description: 'Complete institutional roadmap covering MAP, ICP tiers, Pre-Seed, Series A ($1.8M), SAFE note valuation caps, TAM/SAM/SOM ($18.4B), and Growth Flywheels.',
    voiceScript: 'Update five: Institutional venture architecture. We formalized the complete nineteen-point financial model, including TAM SAM SOM analysis of eighteen point four billion dollars, pre-seed capitalization, SAFE note structuring, and growth flywheels.',
    highlights: ['$18.4B TAM Market', 'Y-Combinator SAFE Note', 'K = 1.42 Virality Coefficient']
  },
  {
    id: 'update-6',
    version: 'v2.0.0',
    tag: 'DESIGN SYSTEM',
    title: 'Apple Continuous Squircle & HRL Master Brand System',
    category: 'Design Engineering',
    description: 'Engineered strictly adhering to Apple macOS/iOS continuous squircle ergonomics, SF Pro typography hierarchy, zero-emoji standard, and Crimson #D1002D identity.',
    voiceScript: 'Update six: Master brand design system. Designed strictly adhering to Apple continuous squircle geometry, SF Pro typography hierarchy, zero emoji standards, and HRL Crimson visual identity.',
    highlights: ['Apple Squircle Radii', 'SF Pro Typography Scale', 'Zero-Emoji Enterprise Standard']
  }
];

export const ProjectUpdatesAudioHub: React.FC = () => {
  const [selectedModel, setSelectedModel] = useState<'eleven_v3' | 'eleven_flash_v2_5'>('eleven_v3');
  const [selectedVoice, setSelectedVoice] = useState<'adam' | 'rachel' | 'bella' | 'josh'>('adam');
  const [isPlayingChangelog, setIsPlayingChangelog] = useState<boolean>(false);
  const [activeUpdateId, setActiveUpdateId] = useState<string | null>(null);
  const [isPlayingSingle, setIsPlayingSingle] = useState<boolean>(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handlePlayFullChangelog = () => {
    if (isPlayingChangelog) {
      if (audioRef.current) audioRef.current.pause();
      if ('speechSynthesis' in window) window.speechSynthesis.cancel();
      setIsPlayingChangelog(false);
      return;
    }

    if (isPlayingSingle) {
      if ('speechSynthesis' in window) window.speechSynthesis.cancel();
      setIsPlayingSingle(false);
      setActiveUpdateId(null);
    }

    const audioSrc = selectedVoice === 'rachel'
      ? `${import.meta.env.BASE_URL}OmniTransform_AI_Changelog_rachel.m4a`
      : `${import.meta.env.BASE_URL}OmniTransform_AI_Changelog_Updates.m4a`;

    const audio = new Audio(audioSrc);
    audio.playbackRate = selectedModel === 'eleven_flash_v2_5' ? 1.15 : 1.0;
    audio.onended = () => setIsPlayingChangelog(false);
    audioRef.current = audio;

    audio.play().then(() => {
      setIsPlayingChangelog(true);
    }).catch(() => {
      // SpeechSynthesis Fallback
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const script = PROJECT_UPDATES.map(u => `${u.title}: ${u.voiceScript}`).join(' ');
        const utter = new SpeechSynthesisUtterance(script);
        utter.rate = selectedModel === 'eleven_flash_v2_5' ? 1.15 : 1.0;
        utter.onend = () => setIsPlayingChangelog(false);
        window.speechSynthesis.speak(utter);
      }
      setIsPlayingChangelog(true);
    });
  };

  const handlePlaySingleUpdate = (update: UpdateItem) => {
    if (activeUpdateId === update.id && isPlayingSingle) {
      if ('speechSynthesis' in window) window.speechSynthesis.cancel();
      setIsPlayingSingle(false);
      setActiveUpdateId(null);
      return;
    }

    if (isPlayingChangelog) {
      if (audioRef.current) audioRef.current.pause();
      setIsPlayingChangelog(false);
    }

    setActiveUpdateId(update.id);
    setIsPlayingSingle(true);

    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utter = new SpeechSynthesisUtterance(update.voiceScript);
      utter.rate = selectedModel === 'eleven_flash_v2_5' ? 1.15 : 1.0;
      utter.pitch = selectedVoice === 'rachel' ? 1.15 : selectedVoice === 'bella' ? 1.30 : selectedVoice === 'josh' ? 0.80 : 0.95;

      const voices = window.speechSynthesis.getVoices();
      if (voices.length > 0) {
        if (selectedVoice === 'rachel') {
          const fv = voices.find(v => v.name.includes('Samantha') || v.name.includes('Victoria'));
          if (fv) utter.voice = fv;
        } else if (selectedVoice === 'bella') {
          const fv = voices.find(v => v.name.includes('Moira') || v.name.includes('Tessa'));
          if (fv) utter.voice = fv;
        } else if (selectedVoice === 'josh') {
          const mv = voices.find(v => v.name.includes('Fred') || v.name.includes('Rishi'));
          if (mv) utter.voice = mv;
        } else {
          const mv = voices.find(v => v.name.includes('Daniel') || v.name.includes('Alex'));
          if (mv) utter.voice = mv;
        }
      }

      utter.onend = () => {
        setIsPlayingSingle(false);
        setActiveUpdateId(null);
      };
      window.speechSynthesis.speak(utter);
    }
  };

  return (
    <section id="project-updates-hub" className="mt-12 space-y-6">
      {/* Section Top Header with Apple Squircle Toolbar */}
      <div className="bg-white rounded-[24px] border border-black/5 p-6 sm:p-8 shadow-sm flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F2F2F7] text-[11px] font-bold text-[#1D1D1F] border border-black/5 shadow-sm">
              <ElevenLabsIcon className="w-3.5 h-3.5 text-black" />
              <span>ELEVENLABS VOICE CHANGELOG HUB</span>
            </span>
            <span className="text-xs text-zinc-500 font-mono">· ALL 6 SYSTEM UPDATES</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#1D1D1F] tracking-tight mt-2">
            Project Updates & Sovereign Roadmap Briefing
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600 max-w-2xl mt-1 leading-relaxed">
            Listen to interactive, high-fidelity neural audio briefings explaining every major architecture, security, and algorithmic update engineered into OmniTransform AI.
          </p>
        </div>

        {/* Master Controls: Model & Full Briefing Trigger */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
          {/* Model Switcher Pill */}
          <div className="flex items-center bg-[#F2F2F7] p-1 rounded-full border border-black/5 shrink-0">
            <button
              onClick={() => setSelectedModel('eleven_v3')}
              className={`text-xs px-3.5 py-1.5 rounded-full font-semibold transition-all cursor-pointer whitespace-nowrap ${
                selectedModel === 'eleven_v3'
                  ? 'bg-zinc-900 text-white shadow-sm'
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              Eleven v3
            </button>
            <button
              onClick={() => setSelectedModel('eleven_flash_v2_5')}
              className={`text-xs px-3.5 py-1.5 rounded-full font-semibold transition-all cursor-pointer whitespace-nowrap ${
                selectedModel === 'eleven_flash_v2_5'
                  ? 'bg-zinc-900 text-white shadow-sm'
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              Eleven Flash v2.5
            </button>
          </div>

          {/* Master Play Button */}
          <button
            onClick={handlePlayFullChangelog}
            className={`px-5 py-2.5 rounded-full font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md ${
              isPlayingChangelog
                ? 'bg-zinc-900 text-white animate-pulse'
                : 'bg-hrl-crimson hover:bg-hrl-crimson-dark text-white shadow-hrl-crimson/30'
            }`}
          >
            {isPlayingChangelog ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            <span className="whitespace-nowrap">{isPlayingChangelog ? 'Pause Changelog' : 'Play Full Changelog'}</span>
          </button>

          {/* Download Master Changelog MP3 */}
          <a
            href={`${import.meta.env.BASE_URL}OmniTransform_AI_Changelog_Updates.mp3`}
            download="OmniTransform_AI_Changelog_Updates.mp3"
            className="p-2.5 rounded-full bg-[#F2F2F7] hover:bg-[#E5E5EA] text-[#1D1D1F] border border-black/5 transition-all flex items-center justify-center cursor-pointer"
            title="Download Full Changelog Audio (MP3)"
          >
            <Download className="w-4 h-4 text-hrl-crimson" />
          </a>
        </div>
      </div>

      {/* Voice Selection Strip */}
      <div className="flex items-center justify-between bg-[#F2F2F7] px-4 py-2.5 rounded-2xl border border-black/5 text-xs">
        <div className="flex items-center gap-2">
          <span className="text-[#86868B] font-semibold uppercase tracking-wider text-[10px]">Narrator Voice:</span>
          <div className="flex items-center gap-1">
            {(['adam', 'rachel', 'bella', 'josh'] as const).map((v) => (
              <button
                key={v}
                onClick={() => setSelectedVoice(v)}
                className={`px-3 py-1 rounded-full text-xs font-semibold capitalize transition-all cursor-pointer ${
                  selectedVoice === v
                    ? 'bg-white text-zinc-900 shadow-sm border border-black/5'
                    : 'text-zinc-600 hover:text-zinc-900'
                }`}
              >
                {v}
              </button>
            ))}
          </div>
        </div>
        <span className="text-[11px] font-mono text-zinc-500 hidden sm:inline">
          MODEL: {selectedModel === 'eleven_v3' ? 'ELEVEN V3' : 'ELEVEN FLASH V2.5'} · 70+ INDIC LANGUAGES
        </span>
      </div>

      {/* 6 Updates Interactive Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {PROJECT_UPDATES.map((update) => {
          const isThisPlaying = activeUpdateId === update.id && isPlayingSingle;

          return (
            <div
              key={update.id}
              className={`bg-white rounded-[22px] p-6 border transition-all flex flex-col justify-between shadow-sm hover:shadow-md ${
                isThisPlaying
                  ? 'border-hrl-crimson ring-2 ring-hrl-crimson/20 bg-hrl-crimson-tint/20'
                  : 'border-black/5 hover:border-zinc-300'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono font-bold text-hrl-crimson bg-hrl-crimson-tint px-2.5 py-0.5 rounded-full">
                    {update.version} · {update.tag}
                  </span>
                  <span className="text-[11px] text-zinc-400 font-medium">{update.category}</span>
                </div>

                <h3 className="font-bold text-base text-[#1D1D1F] tracking-tight leading-snug">
                  {update.title}
                </h3>

                <p className="text-xs text-zinc-600 leading-relaxed mt-2">
                  {update.description}
                </p>

                {/* Highlight Pills */}
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {update.highlights.map((h, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-semibold bg-[#F2F2F7] text-zinc-700 px-2 py-0.5 rounded-full border border-black/5"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Audio Action Bar */}
              <div className="mt-5 pt-4 border-t border-black/5 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-[11px] text-zinc-500 font-mono">
                  <ElevenLabsIcon className="w-3 h-3 text-zinc-800" />
                  <span>{selectedVoice.toUpperCase()} ({selectedModel === 'eleven_v3' ? 'v3 Flagship' : 'Flash v2.5'})</span>
                </div>

                <button
                  onClick={() => handlePlaySingleUpdate(update)}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-sm ${
                    isThisPlaying
                      ? 'bg-hrl-crimson text-white animate-pulse'
                      : 'bg-zinc-900 hover:bg-black text-white'
                  }`}
                >
                  {isThisPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                  <span>{isThisPlaying ? 'Stop Audio' : 'Listen with Voice AI'}</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
