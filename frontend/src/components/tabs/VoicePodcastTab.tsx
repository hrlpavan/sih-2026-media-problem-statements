import React, { useState, useRef } from 'react';
import { Play, Pause, RotateCcw, Volume2, Download, Sliders, Check, Copy, ChevronDown } from 'lucide-react';

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

interface VoiceProfile {
  id: string;
  name: string;
  gender: 'Female' | 'Male';
  voiceId: string;
  description: string;
  pitch: number;
}

const ELEVENLABS_VOICES: VoiceProfile[] = [
  {
    id: 'rachel',
    name: 'Rachel',
    gender: 'Female',
    voiceId: '21m00Tcm4T1vDq8ikWAM',
    description: 'Clear, professional, warm conversational voice',
    pitch: 1.15
  },
  {
    id: 'bella',
    name: 'Bella',
    gender: 'Female',
    voiceId: 'EXAVITQu4vr4xnSDxMaL',
    description: 'Soft, expressive, natural narration',
    pitch: 1.30
  },
  {
    id: 'adam',
    name: 'Adam',
    gender: 'Male',
    voiceId: 'pNInz6obpgDQGcFmaJgB',
    description: 'Deep, confident, standard English voice',
    pitch: 0.90
  },
  {
    id: 'josh',
    name: 'Josh',
    gender: 'Male',
    voiceId: 'TxGEqnHWrfWFTFGW9XjX',
    description: 'Deep, warm, conversational tone',
    pitch: 0.80
  }
];

export const VoicePodcastTab: React.FC<VoicePodcastTabProps> = ({ podcast }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSeconds, setCurrentSeconds] = useState(0);
  const [selectedModel, setSelectedModel] = useState<'eleven_v3' | 'eleven_flash_v2_5'>('eleven_v3');
  const [selectedVoiceId, setSelectedVoiceId] = useState<string>('adam');
  const [stability, setStability] = useState<number>(0.5);
  const [similarityBoost, setSimilarityBoost] = useState<number>(0.75);
  const [showSettings, setShowSettings] = useState<boolean>(false);
  const [copiedVoiceId, setCopiedVoiceId] = useState<boolean>(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  const currentVoice = ELEVENLABS_VOICES.find(v => v.id === selectedVoiceId) || ELEVENLABS_VOICES[2];

  // Stop previous audio and switch track when voice changes
  const switchVoice = (voiceId: string) => {
    setSelectedVoiceId(voiceId);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    
    if (isPlaying) {
      setTimeout(() => {
        playTrack(voiceId, selectedModel);
      }, 100);
    }
  };

  const switchModel = (model: 'eleven_v3' | 'eleven_flash_v2_5') => {
    setSelectedModel(model);
    if (audioRef.current) {
      audioRef.current.playbackRate = model === 'eleven_flash_v2_5' ? 1.15 : 1.0;
    }
  };

  const playTrack = (voiceId: string, model: 'eleven_v3' | 'eleven_flash_v2_5') => {
    const audioSrc = `/OmniTransform_AI_Briefing_${voiceId}.m4a`;
    const audio = new Audio(audioSrc);
    audio.playbackRate = model === 'eleven_flash_v2_5' ? 1.15 : 1.0;
    
    audio.onended = () => {
      setIsPlaying(false);
      setCurrentSeconds(0);
    };
    audio.ontimeupdate = () => {
      setCurrentSeconds(Math.floor(audio.currentTime));
    };
    
    audioRef.current = audio;
    
    audio.play().then(() => {
      setIsPlaying(true);
    }).catch(() => {
      // Web Speech API Fallback
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(podcast.script);
        utterance.rate = model === 'eleven_flash_v2_5' ? 1.15 : 1.0;
        utterance.pitch = currentVoice.pitch;
        
        const voices = window.speechSynthesis.getVoices();
        if (voices.length > 0) {
          if (voiceId === 'rachel') {
            const fv = voices.find(v => v.name.includes('Samantha') || v.name.includes('Victoria'));
            if (fv) utterance.voice = fv;
          } else if (voiceId === 'bella') {
            const fv = voices.find(v => v.name.includes('Moira') || v.name.includes('Tessa') || v.name.includes('Karen'));
            if (fv) utterance.voice = fv;
          } else if (voiceId === 'josh') {
            const mv = voices.find(v => v.name.includes('Fred') || v.name.includes('Rishi'));
            if (mv) utterance.voice = mv;
          } else {
            const mv = voices.find(v => v.name.includes('Daniel') || v.name.includes('Alex'));
            if (mv) utterance.voice = mv;
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
    });
  };

  const handlePlay = () => {
    playTrack(selectedVoiceId, selectedModel);
  };

  const handleStop = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
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
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.pause();
    }
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsPlaying(false);
    setCurrentSeconds(0);
  };

  const copyVoiceId = (voiceId: string) => {
    navigator.clipboard.writeText(voiceId);
    setCopiedVoiceId(true);
    setTimeout(() => setCopiedVoiceId(false), 2000);
  };

  const formatTime = (s: number) => {
    const mins = Math.floor(s / 60);
    const secs = s % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="space-y-6">
      {/* Apple Design Header & Controls */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pb-4 border-b border-black/5 no-print">
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#F2F2F7] text-[11px] font-semibold text-[#1D1D1F] border border-black/5 shadow-sm">
              <ElevenLabsIcon className="w-3 h-3 text-black" />
              <span>{selectedModel === 'eleven_v3' ? 'Eleven v3 (Flagship Model)' : 'Eleven Flash v2.5 (Fast Stream)'}</span>
            </span>
            <span className="text-xs text-[#86868B] font-normal">· Over 70 Languages Supported</span>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-[#1D1D1F] tracking-tight mt-1.5">
            {podcast.title}
          </h3>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={() => setShowSettings(!showSettings)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200 flex items-center gap-1.5 cursor-pointer shadow-sm ${
              showSettings
                ? 'bg-zinc-900 text-white border-zinc-900'
                : 'bg-[#F2F2F7] hover:bg-[#E5E5EA] text-[#1D1D1F] border-black/5'
            }`}
          >
            <Sliders className="w-3.5 h-3.5" />
            <span>Voice Parameters</span>
            <ChevronDown className={`w-3 h-3 transition-transform ${showSettings ? 'rotate-180' : ''}`} />
          </button>

          <a
            href={`/OmniTransform_AI_Briefing_${selectedVoiceId}.mp3`}
            download={`OmniTransform_AI_Briefing_${currentVoice.name}.mp3`}
            className="px-4 py-1.5 rounded-full bg-zinc-900 hover:bg-black text-white font-semibold text-xs transition-all duration-200 flex items-center gap-1.5 cursor-pointer shadow-sm hover:shadow"
          >
            <Download className="w-3.5 h-3.5 text-hrl-crimson" />
            <span>Download {currentVoice.name} MP3</span>
          </a>
        </div>
      </div>

      {/* Model & Voice Selection Strip (Apple Segmented Style) */}
      <div className="bg-[#F2F2F7] rounded-[20px] p-3 border border-black/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 no-print">
        {/* Model Selector */}
        <div className="flex items-center gap-2">
          <span className="text-[11px] text-[#86868B] font-semibold uppercase tracking-wider pl-1">Model:</span>
          <div className="flex items-center bg-white/80 p-0.5 rounded-full border border-black/5">
            <button
              onClick={() => switchModel('eleven_v3')}
              className={`text-xs px-3 py-1 rounded-full font-semibold transition-all duration-200 cursor-pointer ${
                selectedModel === 'eleven_v3'
                  ? 'bg-zinc-900 text-white shadow-sm'
                  : 'text-[#86868B] hover:text-[#1D1D1F]'
              }`}
            >
              Eleven v3
            </button>
            <button
              onClick={() => switchModel('eleven_flash_v2_5')}
              className={`text-xs px-3 py-1 rounded-full font-semibold transition-all duration-200 cursor-pointer ${
                selectedModel === 'eleven_flash_v2_5'
                  ? 'bg-zinc-900 text-white shadow-sm'
                  : 'text-[#86868B] hover:text-[#1D1D1F]'
              }`}
            >
              Eleven Flash v2.5
            </button>
          </div>
        </div>

        {/* Voice Selector */}
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="text-[11px] text-[#86868B] font-semibold uppercase tracking-wider pl-1">Voice:</span>
          {ELEVENLABS_VOICES.map((v) => {
            const isSelected = selectedVoiceId === v.id;
            return (
              <button
                key={v.id}
                onClick={() => switchVoice(v.id)}
                className={`text-xs px-3 py-1 rounded-full font-medium transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-white text-[#1D1D1F] font-bold shadow-[0_1px_3px_rgba(0,0,0,0.12)] border border-black/5'
                    : 'text-[#86868B] hover:text-[#1D1D1F] hover:bg-white/50'
                }`}
                title={`${v.name} (${v.gender}) - ${v.description}`}
              >
                <span>{v.name}</span>
                <span className="text-[10px] text-[#86868B] font-normal">({v.gender[0]})</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Voice Parameters Configuration Console */}
      {showSettings && (
        <div className="bg-white rounded-[20px] p-5 border border-black/5 shadow-[0_4px_20px_rgba(0,0,0,0.04)] no-print animate-in fade-in-50 duration-200">
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-zinc-100">
            <div className="flex items-center gap-2">
              <ElevenLabsIcon className="w-4 h-4 text-zinc-900" />
              <h4 className="text-xs font-bold text-[#1D1D1F] uppercase tracking-wider">
                ElevenLabs Studio Voice Parameters
              </h4>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#86868B]">
              <span>voice_id:</span>
              <button
                onClick={() => copyVoiceId(currentVoice.voiceId)}
                className="bg-[#F2F2F7] hover:bg-[#E5E5EA] text-[#1D1D1F] px-2 py-0.5 rounded border border-black/5 flex items-center gap-1 font-semibold cursor-pointer transition-all"
                title="Click to copy Voice ID"
              >
                <span>{currentVoice.voiceId}</span>
                {copiedVoiceId ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3 text-[#86868B]" />}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Stability */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-[#1D1D1F]">stability: {stability.toFixed(2)}</span>
                <span className="text-[11px] text-[#86868B]">
                  {stability <= 0.35 ? 'More Dynamic & Emotional' : stability >= 0.65 ? 'More Consistent' : 'Balanced'}
                </span>
              </div>
              <input
                type="range"
                min="0.1"
                max="1.0"
                step="0.05"
                value={stability}
                onChange={(e) => setStability(parseFloat(e.target.value))}
                className="w-full accent-hrl-crimson cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-[#86868B]">
                <span>0.30 (Dynamic)</span>
                <span>0.50 (Standard)</span>
                <span>0.70 (Consistent)</span>
              </div>
            </div>

            {/* Similarity Boost */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-[#1D1D1F]">similarity_boost: {similarityBoost.toFixed(2)}</span>
                <span className="text-[11px] text-[#86868B]">Reference Voice Mimicry</span>
              </div>
              <input
                type="range"
                min="0.3"
                max="1.0"
                step="0.05"
                value={similarityBoost}
                onChange={(e) => setSimilarityBoost(parseFloat(e.target.value))}
                className="w-full accent-hrl-crimson cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-[#86868B]">
                <span>0.50 (Natural)</span>
                <span>0.75 (Standard Baseline)</span>
                <span>0.95 (Exact Match)</span>
              </div>
            </div>
          </div>

          {/* Active Profile Info */}
          <div className="mt-4 pt-3 border-t border-zinc-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-[#515154]">
            <div>
              <strong className="text-[#1D1D1F]">{currentVoice.name}</strong>: {currentVoice.description}
            </div>
            <div className="font-mono text-[11px] bg-[#F2F2F7] px-2 py-0.5 rounded text-[#86868B]">
              model: "{selectedModel === 'eleven_v3' ? 'Eleven v3' : 'Eleven Flash v2.5'}"
            </div>
          </div>
        </div>
      )}

      {/* Dark Cinema OLED Audio Player Card */}
      <div className="bg-[#0A0A0C] text-white rounded-[24px] p-6 sm:p-8 shadow-2xl border border-white/10">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3.5">
              {/* Official ElevenLabs Logo Badge Container */}
              <div className="w-12 h-12 rounded-2xl bg-white text-zinc-950 flex items-center justify-center shadow-lg">
                <ElevenLabsIcon className="w-6 h-6 text-black" />
              </div>
              <div>
                <h4 className="font-bold text-base text-white tracking-tight">{podcast.title}</h4>
                <p className="text-xs text-zinc-400 font-mono mt-0.5">
                  MODEL: {selectedModel === 'eleven_v3' ? 'ELEVEN V3' : 'ELEVEN FLASH V2.5'} · VOICE: {currentVoice.name.toUpperCase()} (ID: {currentVoice.voiceId.slice(0, 8)}...)
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full text-zinc-300 border border-white/10 text-xs font-mono">
              <ElevenLabsIcon className="w-3 h-3 text-white" />
              <span>60s Audio</span>
            </div>
          </div>

          {/* Dynamic Frequency Waveform */}
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

      {/* Pre-made Voices Reference Card (Matching Uploaded Specification) */}
      <div className="bg-white rounded-[20px] border border-black/5 p-6 shadow-sm no-print">
        <div className="flex items-center justify-between mb-4 pb-2 border-b border-zinc-100">
          <div className="flex items-center gap-2">
            <ElevenLabsIcon className="w-3.5 h-3.5 text-[#1D1D1F]" />
            <h4 className="text-xs font-bold text-[#1D1D1F] uppercase tracking-wider">
              ElevenLabs Pre-Made Voice Matrix
            </h4>
          </div>
          <span className="text-[11px] text-[#86868B]">
            Click any voice card to instantly switch audio persona
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {ELEVENLABS_VOICES.map((v) => {
            const isSelected = selectedVoiceId === v.id;
            return (
              <div
                key={v.id}
                onClick={() => switchVoice(v.id)}
                className={`p-4 rounded-[14px] border transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'border-hrl-crimson bg-hrl-crimson-tint/40 shadow-sm'
                    : 'border-black/5 bg-[#F9F9FB] hover:border-zinc-300'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-sm text-[#1D1D1F]">{v.name}</span>
                    <span className="text-[10px] font-semibold text-[#86868B] bg-white px-2 py-0.5 rounded-full border border-black/5">
                      {v.gender}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#515154] leading-relaxed mt-1">{v.description}</p>
                </div>

                <div className="mt-3 pt-2 border-t border-black/5 flex items-center justify-between text-[10px] font-mono text-[#86868B]">
                  <span>{v.voiceId.slice(0, 10)}...</span>
                  <button
                    onClick={(e) => { e.stopPropagation(); copyVoiceId(v.voiceId); }}
                    className="hover:text-[#1D1D1F] p-1"
                    title="Copy Voice ID"
                  >
                    <Copy className="w-3 h-3" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Synchronized Script Transcript */}
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
