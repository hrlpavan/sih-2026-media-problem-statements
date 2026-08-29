import React from 'react';
import { CheckCircle2, Loader2, Database, FileCode, Layers, ShieldCheck, Cpu } from 'lucide-react';

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
    { num: 1, title: 'Spatial Parser', sub: 'PyMuPDF Coordinates', icon: FileCode },
    { num: 2, title: 'Vector Index', sub: 'FAISS Chunking', icon: Database },
    { num: 3, title: 'LLM Orchestrator', sub: 'Llama 3.3 Schema', icon: Cpu },
    { num: 4, title: 'Compilers', sub: 'Slides, Audio, Press', icon: Layers },
    { num: 5, title: 'Citations', sub: 'Fact Verification', icon: ShieldCheck }
  ];

  if (!isProcessing && currentStep === 0) return null;

  return (
    <div className="industrial-panel rounded-xl p-5 mb-6 pipeline-container no-print transition-all">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
          <h3 className="font-mono text-[11px] font-semibold text-zinc-700 uppercase tracking-wider">
            Pipeline Telemetry Stream
          </h3>
        </div>
        <span className="font-mono text-[10px] text-zinc-600 bg-zinc-100 px-2 py-0.5 rounded border border-zinc-200">
          {currentStepName || 'IDLE'}
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-5 gap-2.5">
        {steps.map((s) => {
          const Icon = s.icon;
          const isDone = currentStep > s.num;
          const isCurrent = currentStep === s.num;

          return (
            <div
              key={s.num}
              className={`p-3 rounded border transition-all ${
                isDone
                  ? 'bg-emerald-50/60 border-emerald-300 text-zinc-900'
                  : isCurrent
                  ? 'bg-zinc-100 border-zinc-400 text-zinc-900 shadow-sm'
                  : 'bg-zinc-50 border-zinc-200 text-zinc-400 opacity-60'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <Icon className={`w-3.5 h-3.5 ${isDone ? 'text-emerald-700' : isCurrent ? 'text-zinc-900' : 'text-zinc-400'}`} />
                {isDone ? (
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                ) : isCurrent ? (
                  <Loader2 className="w-3.5 h-3.5 text-orange-500 animate-spin" />
                ) : (
                  <span className="font-mono text-[9px] text-zinc-400">0{s.num}</span>
                )}
              </div>
              <h4 className="font-semibold text-xs text-zinc-900">{s.title}</h4>
              <p className="font-mono text-[10px] text-zinc-500 mt-0.5">{s.sub}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
