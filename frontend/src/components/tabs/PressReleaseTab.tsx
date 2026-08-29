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
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-surface-200">
        <div>
          <span className="text-xs font-bold text-sih-navy uppercase tracking-wider bg-sih-blue-light px-2.5 py-1 rounded-md border border-sih-blue/20">
            Format 4: Multilingual Press Release Engine
          </span>
          <h3 className="text-lg font-bold text-surface-900 mt-1">
            Official Media Statement & Regional Press Brief
          </h3>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center bg-surface-100 p-1 rounded-xl border border-surface-200">
            <button
              onClick={() => setLang('en')}
              className={`text-xs px-3 py-1.5 rounded-lg font-bold transition-all ${
                lang === 'en' ? 'bg-sih-navy text-white shadow-sm' : 'text-surface-600 hover:text-surface-900'
              }`}
            >
              English
            </button>
            <button
              onClick={() => setLang('hi')}
              className={`text-xs px-3 py-1.5 rounded-lg font-bold transition-all ${
                lang === 'hi' ? 'bg-sih-navy text-white shadow-sm' : 'text-surface-600 hover:text-surface-900'
              }`}
            >
              हिंदी (Hindi)
            </button>
            <button
              onClick={() => setLang('kn')}
              className={`text-xs px-3 py-1.5 rounded-lg font-bold transition-all ${
                lang === 'kn' ? 'bg-sih-navy text-white shadow-sm' : 'text-surface-600 hover:text-surface-900'
              }`}
            >
              ಕನ್ನಡ (Kannada)
            </button>
            <button
              onClick={() => setLang('ta')}
              className={`text-xs px-3 py-1.5 rounded-lg font-bold transition-all ${
                lang === 'ta' ? 'bg-sih-navy text-white shadow-sm' : 'text-surface-600 hover:text-surface-900'
              }`}
            >
              தமிழ் (Tamil)
            </button>
          </div>

          <button
            onClick={handleCopy}
            className="px-3.5 py-2 rounded-lg bg-surface-100 hover:bg-surface-200 text-surface-700 font-semibold text-xs border border-surface-300 transition-all flex items-center gap-1.5"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied' : 'Copy Text'}</span>
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl border-2 border-surface-300 p-8 shadow-sm max-w-4xl mx-auto font-sans">
        <div className="text-center pb-6 border-b border-surface-200 mb-6">
          <span className="text-xs font-extrabold text-sih-orange uppercase tracking-widest block mb-1">
            PRESS INFORMATION BUREAU (PIB) / OFFICIAL RELEASE
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-sih-navy leading-snug">
            {pr.headline}
          </h2>
          <span className="text-xs font-semibold text-surface-500 block mt-2">
            {pr.locationAndDate}
          </span>
        </div>

        <div className="space-y-4 text-sm text-surface-800 leading-relaxed">
          <p className="font-medium">{pr.openingParagraph}</p>
          {pr.bodyParagraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}

          <div className="p-4 rounded-xl bg-sih-blue-light/50 border-l-4 border-sih-blue italic my-6 text-sih-navy font-serif">
            {pr.spokespersonQuote}
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-surface-200 text-xs text-surface-500 font-medium flex items-center justify-between">
          <span>{pr.mediaContact}</span>
          <span className="bg-surface-100 px-2 py-1 rounded text-surface-600">
            Automated Translation via IndicBERT Engine
          </span>
        </div>
      </div>
    </div>
  );
};
