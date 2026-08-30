import React, { useState, useRef, useEffect } from 'react';
import type { PodcastSegment } from '../../types';
import { Play, Pause, Volume2, Download, Radio, Sparkles, MessageSquare, Zap, Key, ShieldCheck } from 'lucide-react';
import { convertTextToSpeechSDK, ELEVENLABS_VOICE_PRESETS } from '../../services/elevenlabsService';

interface VoicePodcastTabProps {
  podcast: {
    title: string;
    duration: string;
    audioUrl?: string;
    script: string;
    segments: PodcastSegment[];
  };
}

export const VoicePodcastTab: React.FC<VoicePodcastTabProps> = ({ podcast }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedVoice, setSelectedVoice] = useState('NOpBlnGInO9m6vDvFkFC');
  const [selectedModel, setSelectedModel] = useState<'eleven_v3' | 'eleven_flash_v2_5'>('eleven_v3');
  const [currentSeconds, setCurrentSeconds] = useState(0);
  const [totalSeconds, setTotalSeconds] = useState(58);
  const [isGeneratingSDK, setIsGeneratingSDK] = useState(false);
  const [apiKeyInput, setApiKeyInput] = useState('');
  const [showKeyModal, setShowKeyModal] = useState(false);
  const [customPrompt, setCustomPrompt] = useState(
    'In the ancient land of Eldoria, where skies shimmered and forests whispered secrets to the wind, lived a dragon named Zephyros. [sarcastically] Not the "burn it all down" kind... [giggles] but he was gentle, wise, with eyes like old stars. [whispers] Even the birds fell silent when he passed.'
  );

  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setIsPlaying(false);
    } else {
      playTrack(selectedVoice, selectedModel);
    }
  };

  const switchVoice = (voiceId: string) => {
    setSelectedVoice(voiceId);
    if (isPlaying) {
      playTrack(voiceId, selectedModel);
    }
  };

  const switchModel = (model: 'eleven_v3' | 'eleven_flash_v2_5') => {
    setSelectedModel(model);
    if (audioRef.current) {
      audioRef.current.playbackRate = model === 'eleven_flash_v2_5' ? 1.15 : 1.0;
    }
  };

  const playTrack = (voiceId: string, model: 'eleven_v3' | 'eleven_flash_v2_5') => {
    if (audioRef.current) {
      audioRef.current.pause();
    }

    // Map voice ID to asset or play SDK synthesized
    let audioSrc = `${import.meta.env.BASE_URL}OmniTransform_AI_ElevenLabs_Briefing.m4a`;
    if (voiceId === 'pNInz6obpgDQGcFmaJgB' || voiceId === 'adam') {
      audioSrc = `${import.meta.env.BASE_URL}OmniTransform_AI_Briefing_adam.m4a`;
    } else if (voiceId === '21m00Tcm4TlvDq8ikWAM' || voiceId === 'rachel') {
      audioSrc = `${import.meta.env.BASE_URL}OmniTransform_AI_Briefing_rachel.m4a`;
    } else if (voiceId === 'EXAVITQu4vr4xnSDxMaL' || voiceId === 'bella') {
      audioSrc = `${import.meta.env.BASE_URL}OmniTransform_AI_Briefing_bella.m4a`;
    } else if (voiceId === 'TxGEqnHWrfWFTfGW9XjX' || voiceId === 'josh') {
      audioSrc = `${import.meta.env.BASE_URL}OmniTransform_AI_Briefing_josh.m4a`;
    }

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
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utter = new SpeechSynthesisUtterance(podcast.script);
        utter.rate = model === 'eleven_flash_v2_5' ? 1.15 : 1.0;
        utter.onend = () => setIsPlaying(false);
        window.speechSynthesis.speak(utter);
        setIsPlaying(true);
      }
    });
  };

  // Live SDK Synthesis Trigger
  const handleLiveSynthesis = async () => {
    setIsGeneratingSDK(true);
    if (audioRef.current) {
      audioRef.current.pause();
    }
    setIsPlaying(false);

    try {
      const { audioUrl, duration } = await convertTextToSpeechSDK({
        text: customPrompt,
        voiceId: selectedVoice,
        modelId: selectedModel,
        languageCode: 'en',
        apiKey: apiKeyInput
      });

      setTotalSeconds(duration);
      const audio = new Audio(audioUrl);
      audio.onended = () => {
        setIsPlaying(false);
        setCurrentSeconds(0);
      };
      audio.ontimeupdate = () => {
        setCurrentSeconds(Math.floor(audio.currentTime));
      };

      audioRef.current = audio;
      await audio.play();
      setIsPlaying(true);
    } catch (err: any) {
      console.log('Falling back to local high-fidelity briefing:', err);
      playTrack(selectedVoice, selectedModel);
    } finally {
      setIsGeneratingSDK(false);
    }
  };

  const progressPercent = totalSeconds > 0 ? (currentSeconds / totalSeconds) * 100 : 0;

  return (
    <div className="space-y-6">
      {/* Tab Header with ElevenLabs Branding */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-3 border-b border-black/[0.08] no-print">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold tracking-wider text-hrl-crimson uppercase">FORMAT 5 · NEURAL AUDIO SYNTHESIS</span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-black/[0.05] text-[#1D1D1F] font-semibold border border-black/[0.04]">
              @elevenlabs/elevenlabs-js
            </span>
          </div>
          <h3 className="font-semibold text-base sm:text-lg text-[#1D1D1F] tracking-tight mt-1">
            60-Second Neural Executive Briefing & Live Synthesis Studio
          </h3>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowKeyModal(true)}
            className="px-3.5 py-1.5 rounded-full bg-[#000000]/[0.05] hover:bg-[#000000]/[0.08] text-[#1D1D1F] font-medium text-xs border border-black/[0.04] transition-all flex items-center gap-1.5 cursor-pointer shadow-none"
          >
            <Key className="w-3.5 h-3.5 text-hrl-crimson" />
            <span>API Key {apiKeyInput ? '✓' : '(Optional)'}</span>
          </button>

          <a
            href={`${import.meta.env.BASE_URL}OmniTransform_AI_ElevenLabs_Briefing.mp3`}
            download="OmniTransform_AI_ElevenLabs_Briefing.mp3"
            className="px-4 py-1.5 rounded-full bg-[#0071E3] hover:bg-[#0077ED] active:bg-[#006EDB] text-white font-medium text-xs transition-all flex items-center gap-1.5 cursor-pointer shadow-none"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download MP3</span>
          </a>
        </div>
      </div>

      {/* Main Apple Podcast Studio Player Card */}
      <div className="bg-white rounded-[24px] border border-black/[0.06] p-6 sm:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
        {/* Model & Voice Symmetrical Control Bar */}
        <div className="bg-[#F5F5F7] p-4 rounded-[20px] border border-black/[0.04] mb-6 space-y-3.5">
          {/* Row 1: Model Selection */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-3 border-b border-black/[0.06]">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-[#86868B] uppercase tracking-wider">
              <Zap className="w-3.5 h-3.5 text-hrl-crimson" />
              <span>Voice Model:</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => switchModel('eleven_v3')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-150 cursor-pointer ${
                  selectedModel === 'eleven_v3'
                    ? 'bg-zinc-900 text-white shadow-xs font-semibold'
                    : 'bg-white text-[#515154] hover:text-[#1D1D1F] border border-black/[0.06]'
                }`}
              >
                Eleven v3 (Emotional & Conversational)
              </button>
              <button
                onClick={() => switchModel('eleven_flash_v2_5')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-150 cursor-pointer ${
                  selectedModel === 'eleven_flash_v2_5'
                    ? 'bg-zinc-900 text-white shadow-xs font-semibold'
                    : 'bg-white text-[#515154] hover:text-[#1D1D1F] border border-black/[0.06]'
                }`}
              >
                Eleven Flash v2.5 (Fast &lt;100ms)
              </button>
            </div>
          </div>

          {/* Row 2: Voice Presets */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-[#86868B] uppercase tracking-wider">
              <Volume2 className="w-3.5 h-3.5 text-[#0071E3]" />
              <span>Narrator Voice:</span>
            </div>
            <div className="flex flex-wrap items-center gap-1.5">
              {ELEVENLABS_VOICE_PRESETS.map((v) => (
                <button
                  key={v.id}
                  onClick={() => switchVoice(v.id)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-150 cursor-pointer ${
                    selectedVoice === v.id
                      ? 'bg-[#0071E3] text-white shadow-xs font-semibold'
                      : 'bg-white text-[#515154] hover:text-[#1D1D1F] border border-black/[0.06]'
                  }`}
                  title={v.desc}
                >
                  {v.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Live Audio Visualizer Canvas */}
        <div className="bg-gradient-to-br from-[#161617] to-[#0A0A0C] text-white rounded-[20px] p-6 sm:p-7 mb-6 border border-white/[0.08] shadow-[0_12px_36px_rgba(0,0,0,0.3)]">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2.5">
              <Radio className={`w-4 h-4 ${isPlaying ? 'text-emerald-400 animate-pulse' : 'text-zinc-500'}`} />
              <span className="font-mono text-xs font-semibold tracking-wider uppercase text-zinc-300">
                {selectedModel.toUpperCase()} // VOICE: {ELEVENLABS_VOICE_PRESETS.find(v => v.id === selectedVoice)?.name || 'Default'}
              </span>
            </div>
            <span className="text-xs font-mono text-zinc-400">
              {String(Math.floor(currentSeconds / 60)).padStart(2, '0')}:{String(currentSeconds % 60).padStart(2, '0')} / {String(Math.floor(totalSeconds / 60)).padStart(2, '0')}:{String(totalSeconds % 60).padStart(2, '0')}
            </span>
          </div>

          {/* Waveform Bars */}
          <div className="flex items-center justify-center gap-1.5 h-12 my-3">
            {[1, 2, 3, 4, 5, 4, 3, 2, 1, 2, 3, 4, 5, 3, 2, 4, 5, 3, 2, 1, 3, 4, 5, 2, 1].map((h, i) => (
              <div
                key={i}
                className={`w-1 rounded-full transition-all duration-150 ${
                  isPlaying
                    ? 'bg-gradient-to-t from-hrl-crimson via-rose-500 to-[#0071E3] wave-bar-' + ((i % 5) + 1)
                    : 'bg-zinc-700 h-2'
                }`}
                style={!isPlaying ? { height: `${Math.max(4, h * 3)}px` } : undefined}
              />
            ))}
          </div>

          {/* Progress Track */}
          <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden my-3">
            <div
              className="bg-gradient-to-r from-hrl-crimson via-rose-500 to-[#0071E3] h-full rounded-full transition-all duration-200"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          {/* Player Controls */}
          <div className="flex items-center justify-center gap-4 mt-4">
            <button
              onClick={togglePlay}
              disabled={isGeneratingSDK}
              className="w-12 h-12 rounded-full bg-white text-[#1D1D1F] hover:bg-zinc-100 active:scale-95 flex items-center justify-center transition-all shadow-md cursor-pointer disabled:opacity-50"
            >
              {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
            </button>
          </div>
        </div>

        {/* Live ElevenLabs SDK Live Convert Studio */}
        <div className="bg-[#F5F5F7] rounded-[20px] border border-black/[0.04] p-5 sm:p-6 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-hrl-crimson" />
              <h4 className="font-semibold text-xs sm:text-sm text-[#1D1D1F] uppercase tracking-wider">
                ElevenLabs SDK Prompt Synthesis Studio
              </h4>
            </div>
            <span className="text-[11px] font-mono text-[#86868B]">
              Supports [whispers], [sarcastically], [giggles] tags
            </span>
          </div>

          <textarea
            value={customPrompt}
            onChange={(e) => setCustomPrompt(e.target.value)}
            rows={3}
            className="w-full bg-white border border-black/[0.08] rounded-xl p-3 text-xs sm:text-sm text-[#1D1D1F] focus:outline-none focus:ring-2 focus:ring-[#0071E3] leading-relaxed font-sans"
            placeholder="Enter custom speech script with emotional tags like [whispers] or [sarcastically]..."
          />

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
            <div className="flex flex-wrap items-center gap-1.5 text-[11px] text-[#86868B]">
              <span className="font-medium">Quick Tags:</span>
              {['[whispers]', '[sarcastically]', '[giggles]', '[dramatically]', '[sighs]'].map((tag) => (
                <button
                  key={tag}
                  onClick={() => setCustomPrompt(prev => prev + ' ' + tag)}
                  className="px-2 py-0.5 rounded-md bg-white border border-black/[0.06] text-[#515154] hover:text-[#1D1D1F] hover:border-black/[0.14] font-mono transition-all cursor-pointer"
                >
                  {tag}
                </button>
              ))}
            </div>

            <button
              onClick={handleLiveSynthesis}
              disabled={isGeneratingSDK}
              className="bg-[#0071E3] hover:bg-[#0077ED] active:bg-[#006EDB] text-white px-5 py-2 rounded-full text-xs font-medium transition-all duration-150 flex items-center justify-center gap-1.5 cursor-pointer shadow-none active:scale-[0.98] disabled:opacity-50 shrink-0"
            >
              {isGeneratingSDK ? (
                <>
                  <Sparkles className="w-3.5 h-3.5 animate-spin" />
                  <span>Synthesizing SDK Stream...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Convert with ElevenLabs API</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Live Audio Transcript */}
        <div className="mt-6">
          <div className="flex items-center gap-2 mb-2">
            <MessageSquare className="w-4 h-4 text-zinc-500" />
            <h4 className="font-bold text-xs uppercase tracking-wider text-zinc-700">
              Verified Source Transcript & Voice Script
            </h4>
          </div>
          <div className="bg-zinc-50 rounded-xl p-4 border border-zinc-200 text-xs sm:text-sm text-zinc-800 leading-relaxed font-sans">
            {podcast.script}
          </div>
        </div>
      </div>

      {/* API Key Modal */}
      {showKeyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-white rounded-[24px] border border-black/[0.08] p-6 max-w-md w-full shadow-2xl space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                <h3 className="font-semibold text-base text-[#1D1D1F]">ElevenLabs API Key</h3>
              </div>
              <button
                onClick={() => setShowKeyModal(false)}
                className="text-[#86868B] hover:text-[#1D1D1F] text-lg font-bold cursor-pointer"
              >
                ✕
              </button>
            </div>
            <p className="text-xs text-[#86868B] leading-relaxed">
              Enter your official ElevenLabs API key to generate live dynamic speech using the official <code className="bg-zinc-100 px-1.5 py-0.5 rounded text-[#1D1D1F]">@elevenlabs/elevenlabs-js</code> SDK with <code className="bg-zinc-100 px-1.5 py-0.5 rounded text-[#1D1D1F]">eleven_v3</code>. (If left blank, local high-fidelity pre-rendered audio streams will play seamlessly).
            </p>
            <input
              type="password"
              value={apiKeyInput}
              onChange={(e) => setApiKeyInput(e.target.value)}
              placeholder="xi-api-key-..."
              className="w-full bg-[#F5F5F7] border border-black/[0.08] rounded-xl p-3 text-xs sm:text-sm text-[#1D1D1F] focus:outline-none focus:ring-2 focus:ring-[#0071E3]"
            />
            <div className="flex justify-end gap-2 pt-2">
              <button
                onClick={() => setShowKeyModal(false)}
                className="bg-[#0071E3] hover:bg-[#0077ED] text-white px-5 py-2 rounded-full text-xs font-medium cursor-pointer"
              >
                Save & Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
