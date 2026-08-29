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
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-black/[0.06]">
        <div>
          <span className="text-[11px] font-semibold text-sih-navy uppercase tracking-wider bg-sih-blue-light px-2.5 py-1 rounded-full">
            Format 4: Multilingual Press Engine
          </span>
          <h3 className="text-lg font-semibold text-apple-text mt-1">
            Official Media Statement & Regional Press Brief
          </h3>
        </div>

        <div className="flex items-center gap-2">
          {/* Apple Segmented Language Switcher */}
          <div className="flex items-center bg-apple-gray/70 p-1 rounded-xl border border-black/[0.04]">
            <button
              onClick={() => setLang('en')}
              className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-all duration-200 ${
                lang === 'en' ? 'bg-white text-apple-text shadow-apple-sm font-semibold' : 'text-apple-subtext hover:text-apple-text'
              }`}
            >
              English
            </button>
            <button
              onClick={() => setLang('hi')}
              className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-all duration-200 ${
                lang === 'hi' ? 'bg-white text-apple-text shadow-apple-sm font-semibold' : 'text-apple-subtext hover:text-apple-text'
              }`}
            >
              हिंदी
            </button>
            <button
              onClick={() => setLang('kn')}
              className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-all duration-200 ${
                lang === 'kn' ? 'bg-white text-apple-text shadow-apple-sm font-semibold' : 'text-apple-subtext hover:text-apple-text'
              }`}
            >
              ಕನ್ನಡ
            </button>
            <button
              onClick={() => setLang('ta')}
              className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-all duration-200 ${
                lang === 'ta' ? 'bg-white text-apple-text shadow-apple-sm font-semibold' : 'text-apple-subtext hover:text-apple-text'
              }`}
            >
              தமிழ்
            </button>
          </div>

          <button
            onClick={handleCopy}
            className="px-3.5 py-2 rounded-xl bg-apple-bg hover:bg-apple-gray text-apple-text font-medium text-xs border border-black/[0.08] transition-all flex items-center gap-1.5 shadow-apple-sm"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-sih-green" /> : <Copy className="w-3.5 h-3.5 text-apple-subtext" />}
            <span>{copied ? 'Copied' : 'Copy'}</span>
          </button>
        </div>
      </div>

      {/* Newsroom Article Sheet */}
      <div className="bg-white rounded-3xl border border-black/[0.08] p-8 shadow-apple-sm max-w-4xl mx-auto">
        <div className="text-center pb-6 border-b border-black/[0.06] mb-6">
          <span className="text-[10px] font-bold text-sih-orange uppercase tracking-widest block mb-1">
            OFFICIAL GOVERNMENT PRESS RELEASE
          </span>
          <h2 className="text-xl sm:text-2xl font-semibold text-apple-text leading-snug">
            {pr.headline}
          </h2>
          <span className="text-xs font-medium text-apple-subtext block mt-2">
            {pr.locationAndDate}
          </span>
        </div>

        <div className="space-y-4 text-sm text-apple-text leading-relaxed">
          <p className="font-medium text-apple-text">{pr.openingParagraph}</p>
          {pr.bodyParagraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}

          <div className="p-5 rounded-2xl bg-apple-bg border-l-4 border-sih-navy italic my-6 text-apple-text">
            {pr.spokespersonQuote}
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-black/[0.06] text-xs text-apple-subtext font-medium flex items-center justify-between">
          <span>{pr.mediaContact}</span>
          <span className="bg-apple-bg px-2.5 py-1 rounded-full text-apple-subtext">
            IndicBERT Neural Translation
          </span>
        </div>
      </div>
    </div>
  );
};
