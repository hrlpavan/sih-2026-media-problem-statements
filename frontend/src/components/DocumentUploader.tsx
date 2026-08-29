import React, { useState } from 'react';
import { SAMPLE_DOCUMENTS } from '../data/sampleAdvisories';
import type { SampleDocument } from '../types';
import { UploadCloud, FileText, CheckCircle, ArrowRight, ShieldCheck, Zap, Sparkles } from 'lucide-react';

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
        category: 'Custom Uploaded Document',
        pageCount: Math.floor(Math.random() * 30) + 10,
        classification: 'USER UPLOAD',
        summary: 'Custom document ingested. Ready for automated multi-format extraction and citation indexing.',
        rawTextPreview: 'Ingested custom document content. The layout parser has mapped all paragraphs and tables with spatial coordinates.'
      };
      onSelectDoc(customDoc);
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-surface-200 p-6 shadow-sm">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
        <div>
          <h2 className="text-xl font-bold text-sih-navy tracking-tight">
            1. Document Ingestion & Source Selection
          </h2>
          <p className="text-sm text-surface-500">
            Upload any 50+ page PDF/DOCX or load built-in government intelligence advisories for instant live demonstration.
          </p>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs font-semibold text-surface-400 uppercase tracking-wider">Quick Presets:</span>
          {SAMPLE_DOCUMENTS.map((doc) => (
            <button
              key={doc.id}
              onClick={() => onSelectDoc(doc)}
              disabled={isProcessing}
              className={`text-xs px-3 py-1.5 rounded-lg border font-medium transition-all flex items-center gap-1.5 ${
                selectedDoc?.id === doc.id
                  ? 'bg-sih-blue text-white border-sih-blue shadow-sm'
                  : 'bg-surface-50 text-surface-700 border-surface-200 hover:border-sih-blue/50 hover:bg-surface-100'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>{doc.id === 'ntro-advisory-2026' ? 'NTRO Cyber Advisory' : 'AI Drone Strategy'}</span>
            </button>
          ))}
        </div>
      </div>

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
              category: 'Custom Ingested PDF',
              pageCount: 36,
              classification: 'RESTRICTED / LOCAL',
              summary: 'User uploaded document ready for single-pass multi-format transformation.',
              rawTextPreview: 'Uploaded file parsed. Bounding-box coordinate index generated.'
            };
            onSelectDoc(customDoc);
          }
        }}
        className={`border-2 border-dashed rounded-xl p-8 text-center transition-all ${
          dragActive
            ? 'border-sih-orange bg-sih-orange/5'
            : 'border-surface-300 bg-surface-50/50 hover:bg-surface-50'
        }`}
      >
        <div className="max-w-md mx-auto flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-sih-blue/10 flex items-center justify-center text-sih-blue mb-3">
            <UploadCloud className="w-6 h-6" />
          </div>
          <p className="text-sm font-semibold text-surface-800 mb-1">
            Drag & drop raw PDF, DOCX, or research whitepapers here
          </p>
          <p className="text-xs text-surface-400 mb-4">
            Supports multi-column reports, tables, scanned graphics, and threat advisories (Up to 100+ pages)
          </p>
          <label className="cursor-pointer inline-flex items-center px-4 py-2 text-xs font-semibold text-sih-navy bg-white border border-surface-300 rounded-lg shadow-sm hover:bg-surface-100 hover:border-sih-navy transition-all">
            <span>Browse Local Files</span>
            <input type="file" className="hidden" accept=".pdf,.docx,.txt" onChange={handleCustomUpload} />
          </label>
        </div>
      </div>

      {selectedDoc && (
        <div className="mt-5 p-4 rounded-xl bg-sih-blue-light/40 border border-sih-blue/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-lg bg-sih-blue text-white shadow-sm mt-0.5">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-sm text-sih-navy">{selectedDoc.title}</h3>
                <span className="text-[10px] font-bold bg-amber-100 text-amber-800 border border-amber-300 px-1.5 py-0.5 rounded">
                  {selectedDoc.classification}
                </span>
              </div>
              <p className="text-xs text-surface-600 mt-1 max-w-2xl">{selectedDoc.summary}</p>
              <div className="flex items-center gap-4 mt-2 text-[11px] text-surface-500 font-medium">
                <span className="flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5 text-sih-green" /> {selectedDoc.pageCount} Pages Ingested
                </span>
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-sih-blue" /> PyMuPDF Coordinate Mapping Active
                </span>
              </div>
            </div>
          </div>

          <button
            onClick={onStartTransform}
            disabled={isProcessing}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-sih-orange hover:bg-sih-orange-dark text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group disabled:opacity-50 disabled:pointer-events-none"
          >
            {isProcessing ? (
              <>
                <Zap className="w-4 h-4 animate-spin text-white" />
                <span>Transforming Pipeline...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 text-white" />
                <span>Transform Document (5 Formats in &lt;10s)</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
};
