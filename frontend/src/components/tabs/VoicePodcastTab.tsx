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
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-3 border-b border-zinc-200 no-print">
        <div>
          <span className="text-xs font-bold text-orange-700 bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
            Format 5: 60-Second Voice Briefing
          </span>
          <h3 className="text-base font-bold text-zinc-900 mt-1">
            {podcast.title}
          </h3>
        </div>
        <button
          onClick={() => alert('Downloading 60s audio file (MP3)...')}
          className="px-4 py-2 rounded-lg bg-zinc-100 hover:bg-zinc-200 text-zinc-800 font-bold text-xs border border-zinc-300 transition-all flex items-center gap-1.5 cursor-pointer shadow-sm"
        >
          <Download className="w-3.5 h-3.5 text-zinc-600" />
          <span>Download Audio (MP3)</span>
        </button>
      </div>

      {/* Audio Player Card */}
      <div className="bg-zinc-900 text-white rounded-2xl p-8 shadow-md">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-orange-600 flex items-center justify-center text-white shadow-md">
                <Radio className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-base text-white">{podcast.title}</h4>
                <p className="text-xs text-zinc-400">Offline Neural Voice Synthesis</p>
              </div>
            </div>
            <span className="text-xs font-bold bg-zinc-800 px-3 py-1 rounded-full text-orange-400 border border-zinc-700">
              60 Seconds Brief
            </span>
          </div>

          {/* Waveform Bars */}
          <div className="h-16 flex items-center justify-center gap-1.5 my-8 bg-black/40 rounded-xl px-6">
            {[4, 12, 24, 18, 8, 28, 20, 14, 30, 22, 16, 24, 12, 6, 26, 18, 10, 22, 14, 8, 16].map((h, i) => (
              <div
                key={i}
                className={`w-1.5 rounded-full transition-all ${
                  isPlaying
                    ? `bg-orange-500 animate-wave-${(i % 5) + 1}`
                    : 'bg-zinc-700 h-3'
                }`}
                style={{ height: isPlaying ? undefined : `${Math.max(6, h / 2)}px` }}
              />
            ))}
          </div>

          {/* Scrubber */}
          <div className="space-y-2">
            <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden">
              <div
                className="bg-orange-500 h-full rounded-full transition-all duration-300"
                style={{ width: `${(currentSeconds / 60) * 100}%` }}
              />
            </div>
            <div className="flex items-center justify-between text-xs text-zinc-400 font-mono">
              <span>{formatTime(currentSeconds)}</span>
              <span>{podcast.duration}</span>
            </div>
          </div>

          {/* Play / Pause */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={resetPlay}
              className="p-3 rounded-full hover:bg-zinc-800 text-zinc-400 hover:text-white transition-all cursor-pointer"
              title="Restart"
            >
              <RotateCcw className="w-5 h-5" />
            </button>
            <button
              onClick={togglePlay}
              className="w-16 h-16 rounded-full bg-orange-600 hover:bg-orange-500 text-white flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              {isPlaying ? <Pause className="w-7 h-7" /> : <Play className="w-7 h-7 translate-x-0.5" />}
            </button>
            <button
              className="p-3 rounded-full hover:bg-zinc-800 text-zinc-400 hover:text-white transition-all"
              title="Volume"
            >
              <Volume2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Script Transcript */}
      <div className="bg-white rounded-2xl border border-zinc-200 p-6 shadow-sm">
        <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-wider mb-4">
          Audio Script Transcript
        </h4>
        <div className="space-y-3">
          {podcast.segments.map((seg, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200 flex items-start gap-4"
            >
              <span className="text-xs font-bold text-orange-700 bg-orange-100 px-2 py-1 rounded shrink-0">
                {seg.timeOffset}
              </span>
              <div>
                <span className="text-xs font-bold text-zinc-900 block mb-0.5">{seg.speaker}</span>
                <p className="text-xs text-zinc-700 leading-relaxed">{seg.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
