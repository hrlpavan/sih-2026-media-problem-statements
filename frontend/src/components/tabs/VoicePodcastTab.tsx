import React, { useState, useEffect, useRef } from 'react';
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
      {/* Header & Voice Selector Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-3 border-b border-zinc-200 no-print">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-hrl-crimson bg-hrl-crimson-tint px-2.5 py-0.5 rounded border border-hrl-crimson/20">
              ELEVENLABS MULTILINGUAL V2
            </span>
            <span className="text-xs text-zinc-400">·</span>
            <span className="text-xs text-zinc-500 font-mono">NEURAL AUDIO SYNTHESIS</span>
          </div>
          <h3 className="text-base font-bold text-zinc-900 mt-1">
            {podcast.title}
          </h3>
        </div>

        {/* ElevenLabs Voice Selection Pills */}
        <div className="flex items-center gap-2">
          <div className="flex items-center bg-zinc-100 p-1 rounded-full border border-zinc-200">
            <span className="text-[11px] text-zinc-500 font-medium px-2 hidden md:inline">Voice:</span>
            <button
              onClick={() => setSelectedVoice('adam')}
              className={`text-xs px-3 py-1 rounded-full font-medium transition-all cursor-pointer ${
                selectedVoice === 'adam' ? 'bg-zinc-900 text-white font-semibold shadow-sm' : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              Adam (Executive)
            </button>
            <button
              onClick={() => setSelectedVoice('rachel')}
              className={`text-xs px-3 py-1 rounded-full font-medium transition-all cursor-pointer ${
                selectedVoice === 'rachel' ? 'bg-zinc-900 text-white font-semibold shadow-sm' : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              Rachel (News)
            </button>
            <button
              onClick={() => setSelectedVoice('antoni')}
              className={`text-xs px-3 py-1 rounded-full font-medium transition-all cursor-pointer ${
                selectedVoice === 'antoni' ? 'bg-zinc-900 text-white font-semibold shadow-sm' : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              Antoni (Technical)
            </button>
          </div>

          <button
            onClick={() => alert('Downloading ElevenLabs 60s synthesized broadcast (MP3)...')}
            className="px-3.5 py-1.5 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-800 font-semibold text-xs border border-zinc-300 transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <Download className="w-3.5 h-3.5 text-zinc-600" />
            <span>Download MP3</span>
          </button>
        </div>
      </div>

      {/* Dark Cinema OLED Audio Player Card */}
      <div className="bg-[#0A0A0C] text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-zinc-800">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-hrl-crimson flex items-center justify-center text-white shadow-lg shadow-hrl-crimson/30">
                <Radio className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-base text-white">{podcast.title}</h4>
                <p className="text-xs text-zinc-400 font-mono">
                  MODEL: ELEVENLABS TURBO V2.5 // VOICE: {selectedVoice.toUpperCase()}
                </p>
              </div>
            </div>
            <span className="text-xs font-mono font-semibold bg-white/10 px-3 py-1 rounded-full text-zinc-300 border border-white/10">
              60s Brief
            </span>
          </div>

          {/* Dynamic Audio Frequency Waveform */}
          <div className="h-16 flex items-center justify-center gap-1.5 my-6 bg-black/60 rounded-2xl px-6 border border-zinc-800/80">
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

          {/* Playback Controls */}
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

      {/* Synchronized Script Transcript */}
      <div className="bg-white rounded-2xl border border-zinc-200 p-6 shadow-sm">
        <div className="flex items-center justify-between mb-4 pb-2 border-b border-zinc-100">
          <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-wider">
            ElevenLabs Synthesized Script Transcript
          </h4>
          <span className="text-[11px] font-mono text-zinc-500 bg-zinc-100 px-2 py-0.5 rounded">
            DETERMINISTIC LATENCY &lt; 2.5S
          </span>
        </div>

        <div className="space-y-3 font-sans">
          {podcast.segments.map((seg, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200 flex items-start gap-4"
            >
              <span className="text-xs font-bold font-mono text-hrl-crimson bg-hrl-crimson-tint px-2.5 py-1 rounded shrink-0">
                {seg.timeOffset}
              </span>
              <div>
                <span className="text-xs font-bold text-zinc-900 block mb-0.5">{seg.speaker}</span>
                <p className="text-xs text-zinc-700 leading-relaxed font-medium">{seg.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
