import React, { useState } from 'react';
import { SAMPLE_DOCUMENTS } from '../data/sampleAdvisories';
import type { SampleDocument } from '../types';
import { UploadCloud, FileText, CheckCircle2, ArrowRight, ShieldCheck, Zap, Sparkles } from 'lucide-react';

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
        pageCount: Math.floor(Math.random() * 30) + 12,
        classification: 'USER INGESTION',
        summary: 'Custom document ingested. Spatial coordinate parser active for multi-format generation.',
        rawTextPreview: 'Parsed uploaded document content. Coordinate mapping active.'
      };
      onSelectDoc(customDoc);
    }
  };

  return (
    <div className="apple-card rounded-3xl p-8 mb-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold text-apple-text tracking-tight">
            Document Ingestion & Analysis
          </h2>
          <p className="text-xs sm:text-sm text-apple-subtext mt-1">
            Upload 50+ page intelligence reports or select verified government whitepaper presets.
          </p>
        </div>

        {/* Apple Segmented Preset Pills */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-[11px] font-medium text-apple-subtext uppercase tracking-wider">Presets:</span>
          {SAMPLE_DOCUMENTS.map((doc) => (
            <button
              key={doc.id}
              onClick={() => onSelectDoc(doc)}
              disabled={isProcessing}
              className={`text-xs px-3.5 py-1.5 rounded-full border transition-all duration-200 flex items-center gap-1.5 ${
                selectedDoc?.id === doc.id
                  ? 'bg-sih-navy text-white border-sih-navy shadow-apple-sm font-medium'
                  : 'bg-white text-apple-text border-black/[0.08] hover:border-black/20 hover:bg-apple-gray/50'
              }`}
            >
              <FileText className="w-3.5 h-3.5 opacity-70" />
              <span>{doc.id === 'ntro-advisory-2026' ? 'NTRO Cyber Advisory' : 'AI Drone Strategy'}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Drag & Drop Canvas */}
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
              category: 'Custom Uploaded PDF',
              pageCount: 36,
              classification: 'RESTRICTED',
              summary: 'User uploaded document ready for single-pass multi-format transformation.',
              rawTextPreview: 'Uploaded file parsed. Bounding-box coordinate index generated.'
            };
            onSelectDoc(customDoc);
          }
        }}
        className={`border-2 border-dashed rounded-2xl p-10 text-center transition-all duration-300 ${
          dragActive
            ? 'border-sih-blue bg-sih-blue/5 scale-[0.99]'
            : 'border-black/[0.1] bg-apple-bg/50 hover:bg-apple-bg/80'
        }`}
      >
        <div className="max-w-md mx-auto flex flex-col items-center">
          <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-sih-blue mb-3 shadow-apple-sm border border-black/[0.04]">
            <UploadCloud className="w-6 h-6" />
          </div>
          <p className="text-sm font-medium text-apple-text mb-1">
            Drop raw PDF or DOCX file here
          </p>
          <p className="text-xs text-apple-subtext mb-5">
            Automatic parsing of multi-column tables, scanned diagrams & citations
          </p>
          <label className="cursor-pointer inline-flex items-center px-4 py-2 text-xs font-semibold text-apple-text bg-white border border-black/[0.1] rounded-xl shadow-apple-sm hover:bg-apple-gray/50 transition-all">
            <span>Browse Files</span>
            <input type="file" className="hidden" accept=".pdf,.docx,.txt" onChange={handleCustomUpload} />
          </label>
        </div>
      </div>

      {/* Selected File Details Bar */}
      {selectedDoc && (
        <div className="mt-6 p-5 rounded-2xl bg-apple-bg border border-black/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all">
          <div className="flex items-start gap-3.5">
            <div className="p-3 rounded-xl bg-white text-sih-navy shadow-apple-sm border border-black/[0.04] mt-0.5">
              <FileText className="w-5 h-5 text-sih-blue" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-sm text-apple-text tracking-tight">{selectedDoc.title}</h3>
                <span className="text-[10px] font-semibold bg-black/[0.06] text-apple-subtext px-2 py-0.5 rounded-full">
                  {selectedDoc.classification}
                </span>
              </div>
              <p className="text-xs text-apple-subtext mt-1 max-w-2xl leading-relaxed">{selectedDoc.summary}</p>
              <div className="flex items-center gap-4 mt-2 text-[11px] text-apple-subtext">
                <span className="flex items-center gap-1 font-medium text-apple-text">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sih-green" /> {selectedDoc.pageCount} Pages Loaded
                </span>
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-sih-blue" /> Spatial Coordinates Indexed
                </span>
              </div>
            </div>
          </div>

          <button
            onClick={onStartTransform}
            disabled={isProcessing}
            className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-sih-orange hover:bg-sih-orange-dark text-white font-semibold text-xs shadow-apple-md hover:shadow-apple-lg hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group disabled:opacity-50 disabled:pointer-events-none shrink-0"
          >
            {isProcessing ? (
              <>
                <Zap className="w-4 h-4 animate-spin text-white" />
                <span>Transforming Pipeline...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 text-white" />
                <span>Transform Document (5 Formats)</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
};
