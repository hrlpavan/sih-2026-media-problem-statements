# 🛠️ OmniTransform AI — Complete Technical Development Specification

> **Problem Statement ID**: 26154 (Smart India Hackathon 2026)  
> **Title**: Gen AI Platform for Automated Content Transformation  
> **Organization**: National Technical Research Organisation (NTRO)  
> **Live Prototype Demo**: [https://hrl-brand-seo.vercel.app](https://hrl-brand-seo.vercel.app)  
> **GitHub Repository**: [https://github.com/hrlpavan/sih-2026-media-problem-statements](https://github.com/hrlpavan/sih-2026-media-problem-statements)  

---

## 1. Project Overview & Problem Statement

### 🎯 The Problem:
Government bodies, intelligence agencies (like NTRO/MoD), and research institutions produce massive volumes of dense, technical 50+ page PDF documents, threat advisories, and policy papers daily. 
- **Information Overload**: Senior leaders and field officers do not have 3–4 hours to read full documents before urgent meetings.
- **Manual Bottleneck**: Communication and design teams spend 4–6 hours manually writing memos, designing slide decks, translating to regional languages, and formatting social graphics.
- **Risk of Fake Data (Hallucinations)**: Using standard public AI tools often creates fabricated numbers or unverified claims without source page links.

### 💡 The Solution (OmniTransform AI):
A single-pass, sovereign AI platform that ingests any complex document (PDF, DOCX, Research Papers) and automatically outputs **5 synchronized communication formats in under 10 seconds**:
1. **1-Page Executive Summary Memo** (with clickable page citations).
2. **Meeting-Ready Slide Deck** (formatted for PowerPoint / Keynote).
3. **Visual Infographic & Social Data Cards** (high-res auto-rendered metrics).
4. **Multilingual Press Release** (English, Hindi, Kannada, Tamil, etc.).
5. **60-Second Neural Audio Briefing** (podcast for mobile listening).

---

## 2. Complete Technology Stack & Architecture

```
┌──────────────────────────────────────────────────────────────────────────────────┐
│                             FULL TECHNOLOGY STACK                                │
├──────────────────────────────────────────────────────────────────────────────────┤
│ Frontend       │ Next.js 14, React 18, TypeScript, Tailwind CSS, PDF.js Canvas  │
│ Backend API    │ Python 3.11+, FastAPI, Uvicorn, Asynchronous Worker Queues      │
│ Document Parser│ PyMuPDF (Fitz), pdfplumber (table & coordinate extraction)      │
│ AI Foundation  │ Meta Llama 3.3 (70B), Mistral Large, IndicBERT (Bhashini)       │
│ Vector Search  │ FAISS (Facebook AI Similarity Search), Sentence-Transformers    │
│ Slide Engine   │ Marp Markdown Slide Compiler, HTML5 / Reveal.js                 │
│ Visual Engine  │ Satori (HTML/CSS to SVG/PNG Canvas Auto-Renderer)               │
│ Voice Synthesis│ Piper Neural TTS (Offline local engine), ElevenLabs API         │
│ Security       │ 100% Dockerized, Air-Gapped On-Premise Execution, Zero Cloud API│
└──────────────────────────────────────────────────────────────────────────────────┘
```

---

## 3. End-to-End System Workflow (Step-by-Step)

```
[ Raw Document Upload ] (PDF / DOCX / Report)
         │
         ▼
[ Stage 1: Spatial Parsing ] ──► Extracts text blocks, headings & tables with coordinates (x, y, page)
         │
         ▼
[ Stage 2: Chunking & Indexing ] ──► Semantic splitting & in-memory FAISS vector indexing
         │
         ▼
[ Stage 3: LLM Orchestrator ] ──► Llama 3 / Mistral with Constrained JSON Schema Prompting
         │
         ├───────────────────────┬──────────────────────┬─────────────────────┬──────────────────┐
         ▼                       ▼                      ▼                     ▼                  ▼
   1. Exec Memo            2. Slide Deck          3. Infographic        4. Press Release   5. Voice Audio
  (Markdown / PDF)        (Marp / HTML5)         (Satori Canvas)         (IndicBERT)        (Piper TTS)
         │                       │                      │                     │                  │
         └───────────────────────┴──────────────────────┴─────────────────────┴──────────────────┘
                                                        │
                                                        ▼
                             [ Stage 4: Interactive Verification UI ]
                             • Live preview of all 5 assets
                             • Click-to-verify reverse PDF citation highlighting
```

---

## 4. Detailed Component Implementation

### A. Document Parsing & Coordinate Tracking
* **Tool**: `PyMuPDF` (`fitz`) and `pdfplumber`.
* **Mechanism**: When a PDF is uploaded, the parser loops through all pages and stores each text snippet with its spatial metadata:
  ```python
  # Coordinate extraction schema
  {
      "text": "Critical infrastructure cyber alert reported at 04:00 UTC.",
      "page_number": 14,
      "bounding_box": [120.5, 340.2, 450.8, 360.0]  # [x0, y0, x1, y1]
  }
  ```
* **Why it matters**: This allows the frontend to highlight the exact bounding box in yellow when a user clicks on a summary point.

### B. Strict RAG & Zero-Hallucination Retrieval
* **Vector Index**: `FAISS` with `BAAI/bge-small-en-v1.5` embeddings.
* **Retrieval Rule**: The LLM is provided with a strict system constraint:
  `"Answer only using the provided text context. If a fact cannot be found in the document, omit it. Do not guess or extrapolate."`

### C. Structured JSON Prompting
The LLM outputs a single structured JSON object that feeds all 5 downstream compilers simultaneously:

```json
{
  "executive_summary": {
    "title": "National Cyber Defense Advisory",
    "key_takeaways": [
      {
        "point": "Ransomware activity increased by 42% in Q3.",
        "source_page": 4,
        "citation_text": "Q3 saw a 42% surge across state networks."
      }
    ],
    "action_items": ["Patch CVE-2024-XXXX immediately", "Enable 2FA"]
  },
  "slide_deck": [
    {
      "slide_number": 1,
      "title": "Threat Overview",
      "bullets": ["Surge in phishing vectors", "Critical infrastructure targeted"]
    }
  ],
  "infographic_metrics": [
    {"label": "Targeted Sectors", "value": "Energy & Power", "stat": "68%"},
    {"label": "Response Window", "value": "< 15 Minutes", "stat": "99.4%"}
  ],
  "press_release": {
    "headline": "NTRO Issues National Advisory on Critical Infrastructure Security",
    "body_english": "...",
    "body_hindi": "..."
  },
  "audio_script": "This is your 60-second morning intelligence briefing. Today, the National Technical Research Organisation issued..."
}
```

### D. Multi-Format Compilers
1. **Slide Compiler (`Marp Engine`)**: Converts the structured slide JSON into ready-to-present HTML5/PowerPoint slides.
2. **Visual Canvas Generator (`Satori`)**: Renders HTML/CSS templates containing the `infographic_metrics` into high-resolution PNG/SVG images.
3. **Voice Synthesizer (`Piper Neural TTS`)**: Ingests the 60-second `audio_script` and generates a clean `.wav` / `.mp3` audio stream in < 2 seconds.

---

## 5. How to Run & Deploy the Project Locally

### Prerequisites:
- Node.js 18+ & npm
- Python 3.10+ & pip
- (Optional) Docker & Docker Compose

### Step 1: Clone the Repository
```bash
git clone https://github.com/hrlpavan/sih-2026-media-problem-statements.git
cd sih-2026-media-problem-statements
```

### Step 2: Backend Setup (FastAPI & AI Engine)
```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt

# Start backend server on http://localhost:8000
uvicorn main:app --reload --port 8000
```

### Step 3: Frontend Setup (Next.js Web UI)
```bash
cd frontend
npm install
npm run dev
# Open http://localhost:3000 in your browser
```

### Step 4: (Alternative) 1-Click Docker Deployment
```bash
docker-compose up --build
# Fully runs air-gapped without internet on http://localhost:3000
```

---

## 6. Jury & Evaluator Q&A Preparation (Winning Defense)

| Question from Evaluators / Jury | Winning Answer to Deliver |
| :--- | :--- |
| **"How do you prevent the AI from making up fake numbers (hallucinations)?"** | *"We enforce strict retrieval boundaries (RAG). Every single output bullet is mapped to exact page and line coordinate bounding boxes (`[x0, y0, x1, y1]`). If the fact isn't in the raw PDF, the model is strictly constrained not to output it. Users can click any sentence to highlight the exact source in the original document."* |
| **"Can this be used by defense or intelligence agencies with secret data?"** | *"Yes, 100%. OmniTransform AI is completely containerized in Docker and runs locally on on-premise GPU workstations (e.g. RTX 3060/4090 or Apple Silicon) using open-source models (Llama 3 / Mistral). Zero data is sent to external cloud APIs, making it 100% air-gapped and sovereign."* |
| **"How fast does it transform a 50-page document?"** | *"Under 10 seconds. We use asynchronous parallel task processing: while the text parser chunks the document, our template engines compile the slides, infographics, and 60-second voice audio stream simultaneously in parallel threads."* |
| **"What makes this unique compared to ChatGPT or Claude?"** | *"ChatGPT only gives plain text in a chat window. OmniTransform is an end-to-end multi-format production pipeline that simultaneously builds 5 distinct, production-ready assets (formatted PPT slides, visual data cards, regional press releases, voice podcast, and 1-page memo) with reverse citation verification in a single click."* |
