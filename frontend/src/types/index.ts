export type AudiencePersona = 'executive' | 'analyst' | 'citizen';

export interface Citation {
  id: string;
  pageNumber: number;
  lineNumber: string;
  sourceText: string;
  contextSnippet: string;
  boundingBox: [number, number, number, number]; // [x0, y0, x1, y1]
}

export interface ExecutiveMemo {
  title: string;
  date: string;
  classification: string;
  organization: string;
  executiveSummary: string;
  keyFindings: {
    point: string;
    citationId: string;
    impactLevel: 'Critical' | 'High' | 'Medium';
  }[];
  actionItems: {
    priority: string;
    action: string;
    owner: string;
  }[];
}

export interface Slide {
  slideNumber: number;
  title: string;
  subtitle?: string;
  bullets: string[];
  keyMetric?: {
    value: string;
    label: string;
  };
  notes?: string;
}

export interface InfographicCard {
  id: string;
  title: string;
  category: string;
  statValue: string;
  statLabel: string;
  trend: 'up' | 'down' | 'neutral';
  trendText: string;
  color: string;
  details: string[];
}

export interface PressRelease {
  headline: string;
  locationAndDate: string;
  openingParagraph: string;
  bodyParagraphs: string[];
  spokespersonQuote: string;
  mediaContact: string;
}

export interface PodcastSegment {
  timeOffset: string;
  speaker: string;
  text: string;
}

export interface TransformedOutput {
  id: string;
  documentTitle: string;
  sourcePageCount: number;
  processingTimeMs: number;
  persona: AudiencePersona;
  citations: Citation[];
  executiveMemo: ExecutiveMemo;
  slideDeck: Slide[];
  infographics: InfographicCard[];
  pressReleases: {
    en: PressRelease;
    hi: PressRelease;
    kn: PressRelease;
    ta: PressRelease;
  };
  audioPodcast: {
    title: string;
    duration: string;
    audioUrl?: string;
    script: string;
    segments: PodcastSegment[];
  };
}

export interface SampleDocument {
  id: string;
  title: string;
  fileName: string;
  category: string;
  pageCount: number;
  classification: string;
  summary: string;
  rawTextPreview: string;
}
