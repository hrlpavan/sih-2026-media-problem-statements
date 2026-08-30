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
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-3 border-b border-zinc-200 no-print">
        <div>
          <span className="text-xs font-bold text-hrl-crimson bg-hrl-crimson-tint px-2.5 py-1 rounded border border-hrl-crimson/20">
            FORMAT 4: MULTILINGUAL PRESS RELEASE
          </span>
          <h3 className="font-bold text-base text-zinc-900 mt-1">
            Official Media Statement in Indian Languages
          </h3>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center bg-zinc-100 p-1 rounded-full border border-zinc-200">
            <button
              onClick={() => setLang('en')}
              className={`text-xs px-3 py-1 rounded-full font-bold transition-all cursor-pointer ${
                lang === 'en' ? 'bg-zinc-900 text-white shadow-sm' : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              English
            </button>
            <button
              onClick={() => setLang('hi')}
              className={`text-xs px-3 py-1 rounded-full font-bold transition-all cursor-pointer ${
                lang === 'hi' ? 'bg-zinc-900 text-white shadow-sm' : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              हिंदी (Hindi)
            </button>
            <button
              onClick={() => setLang('kn')}
              className={`text-xs px-3 py-1 rounded-full font-bold transition-all cursor-pointer ${
                lang === 'kn' ? 'bg-zinc-900 text-white shadow-sm' : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              ಕನ್ನಡ (Kannada)
            </button>
            <button
              onClick={() => setLang('ta')}
              className={`text-xs px-3 py-1 rounded-full font-bold transition-all cursor-pointer ${
                lang === 'ta' ? 'bg-zinc-900 text-white shadow-sm' : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              தமிழ் (Tamil)
            </button>
          </div>

          <button
            onClick={handleCopy}
            className="px-3.5 py-2 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-900 font-bold text-xs border border-zinc-300 transition-all flex items-center gap-1.5 cursor-pointer shadow-sm"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-zinc-600" />}
            <span>{copied ? 'Copied' : 'Copy Text'}</span>
          </button>
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-zinc-200 p-8 shadow-sm max-w-3xl mx-auto">
        <div className="text-center pb-5 border-b border-zinc-200 mb-6">
          <span className="text-xs font-bold text-hrl-crimson uppercase tracking-widest block mb-1">
            OFFICIAL PRESS RELEASE
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 leading-snug">
            {pr.headline}
          </h2>
          <span className="text-xs font-medium text-zinc-500 block mt-2">
            {pr.locationAndDate}
          </span>
        </div>

        <div className="space-y-4 text-sm text-zinc-800 leading-relaxed">
          <p className="font-bold">{pr.openingParagraph}</p>
          {pr.bodyParagraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}

          <div className="p-4 rounded-2xl bg-zinc-50 border-l-4 border-hrl-crimson italic my-6 text-zinc-900">
            {pr.spokespersonQuote}
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-zinc-200 text-xs text-zinc-500 font-medium flex items-center justify-between">
          <span>{pr.mediaContact}</span>
          <span className="bg-zinc-100 px-2.5 py-1 rounded text-zinc-900 border border-zinc-200">
            Automated Indic Translation
          </span>
        </div>
      </div>
    </div>
  );
};
