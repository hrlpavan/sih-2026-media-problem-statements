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
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-3 border-b border-classic-border no-print">
        <div>
          <span className="text-xs font-bold text-classic-navy bg-classic-bg px-2.5 py-1 rounded border border-classic-border">
            FORMAT 2: MEETING SLIDE DECK
          </span>
          <h3 className="font-serif font-bold text-base text-classic-navy mt-1">
            Slide {currentSlideIdx + 1} of {slides.length}: {slide.title}
          </h3>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="px-3.5 py-2 rounded-lg bg-classic-bg hover:bg-zinc-200 text-classic-navy font-bold text-xs border border-classic-border transition-all flex items-center gap-1.5 cursor-pointer shadow-classic-sm"
          >
            <Maximize2 className="w-3.5 h-3.5 text-classic-slate-muted" />
            <span>{isFullscreen ? 'Exit Fullscreen' : 'Present Mode'}</span>
          </button>
          <a
            href="https://github.com/hrlpavan/omnitransform-ai-resources/raw/main/SIH2026_Idea_Presentation_PS26154.pptx"
            className="px-3.5 py-2 rounded-lg bg-classic-navy hover:bg-classic-navy-dark text-white font-bold text-xs transition-all flex items-center gap-1.5 shadow-classic-sm"
          >
            <Download className="w-3.5 h-3.5 text-classic-ochre" />
            <span>Download PowerPoint (.PPTX)</span>
          </a>
        </div>
      </div>

      {/* 16:9 Presentation Canvas */}
      <div className={`relative bg-white rounded-2xl border-2 border-classic-border shadow-classic-md overflow-hidden transition-all ${
        isFullscreen ? 'fixed inset-4 z-50 flex flex-col justify-between p-12 bg-white' : 'aspect-[16/9] p-8 flex flex-col justify-between'
      }`}>
        <div className="flex items-center justify-between border-b border-classic-border pb-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-classic-ochre" />
            <span className="font-serif font-bold text-xs text-classic-navy uppercase tracking-wider">
              OmniTransform AI Briefing
            </span>
          </div>
          <span className="font-mono text-xs font-bold text-classic-slate-muted">
            Slide {slide.slideNumber} / {slides.length}
          </span>
        </div>

        <div className="my-auto py-4">
          <h2 className="font-serif text-xl sm:text-3xl font-bold text-classic-navy mb-2 tracking-tight">
            {slide.title}
          </h2>
          {slide.subtitle && (
            <p className="text-xs sm:text-sm font-semibold text-classic-ochre mb-6 font-sans">
              {slide.subtitle}
            </p>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center mt-4">
            <div className="md:col-span-2 space-y-3 font-sans">
              {slide.bullets.map((b, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-classic-navy mt-2 shrink-0" />
                  <p className="text-xs sm:text-base text-classic-slate font-medium leading-relaxed">
                    {b}
                  </p>
                </div>
              ))}
            </div>

            {slide.keyMetric && (
              <div className="p-6 rounded-xl bg-classic-bg border border-classic-border text-center flex flex-col items-center justify-center shadow-classic-sm">
                <span className="font-serif text-3xl sm:text-4xl font-extrabold text-classic-navy tracking-tight">
                  {slide.keyMetric.value}
                </span>
                <span className="text-xs font-bold text-classic-ochre uppercase tracking-wider mt-1 font-sans">
                  {slide.keyMetric.label}
                </span>
              </div>
            )}
          </div>
        </div>

        <div className="border-t border-classic-border pt-3 flex items-center justify-between text-xs text-classic-slate-muted font-sans">
          <span>NTRO Cyber Intelligence Division • PS ID: 26154</span>
          <span>Team: <strong className="text-classic-navy">HRL</strong> (ID: 104580)</span>
        </div>
      </div>

      {/* Slide Navigation Controls */}
      <div className="flex items-center justify-between no-print">
        <button
          onClick={prevSlide}
          disabled={currentSlideIdx === 0}
          className="px-4 py-2 rounded-lg bg-white border border-classic-border hover:bg-classic-bg text-classic-navy font-bold text-xs shadow-classic-sm disabled:opacity-40 disabled:pointer-events-none transition-all flex items-center gap-1 cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Previous Slide</span>
        </button>

        <div className="flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlideIdx(i)}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                currentSlideIdx === i ? 'w-8 bg-classic-navy' : 'w-2 bg-zinc-300 hover:bg-zinc-400'
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          disabled={currentSlideIdx === slides.length - 1}
          className="px-4 py-2 rounded-lg bg-white border border-classic-border hover:bg-classic-bg text-classic-navy font-bold text-xs shadow-classic-sm disabled:opacity-40 disabled:pointer-events-none transition-all flex items-center gap-1 cursor-pointer"
        >
          <span>Next Slide</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
