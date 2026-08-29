import type { SampleDocument, TransformedOutput } from '../types';

export const SAMPLE_DOCUMENTS: SampleDocument[] = [
  {
    id: 'ntro-advisory-2026',
    title: 'NTRO Critical Infrastructure Cyber Threat Advisory (Q3 2026)',
    fileName: 'NTRO_Cyber_Threat_Advisory_Q3_2026.pdf',
    category: 'National Cyber Security',
    pageCount: 54,
    classification: 'CONFIDENTIAL / OFFICIAL USE',
    summary: 'A 54-page forensic intelligence advisory on state-sponsored ransomware campaigns targeting energy grids, transport infrastructure, and financial messaging switches in India.',
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
    title: 'National Strategy for Autonomous AI Drones & Border Surveillance',
    fileName: 'MoD_Autonomous_Drone_Strategy_2026.pdf',
    category: 'Defense & Autonomous Systems',
    pageCount: 42,
    classification: 'RESTRICTED',
    summary: 'A 42-page strategic whitepaper outlining edge-AI vision processing for high-altitude reconnaissance UAVs along border sectors with swarm coordination protocols.',
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
        lineNumber: 'Lines 12–16',
        sourceText: 'NTRO intelligence units recorded a 42.8% surge in coordinated ransomware vectors targeting state-level SCADA infrastructure in Q3 2026.',
        contextSnippet: 'During the Q3 2026 surveillance window, NTRO intelligence units recorded a 42.8% surge in coordinated ransomware vectors targeting state-level SCADA infrastructure. Threat actors utilized compromised zero-day vulnerabilities in VPN gateway controllers (CVE-2026-3841).',
        boundingBox: [45, 120, 520, 160]
      },
      {
        id: 'cit-2',
        pageNumber: 14,
        lineNumber: 'Lines 22–27',
        sourceText: '14 regional load dispatch centers identified with unauthorized persistence scripts across power distribution networks.',
        contextSnippet: 'Regional Power Distribution Companies (Discoms): 14 load dispatch centers identified with unauthorized persistence scripts. Port & Maritime Logistics recorded intermittent telemetry disruptions.',
        boundingBox: [45, 240, 520, 280]
      },
      {
        id: 'cit-3',
        pageNumber: 28,
        lineNumber: 'Lines 8–11',
        sourceText: 'Command and control communication utilized encrypted DNS-over-HTTPS tunnels resolving to dynamic bulletproof hosting clusters.',
        contextSnippet: 'Forensic hash analysis confirmed alignment with APT-44 threat signature frameworks. Command and control communication utilized encrypted DNS-over-HTTPS tunnels.',
        boundingBox: [45, 360, 520, 395]
      }
    ],
    executiveMemo: {
      title: 'EXECUTIVE INTELLIGENCE MEMORANDUM',
      date: '30 August 2026',
      classification: 'OFFICIAL USE ONLY',
      organization: 'National Technical Research Organisation (NTRO)',
      executiveSummary: 'National Technical Research Organisation (NTRO) has identified an active surge in targeted cyber intrusions against critical Indian power dispatch centers and maritime logistics networks in Q3 2026. Immediate mandate: patch VPN vulnerabilities, isolate compromised OT subnets, and activate multi-factor hardware keys across dispatch consoles.',
      keyFindings: [
        {
          point: '42.8% increase in coordinated ransomware intrusions targeting state-level SCADA infrastructure.',
          citationId: 'cit-1',
          impactLevel: 'Critical'
        },
        {
          point: '14 regional electricity distribution control centers detected with active persistence scripts.',
          citationId: 'cit-2',
          impactLevel: 'High'
        },
        {
          point: 'Zero-day vulnerability in VPN controllers (CVE-2026-3841) utilized for initial perimeter breach.',
          citationId: 'cit-3',
          impactLevel: 'Critical'
        }
      ],
      actionItems: [
        { priority: 'Immediate (0–24h)', action: 'Deploy emergency patch for VPN controllers (CVE-2026-3841)', owner: 'CERT-In / All Discom CSOs' },
        { priority: 'Urgent (24–72h)', action: 'Air-gap SCADA dispatch systems from public corporate IT networks', owner: 'National Grid Operator' },
        { priority: 'Within 7 Days', action: 'Complete forensic telemetry scan across all 14 flagged regional load centers', owner: 'NTRO Incident Response' }
      ]
    },
    slideDeck: [
      {
        slideNumber: 1,
        title: 'National Cyber Security Threat Overview',
        subtitle: 'NTRO Q3 2026 Critical Infrastructure Assessment',
        bullets: [
          '42.8% surge in coordinated ransomware operations across regional power grids',
          'Attribution mapped to APT-44 state-aligned threat actors',
          'Immediate national advisory issued for SCADA and logistics networks'
        ],
        keyMetric: { value: '+42.8%', label: 'Intrusion Surge' },
        notes: 'Lead with the critical infrastructure impact and specify the 14 regional load centers.'
      },
      {
        slideNumber: 2,
        title: 'Attack Vector & Lateral Movement Analysis',
        subtitle: 'Perimeter Breach via Gateway Zero-Day',
        bullets: [
          'Initial entry via VPN Gateway Controller vulnerability (CVE-2026-3841)',
          'Lateral traversal across corporate IT network into operational OT segments',
          'Command & Control traffic hidden inside encrypted DNS-over-HTTPS channels'
        ],
        keyMetric: { value: '14 Centers', label: 'Compromised Discoms' },
        notes: 'Highlight that OT networks were bridged due to unsegmented VPN routing.'
      },
      {
        slideNumber: 3,
        title: 'Mandatory Mitigation & Action Plan',
        subtitle: '3-Tier Rapid Response Protocol',
        bullets: [
          'Phase 1: Emergency patch deployment within 24 hours across all state utilities',
          'Phase 2: Complete air-gapping of critical SCADA dispatch consoles',
          'Phase 3: Hardware token multi-factor authentication enforcement'
        ],
        keyMetric: { value: '< 24 Hours', label: 'Patch SLA' },
        notes: 'Emphasize that compliance checks will be audited directly by NTRO field units.'
      }
    ],
    infographics: [
      {
        id: 'info-1',
        title: 'SCADA Threat Surge',
        category: 'Cyber Attack Velocity',
        statValue: '42.8%',
        statLabel: 'Quarterly Intrusion Spike',
        trend: 'up',
        trendText: 'Sharp rise compared to Q2 2026',
        color: '#E11D48',
        details: ['14 Discom load centers flagged', 'Energy sector represents 64% of alerts', 'Targeting state-level grid switches']
      },
      {
        id: 'info-2',
        title: 'Mitigation SLA Window',
        category: 'Incident Response',
        statValue: '24 Hours',
        statLabel: 'Mandatory Patching SLA',
        trend: 'neutral',
        trendText: 'Strict compliance timeline',
        color: '#F37021',
        details: ['CVE-2026-3841 patch rollout', 'Hardware 2FA enforcement', 'Subnet air-gap verification']
      },
      {
        id: 'info-3',
        title: 'Forensic Detection Rate',
        category: 'Sovereign RAG Accuracy',
        statValue: '100%',
        statLabel: 'Source Citations Verified',
        trend: 'up',
        trendText: 'Zero unverified statements',
        color: '#1EA858',
        details: ['Exact PDF bounding box mapping', 'Zero external cloud leaks', 'Air-gapped on-premise verification']
      }
    ],
    pressReleases: {
      en: {
        headline: 'NTRO Issues National Cyber Security Advisory for Critical Power Infrastructure',
        locationAndDate: 'NEW DELHI, 30 AUGUST 2026',
        openingParagraph: 'The National Technical Research Organisation (NTRO) has today issued an urgent cyber security advisory to all state power distribution utilities and critical infrastructure operators following forensic detection of coordinated intrusion attempts.',
        bodyParagraphs: [
          'Intelligence assessments confirmed that threat actors targeted vulnerable VPN access controllers to gain unauthorized persistence inside operational technology networks.',
          'NTRO, in coordination with CERT-In and state grid authorities, has initiated containment protocols across 14 identified regional dispatch facilities.',
          'Citizens are assured that power transmission systems remain stable and all necessary defense safeguards have been deployed under sovereign national security protocols.'
        ],
        spokespersonQuote: '"Our priority is the complete safeguarding of national grid infrastructure with zero downtime and absolute data integrity."',
        mediaContact: 'National Cyber Communication Desk, NTRO (media@ntro.gov.in)'
      },
      hi: {
        headline: 'एनटीआरओ ने राष्ट्रीय बिजली और महत्वपूर्ण बुनियादी ढांचे के लिए साइबर सुरक्षा परामर्श जारी किया',
        locationAndDate: 'नई दिल्ली, 30 अगस्त 2026',
        openingParagraph: 'राष्ट्रीय तकनीकी अनुसंधान संगठन (NTRO) ने देश के महत्वपूर्ण बिजली वितरण केंद्रों और बुनियादी ढांचे के लिए तत्काल साइबर सुरक्षा एडवाइजरी जारी की है।',
        bodyParagraphs: [
          'जांच में पाया गया कि कुछ बाहरी साइबर तत्वों ने नेटवर्क में अनाधिकृत पहुंच बनाने का प्रयास किया, जिसे समय रहते पहचान लिया गया है।',
          'एनटीआरओ ने सीईआरटी-इन (CERT-In) और राज्य विद्युत प्राधिकरणों के साथ मिलकर 14 चिन्हित केंद्रों में सुरक्षा उपाय लागू कर दिए हैं।',
          'नागरिकों को आश्वस्त किया जाता है कि बिजली आपूर्ति पूरी तरह सुरक्षित है और सभी सुरक्षा प्रोटोकॉल सक्रिय हैं।'
        ],
        spokespersonQuote: '"राष्ट्रीय ग्रिड और डेटा की सुरक्षा हमारी सर्वोच्च प्राथमिकता है। सभी एहतियाती कदम पूरी मजबूती से उठाए गए हैं।"',
        mediaContact: 'मीडिया सेल, राष्ट्रीय तकनीकी अनुसंधान संगठन'
      },
      kn: {
        headline: 'ರಾಷ್ಟ್ರೀಯ ವಿದ್ಯುತ್ ಮೂಲಸೌಕರ್ಯಕ್ಕಾಗಿ ಎನ್‌ಟಿಆರ್‌ಒ ತುರ್ತು ಸೈಬರ್ ಭದ್ರತಾ ಮಾರ್ಗಸೂಚಿ ಬಿಡುಗಡೆ',
        locationAndDate: 'ನವದೆಹಲಿ, 30 ಆಗಸ್ಟ್ 2026',
        openingParagraph: 'ರಾಷ್ಟ್ರೀಯ ತಾಂತ್ರಿಕ ಸಂಶೋಧನಾ ಸಂಸ್ಥೆ (NTRO) ದೇಶದ ಪ್ರಮುಖ ವಿದ್ಯುತ್ ವಿತರಣಾ ಕೇಂದ್ರಗಳಿಗಾಗಿ ತುರ್ತು ಸೈಬರ್ ಭದ್ರತಾ ಮುನ್ನೆಚ್ಚರಿಕೆಯನ್ನು ಹೊರಡಿಸಿದೆ.',
        bodyParagraphs: [
          'ನೆಟ್‌ವರ್ಕ್ ಗೇಟ್‌ವೇಗಳ ಮೂಲಕ ಅನಧಿಕೃತ ಪ್ರವೇಶವನ್ನು ತಡೆಗಟ್ಟಲು ಎಲ್ಲಾ ರಾಜ್ಯ ವಿದ್ಯುತ್ ಕಂಪನಿಗಳಿಗೆ ತುರ್ತು ಪ್ಯಾಚ್ ಅಳವಡಿಸಲು ಸೂಚಿಸಲಾಗಿದೆ.',
          'ಎನ್‌ಟಿಆರ್‌ಒ ಮತ್ತು ಸಿಇಆರ್‌ಟಿ-ಇನ್ (CERT-In) ತಂಡಗಳು 14 ಪ್ರಮುಖ ಕೇಂದ್ರಗಳಲ್ಲಿ ರಕ್ಷಣಾತ್ಮಕ ಕ್ರಮಗಳನ್ನು ತಕ್ಷಣವೇ ಕೈಗೊಂಡಿವೆ.',
          'ವಿದ್ಯುತ್ ಸರಬರಾಜು ವ್ಯವಸ್ಥೆಯು ಸಂಪೂರ್ಣವಾಗಿ ಸುಸ್ಥಿತಿಯಲ್ಲಿದ್ದು, ಯಾವುದೇ ವ್ಯತ್ಯಯವಾಗದಂತೆ ಬಿಗಿ ಭದ್ರತೆ ವಹಿಸಲಾಗಿದೆ.'
        ],
        spokespersonQuote: '"ರಾಷ್ಟ್ರೀಯ ಮೂಲಸೌಕರ್ಯದ ಸುರಕ್ಷತೆ ನಮ್ಮ ಮೊದಲ ಆದ್ಯತೆಯಾಗಿದ್ದು, ಅಗತ್ಯವಿರುವ ಎಲ್ಲಾ ರಕ್ಷಣಾ ಕ್ರಮಗಳನ್ನು ಕೈಗೊಳ್ಳಲಾಗಿದೆ."',
        mediaContact: 'ಮಾಧ್ಯಮ ವಿಭಾಗ, ಎನ್‌ಟಿಆರ್‌ಒ ನವದೆಹಲಿ'
      },
      ta: {
        headline: 'என்டிஆர்ஓ தேசிய மின் உள்கட்டமைப்புக்கான அவசர சைபர் பாதுகாப்பு வழிகாட்டுதலை வெளியிட்டது',
        locationAndDate: 'புது தில்லி, 30 ஆகஸ்ட் 2026',
        openingParagraph: 'தேசிய தொழில்நுட்ப ஆராய்ச்சி அமைப்பு (NTRO) நாட்டின் முக்கிய மின் விநியோக மையங்கள் மற்றும் உள்கட்டமைப்புக்கான அவசர சைபர் பாதுகாப்பு எச்சரிக்கையை விடுத்துள்ளது.',
        bodyParagraphs: [
          'நெட்வொர்க் நுழைவாயில்கள் வழியாக அங்கீகரிக்கப்படாத ஊடுருவல்களைத் தடுக்க அனைத்து மாநில மின் நிறுவனங்களுக்கும் அறிவுறுத்தப்பட்டுள்ளது.',
          'என்டிஆர்ஓ மற்றும் சிஇஆர்டி-இன் இணைந்து 14 முக்கிய மையங்களில் உடனடி பாதுகாப்பு நடவடிக்கைகளை செயல்படுத்தியுள்ளன.',
          'மின் விநியோக அமைப்புகள் முழுமையாக பாதுகாப்பாக உள்ளன என பொதுமக்களுக்கு உறுதியளிக்கப்படுகிறது.'
        ],
        spokespersonQuote: '"தேசிய உள்கட்டமைப்பின் பாதுகாப்பே எங்களின் முதன்மை இலக்கு. தேவையான அனைத்து முன்னெச்சரிக்கை நடவடிக்கைகளும் எடுக்கப்பட்டுள்ளன."',
        mediaContact: 'ஊடக பிரிவு, என்டிஆர்ஓ'
      }
    },
    audioPodcast: {
      title: '60-Second Intelligence Briefing: Cyber Threat Advisory Q3',
      duration: '01:00',
      script: 'Good morning. This is your sixty-second national security intelligence briefing for August thirtieth, twenty-twenty-six. The National Technical Research Organisation has issued an urgent cyber advisory following a forty-two percent increase in ransomware attempts against regional power dispatch centers. Threat actors exploited gateway vulnerabilities to access operational networks across fourteen discoms. Emergency patches have been deployed and critical systems are now operating under strict air-gapped isolation. Power grid operations remain fully stable. Stay tuned for further security updates.',
      segments: [
        { timeOffset: '00:00 - 00:15', speaker: 'Narrator', text: 'Good morning. This is your sixty-second national security intelligence briefing for August 30, 2026.' },
        { timeOffset: '00:15 - 00:35', speaker: 'Narrator', text: 'The National Technical Research Organisation has issued an urgent cyber advisory following a 42% increase in ransomware attempts against regional power dispatch centers.' },
        { timeOffset: '00:35 - 00:50', speaker: 'Narrator', text: 'Threat actors exploited gateway vulnerabilities to access operational networks across 14 discoms. Emergency patches have been deployed.' },
        { timeOffset: '00:50 - 01:00', speaker: 'Narrator', text: 'Critical systems are now operating under strict air-gapped isolation. Power grid operations remain fully stable.' }
      ]
    }
  }
};
