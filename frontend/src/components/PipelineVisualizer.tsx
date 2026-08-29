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
    { num: 1, title: 'Spatial Parsing', sub: 'PyMuPDF Coordinate Tagging', icon: FileCode },
    { num: 2, title: 'Chunking & RAG', sub: 'In-Memory FAISS Vector Store', icon: Database },
    { num: 3, title: 'LLM Orchestrator', sub: 'Llama 3.3 JSON Schema', icon: Sparkles },
    { num: 4, title: 'Parallel Compilers', sub: 'Slides, Audio, Graphics, Press', icon: Layers },
    { num: 5, title: 'Citation Mapping', sub: 'Zero-Hallucination Verification', icon: ShieldCheck }
  ];

  if (!isProcessing && currentStep === 0) return null;

  return (
    <div className="bg-white rounded-2xl border border-surface-200 p-6 shadow-sm my-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-sih-orange animate-pulse" />
          <h3 className="text-sm font-bold text-sih-navy uppercase tracking-wider">
            Real-Time Processing Pipeline (Asynchronous Multi-Engine Execution)
          </h3>
        </div>
        <span className="text-xs font-semibold text-sih-blue bg-sih-blue-light px-2.5 py-1 rounded-full">
          {currentStepName || 'Pipeline Active'}
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
              className={`p-3.5 rounded-xl border transition-all ${
                isDone
                  ? 'bg-emerald-50/70 border-emerald-300 text-emerald-900'
                  : isCurrent
                  ? 'bg-sih-blue-light/70 border-sih-blue shadow-sm text-sih-navy'
                  : 'bg-surface-50 border-surface-200 text-surface-400 opacity-60'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className={`p-1.5 rounded-lg ${
                  isDone ? 'bg-emerald-600 text-white' : isCurrent ? 'bg-sih-blue text-white' : 'bg-surface-200 text-surface-500'
                }`}>
                  <Icon className="w-4 h-4" />
                </div>
                {isDone ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                ) : isCurrent ? (
                  <Loader2 className="w-4 h-4 text-sih-blue animate-spin" />
                ) : (
                  <span className="text-xs font-bold text-surface-400">Step {s.num}</span>
                )}
              </div>
              <h4 className="font-bold text-xs">{s.title}</h4>
              <p className="text-[11px] text-surface-500 mt-0.5 leading-tight">{s.sub}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
