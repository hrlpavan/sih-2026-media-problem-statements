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
    <div className="space-y-5">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-3 border-b border-zinc-200 no-print">
        <div>
          <span className="font-mono text-[10px] font-semibold text-zinc-500 uppercase tracking-wider bg-zinc-100 px-2 py-0.5 rounded border border-zinc-200">
            FORMAT_05 // AUDIO_SYNTHESIS
          </span>
          <h3 className="text-sm font-semibold text-zinc-900 mt-1">
            {podcast.title}
          </h3>
        </div>
        <button
          onClick={() => alert('Downloading audio file (MP3)...')}
          className="px-3 py-1.5 rounded bg-white hover:bg-zinc-100 text-zinc-700 font-medium text-xs border border-zinc-200 transition-all flex items-center gap-1.5 shadow-sm"
        >
          <Download className="w-3.5 h-3.5 text-zinc-500" />
          <span>Download MP3</span>
        </button>
      </div>

      {/* Industrial Audio Player Console */}
      <div className="bg-zinc-900 text-white rounded-lg p-6 shadow-sm border border-zinc-800">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded bg-zinc-800 border border-zinc-700 flex items-center justify-center text-orange-400">
                <Radio className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-semibold text-xs text-white">{podcast.title}</h4>
                <p className="font-mono text-[10px] text-zinc-400">SYNTHESIZER: PIPER_NEURAL_OFFLINE</p>
              </div>
            </div>
            <span className="font-mono text-[10px] font-semibold bg-zinc-800 text-orange-400 px-2 py-0.5 rounded border border-zinc-700">
              60S_BRIEF
            </span>
          </div>

          {/* Waveform Visualization */}
          <div className="h-14 flex items-center justify-center gap-1 my-5 bg-black/40 rounded px-4 border border-zinc-800">
            {[4, 12, 24, 18, 8, 28, 20, 14, 30, 22, 16, 24, 12, 6, 26, 18, 10, 22, 14, 8, 16].map((h, i) => (
              <div
                key={i}
                className={`w-1 rounded-full transition-all ${
                  isPlaying
                    ? `bg-orange-500 wave-bar-${(i % 5) + 1}`
                    : 'bg-zinc-700 h-2'
                }`}
                style={{ height: isPlaying ? undefined : `${Math.max(4, h / 2.5)}px` }}
              />
            ))}
          </div>

          {/* Scrubber */}
          <div className="space-y-1.5">
            <div className="w-full bg-zinc-800 h-1 rounded overflow-hidden">
              <div
                className="bg-orange-500 h-full rounded transition-all duration-300"
                style={{ width: `${(currentSeconds / 60) * 100}%` }}
              />
            </div>
            <div className="flex items-center justify-between font-mono text-[10px] text-zinc-400">
              <span>{formatTime(currentSeconds)}</span>
              <span>{podcast.duration}</span>
            </div>
          </div>

          {/* Playback Controls */}
          <div className="flex items-center justify-center gap-4 mt-5">
            <button
              onClick={resetPlay}
              className="p-2 rounded hover:bg-zinc-800 text-zinc-400 hover:text-white transition-all"
              title="Reset"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <button
              onClick={togglePlay}
              className="w-12 h-12 rounded-full bg-orange-600 hover:bg-orange-500 text-white flex items-center justify-center shadow-sm hover:scale-105 active:scale-95 transition-all"
            >
              {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 translate-x-0.5" />}
            </button>
            <button
              className="p-2 rounded hover:bg-zinc-800 text-zinc-400 hover:text-white transition-all"
              title="Volume"
            >
              <Volume2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Synchronized Script Transcript */}
      <div className="bg-white rounded-lg border border-zinc-200 p-5 shadow-sm">
        <h4 className="font-mono text-[10px] font-semibold text-zinc-500 uppercase tracking-wider mb-3">
          SYNCHRONIZED TRANSCRIPT
        </h4>
        <div className="space-y-2">
          {podcast.segments.map((seg, idx) => (
            <div
              key={idx}
              className="p-3 rounded bg-zinc-50 border border-zinc-200 flex items-start gap-3"
            >
              <span className="font-mono text-[10px] font-semibold text-orange-700 bg-orange-100 px-1.5 py-0.5 rounded shrink-0">
                {seg.timeOffset}
              </span>
              <div>
                <span className="font-mono text-[10px] text-zinc-400 block mb-0.5">{seg.speaker}</span>
                <p className="text-xs text-zinc-800 leading-relaxed font-medium">{seg.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
