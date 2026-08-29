import React, { useState } from 'react';
import type { Slide } from '../../types';
import { ChevronLeft, ChevronRight, Maximize2, Download } from 'lucide-react';

interface SlideDeckTabProps {
  slides: Slide[];
}

export const SlideDeckTab: React.FC<SlideDeckTabProps> = ({ slides }) => {
  const [currentSlideIdx, setCurrentSlideIdx] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const slide = slides[currentSlideIdx] || slides[0];

  const nextSlide = () => {
    if (currentSlideIdx < slides.length - 1) setCurrentSlideIdx(currentSlideIdx + 1);
  };

  const prevSlide = () => {
    if (currentSlideIdx > 0) setCurrentSlideIdx(currentSlideIdx - 1);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-surface-200">
        <div>
          <span className="text-xs font-bold text-sih-navy uppercase tracking-wider bg-sih-blue-light px-2.5 py-1 rounded-md border border-sih-blue/20">
            Format 2: Meeting-Ready Slide Deck
          </span>
          <h3 className="text-lg font-bold text-surface-900 mt-1">
            Slide {currentSlideIdx + 1} of {slides.length}: {slide.title}
          </h3>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="px-3.5 py-2 rounded-lg bg-surface-100 hover:bg-surface-200 text-surface-700 font-semibold text-xs border border-surface-300 transition-all flex items-center gap-1.5"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span>{isFullscreen ? 'Exit Fullscreen' : 'Present Mode'}</span>
          </button>
          <a
            href="https://github.com/hrlpavan/omnitransform-ai-resources/raw/main/SIH2026_Idea_Presentation_PS26154.pptx"
            className="px-3.5 py-2 rounded-lg bg-sih-navy hover:bg-sih-navy-light text-white font-semibold text-xs shadow-sm transition-all flex items-center gap-1.5"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download .PPTX</span>
          </a>
        </div>
      </div>

      <div className={`relative bg-white rounded-2xl border-2 border-surface-300 shadow-lg overflow-hidden transition-all ${
        isFullscreen ? 'fixed inset-4 z-50 flex flex-col justify-between p-12 bg-white' : 'aspect-[16/9] p-8 flex flex-col justify-between'
      }`}>
        <div className="flex items-center justify-between border-b border-surface-200 pb-4">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-sih-orange" />
            <span className="font-serif font-bold text-xs text-sih-navy tracking-wider uppercase">
              OmniTransform AI Briefing
            </span>
          </div>
          <span className="text-xs font-bold text-surface-400 font-serif">
            Slide {slide.slideNumber} / {slides.length}
          </span>
        </div>

        <div className="my-auto py-4">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-sih-navy mb-2 tracking-tight">
            {slide.title}
          </h2>
          {slide.subtitle && (
            <p className="text-sm font-semibold text-sih-orange mb-6 font-sans">
              {slide.subtitle}
            </p>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center mt-6">
            <div className="md:col-span-2 space-y-3">
              {slide.bullets.map((b, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-sih-blue mt-2 shrink-0" />
                  <p className="text-sm sm:text-base text-surface-800 font-sans leading-relaxed">
                    {b}
                  </p>
                </div>
              ))}
            </div>

            {slide.keyMetric && (
              <div className="p-6 rounded-2xl bg-sih-blue-light/50 border border-sih-blue/30 text-center flex flex-col items-center justify-center shadow-sm">
                <span className="text-3xl sm:text-4xl font-extrabold text-sih-navy font-sans tracking-tight">
                  {slide.keyMetric.value}
                </span>
                <span className="text-xs font-bold text-sih-orange uppercase tracking-wider mt-1">
                  {slide.keyMetric.label}
                </span>
              </div>
            )}
          </div>
        </div>

        <div className="border-t border-surface-200 pt-3 flex items-center justify-between text-xs text-surface-400 font-sans">
          <span>@NTRO Cyber Forensics Intelligence Division</span>
          <span>Sovereign Local Execution • Confidential</span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <button
          onClick={prevSlide}
          disabled={currentSlideIdx === 0}
          className="px-4 py-2 rounded-xl bg-white border border-surface-200 hover:bg-surface-100 text-surface-700 font-bold text-xs shadow-sm disabled:opacity-40 disabled:pointer-events-none transition-all flex items-center gap-1.5"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Previous Slide</span>
        </button>

        <div className="flex items-center gap-1.5">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlideIdx(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                currentSlideIdx === i ? 'w-8 bg-sih-navy' : 'bg-surface-300 hover:bg-surface-400'
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          disabled={currentSlideIdx === slides.length - 1}
          className="px-4 py-2 rounded-xl bg-white border border-surface-200 hover:bg-surface-100 text-surface-700 font-bold text-xs shadow-sm disabled:opacity-40 disabled:pointer-events-none transition-all flex items-center gap-1.5"
        >
          <span>Next Slide</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
