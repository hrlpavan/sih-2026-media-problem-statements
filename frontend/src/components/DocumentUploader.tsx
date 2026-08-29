import React, { useState } from 'react';
import { SAMPLE_DOCUMENTS } from '../data/sampleAdvisories';
import type { SampleDocument } from '../types';
import { UploadCloud, FileText, CheckCircle2, ArrowRight, Sparkles, Download } from 'lucide-react';

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
        category: 'Uploaded Technical PDF',
        pageCount: Math.floor(Math.random() * 20) + 12,
        classification: 'OFFICIAL USE',
        summary: 'Your uploaded document is ready for single-pass multi-format transformation.',
        rawTextPreview: 'Parsed document text with bounding box coordinate indexing.'
      };
      onSelectDoc(customDoc);
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-classic-border p-6 sm:p-8 shadow-classic-sm mb-6 uploader-container no-print">
      {/* Title & Team Badge */}
      <div className="text-center max-w-2xl mx-auto mb-8">
        <div className="inline-flex items-center gap-2 bg-classic-bg px-3.5 py-1.5 rounded-full border border-classic-border mb-3 shadow-classic-sm">
          <span className="w-2 h-2 rounded-full bg-classic-ochre animate-pulse" />
          <span className="text-xs font-bold text-classic-navy font-serif">Smart India Hackathon 2026</span>
          <span className="text-zinc-300">•</span>
          <span className="text-xs font-bold text-classic-ochre">Team HRL (ID: 104580)</span>
          <span className="text-zinc-300">•</span>
          <span className="text-xs text-classic-slate-muted font-mono">PS-26154</span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-serif font-bold text-classic-navy tracking-tight">
          Automated Multi-Format Content Transformation
        </h1>
        <p className="text-xs sm:text-sm text-classic-slate-muted mt-2 leading-relaxed">
          Transform 50+ page intelligence whitepapers, threat advisories, and policy documents into 5 synchronized communication formats in under 10 seconds.
        </p>
      </div>

      {/* Step 1: Document Selection */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pb-1 border-b border-classic-border">
          <span className="font-serif font-bold text-xs text-classic-navy uppercase tracking-wider">
            Step 1: Choose a Sample Document or Upload Your Own
          </span>
          <a
            href="/NTRO_Cyber_Threat_Advisory_Q3_2026_Sample.pdf"
            download="NTRO_Cyber_Threat_Advisory_Q3_2026_Sample.pdf"
            className="text-xs font-bold text-classic-ochre hover:text-classic-ochre-dark bg-classic-ochre-light px-3 py-1 rounded-md border border-classic-ochre/30 transition-colors flex items-center gap-1.5"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Sample Test PDF</span>
          </a>
        </div>

        {/* 2 Clean Classic Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {SAMPLE_DOCUMENTS.map((doc) => {
            const isSelected = selectedDoc?.id === doc.id;
            return (
              <div
                key={doc.id}
                onClick={() => onSelectDoc(doc)}
                className={`p-5 rounded-xl border-2 cursor-pointer transition-all flex items-start justify-between gap-4 ${
                  isSelected
                    ? 'border-classic-navy bg-classic-bg shadow-classic-sm'
                    : 'border-classic-border bg-white hover:border-classic-navy/40 hover:bg-classic-bg/50'
                }`}
              >
                <div className="flex items-start gap-3.5">
                  <div className={`p-2.5 rounded-lg shrink-0 mt-0.5 ${
                    isSelected ? 'bg-classic-navy text-white' : 'bg-classic-bg text-classic-navy border border-classic-border'
                  }`}>
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-sm text-classic-navy">{doc.title}</h3>
                    <p className="text-xs text-classic-slate-muted mt-1 leading-relaxed">{doc.summary}</p>
                    <div className="flex items-center gap-3 mt-2 text-[11px] font-medium text-classic-slate-muted">
                      <span>{doc.pageCount} Pages</span>
                      <span>•</span>
                      <span>{doc.category}</span>
                    </div>
                  </div>
                </div>

                <div className="shrink-0 mt-1">
                  {isSelected ? (
                    <span className="w-5 h-5 rounded-full bg-classic-navy text-white flex items-center justify-center text-xs font-bold">
                      ✓
                    </span>
                  ) : (
                    <span className="w-5 h-5 rounded-full border border-zinc-300 block" />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Dropzone */}
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
                category: 'Uploaded Technical PDF',
                pageCount: 32,
                classification: 'OFFICIAL USE',
                summary: 'Uploaded PDF ready for single-pass multi-format transformation.',
                rawTextPreview: 'Parsed uploaded document content.'
              };
              onSelectDoc(customDoc);
            }
          }}
          className={`border-2 border-dashed rounded-xl p-5 text-center transition-all ${
            dragActive
              ? 'border-classic-navy bg-classic-bg'
              : 'border-classic-border bg-classic-bg/50 hover:bg-classic-bg'
          }`}
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <UploadCloud className="w-5 h-5 text-classic-slate-muted" />
            <span className="text-xs font-medium text-classic-slate">
              Or drag & drop any PDF/DOCX file here
            </span>
            <label className="cursor-pointer text-xs font-bold text-classic-navy hover:text-classic-ochre underline">
              <span>Browse Computer</span>
              <input type="file" className="hidden" accept=".pdf,.docx,.txt" onChange={handleCustomUpload} />
            </label>
          </div>
        </div>
      </div>

      {/* Step 2: Execute Action Button */}
      {selectedDoc && (
        <div className="mt-6 pt-5 border-t border-classic-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-medium text-classic-slate">
            <CheckCircle2 className="w-4 h-4 text-classic-green" />
            <span>Ready: <strong className="text-classic-navy">{selectedDoc.title}</strong> ({selectedDoc.pageCount} pages)</span>
          </div>

          <button
            onClick={onStartTransform}
            disabled={isProcessing}
            className="w-full sm:w-auto px-8 py-3 rounded-xl bg-classic-navy hover:bg-classic-navy-dark text-white font-bold text-xs shadow-classic-md hover:shadow-classic-lg transition-all flex items-center justify-center gap-2 group disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
          >
            {isProcessing ? (
              <>
                <Sparkles className="w-4 h-4 animate-spin text-classic-ochre" />
                <span>Synthesizing 5 Output Formats...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 text-classic-ochre" />
                <span>Transform Document Now (10 Seconds)</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
};
