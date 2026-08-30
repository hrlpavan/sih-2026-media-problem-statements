import React from 'react';
import { CheckCircle2, Loader2 } from 'lucide-react';

interface PipelineVisualizerProps {
  currentStep: number;
  currentStepName: string;
  isProcessing: boolean;
}

export const PipelineVisualizer: React.FC<PipelineVisualizerProps> = ({
  currentStep,
  isProcessing
}) => {
  if (!isProcessing && currentStep === 0) return null;

  const steps = [
    'Spatial Coordinate Parsing',
    'Semantic RAG Chunking',
    'Multi-Persona Synthesis',
    'Parallel Format Compilers',
    'Reverse Citation Grounding'
  ];

  const progressPercent = Math.min(100, Math.round((currentStep / 5) * 100));
  const isComplete = progressPercent === 100 && !isProcessing;

  return (
    <div className="bg-white rounded-[24px] border border-black/5 p-5 sm:p-6 shadow-sm mb-6 pipeline-container no-print transition-all animate-in fade-in duration-200">
      {/* Header Bar with Apple Typography */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-3.5">
        <div className="flex items-center gap-2.5">
          {isComplete ? (
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          ) : (
            <Loader2 className="w-4 h-4 text-hrl-crimson animate-spin shrink-0" />
          )}
          <h3 className="font-sans font-bold text-sm sm:text-base text-[#1D1D1F] tracking-tight">
            Pipeline Execution ({progressPercent}%)
          </h3>
        </div>

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F2F2F7] text-[11px] font-semibold text-[#1D1D1F] border border-black/5 shadow-xs whitespace-nowrap">
          <span className={`w-1.5 h-1.5 rounded-full ${isComplete ? 'bg-emerald-500' : 'bg-hrl-crimson animate-pulse'}`} />
          <span>{isComplete ? 'All 5 Formats Synchronized' : 'Generating 5 Synchronized Assets'}</span>
        </div>
      </div>

      {/* Sleek Progress Track */}
      <div className="w-full bg-[#F2F2F7] h-2 rounded-full overflow-hidden mb-4 border border-black/5">
        <div
          className={`h-full rounded-full transition-all duration-500 ease-out ${
            isComplete ? 'bg-emerald-500' : 'bg-gradient-to-r from-hrl-crimson to-rose-500'
          }`}
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* 5-Step Progress Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-center text-xs">
        {steps.map((title, idx) => {
          const stepNum = idx + 1;
          const isDone = currentStep > stepNum || isComplete;
          const isCurrent = currentStep === stepNum && !isComplete;

          return (
            <div
              key={idx}
              className={`p-2.5 rounded-xl border transition-all ${
                isDone
                  ? 'bg-emerald-50/70 border-emerald-200 text-emerald-900 font-semibold'
                  : isCurrent
                  ? 'bg-zinc-900 border-zinc-900 text-white font-semibold shadow-xs'
                  : 'bg-[#F9F9FB] border-black/5 text-zinc-400 font-medium'
              }`}
            >
              <div className="flex items-center justify-center gap-1.5">
                {isDone ? (
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                ) : isCurrent ? (
                  <Loader2 className="w-3 h-3 text-white animate-spin shrink-0" />
                ) : (
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 shrink-0" />
                )}
                <span className="truncate">{title}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
