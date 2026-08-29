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
    <div className="space-y-5">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-3 border-b border-zinc-200 no-print">
        <div>
          <span className="font-mono text-[10px] font-semibold text-zinc-500 uppercase tracking-wider bg-zinc-100 px-2 py-0.5 rounded border border-zinc-200">
            FORMAT_02 // SLIDE_DECK
          </span>
          <h3 className="text-sm font-semibold text-zinc-900 mt-1">
            Slide {currentSlideIdx + 1} of {slides.length}: {slide.title}
          </h3>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="px-3 py-1.5 rounded bg-white hover:bg-zinc-100 text-zinc-700 font-medium text-xs border border-zinc-200 transition-all flex items-center gap-1.5 shadow-sm"
          >
            <Maximize2 className="w-3.5 h-3.5 text-zinc-500" />
            <span>{isFullscreen ? 'Exit' : 'Present'}</span>
          </button>
          <a
            href="https://github.com/hrlpavan/omnitransform-ai-resources/raw/main/SIH2026_Idea_Presentation_PS26154.pptx"
            className="px-3 py-1.5 rounded bg-zinc-900 hover:bg-black text-white font-medium text-xs shadow-sm transition-all flex items-center gap-1.5"
          >
            <Download className="w-3.5 h-3.5 text-orange-400" />
            <span>Download .PPTX</span>
          </a>
        </div>
      </div>

      {/* 16:9 Presentation Canvas */}
      <div className={`relative bg-white rounded-lg border border-zinc-200 shadow-sm overflow-hidden transition-all ${
        isFullscreen ? 'fixed inset-4 z-50 flex flex-col justify-between p-12 bg-white' : 'aspect-[16/9] p-8 flex flex-col justify-between'
      }`}>
        <div className="flex items-center justify-between border-b border-zinc-200 pb-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-600" />
            <span className="font-mono text-[11px] font-semibold text-zinc-900 uppercase">
              OMNITRANSFORM_AI // INTELLIGENCE_DECK
            </span>
          </div>
          <span className="font-mono text-[11px] text-zinc-400">
            SLIDE [{currentSlideIdx + 1 < 10 ? `0${currentSlideIdx + 1}` : currentSlideIdx + 1}/0{slides.length}]
          </span>
        </div>

        <div className="my-auto py-4">
          <h2 className="text-xl sm:text-2xl font-semibold text-zinc-900 mb-1 tracking-tight">
            {slide.title}
          </h2>
          {slide.subtitle && (
            <p className="font-mono text-xs text-orange-600 mb-5">
              {slide.subtitle}
            </p>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center mt-4">
            <div className="md:col-span-2 space-y-2.5">
              {slide.bullets.map((b, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-900 mt-2 shrink-0" />
                  <p className="text-xs sm:text-sm text-zinc-800 leading-relaxed font-medium">
                    {b}
                  </p>
                </div>
              ))}
            </div>

            {slide.keyMetric && (
              <div className="p-5 rounded bg-zinc-50 border border-zinc-200 text-center flex flex-col items-center justify-center">
                <span className="text-3xl font-extrabold text-zinc-900 tracking-tight font-mono">
                  {slide.keyMetric.value}
                </span>
                <span className="font-mono text-[10px] font-semibold text-zinc-500 uppercase tracking-wider mt-1">
                  {slide.keyMetric.label}
                </span>
              </div>
            )}
          </div>
        </div>

        <div className="border-t border-zinc-200 pt-3 flex items-center justify-between font-mono text-[10px] text-zinc-400">
          <span>NTRO CYBER INTELLIGENCE DIVISION</span>
          <span>TIER-1 SPECIFICATION // SIH-2026</span>
        </div>
      </div>

      {/* Navigation Toolbar */}
      <div className="flex items-center justify-between no-print">
        <button
          onClick={prevSlide}
          disabled={currentSlideIdx === 0}
          className="px-3 py-1.5 rounded bg-white border border-zinc-200 hover:bg-zinc-50 text-zinc-700 font-medium text-xs shadow-sm disabled:opacity-40 disabled:pointer-events-none transition-all flex items-center gap-1"
        >
          <ChevronLeft className="w-3.5 h-3.5" />
          <span>Previous</span>
        </button>

        <div className="flex items-center gap-1.5">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlideIdx(i)}
              className={`h-1.5 rounded-full transition-all ${
                currentSlideIdx === i ? 'w-6 bg-zinc-900' : 'w-1.5 bg-zinc-300 hover:bg-zinc-400'
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          disabled={currentSlideIdx === slides.length - 1}
          className="px-3 py-1.5 rounded bg-white border border-zinc-200 hover:bg-zinc-50 text-zinc-700 font-medium text-xs shadow-sm disabled:opacity-40 disabled:pointer-events-none transition-all flex items-center gap-1"
        >
          <span>Next</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
