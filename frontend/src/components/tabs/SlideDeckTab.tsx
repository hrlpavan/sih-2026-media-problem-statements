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
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-black/[0.06]">
        <div>
          <span className="text-[11px] font-semibold text-sih-navy uppercase tracking-wider bg-sih-blue-light px-2.5 py-1 rounded-full">
            Format 2: Keynote Slide Deck
          </span>
          <h3 className="text-lg font-semibold text-apple-text mt-1">
            Slide {currentSlideIdx + 1} of {slides.length}: {slide.title}
          </h3>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="px-3.5 py-2 rounded-xl bg-apple-bg hover:bg-apple-gray text-apple-text font-medium text-xs border border-black/[0.08] transition-all flex items-center gap-1.5 shadow-apple-sm"
          >
            <Maximize2 className="w-3.5 h-3.5 text-apple-subtext" />
            <span>{isFullscreen ? 'Exit' : 'Present'}</span>
          </button>
          <a
            href="https://github.com/hrlpavan/omnitransform-ai-resources/raw/main/SIH2026_Idea_Presentation_PS26154.pptx"
            className="px-3.5 py-2 rounded-xl bg-sih-navy hover:bg-sih-navy-light text-white font-medium text-xs shadow-apple-sm transition-all flex items-center gap-1.5"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download .PPTX</span>
          </a>
        </div>
      </div>

      {/* 16:9 Keynote Canvas */}
      <div className={`relative bg-white rounded-3xl border border-black/[0.08] shadow-apple-md overflow-hidden transition-all ${
        isFullscreen ? 'fixed inset-4 z-50 flex flex-col justify-between p-12 bg-white' : 'aspect-[16/9] p-8 flex flex-col justify-between'
      }`}>
        <div className="flex items-center justify-between border-b border-black/[0.06] pb-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-sih-orange" />
            <span className="font-semibold text-xs text-sih-navy uppercase tracking-wider">
              OmniTransform Briefing
            </span>
          </div>
          <span className="text-xs font-semibold text-apple-subtext">
            Slide {slide.slideNumber} / {slides.length}
          </span>
        </div>

        <div className="my-auto py-4">
          <h2 className="text-2xl sm:text-3xl font-semibold text-apple-text mb-2 tracking-tight">
            {slide.title}
          </h2>
          {slide.subtitle && (
            <p className="text-sm font-medium text-sih-orange mb-6">
              {slide.subtitle}
            </p>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center mt-6">
            <div className="md:col-span-2 space-y-3">
              {slide.bullets.map((b, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-sih-blue mt-2 shrink-0" />
                  <p className="text-sm text-apple-text leading-relaxed">
                    {b}
                  </p>
                </div>
              ))}
            </div>

            {slide.keyMetric && (
              <div className="p-6 rounded-2xl bg-sih-blue-light/60 border border-sih-blue/20 text-center flex flex-col items-center justify-center shadow-apple-sm">
                <span className="text-3xl sm:text-4xl font-extrabold text-sih-navy tracking-tight">
                  {slide.keyMetric.value}
                </span>
                <span className="text-xs font-semibold text-sih-orange uppercase tracking-wider mt-1">
                  {slide.keyMetric.label}
                </span>
              </div>
            )}
          </div>
        </div>

        <div className="border-t border-black/[0.06] pt-3 flex items-center justify-between text-xs text-apple-subtext font-normal">
          <span>NTRO Cyber Intelligence Division</span>
          <span>Confidential • SIH 2026</span>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-between">
        <button
          onClick={prevSlide}
          disabled={currentSlideIdx === 0}
          className="px-4 py-2 rounded-xl bg-white border border-black/[0.08] hover:bg-apple-gray text-apple-text font-medium text-xs shadow-apple-sm disabled:opacity-40 disabled:pointer-events-none transition-all flex items-center gap-1.5"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Previous</span>
        </button>

        <div className="flex items-center gap-1.5">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlideIdx(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentSlideIdx === i ? 'w-6 bg-sih-navy' : 'w-2 bg-black/20 hover:bg-black/40'
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          disabled={currentSlideIdx === slides.length - 1}
          className="px-4 py-2 rounded-xl bg-white border border-black/[0.08] hover:bg-apple-gray text-apple-text font-medium text-xs shadow-apple-sm disabled:opacity-40 disabled:pointer-events-none transition-all flex items-center gap-1.5"
        >
          <span>Next</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
