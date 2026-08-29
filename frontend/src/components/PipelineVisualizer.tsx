import React from 'react';
import { CheckCircle2, Loader2, Sparkles, Database, FileCode, Layers, ShieldCheck } from 'lucide-react';

interface PipelineVisualizerProps {
  currentStep: number;
  currentStepName: string;
  isProcessing: boolean;
}

export const PipelineVisualizer: React.FC<PipelineVisualizerProps> = ({
  currentStep,
  currentStepName,
  isProcessing
}) => {
  const steps = [
    { num: 1, title: 'Spatial Parsing', sub: 'PyMuPDF Coordinates', icon: FileCode },
    { num: 2, title: 'Chunking & RAG', sub: 'FAISS Vector DB', icon: Database },
    { num: 3, title: 'LLM Synthesis', sub: 'Llama 3.3 Structuring', icon: Sparkles },
    { num: 4, title: 'Compilers', sub: 'Slides, Audio, Graphics', icon: Layers },
    { num: 5, title: 'Reverse Citations', sub: 'Fact Verification', icon: ShieldCheck }
  ];

  if (!isProcessing && currentStep === 0) return null;

  return (
    <div className="apple-card rounded-3xl p-6 mb-8 transition-all">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-sih-orange animate-pulse" />
          <h3 className="text-xs font-semibold text-apple-text uppercase tracking-wider">
            Pipeline Execution Status
          </h3>
        </div>
        <span className="text-xs font-semibold text-sih-blue bg-sih-blue/10 px-3 py-1 rounded-full">
          {currentStepName || 'Active'}
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
        {steps.map((s) => {
          const Icon = s.icon;
          const isDone = currentStep > s.num;
          const isCurrent = currentStep === s.num;

          return (
            <div
              key={s.num}
              className={`p-4 rounded-2xl border transition-all duration-300 ${
                isDone
                  ? 'bg-sih-green-light/60 border-sih-green/30 text-apple-text'
                  : isCurrent
                  ? 'bg-sih-blue/5 border-sih-blue shadow-apple-sm text-apple-text'
                  : 'bg-apple-bg border-black/[0.04] text-apple-subtext opacity-60'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className={`p-2 rounded-xl ${
                  isDone ? 'bg-sih-green text-white' : isCurrent ? 'bg-sih-blue text-white' : 'bg-black/[0.05] text-apple-subtext'
                }`}>
                  <Icon className="w-3.5 h-3.5" />
                </div>
                {isDone ? (
                  <CheckCircle2 className="w-4 h-4 text-sih-green" />
                ) : isCurrent ? (
                  <Loader2 className="w-4 h-4 text-sih-blue animate-spin" />
                ) : (
                  <span className="text-[10px] font-semibold text-apple-subtext">Step {s.num}</span>
                )}
              </div>
              <h4 className="font-semibold text-xs text-apple-text">{s.title}</h4>
              <p className="text-[11px] text-apple-subtext mt-0.5">{s.sub}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
