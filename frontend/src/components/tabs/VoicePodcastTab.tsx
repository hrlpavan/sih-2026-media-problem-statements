import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, Volume2, Download } from 'lucide-react';

interface VoicePodcastTabProps {
  podcast: {
    title: string;
    duration: string;
    script: string;
    segments: { timeOffset: string; speaker: string; text: string }[];
  };
}

// Official ElevenLabs Vector Logo Component
const ElevenLabsIcon: React.FC<{ className?: string }> = ({ className = "w-3.5 h-3.5" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M7 3.5C7 2.67157 7.67157 2 8.5 2H9.5C10.3284 2 11 2.67157 11 3.5V20.5C11 21.3284 10.3284 22 9.5 22H8.5C7.67157 22 7 21.3284 7 20.5V3.5Z" />
    <path d="M13 3.5C13 2.67157 13.6716 2 14.5 2H15.5C16.3284 2 17 2.67157 17 3.5V20.5C17 21.3284 16.3284 22 15.5 22H14.5C13.6716 22 13 21.3284 13 20.5V3.5Z" />
  </svg>
);

export const VoicePodcastTab: React.FC<VoicePodcastTabProps> = ({ podcast }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSeconds, setCurrentSeconds] = useState(0);
  const [selectedVoice, setSelectedVoice] = useState<'adam' | 'rachel' | 'antoni'>('adam');
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    let timer: any;
    if (isPlaying) {
      timer = setInterval(() => {
        setCurrentSeconds((prev) => {
          if (prev >= 60) {
            handleStop();
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isPlaying]);

  const handlePlay = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(podcast.script);
      utterance.rate = 1.0;
      utterance.pitch = selectedVoice === 'rachel' ? 1.15 : selectedVoice === 'antoni' ? 0.9 : 1.0;
      
      const voices = window.speechSynthesis.getVoices();
      if (voices.length > 0) {
        if (selectedVoice === 'rachel') {
          const femaleVoice = voices.find(v => v.name.includes('Samantha') || v.name.includes('Victoria') || v.name.includes('Female'));
          if (femaleVoice) utterance.voice = femaleVoice;
        } else {
          const maleVoice = voices.find(v => v.name.includes('Alex') || v.name.includes('Daniel') || v.name.includes('Male'));
          if (maleVoice) utterance.voice = maleVoice;
        }
      }

      utterance.onend = () => {
        setIsPlaying(false);
        setCurrentSeconds(0);
      };

      utteranceRef.current = utterance;
      window.speechSynthesis.speak(utterance);
    }
    setIsPlaying(true);
  };

  const handleStop = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsPlaying(false);
  };

  const togglePlay = () => {
    if (isPlaying) {
      handleStop();
    } else {
      handlePlay();
    }
  };

  const resetPlay = () => {
    handleStop();
    setCurrentSeconds(0);
  };

  const formatTime = (s: number) => {
    const mins = Math.floor(s / 60);
    const secs = s % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="space-y-6">
      {/* Apple Design Header & Toolbar */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pb-4 border-b border-black/5 no-print">
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#F2F2F7] text-[11px] font-semibold text-[#1D1D1F] border border-black/5 shadow-sm">
              <ElevenLabsIcon className="w-3 h-3 text-black" />
              <span>ElevenLabs Multilingual v2</span>
            </span>
            <span className="text-xs text-[#86868B] font-normal">· Turbo v2.5 Neural Engine</span>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-[#1D1D1F] tracking-tight mt-1.5">
            {podcast.title}
          </h3>
        </div>

        {/* Apple Segmented Voice Selector & Download */}
        <div className="flex items-center gap-2.5 flex-wrap">
          <div className="flex items-center bg-[#F2F2F7] p-1 rounded-full border border-black/5 shadow-sm">
            <span className="text-[11px] text-[#86868B] font-medium px-2.5 hidden sm:inline">Voice:</span>
            <button
              onClick={() => setSelectedVoice('adam')}
              className={`text-xs px-3.5 py-1 rounded-full font-medium transition-all duration-200 cursor-pointer ${
                selectedVoice === 'adam'
                  ? 'bg-white text-[#1D1D1F] font-semibold shadow-[0_1px_3px_rgba(0,0,0,0.12)]'
                  : 'text-[#86868B] hover:text-[#1D1D1F]'
              }`}
            >
              Adam (Executive)
            </button>
            <button
              onClick={() => setSelectedVoice('rachel')}
              className={`text-xs px-3.5 py-1 rounded-full font-medium transition-all duration-200 cursor-pointer ${
                selectedVoice === 'rachel'
                  ? 'bg-white text-[#1D1D1F] font-semibold shadow-[0_1px_3px_rgba(0,0,0,0.12)]'
                  : 'text-[#86868B] hover:text-[#1D1D1F]'
              }`}
            >
              Rachel (News)
            </button>
            <button
              onClick={() => setSelectedVoice('antoni')}
              className={`text-xs px-3.5 py-1 rounded-full font-medium transition-all duration-200 cursor-pointer ${
                selectedVoice === 'antoni'
                  ? 'bg-white text-[#1D1D1F] font-semibold shadow-[0_1px_3px_rgba(0,0,0,0.12)]'
                  : 'text-[#86868B] hover:text-[#1D1D1F]'
              }`}
            >
              Antoni (Technical)
            </button>
          </div>

          <button
            onClick={() => alert('Downloading ElevenLabs 60s synthesized broadcast (MP3)...')}
            className="px-4 py-1.5 rounded-full bg-[#F2F2F7] hover:bg-[#E5E5EA] text-[#1D1D1F] font-semibold text-xs border border-black/5 transition-all duration-200 flex items-center gap-1.5 cursor-pointer shadow-sm"
          >
            <Download className="w-3.5 h-3.5 text-[#86868B]" />
            <span>Download MP3</span>
          </button>
        </div>
      </div>

      {/* Dark Cinema OLED Audio Player Card */}
      <div className="bg-[#0A0A0C] text-white rounded-[24px] p-6 sm:p-8 shadow-2xl border border-white/10">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-white text-zinc-950 flex items-center justify-center shadow-lg">
                <ElevenLabsIcon className="w-6 h-6 text-black" />
              </div>
              <div>
                <h4 className="font-bold text-base text-white tracking-tight">{podcast.title}</h4>
                <p className="text-xs text-zinc-400 font-mono mt-0.5">
                  ELEVENLABS MULTILINGUAL V2 // VOICE: {selectedVoice.toUpperCase()} (128 KBPS)
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full text-zinc-300 border border-white/10 text-xs font-mono">
              <ElevenLabsIcon className="w-3 h-3 text-white" />
              <span>60s Audio</span>
            </div>
          </div>

          {/* Dynamic Frequency Bars */}
          <div className="h-16 flex items-center justify-center gap-1.5 my-6 bg-black/60 rounded-2xl px-6 border border-white/5">
            {[4, 12, 24, 18, 8, 28, 20, 14, 30, 22, 16, 24, 12, 6, 26, 18, 10, 22, 14, 8, 16, 28, 20, 12, 24, 16, 8, 20, 14].map((h, i) => (
              <div
                key={i}
                className={`w-1.5 rounded-full transition-all duration-150 ${
                  isPlaying
                    ? `bg-hrl-crimson wave-bar-${(i % 5) + 1}`
                    : 'bg-zinc-700 h-2.5'
                }`}
                style={{ height: isPlaying ? undefined : `${Math.max(4, h / 2.5)}px` }}
              />
            ))}
          </div>

          {/* Timeline Scrubber */}
          <div className="space-y-2">
            <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden">
              <div
                className="bg-hrl-crimson h-full rounded-full transition-all duration-300 shadow-sm"
                style={{ width: `${(currentSeconds / 60) * 100}%` }}
              />
            </div>
            <div className="flex items-center justify-between text-xs text-zinc-400 font-mono">
              <span>{formatTime(currentSeconds)}</span>
              <span>{podcast.duration}</span>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-6">
            <button
              onClick={resetPlay}
              className="p-3 rounded-full hover:bg-white/10 text-zinc-400 hover:text-white transition-all cursor-pointer"
              title="Restart"
            >
              <RotateCcw className="w-5 h-5" />
            </button>
            <button
              onClick={togglePlay}
              className="w-16 h-16 rounded-full bg-hrl-crimson hover:bg-hrl-crimson-dark text-white flex items-center justify-center shadow-lg shadow-hrl-crimson/40 hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              {isPlaying ? <Pause className="w-7 h-7" /> : <Play className="w-7 h-7 translate-x-0.5" />}
            </button>
            <button
              className="p-3 rounded-full hover:bg-white/10 text-zinc-400 hover:text-white transition-all"
              title="Volume"
            >
              <Volume2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Transcript */}
      <div className="bg-white rounded-[20px] border border-black/5 p-6 shadow-sm">
        <div className="flex items-center justify-between mb-4 pb-2 border-b border-zinc-100">
          <div className="flex items-center gap-2">
            <ElevenLabsIcon className="w-3.5 h-3.5 text-[#1D1D1F]" />
            <h4 className="text-xs font-bold text-[#1D1D1F] uppercase tracking-wider">
              ElevenLabs Synthesized Script Transcript
            </h4>
          </div>
          <span className="text-[11px] font-mono text-[#86868B] bg-[#F2F2F7] px-2.5 py-0.5 rounded-full border border-black/5">
            DETERMINISTIC LATENCY &lt; 2.5S
          </span>
        </div>

        <div className="space-y-3 font-sans">
          {podcast.segments.map((seg, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-[14px] bg-[#F9F9FB] border border-black/5 flex items-start gap-4"
            >
              <span className="text-xs font-bold font-mono text-hrl-crimson bg-hrl-crimson-tint px-2.5 py-1 rounded-full shrink-0">
                {seg.timeOffset}
              </span>
              <div>
                <span className="text-xs font-bold text-[#1D1D1F] block mb-0.5">{seg.speaker}</span>
                <p className="text-xs text-[#515154] leading-relaxed font-normal">{seg.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
