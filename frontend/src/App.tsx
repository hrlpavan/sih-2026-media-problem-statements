import React, { useState } from 'react';
import type { AudiencePersona, SampleDocument, TransformedOutput, Citation } from './types';
import { SAMPLE_DOCUMENTS, MOCK_TRANSFORMATIONS } from './data/sampleAdvisories';
import { transformDocument } from './services/transformationEngine';
import { Navbar } from './components/Navbar';
import { DocumentUploader } from './components/DocumentUploader';
import { PipelineVisualizer } from './components/PipelineVisualizer';
import { OutputDashboard } from './components/OutputDashboard';
import { CitationInspectorModal } from './components/CitationInspectorModal';
import { Footer } from './components/Footer';
import confetti from 'canvas-confetti';

export const App: React.FC = () => {
  const [currentPersona, setCurrentPersona] = useState<AudiencePersona>('executive');
  const [selectedDoc, setSelectedDoc] = useState<SampleDocument | null>(SAMPLE_DOCUMENTS[0]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [pipelineStep, setPipelineStep] = useState(0);
  const [pipelineStepName, setPipelineStepName] = useState('');
  const [transformedOutput, setTransformedOutput] = useState<TransformedOutput | null>(
    MOCK_TRANSFORMATIONS['ntro-advisory-2026']
  );
  const [activeCitation, setActiveCitation] = useState<Citation | null>(null);

  const handleStartTransform = async () => {
    if (!selectedDoc) return;

    setIsProcessing(true);
    setPipelineStep(1);
    setTransformedOutput(null);

    try {
      const result = await transformDocument(
        selectedDoc.id,
        currentPersona,
        (step, stepName) => {
          setPipelineStep(step);
          setPipelineStepName(stepName);
        }
      );

      setTransformedOutput(result);
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.7 }
        });
      } catch (e) {}
    } catch (err) {
      console.error('Transformation failed', err);
    } finally {
      setIsProcessing(false);
    }
  };

  const handlePersonaChange = (p: AudiencePersona) => {
    setCurrentPersona(p);
    if (transformedOutput) {
      setTransformedOutput({
        ...transformedOutput,
        persona: p
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-zinc-50 font-sans">
      <Navbar
        currentPersona={currentPersona}
        onPersonaChange={handlePersonaChange}
        isProcessing={isProcessing}
      />

      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <DocumentUploader
          selectedDoc={selectedDoc}
          onSelectDoc={setSelectedDoc}
          onStartTransform={handleStartTransform}
          isProcessing={isProcessing}
        />

        <PipelineVisualizer
          currentStep={pipelineStep}
          currentStepName={pipelineStepName}
          isProcessing={isProcessing}
        />

        {transformedOutput && !isProcessing && (
          <OutputDashboard
            output={transformedOutput}
            onOpenCitation={setActiveCitation}
          />
        )}
      </main>

      <CitationInspectorModal
        citation={activeCitation}
        onClose={() => setActiveCitation(null)}
      />

      <Footer />
    </div>
  );
};

export default App;
