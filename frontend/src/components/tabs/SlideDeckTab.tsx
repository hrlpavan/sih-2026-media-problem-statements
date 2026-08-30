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
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-3 border-b border-zinc-200 no-print">
        <div>
          <span className="text-[11px] font-bold tracking-wider text-hrl-crimson uppercase">FORMAT 2 · MEETING SLIDE DECK</span>
          <h3 className="font-bold text-base text-zinc-900 mt-1">
            Slide {currentSlideIdx + 1} of {slides.length}: {slide.title}
          </h3>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="px-3.5 py-2 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-900 font-bold text-xs border border-zinc-300 transition-all flex items-center gap-1.5 cursor-pointer shadow-sm"
          >
            <Maximize2 className="w-3.5 h-3.5 text-zinc-600" />
            <span>{isFullscreen ? 'Exit Fullscreen' : 'Present Mode'}</span>
          </button>
          <a
            href="https://github.com/hrlpavan/omnitransform-ai-resources/raw/main/SIH2026_Idea_Presentation_PS26154.pptx"
            className="px-4 py-2 rounded-full bg-zinc-900 hover:bg-black text-white font-bold text-xs transition-all flex items-center gap-1.5 shadow-sm"
          >
            <Download className="w-3.5 h-3.5 text-hrl-crimson" />
            <span>Download PowerPoint (.PPTX)</span>
          </a>
        </div>
      </div>

      {/* 16:9 Presentation Canvas */}
      <div className={`relative bg-white rounded-2xl border-2 border-zinc-200 shadow-md overflow-hidden transition-all ${
        isFullscreen ? 'fixed inset-4 z-50 flex flex-col justify-between p-12 bg-white' : 'aspect-[16/9] p-8 flex flex-col justify-between'
      }`}>
        <div className="flex items-center justify-between border-b border-zinc-100 pb-3">
          <div className="flex items-center gap-2.5">
            <img src="/hrl_logo_transparent.png" alt="HRL" className="h-5 object-contain" />
            <span className="font-bold text-xs text-zinc-900 uppercase tracking-wider">
              OmniTransform AI · HRL
            </span>
          </div>
          <span className="font-mono text-xs font-bold text-zinc-500">
            Slide {slide.slideNumber} / {slides.length}
          </span>
        </div>

        <div className="my-auto py-4">
          <h2 className="text-xl sm:text-3xl font-bold text-zinc-900 mb-2 tracking-tight">
            {slide.title}
          </h2>
          {slide.subtitle && (
            <p className="text-xs sm:text-sm font-semibold text-hrl-crimson mb-6">
              {slide.subtitle}
            </p>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center mt-4">
            <div className="md:col-span-2 space-y-3">
              {slide.bullets.map((b, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-zinc-900 mt-2 shrink-0" />
                  <p className="text-xs sm:text-base text-zinc-800 font-medium leading-relaxed">
                    {b}
                  </p>
                </div>
              ))}
            </div>

            {slide.keyMetric && (
              <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200 text-center flex flex-col items-center justify-center">
                <span className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
                  {slide.keyMetric.value}
                </span>
                <span className="text-xs font-bold text-hrl-crimson uppercase tracking-wider mt-1">
                  {slide.keyMetric.label}
                </span>
              </div>
            )}
          </div>
        </div>

        <div className="border-t border-zinc-100 pt-3 flex items-center justify-between text-xs text-zinc-500">
          <span>NTRO Cyber Intelligence Division · PS ID: 26154</span>
          <span>Team: <strong className="text-zinc-900">HRL</strong> (ID: 104580)</span>
        </div>
      </div>

      {/* Slide Navigation Controls */}
      <div className="flex items-center justify-between no-print">
        <button
          onClick={prevSlide}
          disabled={currentSlideIdx === 0}
          className="px-4 py-2 rounded-full bg-white border border-zinc-300 hover:bg-zinc-50 text-zinc-900 font-bold text-xs shadow-sm disabled:opacity-40 disabled:pointer-events-none transition-all flex items-center gap-1 cursor-pointer"
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
                currentSlideIdx === i ? 'w-8 bg-zinc-900' : 'w-2 bg-zinc-300 hover:bg-zinc-400'
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          disabled={currentSlideIdx === slides.length - 1}
          className="px-4 py-2 rounded-full bg-white border border-zinc-300 hover:bg-zinc-50 text-zinc-900 font-bold text-xs shadow-sm disabled:opacity-40 disabled:pointer-events-none transition-all flex items-center gap-1 cursor-pointer"
        >
          <span>Next Slide</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
