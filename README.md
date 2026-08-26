# Smart India Hackathon (SIH 2026) – Media & Related Problem Statements Guide

Comprehensive compilation of all problem statements related to **Media, Social Media, Content Generation & Transformation, Audio-Visual Portals, Audio/Voice AI, Video Forensics, and Media & Entertainment** from [SIH 2026](https://www.sih.gov.in/sih2026PS).

---

## Quick Reference Summary Table

| PS ID | Title | Ministry / Organization | Category | Theme | Primary Domain |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **26152** | **Social Media Analytics** | National Technical Research Organisation (NTRO) | Software | Blockchain & Cybersecurity | Social Media Intelligence, NLP, Trend & Sentiment Analysis |
| **26154** | **Gen AI Platform for Automated Content Transformation** | National Technical Research Organisation (NTRO) | Software | Blockchain & Cybersecurity | Generative AI, Multimodal Media Generation, Infographics & Summarization |
| **26063** | **Integrated Polar Science Outreach, Knowledge Repository and Media Dissemination Portal** | Ministry of Earth Sciences (MoES) | Software | Smart Education | Media Dissemination, Digital Science Journalism, Audio-Visual Repository |
| **26096** | **Digital Heritage Archive for Memorials, Manuscripts & Ambedkar: AI-Powered Institutional Archive and Audio-Visual Knowledge Platform** | Ministry of Social Justice and Empowerment (MoSJE) | Software | Smart Education | Multimedia Archiving, Audio-Visual Indexing, OCR & Speech-to-Text |
| **26101** | **AI-Powered Real-Time Detection and Prevention of Voice Cloning Impersonation Attacks** | Indian Cyber Crime Coordination Centre (I4C) | Software | Blockchain & Cybersecurity | Deepfake Audio, Synthetic Voice Detection, Media Forensics |
| **26173** | **iTantra - Indian Multilingual TTS & STT Aided Neural Transceiver Radio Access for low bitrate links** | Indian Space Research Organisation (ISRO) | Software | Smart Automation | Multilingual Audio Synthesis (TTS/STT), Voice Codecs, Media Compression |
| **26172** | **Low Latency and Efficient Voice Activator for Edge Devices** | Indian Space Research Organisation (ISRO) | Hardware | Smart Automation | Embedded Audio Signal Processing, Keyword Spotting (KWS) |
| **26040** | **AI/ML-Enabled Adaptive Noise Cancellation (ANC) for Speech Intelligibility** | DRDO | Software | Smart Automation | Audio Signal Processing, Speech Enhancement, Acoustic Filtering |
| **26150** | **Development of a Multi-Vendor DVR/NVR Forensic Analysis Tool for Standardized Acquisition, Recovery, and Analysis of Surveillance Evidence** | National Technical Research Organisation (NTRO) | Software | Blockchain & Cybersecurity | Video Forensics, Proprietary Video Codec Carving & Frame Reconstruction |
| **26187** | **AI-Based Intelligent Video Analytics Platform for Border Surveillance using existing CCTV Infrastructure** | Ministry of Home Affairs (MHA) | Software | Blockchain & Cybersecurity | Computer Vision, Live Video Stream Analytics, Facial Recognition & Tracking |
| **26158** | **Single-Pass Drone Video to Accurate 3D Model Generation System** | National Technical Research Organisation (NTRO) | Software | Robotics and Drones | Aerial Video Media Processing, 3D Photogrammetry, Spatial Reconstruction |
| **26189** | **AI-Powered Criminal Network Analysis System** | Ministry of Home Affairs (MHA) | Software | Blockchain & Cybersecurity | Open-Source Media Intelligence (OSINT), Graph Analytics, Social Media Ingestion |
| **26199** / **26216** | **Student Innovation – Tertiary sectors: Hospitality, Financial Services, Entertainment and Retail** | AICTE | Software / Hardware | Miscellaneous | Media & Entertainment, Streaming, Interactive Experiences |
| **26208** / **26225** | **Student Innovation – Unique toys and games based on our civilization, history, and culture** | AICTE | Software / Hardware | Miscellaneous | Interactive Media, Educational Gaming, Digital Civilization Storytelling |

---

## Detailed Problem Statement Breakdown

```
├── 1. Direct Media, Social Media & Content Transformation (PS: 26152, 26154, 26063, 26096)
├── 2. Audio, Speech, Voice AI & Deepfake Detection (PS: 26101, 26173, 26172, 26040)
├── 3. Video Forensics, CCTV & Computer Vision Media (PS: 26150, 26187, 26158)
├── 4. Open-Source Intelligence & Social Network Analytics (PS: 26189)
└── 5. Student Innovation: Media, Entertainment & Creative Technology (PS: 26199, 26216, 26208, 26225)
```

---

### Section 1: Direct Media, Social Media & Content Transformation

#### 1. PS ID: 26152 — Social Media Analytics
- **Organization**: National Technical Research Organisation (NTRO)
- **Category**: Software
- **Theme**: Blockchain & Cybersecurity
- **Background**: Social media platforms are complex ecosystems driven by human emotion, diverse demographics, and interconnected networks. To understand online communities, systems must look beneath the surface to determine how followers feel, who they are, what topics are trending, and how influence is distributed.
- **Key Objectives**:
  1. **Sentiment Analysis**: Aspect-based sentiment extraction (positive, negative, neutral, sarcastic) across multiple languages/dialects.
  2. **Demographic Profiling**: Infer user personas, geographic distributions, and age demographics from public discourse.
  3. **Trend Tracking & Narrative Discovery**: Detect emergent trends, spikes in discussions, and anomalous narrative propagation.
  4. **Influence & Network Graphing**: Identify key opinion leaders (KOLs), bot networks, coordinated inauthentic behavior, and community clusters.
  5. **Predictive Analytics**: Forecast future shifts in public sentiment and narrative trajectory.
- **Suggested Tech Stack**: Python (FastAPI/Django), PyTorch/HuggingFace Transformers (RoBERTa, Llama/Mistral, IndicBERT), NetworkX / Neo4j (Graph DB), ElasticSearch, Next.js / React with D3.js.

---

#### 2. PS ID: 26154 — Gen AI Platform for Automated Content Transformation
- **Organization**: National Technical Research Organisation (NTRO)
- **Category**: Software
- **Theme**: Blockchain & Cybersecurity
- **Background**: Organizations frequently need to convert information from disparate sources (news articles, technical reports, security advisories, threat intelligence, policy papers, press releases) into specific communication artifacts tailored for different audiences. Manual synthesis is labor-intensive and slow.
- **Key Objectives**:
  1. **Multimodal Ingestion**: Ingest raw text, PDFs, news URLs, and audiovisual content.
  2. **Automated Artifact Generation**: Generate tailored executive summaries, infographics, social media threads, press releases, technical advisories, and slide decks.
  3. **Style & Tone Adaptation**: Adjust output tone (formal government memo, public press release, bite-sized social post) with verifiable citations and source groundings.
  4. **Human-in-the-Loop Review**: Collaborative editor with diffing and export support (PDF, PPTX, Markdown, HTML).
- **Suggested Tech Stack**: LangChain / LlamaIndex, OpenAI API / Gemini Pro / Ollama (DeepSeek / Llama 3), ReportLab / Canvas API / Marp for presentations, Vue.js or React.

---

#### 3. PS ID: 26063 — Integrated Polar Science Outreach, Knowledge Repository and Media Dissemination Portal
- **Organization**: Ministry of Earth Sciences (MoES)
- **Category**: Software
- **Theme**: Smart Education
- **Background**: Polar scientific expeditions (Arctic, Antarctic, Himalayas) generate extensive knowledge, photography, research papers, and documentary footage. Currently, dissemination is fragmented across disparate channels.
- **Key Objectives**:
  1. **Centralized Media Dissemination**: Digital portal for scientific outreach, press briefings, high-resolution media asset downloads, and educational kits.
  2. **Audio-Visual Knowledge Repository**: Searchable archive of expedition documentaries, photo galleries, researcher video logs, and podcasts.
  3. **Interactive 3D / Virtual Exhibits**: WebGL / Three.js virtual walk-throughs of research stations (e.g., Bharati, Maitri, Himadri).
  4. **Media Impact Analytics**: Track engagement, press downloads, and public outreach reach.
- **Suggested Tech Stack**: Next.js, Node.js / Python backend, AWS S3 / Cloudflare R2 / MinIO for media CDN, Three.js / WebGL for virtual exploration, Meilisearch for media cataloging.

---

#### 4. PS ID: 26096 — Digital Heritage Archive for Memorials, Manuscripts & Ambedkar: AI-Powered Institutional Archive and Audio-Visual Knowledge Platform
- **Organization**: Ministry of Social Justice and Empowerment (MoSJE)
- **Category**: Software
- **Theme**: Smart Education
- **Background**: Historical speeches, memorial records, manuscripts, photographs, and audio-visual recordings of national leaders require modern preservation, indexing, and interactive accessibility.
- **Key Objectives**:
  1. **Audio-Visual Ingestion & Restoration**: Ingest digitized audio speeches, historical video footage, and manuscripts.
  2. **AI Transcription & Translation**: Automatic multilingual speech-to-text (STT) and OCR for Indic scripts with timestamp-aligned search.
  3. **Semantic Audio-Visual Search**: Natural language query interface to find exact video/audio moments and quote citations.
  4. **Interactive Timeline & Knowledge Platform**: Public web portal for researchers, students, and citizens.
- **Suggested Tech Stack**: Whisper / IndicWhisper (STT), Tesseract / PaddleOCR (OCR), Qdrant / Milvus (Vector DB for semantic search), React / Next.js frontend, FFmpeg for media stream slicing.

---

### Section 2: Audio, Speech, Voice AI & Deepfake Detection

#### 5. PS ID: 26101 — AI-Powered Real-Time Detection and Prevention of Voice Cloning Impersonation Attacks
- **Organization**: Indian Cyber Crime Coordination Centre (I4C)
- **Category**: Software
- **Theme**: Blockchain & Cybersecurity
- **Background**: Generative AI and deep voice cloning technologies have enabled threat actors to impersonate family members, executives, and government officials for financial fraud and social engineering.
- **Key Objectives**:
  1. **Synthetic Voice Identification**: Detect phase irregularities, spectral inconsistencies, and vocoder artifacts in real-time.
  2. **Telephony & VoIP Stream Integration**: Low-latency inference suitable for mobile calls or VoIP streams (< 500 ms).
  3. **Explainable Forensics**: Provide forensic metrics (confidence score, vocoder footprint, acoustic anomaly heatmaps).
- **Suggested Tech Stack**: PyTorch, Librosa, RawNet3, Wav2Vec 2.0 / Audio Spectrogram Transformer (AST), WebRTC / Asterisk for telephony pipeline, Flutter for mobile demo.

---

#### 6. PS ID: 26173 — iTantra - Indian Multilingual TTS & STT Aided Neural Transceiver Radio Access for low bitrate links
- **Organization**: Indian Space Research Organisation (ISRO)
- **Category**: Software
- **Theme**: Smart Automation
- **Background**: Audio voice data is bandwidth-intensive. Over emergency, satellite, and low-bitrate radio links, transmitting raw audio is inefficient. Converting speech to compressed text/tokens and synthesizing it back enables low-bandwidth audio communication.
- **Key Objectives**:
  1. **Ultra-Low Bitrate Neural Transceiver**: Transmit speech at sub-kilobit rates by performing edge STT, sending phonetic/text tokens, and re-synthesizing via neural TTS on the receiving end.
  2. **Indian Multilingual Support**: Support major Indian regional languages.
  3. **Inclusive Disaster Broadcast**: Deliver clear synthesized speech to end-users regardless of literacy level.
- **Suggested Tech Stack**: Android SDK / Flutter, ONNX Runtime Mobile, Whisper.cpp / Vosk (STT), Piper / VITS / FastSpeech2 (TTS), Opus Codec / LoRa radio integration.

---

#### 7. PS ID: 26172 — Low Latency and Efficient Voice Activator for Edge Devices
- **Organization**: Indian Space Research Organisation (ISRO)
- **Category**: Hardware
- **Theme**: Smart Automation
- **Background**: Voice-controlled IoT and edge systems cannot rely entirely on cloud processing due to latency, privacy, and connectivity limitations.
- **Key Objectives**:
  1. Ultra-lightweight Keyword Spotting (KWS) model running on low-power microcontrollers (STM32, ESP32, Raspberry Pi Pico).
  2. Sub-100ms latency with high precision in noisy acoustic environments.
- **Suggested Tech Stack**: TinyML, TensorFlow Lite for Microcontrollers (TFLM), Edge Impulse, C/C++ embedded audio pipelines.

---

#### 8. PS ID: 26040 — AI/ML-Enabled Adaptive Noise Cancellation (ANC) System for Defence Speech
- **Organization**: DRDO
- **Category**: Software
- **Theme**: Smart Automation
- **Key Focus**: Audio signal enhancement to suppress stationary, non-stationary, and impulsive acoustic noises while retaining high voice intelligibility on embedded hardware.

---

### Section 3: Video Media, CCTV Analytics & Surveillance Forensics

#### 9. PS ID: 26150 — Development of a Multi-Vendor DVR/NVR Forensic Analysis Tool for Standardized Acquisition, Recovery, and Analysis of Surveillance Evidence
- **Organization**: National Technical Research Organisation (NTRO)
- **Category**: Software
- **Theme**: Blockchain & Cybersecurity
- **Background**: Surveillance video is recorded in proprietary, unstandardized, or non-contiguous file systems (Hikvision, Dahua, CP Plus, Uniview). Extracting and reconstructing deleted or corrupted video footage for forensic evidence is a major hurdle.
- **Key Objectives**:
  1. **Proprietary Format Carving**: Carve raw H.264/H.265/MPEG video frames directly from physical disk images or unallocated space.
  2. **Timestamp & Frame Reconstruction**: Rebuild corrupted container metadata and index video time intervals.
  3. **Forensic Integrity & Verification**: Cryptographic hashing (SHA-256) and audit logging for legal admissibility.
- **Suggested Tech Stack**: C++ / Rust / Python, PyQT / Electron for desktop GUI, FFmpeg / libavcodec, raw disk I/O / SleuthKit / FTK Imager format compatibility.

---

#### 10. PS ID: 26187 — AI-Based Intelligent Video Analytics Platform for Border Surveillance using existing CCTV Infrastructure
- **Organization**: Ministry of Home Affairs (MHA)
- **Category**: Software
- **Theme**: Blockchain & Cybersecurity
- **Key Focus**: AI computer vision platform to ingest real-time IP camera video feeds and perform automated human/vehicle detection, facial recognition (FRS), ANPR, perimeter tripwire alerts, and night-time intrusion alerts on legacy cameras without expensive hardware upgrades.

---

#### 11. PS ID: 26158 — Single-Pass Drone Video to Accurate 3D Model Generation System
- **Organization**: National Technical Research Organisation (NTRO)
- **Category**: Software
- **Theme**: Robotics and Drones
- **Key Focus**: Extracting video frames from a single aerial drone pass to compute camera trajectories, sparse/dense point clouds, and photorealistic 3D mesh models.

---

### Section 4: Open-Source Intelligence & Media Ingestion in Law Enforcement

#### 12. PS ID: 26189 — AI-Powered Criminal Network Analysis System
- **Organization**: Ministry of Home Affairs (MHA)
- **Category**: Software
- **Theme**: Blockchain & Cybersecurity
- **Key Focus**: Ingesting unstructured data from social media intelligence, communication metadata, CDRs, and case records to automatically construct knowledge graphs and identify ringleaders, hidden channels, and coordinated activities.

---

### Section 5: Media & Entertainment (Open Student Innovation)

#### 13. PS ID: 26199 (Software) & 26216 (Hardware) — Tertiary Sectors: Entertainment, Hospitality, Retail
- **Organization**: AICTE
- **Category**: Software & Hardware Tracks
- **Theme**: Miscellaneous
- **Scope**: Open track for student teams proposing novel technologies in media streaming, digital entertainment, creator platforms, AR/VR experiences, or interactive retail.

#### 14. PS ID: 26208 (Software) & 26225 (Hardware) — Cultural Games & Interactive Media
- **Organization**: AICTE
- **Category**: Software & Hardware Tracks
- **Theme**: Miscellaneous
- **Scope**: Open track for interactive video games, AR/VR experiences, and digital storytelling media celebrating Indian history, culture, and civilization.

---

## Recommendations by Team Skill Set

> [!TIP]
> ### Best Picks Based on Specialization
> - **NLP & Web Development Teams**: **`PS ID 26152`** (*Social Media Analytics*) or **`PS ID 26154`** (*Gen AI Content Transformation*).
> - **Full-Stack & Multimedia Archiving Teams**: **`PS ID 26063`** (*Polar Science Media Portal*) or **`PS ID 26096`** (*Digital Heritage Audio-Visual Archive*).
> - **Audio / Speech AI & Cyber Security Teams**: **`PS ID 26101`** (*Voice Cloning & Deepfake Audio Detection*).
> - **Computer Vision & Video Systems Teams**: **`PS ID 26187`** (*CCTV Video Analytics*) or **`PS ID 26150`** (*DVR/NVR Video Media Forensics*).
> - **Creative / Gaming Teams**: **`PS ID 26199`** (*Entertainment Innovation*) or **`PS ID 26208`** (*Civilization Games*).
