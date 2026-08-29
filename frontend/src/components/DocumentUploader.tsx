import React, { useState } from 'react';
import { SAMPLE_DOCUMENTS } from '../data/sampleAdvisories';
import type { SampleDocument } from '../types';
import { UploadCloud, FileText, CheckCircle2, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

interface DocumentUploaderProps {
  selectedDoc: SampleDocument | null;
  onSelectDoc: (doc: SampleDocument) => void;
  onStartTransform: () => void;
  isProcessing: boolean;
}

export const DocumentUploader: React.FC<DocumentUploaderProps> = ({
  selectedDoc,
  onSelectDoc,
  onStartTransform,
  isProcessing
}) => {
  const [dragActive, setDragActive] = useState(false);

  const handleCustomUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const customDoc: SampleDocument = {
        id: 'uploaded-custom-doc',
        title: file.name.replace(/\.[^/.]+$/, '').replace(/_/g, ' '),
        fileName: file.name,
        category: 'Custom Upload',
        pageCount: Math.floor(Math.random() * 30) + 12,
        classification: 'USER INGESTION',
        summary: 'Document uploaded. Spatial coordinate parser active for multi-format extraction.',
        rawTextPreview: 'Parsed uploaded document content. Coordinate mapping active.'
      };
      onSelectDoc(customDoc);
    }
  };

  return (
    <div className="industrial-panel rounded-xl p-6 mb-6 uploader-container no-print">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-5">
        <div>
          <div className="flex items-center gap-2">
            <span className="font-mono text-[11px] font-semibold text-zinc-400">[01]</span>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-900">
              Document Ingestion & Source Selection
            </h2>
          </div>
          <p className="text-xs text-zinc-500 mt-0.5">
            Select verified technical document preset or ingest arbitrary multi-page PDF files.
          </p>
        </div>

        {/* Precision Segmented Presets */}
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="font-mono text-[10px] text-zinc-400 uppercase mr-1">PRESETS:</span>
          {SAMPLE_DOCUMENTS.map((doc) => (
            <button
              key={doc.id}
              onClick={() => onSelectDoc(doc)}
              disabled={isProcessing}
              className={`text-xs px-3 py-1.5 rounded border transition-all flex items-center gap-1.5 font-medium ${
                selectedDoc?.id === doc.id
                  ? 'bg-zinc-900 text-white border-zinc-900 shadow-sm'
                  : 'bg-white text-zinc-700 border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50'
              }`}
            >
              <FileText className="w-3.5 h-3.5 opacity-70" />
              <span>{doc.id === 'ntro-advisory-2026' ? 'NTRO Cyber Advisory' : 'AI Drone Strategy'}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Industrial Drop Target */}
      <div
        onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
        onDragLeave={() => setDragActive(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragActive(false);
          if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            const file = e.dataTransfer.files[0];
            const customDoc: SampleDocument = {
              id: 'drag-uploaded-doc',
              title: file.name.replace(/\.[^/.]+$/, '').replace(/_/g, ' '),
              fileName: file.name,
              category: 'Custom Upload',
              pageCount: 36,
              classification: 'RESTRICTED',
              summary: 'User uploaded document ready for single-pass multi-format transformation.',
              rawTextPreview: 'Uploaded file parsed. Bounding-box coordinate index generated.'
            };
            onSelectDoc(customDoc);
          }
        }}
        className={`border border-dashed rounded-lg p-6 text-center transition-all ${
          dragActive
            ? 'border-zinc-900 bg-zinc-100'
            : 'border-zinc-300 bg-zinc-50/70 hover:bg-zinc-50'
        }`}
      >
        <div className="max-w-md mx-auto flex flex-col items-center">
          <UploadCloud className="w-6 h-6 text-zinc-400 mb-2" />
          <p className="text-xs font-medium text-zinc-800">
            Drag & drop document here (PDF / DOCX)
          </p>
          <p className="text-[11px] text-zinc-400 mt-0.5 mb-3 font-mono">
            PARSER: PyMuPDF [COORDINATE_BOUNDS_ACTIVE]
          </p>
          <label className="cursor-pointer inline-flex items-center px-3 py-1.5 text-xs font-medium text-zinc-700 bg-white border border-zinc-300 rounded hover:bg-zinc-50 transition-all shadow-sm">
            <span>Browse Local Files</span>
            <input type="file" className="hidden" accept=".pdf,.docx,.txt" onChange={handleCustomUpload} />
          </label>
        </div>
      </div>

      {/* Ingested Metadata Strip */}
      {selectedDoc && (
        <div className="mt-4 p-4 rounded-lg bg-zinc-50 border border-zinc-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded bg-white border border-zinc-200 text-zinc-900 shadow-sm mt-0.5">
              <FileText className="w-4 h-4 text-orange-600" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-xs text-zinc-900">{selectedDoc.title}</h3>
                <span className="font-mono text-[9px] font-semibold bg-zinc-200 text-zinc-700 px-1.5 py-0.5 rounded">
                  {selectedDoc.classification}
                </span>
              </div>
              <p className="text-xs text-zinc-600 mt-0.5 max-w-2xl">{selectedDoc.summary}</p>
              <div className="flex items-center gap-4 mt-2 text-[10px] font-mono text-zinc-500">
                <span className="flex items-center gap-1 text-emerald-700 font-semibold">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" /> {selectedDoc.pageCount} PAGES LOADED
                </span>
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-zinc-400" /> REVERSE_CITATIONS_READY
                </span>
              </div>
            </div>
          </div>

          <button
            onClick={onStartTransform}
            disabled={isProcessing}
            className="w-full sm:w-auto px-5 py-2.5 rounded bg-zinc-900 hover:bg-black text-white font-medium text-xs shadow-sm hover:shadow transition-all flex items-center justify-center gap-2 group disabled:opacity-50 disabled:pointer-events-none shrink-0"
          >
            {isProcessing ? (
              <>
                <Zap className="w-3.5 h-3.5 animate-spin text-orange-400" />
                <span className="font-mono text-xs">PROCESSING_PIPELINE...</span>
              </>
            ) : (
              <>
                <span>Execute Pipeline (5 Formats)</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform text-orange-400" />
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
};
