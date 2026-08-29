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
    'Multi-Persona LLM Synthesis',
    'Parallel Format Compilers',
    'Reverse Citation Grounding'
  ];

  const progressPercent = Math.min(100, Math.round((currentStep / 5) * 100));

  return (
    <div className="bg-white rounded-2xl border border-classic-border p-6 shadow-classic-sm mb-6 pipeline-container no-print">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Loader2 className="w-4 h-4 text-classic-navy animate-spin" />
          <h3 className="font-serif font-bold text-sm text-classic-navy">
            Pipeline Execution ({progressPercent}%)
          </h3>
        </div>
        <span className="font-mono text-xs font-semibold text-classic-navy bg-classic-bg px-3 py-1 rounded border border-classic-border">
          GENERATING 5 SYNCHRONIZED ASSETS
        </span>
      </div>

      <div className="w-full bg-classic-bg h-2 rounded-full overflow-hidden mb-4 border border-classic-border">
        <div
          className="bg-classic-navy h-full rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

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
                  ? 'bg-classic-green-light border-emerald-300 text-classic-green'
                  : isCurrent
                  ? 'bg-classic-bg border-classic-navy text-classic-navy font-bold shadow-sm'
                  : 'bg-classic-bg/50 border-classic-border text-classic-slate-muted opacity-70'
              }`}
            >
              <div className="flex items-center justify-center gap-1">
                {isDone && <CheckCircle2 className="w-3.5 h-3.5 text-classic-green" />}
                <span>{title}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
