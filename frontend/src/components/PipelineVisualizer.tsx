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
    'Reading PDF Pages',
    'Finding Key Points',
    'Writing 1-Page Summary',
    'Designing Slides & Charts',
    'Synthesizing Voice Audio'
  ];

  const progressPercent = Math.min(100, Math.round((currentStep / 5) * 100));

  return (
    <div className="bg-white rounded-2xl border border-zinc-200 p-6 shadow-sm mb-6 pipeline-container no-print">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Loader2 className="w-4 h-4 text-orange-600 animate-spin" />
          <h3 className="text-sm font-bold text-zinc-900">
            Processing Document ({progressPercent}%)
          </h3>
        </div>
        <span className="text-xs font-semibold text-orange-700 bg-orange-50 px-2.5 py-1 rounded-full border border-orange-200">
          Generating 5 Synchronized Formats
        </span>
      </div>

      {/* Progress Track */}
      <div className="w-full bg-zinc-100 h-2.5 rounded-full overflow-hidden mb-4">
        <div
          className="bg-orange-600 h-full rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* 5 Simple Steps */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-center text-xs">
        {steps.map((title, idx) => {
          const stepNum = idx + 1;
          const isDone = currentStep > stepNum;
          const isCurrent = currentStep === stepNum;

          return (
            <div
              key={idx}
              className={`p-2 rounded-lg border font-medium ${
                isDone
                  ? 'bg-emerald-50 border-emerald-300 text-emerald-800'
                  : isCurrent
                  ? 'bg-orange-50 border-orange-400 text-orange-900 font-bold'
                  : 'bg-zinc-50 border-zinc-200 text-zinc-400'
              }`}
            >
              <div className="flex items-center justify-center gap-1">
                {isDone && <CheckCircle2 className="w-3 h-3 text-emerald-600" />}
                <span>{title}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
