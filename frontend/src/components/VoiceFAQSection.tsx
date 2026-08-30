import React, { useState } from 'react';
import { Play, Pause, ChevronDown } from 'lucide-react';

// Official ElevenLabs Vector Logo Component
const ElevenLabsIcon: React.FC<{ className?: string }> = ({ className = "w-3.5 h-3.5" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M7 3.5C7 2.67157 7.67157 2 8.5 2H9.5C10.3284 2 11 2.67157 11 3.5V20.5C11 21.3284 10.3284 22 9.5 22H8.5C7.67157 22 7 21.3284 7 20.5V3.5Z" />
    <path d="M13 3.5C13 2.67157 13.6716 2 14.5 2H15.5C16.3284 2 17 2.67157 17 3.5V20.5C17 21.3284 16.3284 22 15.5 22H14.5C13.6716 22 13 21.3284 13 20.5V3.5Z" />
  </svg>
);

interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
  voiceScript: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'STRATEGIC RATIONALE',
    question: 'Why must OmniTransform AI be implemented across national security command centers?',
    answer: 'Traditional manual transformation of 100-page defense advisories takes 14 to 24 hours across multiple siloed teams. OmniTransform AI collapses this delay into under 10 seconds on air-gapped sovereign hardware, eliminating fatal decision latency during active cyber incidents.',
    voiceScript: 'Question one: Why must OmniTransform AI be implemented? Manual document transformation creates a fatal twenty-four hour lag during critical cyber incidents. OmniTransform AI collapses this timeline into under ten seconds, generating five synchronized executive and public assets on air-gapped sovereign hardware.'
  },
  {
    id: 'faq-2',
    category: 'CORE USP',
    question: 'What is the primary Unique Selling Proposition (USP) separating OmniTransform AI from generic AI?',
    answer: 'Our core USP is single-pass 5-in-1 multi-format synthesis paired with 100% spatial bounding-box coordinate citation grounding. Every extracted statistic links directly to the millimeter coordinate on the original PDF, ensuring mathematical zero hallucination.',
    voiceScript: 'Question two: What is our primary Unique Selling Proposition? Our primary USP is single-pass deterministic transformation combined with millimeter-exact spatial coordinate grounding. Every generated metric is backed by an immutable source citation, guaranteeing zero hallucinated data.'
  },
  {
    id: 'faq-3',
    category: 'SECURITY & VERIFICATION',
    question: 'How does the platform guarantee zero hallucinations during high-stakes defense emergencies?',
    answer: 'We enforce zero-temperature deterministic retrieval and spatial token indexing. If a generative claim cannot be aligned with 100% confidence to a physical coordinate in the source PDF, the guardrail system automatically rejects it.',
    voiceScript: 'Question three: How does the platform prevent model hallucinations in high-stakes defense intelligence? We enforce zero-temperature deterministic retrieval and spatial token indexing. If a generative claim cannot be aligned with one hundred percent confidence to a physical coordinate in the source PDF, the guardrail system automatically rejects it.'
  },
  {
    id: 'faq-4',
    category: 'NEURAL SPEECH AI',
    question: 'How do ElevenLabs voice models power real-time multilingual crisis broadcasting?',
    answer: 'Integrating ElevenLabs Eleven v3 and Flash v2.5 models with International Phonetic Alphabet (IPA) dictionaries enables instant synthesis of studio-grade 60-second intelligence broadcasts in English and Indic languages with sub-second latency.',
    voiceScript: 'Question four: How do ElevenLabs neural voice models enhance emergency public communication? Utilizing ElevenLabs Eleven v3 and Flash v2.5 models with International Phonetic Alphabet dictionaries, we synthesize studio-grade sixty-second audio briefings in English and Indic regional languages with deterministic low latency.'
  },
  {
    id: 'faq-5',
    category: 'AIR-GAPPED COMPLIANCE',
    question: 'Can OmniTransform AI operate completely offline in air-gapped military environments?',
    answer: 'Yes. The system is engineered from the ground up for sovereign on-premise deployment on local GPU clusters (NVIDIA H100 / L40S) with zero external internet telemetry, fully compliant with Common Criteria EAL4+ and STQC defense standards.',
    voiceScript: 'Question five: Can this system operate completely offline in air-gapped military environments? Yes. OmniTransform AI is architected from the ground up for sovereign on-premise deployment on local GPU hardware nodes with zero external internet dependencies.'
  }
];

export const VoiceFAQSection: React.FC = () => {
  const [selectedModel, setSelectedModel] = useState<'eleven_v3' | 'eleven_flash_v2_5'>('eleven_v3');
  const [selectedVoice, setSelectedVoice] = useState<'adam' | 'rachel' | 'bella' | 'josh'>('adam');
  const [activeFaqId, setActiveFaqId] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [expandedFaqId, setExpandedFaqId] = useState<string>('faq-1');

  const handlePlayFaqAudio = (faq: FAQItem) => {
    if (activeFaqId === faq.id && isPlaying) {
      if ('speechSynthesis' in window) window.speechSynthesis.cancel();
      setIsPlaying(false);
      setActiveFaqId(null);
      return;
    }

    setActiveFaqId(faq.id);
    setIsPlaying(true);
    setExpandedFaqId(faq.id);

    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utter = new SpeechSynthesisUtterance(faq.voiceScript);
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
        setIsPlaying(false);
        setActiveFaqId(null);
      };
      window.speechSynthesis.speak(utter);
    }
  };

  return (
    <section id="voice-faq-hub" className="mt-12 space-y-6">
      {/* Top Header Card */}
      <div className="bg-white rounded-[24px] border border-black/5 p-6 sm:p-8 shadow-sm flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F2F2F7] text-[11px] font-bold text-[#1D1D1F] border border-black/5 shadow-sm">
              <ElevenLabsIcon className="w-3.5 h-3.5 text-black" />
              <span>ELEVENLABS STRATEGIC FAQ & USP AUDIO HUB</span>
            </span>
            <span className="text-xs text-zinc-500 font-mono">· 5 STRATEGIC QUESTIONS</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#1D1D1F] tracking-tight mt-2">
            Why Implement & Core USP: Voice AI Interactive FAQ
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600 max-w-2xl mt-1 leading-relaxed">
            Listen to interactive neural audio responses explaining why OmniTransform AI is critical for sovereign defense and how our unique selling propositions deliver zero-hallucination transformation.
          </p>
        </div>

        {/* Model & Voice Selectors */}
        <div className="flex items-center gap-2 flex-wrap">
          {/* Model Switcher */}
          <div className="flex items-center bg-[#F2F2F7] p-1 rounded-full border border-black/5">
            <button
              onClick={() => setSelectedModel('eleven_v3')}
              className={`text-xs px-3.5 py-1.5 rounded-full font-semibold transition-all cursor-pointer ${
                selectedModel === 'eleven_v3'
                  ? 'bg-zinc-900 text-white shadow-sm'
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              Eleven v3
            </button>
            <button
              onClick={() => setSelectedModel('eleven_flash_v2_5')}
              className={`text-xs px-3.5 py-1.5 rounded-full font-semibold transition-all cursor-pointer ${
                selectedModel === 'eleven_flash_v2_5'
                  ? 'bg-zinc-900 text-white shadow-sm'
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              Eleven Flash v2.5
            </button>
          </div>

          {/* Voice Selector */}
          <div className="flex items-center bg-[#F2F2F7] p-1 rounded-full border border-black/5">
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
      </div>

      {/* FAQ Accordion List */}
      <div className="space-y-3">
        {FAQ_ITEMS.map((faq) => {
          const isThisPlaying = activeFaqId === faq.id && isPlaying;
          const isExpanded = expandedFaqId === faq.id;

          return (
            <div
              key={faq.id}
              className={`bg-white rounded-[20px] border transition-all overflow-hidden ${
                isThisPlaying
                  ? 'border-hrl-crimson shadow-md ring-2 ring-hrl-crimson/20'
                  : 'border-black/5 hover:border-zinc-300'
              }`}
            >
              <div 
                className="p-5 sm:p-6 flex items-start sm:items-center justify-between gap-4 cursor-pointer"
                onClick={() => setExpandedFaqId(isExpanded ? '' : faq.id)}
              >
                <div className="flex items-start sm:items-center gap-3.5">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePlayFaqAudio(faq);
                    }}
                    className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all cursor-pointer shadow-sm ${
                      isThisPlaying
                        ? 'bg-hrl-crimson text-white animate-pulse shadow-hrl-crimson/30'
                        : 'bg-[#F2F2F7] hover:bg-zinc-900 hover:text-white text-zinc-800'
                    }`}
                    title={isThisPlaying ? 'Stop Audio' : 'Listen with Voice AI'}
                  >
                    {isThisPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 translate-x-0.5" />}
                  </button>

                  <div>
                    <span className="text-[10px] font-mono font-bold text-hrl-crimson uppercase tracking-wider block mb-0.5">
                      {faq.category}
                    </span>
                    <h3 className="font-bold text-sm sm:text-base text-[#1D1D1F] tracking-tight">
                      {faq.question}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <div className="hidden sm:flex items-center gap-1 text-[11px] text-zinc-500 font-mono">
                    <ElevenLabsIcon className="w-3 h-3 text-zinc-700" />
                    <span>{selectedVoice.toUpperCase()} ({selectedModel === 'eleven_v3' ? 'v3' : 'Flash'})</span>
                  </div>
                  <ChevronDown className={`w-4 h-4 text-zinc-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                </div>
              </div>

              {isExpanded && (
                <div className="px-5 sm:px-6 pb-5 pt-1 border-t border-zinc-100 bg-[#F9F9FB] text-xs sm:text-sm text-zinc-700 leading-relaxed space-y-3">
                  <p>{faq.answer}</p>
                  <div className="p-3 bg-white rounded-xl border border-black/5 flex items-center justify-between text-[11px] text-zinc-500">
                    <span className="font-mono">VERIFIED DETERMINISTIC CITATION GROUNDING</span>
                    <span className="text-emerald-700 font-bold">100% FACTUAL ALIGNMENT</span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
