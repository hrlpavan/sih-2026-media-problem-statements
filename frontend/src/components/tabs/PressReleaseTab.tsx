import React, { useState } from 'react';
import type { PressRelease } from '../../types';
import { Copy, Check } from 'lucide-react';

interface PressReleaseTabProps {
  pressReleases: {
    en: PressRelease;
    hi: PressRelease;
    kn: PressRelease;
    ta: PressRelease;
  };
}

export const PressReleaseTab: React.FC<PressReleaseTabProps> = ({ pressReleases }) => {
  const [lang, setLang] = useState<'en' | 'hi' | 'kn' | 'ta'>('en');
  const [copied, setCopied] = useState(false);

  const pr = pressReleases[lang] || pressReleases.en;

  const handleCopy = () => {
    const fullText = `${pr.headline}\n${pr.locationAndDate}\n\n${pr.openingParagraph}\n\n${pr.bodyParagraphs.join('\n\n')}\n\n${pr.spokespersonQuote}\n\nMedia Contact: ${pr.mediaContact}`;
    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-5">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-3 border-b border-zinc-200 no-print">
        <div>
          <span className="font-mono text-[10px] font-semibold text-zinc-500 uppercase tracking-wider bg-zinc-100 px-2 py-0.5 rounded border border-zinc-200">
            FORMAT_04 // MULTILINGUAL_PRESS
          </span>
          <h3 className="text-sm font-semibold text-zinc-900 mt-1">
            Official Media Statement Engine
          </h3>
        </div>

        <div className="flex items-center gap-2">
          {/* Segmented Language Selector */}
          <div className="flex items-center bg-zinc-100 p-0.5 rounded border border-zinc-200">
            <button
              onClick={() => setLang('en')}
              className={`text-xs px-2.5 py-1 rounded font-medium transition-all ${
                lang === 'en' ? 'bg-white text-zinc-900 shadow-sm font-semibold' : 'text-zinc-500 hover:text-zinc-900'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang('hi')}
              className={`text-xs px-2.5 py-1 rounded font-medium transition-all ${
                lang === 'hi' ? 'bg-white text-zinc-900 shadow-sm font-semibold' : 'text-zinc-500 hover:text-zinc-900'
              }`}
            >
              हिंदी
            </button>
            <button
              onClick={() => setLang('kn')}
              className={`text-xs px-2.5 py-1 rounded font-medium transition-all ${
                lang === 'kn' ? 'bg-white text-zinc-900 shadow-sm font-semibold' : 'text-zinc-500 hover:text-zinc-900'
              }`}
            >
              ಕನ್ನಡ
            </button>
            <button
              onClick={() => setLang('ta')}
              className={`text-xs px-2.5 py-1 rounded font-medium transition-all ${
                lang === 'ta' ? 'bg-white text-zinc-900 shadow-sm font-semibold' : 'text-zinc-500 hover:text-zinc-900'
              }`}
            >
              தமிழ்
            </button>
          </div>

          <button
            onClick={handleCopy}
            className="px-3 py-1.5 rounded bg-white hover:bg-zinc-100 text-zinc-700 font-medium text-xs border border-zinc-200 transition-all flex items-center gap-1 shadow-sm"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-zinc-500" />}
            <span>{copied ? 'Copied' : 'Copy'}</span>
          </button>
        </div>
      </div>

      {/* Press Document Sheet */}
      <div className="bg-white rounded-lg border border-zinc-200 p-8 shadow-sm max-w-4xl mx-auto">
        <div className="text-center pb-5 border-b border-zinc-200 mb-5">
          <span className="font-mono text-[9px] font-semibold text-orange-600 uppercase tracking-widest block mb-1">
            OFFICIAL MEDIA STATEMENT // PIB SPECIFICATION
          </span>
          <h2 className="text-base sm:text-lg font-semibold text-zinc-900 leading-snug">
            {pr.headline}
          </h2>
          <span className="font-mono text-[10px] text-zinc-500 block mt-1.5">
            {pr.locationAndDate}
          </span>
        </div>

        <div className="space-y-3.5 text-xs sm:text-sm text-zinc-800 leading-relaxed">
          <p className="font-medium text-zinc-900">{pr.openingParagraph}</p>
          {pr.bodyParagraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}

          <div className="p-4 rounded bg-zinc-50 border-l-2 border-zinc-900 italic my-5 text-zinc-800 font-serif">
            {pr.spokespersonQuote}
          </div>
        </div>

        <div className="mt-6 pt-3 border-t border-zinc-200 font-mono text-[10px] text-zinc-500 flex items-center justify-between">
          <span>{pr.mediaContact}</span>
          <span className="bg-zinc-100 px-2 py-0.5 rounded text-zinc-600">
            INDICBERT_NEURAL_TRANSLATION
          </span>
        </div>
      </div>
    </div>
  );
};
