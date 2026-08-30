import type { SampleDocument, TransformedOutput } from '../types';

export const SAMPLE_DOCUMENTS: SampleDocument[] = [
  {
    id: 'ntro-advisory-2026',
    title: 'NTRO Critical Infrastructure Cyber Threat Advisory (Q3 2026)',
    fileName: 'NTRO_Cyber_Threat_Advisory_Q3_2026.pdf',
    category: 'National Infrastructure Security',
    pageCount: 54,
    classification: 'CONFIDENTIAL / TIER-1',
    summary: 'Forensic threat assessment covering coordinated ransomware operations targeting state-level electrical load dispatch switches and port telemetry networks.',
    rawTextPreview: `NATIONAL TECHNICAL RESEARCH ORGANISATION (NTRO)
CYBER FORENSICS & THREAT INTELLIGENCE DIVISION
DOCUMENT ID: NTRO-ADV-2026-0894 | CLASSIFICATION: OFFICIAL USE ONLY

1. EXECUTIVE THREAT ASSESSMENT
During the Q3 2026 surveillance window, NTRO intelligence units recorded a 42.8% surge in coordinated ransomware vectors targeting state-level SCADA infrastructure. Threat actors utilized compromised zero-day vulnerabilities in VPN gateway controllers (CVE-2026-3841) to execute lateral movement across operational technology (OT) network segments.

2. AFFECTED DOMAINS & CRITICAL SYSTEMS
- Regional Power Distribution Companies (Discoms): 14 load dispatch centers identified with unauthorized persistence scripts.
- Port & Maritime Logistics Switches: 3 major container terminals recorded intermittent telemetry disruptions.
- Banking & Financial Clearing Gateways: Targeted phishing campaigns directed at inter-bank RTGS transaction authentication operators.

3. FORENSIC ATTRIBUTION & INDICATORS OF COMPROMISE (IoC)
Forensic hash analysis confirmed alignment with APT-44 threat signature frameworks. Command and control (C2) communication utilized encrypted DNS-over-HTTPS tunnels resolving to dynamic bulletproof hosting clusters located across Eastern Europe.`
  },
  {
    id: 'ai-drone-policy-2026',
    title: 'National Strategy for Autonomous AI Drones & Border Reconnaissance',
    fileName: 'MoD_Autonomous_Drone_Strategy_2026.pdf',
    category: 'Autonomous Defense Systems',
    pageCount: 42,
    classification: 'RESTRICTED / DEF-SPEC',
    summary: 'Strategic technical specification for edge-AI neural acceleration on autonomous UAV swarms with encrypted tactical mesh coordination.',
    rawTextPreview: `MINISTRY OF DEFENCE — DEFENCE RESEARCH & INNOVATION DIVISION
STRATEGIC ROADMAP: EDGE AI UAV SURVEILLANCE SYSTEMS (2026–2030)

1. STRATEGIC MISSION OBJECTIVE
To deploy low-latency, sovereign computer vision algorithms directly on lightweight quadcopter and fixed-wing UAV onboard neural processing units (NPUs). Edge inference ensures continuous autonomous terrain classification and thermal anomaly detection without reliance on high-bandwidth satellite downlinks.

2. HARDWARE ARCHITECTURE & EDGE NPU SPECIFICATIONS
- Onboard Vision Core: 32 TOPS INT8 low-power embedded neural accelerator.
- Swarm Meshing: Dynamic 5.8 GHz frequency-hopping tactical mesh network supporting up to 24 synchronized drones.
- Thermal Sensor Resolution: 640x512 uncooled microbolometer with onboard Kalman filtering for target velocity tracking.`
  }
];

export const MOCK_TRANSFORMATIONS: Record<string, TransformedOutput> = {
  'ntro-advisory-2026': {
    id: 'trans-ntro-2026',
    documentTitle: 'NTRO Critical Infrastructure Cyber Threat Advisory (Q3 2026)',
    sourcePageCount: 54,
    processingTimeMs: 6420,
    persona: 'executive',
    citations: [
      {
        id: 'cit-1',
        pageNumber: 4,
        lineNumber: 'Lines 12-16',
        sourceText: 'NTRO intelligence units recorded a 42.8% surge in coordinated ransomware vectors targeting state-level SCADA infrastructure in Q3 2026.',
        contextSnippet: 'During the Q3 2026 surveillance window, NTRO intelligence units recorded a 42.8% surge in coordinated ransomware vectors targeting state-level SCADA infrastructure. Threat actors utilized compromised zero-day vulnerabilities in VPN gateway controllers (CVE-2026-3841).',
        boundingBox: [45, 120, 520, 160]
      },
      {
        id: 'cit-2',
        pageNumber: 14,
        lineNumber: 'Lines 22-27',
        sourceText: '14 regional load dispatch centers identified with unauthorized persistence scripts across power distribution networks.',
        contextSnippet: 'Regional Power Distribution Companies (Discoms): 14 load dispatch centers identified with unauthorized persistence scripts. Port & Maritime Logistics recorded intermittent telemetry disruptions.',
        boundingBox: [45, 240, 520, 280]
      },
      {
        id: 'cit-3',
        pageNumber: 28,
        lineNumber: 'Lines 08-11',
        sourceText: 'Command and control communication utilized encrypted DNS-over-HTTPS tunnels resolving to dynamic bulletproof hosting clusters.',
        contextSnippet: 'Forensic hash analysis confirmed alignment with APT-44 threat signature frameworks. Command and control communication utilized encrypted DNS-over-HTTPS tunnels.',
        boundingBox: [45, 360, 520, 395]
      }
    ],
    executiveMemo: {
      title: 'EXECUTIVE INTELLIGENCE BRIEFING MEMORANDUM',
      date: '30 AUGUST 2026',
      classification: 'CONFIDENTIAL // OFFICIAL USE ONLY',
      organization: 'National Technical Research Organisation (NTRO)',
      executiveSummary: 'National Technical Research Organisation (NTRO) has identified an active surge in targeted cyber intrusions against critical Indian power dispatch centers and maritime logistics switches in Q3 2026. Required mitigation protocol: deploy gateway controller security patches, isolate operational technology subnets, and mandate hardware token multi-factor authentication across all regional control centers.',
      keyFindings: [
        {
          point: '42.8% increase in coordinated ransomware intrusions targeting state-level SCADA electrical grid controllers.',
          citationId: 'cit-1',
          impactLevel: 'Critical'
        },
        {
          point: '14 regional electricity distribution control centers identified with unauthorized persistence scripts.',
          citationId: 'cit-2',
          impactLevel: 'High'
        },
        {
          point: 'Zero-day vulnerability in VPN controllers (CVE-2026-3841) utilized for initial perimeter access.',
          citationId: 'cit-3',
          impactLevel: 'Critical'
        }
      ],
      actionItems: [
        { priority: 'Immediate [0-24h]', action: 'Deploy mandatory firmware patch for VPN gateway controllers (CVE-2026-3841)', owner: 'CERT-In / Discom CSOs' },
        { priority: 'Urgent [24-72h]', action: 'Enforce complete air-gap isolation between SCADA consoles and corporate IT subnets', owner: 'National Load Dispatch Centre' },
        { priority: 'Audit [7 Days]', action: 'Execute forensic telemetry audits across all 14 flagged regional load centers', owner: 'NTRO Incident Response Unit' }
      ]
    },
    slideDeck: [
      {
        slideNumber: 1,
        title: 'Critical Infrastructure Threat Assessment',
        subtitle: 'NTRO Cyber Threat Advisory Q3 2026',
        bullets: [
          '42.8% surge in coordinated ransomware operations targeting state grid switches',
          'Attribution signature mapped to APT-44 threat actor cluster',
          'Immediate national security advisory distributed across energy and maritime sectors'
        ],
        keyMetric: { value: '+42.8%', label: 'Intrusion Rate' },
        notes: 'Lead with SCADA infrastructure security posture and impact across 14 regional centers.'
      },
      {
        slideNumber: 2,
        title: 'Perimeter Breach & Lateral Movement Analysis',
        subtitle: 'Vulnerability Exploitation Mechanics',
        bullets: [
          'Initial entry achieved through VPN Gateway Controller flaw (CVE-2026-3841)',
          'Lateral traversal executed from corporate IT into operational technology (OT) segments',
          'Command and control tunnels masked inside encrypted DNS-over-HTTPS protocols'
        ],
        keyMetric: { value: '14 Units', label: 'Flagged Discoms' },
        notes: 'Highlight perimeter gateway misconfigurations that permitted OT subnet traversal.'
      },
      {
        slideNumber: 3,
        title: 'Mandatory Technical Mitigation Protocol',
        subtitle: 'Three-Phase Remediation Roadmap',
        bullets: [
          'Phase 1: Emergency firmware patch deployment within 24 hours across utilities',
          'Phase 2: Complete logical and physical air-gapping of critical SCADA dispatch networks',
          'Phase 3: Hardware-based multi-factor authentication enforced on dispatch consoles'
        ],
        keyMetric: { value: '< 24 Hours', label: 'Patch Compliance' },
        notes: 'Audit teams will verify compliance on site starting 72 hours post-advisory.'
      }
    ],
    infographics: [
      {
        id: 'info-1',
        title: 'SCADA Threat Velocity',
        category: 'Intrusion Frequency',
        statValue: '42.8%',
        statLabel: 'Quarterly Spike',
        trend: 'up',
        trendText: 'Elevated threat level vs Q2',
        color: '#DC2626',
        details: ['14 Discom control rooms flagged', 'Energy sector represents 64% of volume', 'Direct targeting of grid switches']
      },
      {
        id: 'info-2',
        title: 'Mitigation Window',
        category: 'Response Timeline',
        statValue: '24 Hours',
        statLabel: 'Patch Enforcement SLA',
        trend: 'neutral',
        trendText: 'Mandatory compliance',
        color: '#EA580C',
        details: ['CVE-2026-3841 firmware rollout', 'Hardware 2FA authentication', 'Subnet air-gap verification']
      },
      {
        id: 'info-3',
        title: 'Citation Grounding',
        category: 'Verification Accuracy',
        statValue: '100%',
        statLabel: 'Source Grounded',
        trend: 'up',
        trendText: 'Zero hallucinated output',
        color: '#16A34A',
        details: ['Direct bounding box coordinate indexing', 'Zero external data exposure', 'Deterministic RAG extraction']
      }
    ],
    pressReleases: {
      en: {
        headline: 'NTRO Issues Cyber Security Directive for National Power Infrastructure Protection',
        locationAndDate: 'NEW DELHI — AUGUST 30, 2026',
        openingParagraph: 'The National Technical Research Organisation (NTRO) has released a high-priority cyber security directive to state electricity utilities and critical infrastructure operators following technical identification of coordinated network intrusion attempts.',
        bodyParagraphs: [
          'Intelligence assessments confirmed that threat actors targeted vulnerable access gateway controllers in an attempt to establish unauthorized persistence within operational technology segments.',
          'NTRO, in coordination with CERT-In and power grid operators, has activated containment and isolation protocols across 14 identified regional dispatch centers.',
          'Grid transmission and public power supply operations remain fully stable under reinforced national security defense parameters.'
        ],
        spokespersonQuote: '"Our priority remains the absolute resilience of national infrastructure with continuous uptime and strict data integrity."',
        mediaContact: 'National Cyber Communications Desk, NTRO (media@ntro.gov.in)'
      },
      hi: {
        headline: 'एनटीआरओ ने राष्ट्रीय विद्युत बुनियादी ढांचे के लिए साइबर सुरक्षा निर्देश जारी किया',
        locationAndDate: 'नई दिल्ली — 30 अगस्त 2026',
        openingParagraph: 'राष्ट्रीय तकनीकी अनुसंधान संगठन (NTRO) ने देश के महत्वपूर्ण बिजली वितरण नेटवर्क और बुनियादी ढांचे की सुरक्षा के लिए तत्काल साइबर सुरक्षा निर्देश जारी किए हैं।',
        bodyParagraphs: [
          'तकनीकी जांच में नेटवर्क गेटवे में अनाधिकृत पहुंच के प्रयासों की पहचान की गई, जिसे समय रहते रोक दिया गया है।',
          'एनटीआरओ और सीईआरटी-इन ने 14 चिन्हित क्षेत्रीय केंद्रों में सुरक्षा प्रोटोकॉल लागू कर दिए हैं।',
          'विद्युत आपूर्ति पूरी तरह सुरक्षित है और सभी सुरक्षा उपाय सक्रिय हैं।'
        ],
        spokespersonQuote: '"राष्ट्रीय बुनियादी ढांचे की सुरक्षा हमारी सर्वोच्च प्राथमिकता है।"',
        mediaContact: 'मीडिया सेल, एनटीआरओ'
      },
      kn: {
        headline: 'ರಾಷ್ಟ್ರೀಯ ವಿದ್ಯುತ್ ಮೂಲಸೌಕರ್ಯ ರಕ್ಷಣೆಗಾಗಿ ಎನ್‌ಟಿಆರ್‌ಒ ಭದ್ರತಾ ಮಾರ್ಗಸೂಚಿ ಪ್ರಕಟಣೆ',
        locationAndDate: 'ನವದೆಹಲಿ — 30 ಆಗಸ್ಟ್ 2026',
        openingParagraph: 'ರಾಷ್ಟ್ರೀಯ ತಾಂತ್ರಿಕ ಸಂಶೋಧನಾ ಸಂಸ್ಥೆ (NTRO) ಪ್ರಮುಖ ವಿದ್ಯುತ್ ವಿತರಣಾ ಕೇಂದ್ರಗಳ ಸುರಕ್ಷತೆಗಾಗಿ ತುರ್ತು ಸೈಬರ್ ಭದ್ರತಾ ಮಾರ್ಗಸೂಚಿಯನ್ನು ಪ್ರಕಟಿಸಿದೆ.',
        bodyParagraphs: [
          'ನೆಟ್‌ವರ್ಕ್ ಗೇಟ್‌ವೇ ಭದ್ರತೆಯನ್ನು ಬಲಪಡಿಸಲು ಎಲ್ಲಾ ವಿದ್ಯುತ್ ಕಂಪನಿಗಳಿಗೆ ತಕ್ಷಣದ ಸೂಚನೆ ನೀಡಲಾಗಿದೆ.',
          'ಗುರುತಿಸಲಾದ 14 ಪ್ರಮುಖ ಕೇಂದ್ರಗಳಲ್ಲಿ ರಕ್ಷಣಾ ಕ್ರಮಗಳನ್ನು ಯಶಸ್ವಿಯಾಗಿ ಅಳವಡಿಸಲಾಗಿದೆ.',
          'ವಿದ್ಯುತ್ ಸರಬರಾಜು ಸಂಪೂರ್ಣವಾಗಿ ಸುಸ್ಥಿರವಾಗಿದ್ದು, ಅಗತ್ಯ ಮುನ್ನೆಚ್ಚರಿಕೆಗಳನ್ನು ವಹಿಸಲಾಗಿದೆ.'
        ],
        spokespersonQuote: '"ರಾಷ್ಟ್ರೀಯ ಮೂಲಸೌಕರ್ಯದ ಭದ್ರತೆಯೇ ನಮ್ಮ ಪ್ರಮುಖ ಆದ್ಯತೆ."',
        mediaContact: 'ಮಾಧ್ಯಮ ವಿಭಾಗ, ಎನ್‌ಟಿಆರ್‌ಒ'
      },
      ta: {
        headline: 'தேசிய மின் உள்கட்டமைப்பு பாதுகாப்புக்கான என்டிஆர்ஓ அவசர வழிகாட்டுதல்',
        locationAndDate: 'புது தில்லி — 30 ஆகஸ்ட் 2026',
        openingParagraph: 'தேசிய தொழில்நுட்ப ஆராய்ச்சி அமைப்பு (NTRO) நாட்டின் முக்கிய மின் விநியோக மையங்களுக்கான அவசர சைபர் பாதுகாப்பு வழிகாட்டுதலை வெளியிட்டுள்ளது.',
        bodyParagraphs: [
          'நெட்வொர்க் நுழைவாயில்களின் பாதுகாப்பை உறுதி செய்ய அனைத்து மின் நிறுவனங்களுக்கும் அறிவுறுத்தப்பட்டுள்ளது.',
          '14 முக்கிய மையங்களில் பாதுகாப்பு நடவடிக்கைகள் முழுமையாக செயல்படுத்தப்பட்டுள்ளன.',
          'மின் விநியோக அமைப்புகள் முழுமையான பாதுகாப்பில் இயங்கி வருகின்றன.'
        ],
        spokespersonQuote: '"தேசிய உள்கட்டமைப்பின் பாதுகாப்பே எங்கள் முதன்மை நோக்கம்."',
        mediaContact: 'ஊடக பிரிவு, என்டிஆர்ஓ'
      }
    },
    audioPodcast: {
      title: 'Strategic Briefing: Why OmniTransform AI Was Built',
      duration: '01:00',
      script: 'Welcome to OmniTransform AI, engineered by HRL for the Smart India Hackathon 2026 and the National Technical Research Organisation. Why was this platform built? In modern defense and governance, organizations receive fifty to one hundred-page complex technical advisories daily. Senior leaders need two-minute decision briefs, field operatives need slide presentations, citizens need news in their native regional languages, and analysts need audio broadcasts. Manually converting these documents takes days and creates dangerous information bottlenecks. OmniTransform AI solves this with sovereign single-pass AI: transforming any multi-page document into five synchronized, verified formats in under ten seconds with one hundred percent grounded source citations. This is sovereign intelligence transformation, engineered without compromise.',
      segments: [
        { timeOffset: '00:00 - 00:14', speaker: 'Executive Lead', text: 'Strategic mission overview: Why OmniTransform AI was engineered by HRL for NTRO and SIH 2026.' },
        { timeOffset: '00:14 - 00:30', speaker: 'Intelligence Director', text: 'The Critical Problem: 50-100 page technical reports create massive decision bottlenecks across leadership, technical operators, and regional media.' },
        { timeOffset: '00:30 - 00:46', speaker: 'System Architect', text: 'The Solution: Sovereign single-pass AI transforming complex documents into 5 synchronized assets with 100% grounded citations in under 10s.' },
        { timeOffset: '00:46 - 01:00', speaker: 'Executive Lead', text: 'The Impact: Zero hallucinations, instant multilingual distribution, and verified sovereign data security.' }
      ]
    }
  }
};
