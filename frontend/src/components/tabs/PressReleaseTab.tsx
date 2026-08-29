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
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-3 border-b border-classic-border no-print">
        <div>
          <span className="text-xs font-bold text-classic-navy bg-classic-bg px-2.5 py-1 rounded border border-classic-border">
            FORMAT 4: MULTILINGUAL PRESS RELEASE
          </span>
          <h3 className="font-serif font-bold text-base text-classic-navy mt-1">
            Official Media Statement in Indian Languages
          </h3>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center bg-classic-bg p-1 rounded-lg border border-classic-border">
            <button
              onClick={() => setLang('en')}
              className={`text-xs px-3 py-1.5 rounded-md font-bold transition-all cursor-pointer ${
                lang === 'en' ? 'bg-classic-navy text-white shadow-sm' : 'text-classic-slate-muted hover:text-classic-navy'
              }`}
            >
              English
            </button>
            <button
              onClick={() => setLang('hi')}
              className={`text-xs px-3 py-1.5 rounded-md font-bold transition-all cursor-pointer ${
                lang === 'hi' ? 'bg-classic-navy text-white shadow-sm' : 'text-classic-slate-muted hover:text-classic-navy'
              }`}
            >
              हिंदी (Hindi)
            </button>
            <button
              onClick={() => setLang('kn')}
              className={`text-xs px-3 py-1.5 rounded-md font-bold transition-all cursor-pointer ${
                lang === 'kn' ? 'bg-classic-navy text-white shadow-sm' : 'text-classic-slate-muted hover:text-classic-navy'
              }`}
            >
              ಕನ್ನಡ (Kannada)
            </button>
            <button
              onClick={() => setLang('ta')}
              className={`text-xs px-3 py-1.5 rounded-md font-bold transition-all cursor-pointer ${
                lang === 'ta' ? 'bg-classic-navy text-white shadow-sm' : 'text-classic-slate-muted hover:text-classic-navy'
              }`}
            >
              தமிழ் (Tamil)
            </button>
          </div>

          <button
            onClick={handleCopy}
            className="px-3.5 py-2 rounded-lg bg-classic-bg hover:bg-zinc-200 text-classic-navy font-bold text-xs border border-classic-border transition-all flex items-center gap-1.5 cursor-pointer shadow-classic-sm"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-classic-green" /> : <Copy className="w-3.5 h-3.5 text-classic-slate-muted" />}
            <span>{copied ? 'Copied' : 'Copy Text'}</span>
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-classic-border p-8 shadow-classic-sm max-w-3xl mx-auto">
        <div className="text-center pb-5 border-b border-classic-border mb-6">
          <span className="text-xs font-bold text-classic-ochre uppercase tracking-widest block mb-1 font-sans">
            OFFICIAL PRESS RELEASE
          </span>
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-classic-navy leading-snug">
            {pr.headline}
          </h2>
          <span className="text-xs font-medium text-classic-slate-muted block mt-2 font-sans">
            {pr.locationAndDate}
          </span>
        </div>

        <div className="space-y-4 text-sm text-classic-slate leading-relaxed font-serif">
          <p className="font-bold">{pr.openingParagraph}</p>
          {pr.bodyParagraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}

          <div className="p-4 rounded-xl bg-classic-bg border-l-4 border-classic-navy italic my-6 text-classic-navy font-serif">
            {pr.spokespersonQuote}
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-classic-border text-xs text-classic-slate-muted font-medium flex items-center justify-between font-sans">
          <span>{pr.mediaContact}</span>
          <span className="bg-classic-bg px-2.5 py-1 rounded text-classic-navy border border-classic-border">
            Automated Indic Translation
          </span>
        </div>
      </div>
    </div>
  );
};
