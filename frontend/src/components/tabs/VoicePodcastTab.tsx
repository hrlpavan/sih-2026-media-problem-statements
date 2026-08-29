import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Volume2, Download, Radio } from 'lucide-react';

interface VoicePodcastTabProps {
  podcast: {
    title: string;
    duration: string;
    script: string;
    segments: { timeOffset: string; speaker: string; text: string }[];
  };
}

export const VoicePodcastTab: React.FC<VoicePodcastTabProps> = ({ podcast }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSeconds, setCurrentSeconds] = useState(0);

  useEffect(() => {
    let timer: any;
    if (isPlaying) {
      timer = setInterval(() => {
        setCurrentSeconds((prev) => {
          if (prev >= 60) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isPlaying]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const resetPlay = () => {
    setIsPlaying(false);
    setCurrentSeconds(0);
  };

  const formatTime = (s: number) => {
    const mins = Math.floor(s / 60);
    const secs = s % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-3 border-b border-classic-border no-print">
        <div>
          <span className="text-xs font-bold text-classic-navy bg-classic-bg px-2.5 py-1 rounded border border-classic-border">
            FORMAT 5: 60-SECOND NEURAL AUDIO BRIEFING
          </span>
          <h3 className="font-serif font-bold text-base text-classic-navy mt-1">
            {podcast.title}
          </h3>
        </div>
        <button
          onClick={() => alert('Downloading 60s audio file (MP3)...')}
          className="px-4 py-2 rounded-lg bg-classic-bg hover:bg-zinc-200 text-classic-navy font-bold text-xs border border-classic-border transition-all flex items-center gap-1.5 cursor-pointer shadow-classic-sm"
        >
          <Download className="w-3.5 h-3.5 text-classic-slate-muted" />
          <span>Download Audio (MP3)</span>
        </button>
      </div>

      {/* Audio Console */}
      <div className="bg-classic-navy text-white rounded-2xl p-8 shadow-classic-lg">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-classic-ochre flex items-center justify-center text-white shadow-md">
                <Radio className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-base text-white">{podcast.title}</h4>
                <p className="text-xs text-classic-ochre-light opacity-80">Synthesized via Piper Neural Voice</p>
              </div>
            </div>
            <span className="text-xs font-bold bg-white/10 px-3 py-1 rounded-full text-classic-ochre border border-white/10">
              60s Brief
            </span>
          </div>

          {/* Waveform */}
          <div className="h-16 flex items-center justify-center gap-1.5 my-8 bg-black/20 rounded-xl px-6">
            {[4, 12, 24, 18, 8, 28, 20, 14, 30, 22, 16, 24, 12, 6, 26, 18, 10, 22, 14, 8, 16].map((h, i) => (
              <div
                key={i}
                className={`w-1.5 rounded-full transition-all ${
                  isPlaying
                    ? `bg-classic-ochre animate-wave-${(i % 5) + 1}`
                    : 'bg-white/30 h-3'
                }`}
                style={{ height: isPlaying ? undefined : `${Math.max(6, h / 2)}px` }}
              />
            ))}
          </div>

          {/* Scrubber */}
          <div className="space-y-2">
            <div className="w-full bg-white/15 h-2 rounded-full overflow-hidden">
              <div
                className="bg-classic-ochre h-full rounded-full transition-all duration-300"
                style={{ width: `${(currentSeconds / 60) * 100}%` }}
              />
            </div>
            <div className="flex items-center justify-between text-xs text-classic-ochre-light font-mono">
              <span>{formatTime(currentSeconds)}</span>
              <span>{podcast.duration}</span>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={resetPlay}
              className="p-3 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-all cursor-pointer"
              title="Restart"
            >
              <RotateCcw className="w-5 h-5" />
            </button>
            <button
              onClick={togglePlay}
              className="w-16 h-16 rounded-full bg-classic-ochre hover:bg-classic-ochre-dark text-white flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              {isPlaying ? <Pause className="w-7 h-7" /> : <Play className="w-7 h-7 translate-x-0.5" />}
            </button>
            <button
              className="p-3 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-all"
              title="Volume"
            >
              <Volume2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-classic-border p-6 shadow-classic-sm">
        <h4 className="font-serif font-bold text-xs text-classic-navy uppercase tracking-wider mb-4">
          Synchronized Audio Script Transcript
        </h4>
        <div className="space-y-3 font-sans">
          {podcast.segments.map((seg, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-classic-bg border border-classic-border flex items-start gap-4"
            >
              <span className="text-xs font-bold font-mono text-classic-ochre bg-classic-ochre-light px-2.5 py-1 rounded shrink-0">
                {seg.timeOffset}
              </span>
              <div>
                <span className="text-xs font-bold text-classic-navy block mb-0.5">{seg.speaker}</span>
                <p className="text-xs text-classic-slate leading-relaxed">{seg.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
