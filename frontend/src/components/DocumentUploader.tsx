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
    <div className="mb-10 uploader-section">
      {/* Hero Section (Matching HRL Master Brand System) */}
      <div className="text-center max-w-3xl mx-auto pt-8 pb-4 hero-brand-section no-print">
        {/* Clean Official HRL Kicker (Unboxed & Elegant) */}
        <div className="text-xs font-semibold text-hrl-crimson tracking-widest uppercase mb-3">
          HRL International Private Limited
        </div>

        {/* Ultra-Bold High-Contrast Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-hrl-dark leading-[1.1] mb-4">
          Content engineering.<br />
          <span className="text-hrl-dark">Supercharged by AI.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-hrl-body font-normal leading-relaxed max-w-2xl mx-auto mb-3">
          High-velocity intelligence transformation, multi-format distribution, and sovereign enterprise software foundations.
        </p>

        {/* Author / Engineering Credentials */}
        <p className="text-xs text-hrl-muted max-w-xl mx-auto leading-relaxed mb-6">
          Engineered by Team HRL (Team ID: 104580) for the National Technical Research Organisation (NTRO) to transform complex 50+ page advisories into 5 synchronized communication formats.
        </p>

        {/* Signature HRL Pill CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={onStartTransform}
            disabled={isProcessing}
            className="bg-hrl-crimson hover:bg-hrl-crimson-dark text-white px-7 py-3 rounded-full text-sm font-semibold shadow-hrl-card hover:shadow-hrl-glow transition-all duration-200 flex items-center gap-2 group disabled:opacity-50 cursor-pointer"
          >
            {isProcessing ? (
              <>
                <Sparkles className="w-4 h-4 animate-spin text-white" />
                <span>Processing Pipeline...</span>
              </>
            ) : (
              <>
                <span>Transform Document Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>

          <a
            href="/NTRO_Cyber_Threat_Advisory_Q3_2026_Sample.pdf"
            download="NTRO_Cyber_Threat_Advisory_Q3_2026_Sample.pdf"
            className="border border-hrl-blue text-hrl-blue hover:bg-hrl-blue-light px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 flex items-center gap-2 cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Download Sample PDF</span>
          </a>
        </div>
      </div>

      {/* Symmetrical 4-Column Stats Banner (The Symmetrical Placing Principle: 2x2 on Mobile, 4-Col on Desktop) */}
      <div className="bg-white rounded-3xl border border-hrl-border shadow-hrl-card p-6 sm:p-8 max-w-4xl mx-auto my-8 stats-banner-card no-print">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-hrl-border">
          <div className="pt-2 md:pt-0">
            <span className="text-3xl sm:text-4xl font-extrabold text-hrl-dark tracking-tight block">
              5 Formats
            </span>
            <span className="text-xs text-hrl-muted font-medium block mt-1">
              Synchronized Output
            </span>
          </div>

          <div className="pt-4 md:pt-0">
            <span className="text-3xl sm:text-4xl font-extrabold text-hrl-dark tracking-tight block">
              &lt; 10s
            </span>
            <span className="text-xs text-hrl-muted font-medium block mt-1">
              End-to-End Latency
            </span>
          </div>

          <div className="pt-4 md:pt-0">
            <span className="text-3xl sm:text-4xl font-extrabold text-hrl-crimson tracking-tight block">
              100%
            </span>
            <span className="text-xs text-hrl-muted font-medium block mt-1">
              Grounded Citations
            </span>
          </div>

          <div className="pt-4 md:pt-0">
            <span className="text-3xl sm:text-4xl font-extrabold text-hrl-dark tracking-tight block">
              4 Languages
            </span>
            <span className="text-xs text-hrl-muted font-medium block mt-1">
              Indic Neural Translation
            </span>
          </div>
        </div>
      </div>

      {/* Seamlessly Blended Institutional Trust Bar */}
      <div className="max-w-4xl mx-auto my-6 px-4 py-2 border-y border-zinc-100 flex flex-col sm:flex-row items-center justify-between gap-4 no-print opacity-95">
        <img
          src="/sih_official_header_banner_transparent.png"
          alt="Ministry of Education | AICTE | MoE Innovation Cell | Smart India Hackathon 2026"
          className="h-8 sm:h-9 object-contain mix-blend-multiply"
        />
        <div className="flex items-center gap-2 text-xs text-hrl-muted font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <span>Government of India Innovation Initiative</span>
        </div>
      </div>

      {/* Document Ingestion Canvas (Symmetrical 50/50 Split) */}
      <div className="bg-white rounded-3xl border border-hrl-border p-6 sm:p-8 shadow-hrl-card max-w-4xl mx-auto no-print">
        <div className="flex items-center justify-between mb-5 pb-3 border-b border-hrl-border">
          <div>
            <h3 className="text-sm font-bold text-hrl-dark uppercase tracking-wider">
              Document Ingestion & Multi-Format Synthesis
            </h3>
            <p className="text-xs text-hrl-body mt-0.5">
              Select verified technical report preset or upload your arbitrary multi-page PDF.
            </p>
          </div>
          <span className="text-xs font-semibold text-hrl-muted">Step 1 of 2</span>
        </div>

        {/* 2 Symmetrical Presets */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {SAMPLE_DOCUMENTS.map((doc) => {
            const isSelected = selectedDoc?.id === doc.id;
            return (
              <div
                key={doc.id}
                onClick={() => onSelectDoc(doc)}
                className={`p-5 rounded-2xl border-2 cursor-pointer transition-all duration-200 flex items-start justify-between gap-4 ${
                  isSelected
                    ? 'border-hrl-crimson bg-hrl-crimson-tint shadow-sm'
                    : 'border-hrl-border bg-white hover:border-zinc-300 hover:bg-hrl-surface'
                }`}
              >
                <div className="flex items-start gap-3.5">
                  <div className={`p-2.5 rounded-xl shrink-0 mt-0.5 ${
                    isSelected ? 'bg-hrl-crimson text-white' : 'bg-hrl-surface text-hrl-dark border border-hrl-border'
                  }`}>
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-hrl-dark leading-snug">{doc.title}</h4>
                    <p className="text-xs text-hrl-body mt-1 leading-relaxed">{doc.summary}</p>
                    <div className="flex items-center gap-3 mt-2 text-[11px] font-semibold text-hrl-muted">
                      <span>{doc.pageCount} Pages</span>
                      <span>·</span>
                      <span>{doc.category}</span>
                    </div>
                  </div>
                </div>

                <div className="shrink-0 mt-1">
                  {isSelected ? (
                    <span className="w-5 h-5 rounded-full bg-hrl-crimson text-white flex items-center justify-center text-xs font-bold">
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

        {/* Symmetrical Dropzone */}
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
                category: 'Uploaded PDF',
                pageCount: 32,
                classification: 'OFFICIAL USE',
                summary: 'Uploaded PDF ready for single-pass multi-format transformation.',
                rawTextPreview: 'Parsed uploaded document content.'
              };
              onSelectDoc(customDoc);
            }
          }}
          className={`border-2 border-dashed rounded-2xl p-5 text-center transition-all duration-200 ${
            dragActive
              ? 'border-hrl-crimson bg-hrl-crimson-tint'
              : 'border-hrl-border bg-hrl-surface hover:bg-zinc-100'
          }`}
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <UploadCloud className="w-5 h-5 text-hrl-muted" />
            <span className="text-xs font-medium text-hrl-dark">
              Or drag & drop any technical PDF/DOCX file here
            </span>
            <label className="cursor-pointer text-xs font-bold text-hrl-crimson hover:underline">
              <span>Browse Computer</span>
              <input type="file" className="hidden" accept=".pdf,.docx,.txt" onChange={handleCustomUpload} />
            </label>
          </div>
        </div>

        {/* Confirmation & CTA */}
        {selectedDoc && (
          <div className="mt-5 pt-4 border-t border-hrl-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-medium text-hrl-body">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Ready: <strong className="text-hrl-dark">{selectedDoc.title}</strong> ({selectedDoc.pageCount} pages)</span>
            </div>

            <button
              onClick={onStartTransform}
              disabled={isProcessing}
              className="w-full sm:w-auto px-7 py-2.5 rounded-full bg-hrl-crimson hover:bg-hrl-crimson-dark text-white font-semibold text-xs shadow-sm hover:shadow-hrl-glow transition-all duration-200 flex items-center justify-center gap-2 group disabled:opacity-50 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-white" />
              <span>Execute 5-Format Pipeline (10s)</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
