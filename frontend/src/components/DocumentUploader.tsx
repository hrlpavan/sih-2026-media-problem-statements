import React, { useState } from 'react';
import { SAMPLE_DOCUMENTS } from '../data/sampleAdvisories';
import type { SampleDocument } from '../types';
import { UploadCloud, FileText, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

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
        category: 'Uploaded Document',
        pageCount: Math.floor(Math.random() * 20) + 10,
        classification: 'OFFICIAL DOCUMENT',
        summary: 'Your uploaded document is ready for instant transformation.',
        rawTextPreview: 'Parsed document text ready for automated multi-format extraction.'
      };
      onSelectDoc(customDoc);
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-zinc-200 p-6 sm:p-8 shadow-sm mb-6 uploader-container no-print">
      {/* Title & Guidance */}
      <div className="text-center max-w-2xl mx-auto mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-zinc-900 tracking-tight">
          Turn Any Long Document into 5 Clear Formats
        </h1>
        <p className="text-sm text-zinc-600 mt-2">
          Upload a long PDF or choose a sample report below. Get a 1-page summary, meeting slides, infographics, regional news, and voice audio in under 10 seconds.
        </p>
      </div>

      {/* Step 1: Choose Sample or Upload */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-zinc-900 uppercase tracking-wider">
            Step 1: Choose a Sample Document or Upload Your Own
          </span>
          <span className="text-xs text-zinc-500 font-medium">Click to select</span>
        </div>

        {/* 2 Big Easy Sample Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {SAMPLE_DOCUMENTS.map((doc) => {
            const isSelected = selectedDoc?.id === doc.id;
            return (
              <div
                key={doc.id}
                onClick={() => onSelectDoc(doc)}
                className={`p-4 rounded-xl border-2 cursor-pointer transition-all flex items-start justify-between gap-4 ${
                  isSelected
                    ? 'border-orange-500 bg-orange-50/40 shadow-sm'
                    : 'border-zinc-200 bg-zinc-50/50 hover:bg-zinc-50 hover:border-zinc-300'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`p-2.5 rounded-lg shrink-0 mt-0.5 ${
                    isSelected ? 'bg-orange-500 text-white' : 'bg-zinc-200 text-zinc-700'
                  }`}>
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-sm text-zinc-900">{doc.title}</h3>
                    </div>
                    <p className="text-xs text-zinc-600 mt-1 leading-relaxed">{doc.summary}</p>
                    <span className="inline-block font-bold text-[11px] text-zinc-500 mt-2">
                      {doc.pageCount} Pages • {doc.category}
                    </span>
                  </div>
                </div>

                <div className="shrink-0 mt-1">
                  {isSelected ? (
                    <span className="w-5 h-5 rounded-full bg-orange-500 text-white flex items-center justify-center text-xs font-bold">
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

        {/* Or Dropzone */}
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
                classification: 'OFFICIAL DOCUMENT',
                summary: 'Uploaded PDF ready for single-pass multi-format transformation.',
                rawTextPreview: 'Parsed uploaded document content.'
              };
              onSelectDoc(customDoc);
            }
          }}
          className={`border-2 border-dashed rounded-xl p-4 text-center transition-all ${
            dragActive
              ? 'border-orange-500 bg-orange-50/50'
              : 'border-zinc-200 bg-zinc-50/30 hover:bg-zinc-50'
          }`}
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <UploadCloud className="w-5 h-5 text-zinc-400" />
            <span className="text-xs font-medium text-zinc-700">
              Or drag & drop your own PDF/DOCX file here
            </span>
            <label className="cursor-pointer text-xs font-bold text-orange-600 hover:text-orange-700 underline">
              <span>Browse Computer</span>
              <input type="file" className="hidden" accept=".pdf,.docx,.txt" onChange={handleCustomUpload} />
            </label>
          </div>
        </div>
      </div>

      {/* Step 2: One Big Transform Button */}
      {selectedDoc && (
        <div className="mt-6 pt-6 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-medium text-zinc-700">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Ready: <strong>{selectedDoc.title}</strong> ({selectedDoc.pageCount} pages)</span>
          </div>

          <button
            onClick={onStartTransform}
            disabled={isProcessing}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
          >
            {isProcessing ? (
              <>
                <Sparkles className="w-4 h-4 animate-spin text-white" />
                <span>Creating 5 Formats... Please wait</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 text-white" />
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
