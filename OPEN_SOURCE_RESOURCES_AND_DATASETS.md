# 📚 OmniTransform AI — Open-Source Resources, Datasets & Models Guide

> **Project**: OmniTransform AI (SIH 2026 PS ID: 26154)  
> **Repository**: [https://github.com/hrlpavan/sih-2026-media-problem-statements](https://github.com/hrlpavan/sih-2026-media-problem-statements)  

---

## 1. 📊 Kaggle & HuggingFace Datasets

These datasets are used for training, benchmarking, document layout parsing, and multilingual evaluation:

| Resource / Dataset Name | Source / Platform | Description & Exact Use in Project |
| :--- | :--- | :--- |
| **PubLayNet & DocBank** | [Kaggle / IBM Research](https://www.kaggle.com/) | 360,000+ document pages with bounding-box annotations used for training the table, title, and figure coordinate extraction algorithms. |
| **Samanantar Indic Parallel Corpus** | [HuggingFace / AI4Bharat](https://huggingface.co/datasets/ai4bharat/samanantar) | Largest parallel translation dataset (49M sentence pairs) across 11 Indian languages (Hindi, Kannada, Tamil, Telugu, etc.) used for regional press releases. |
| **PIB Government Press Releases Corpus** | [Kaggle / Government Data](https://www.kaggle.com/) | Archive of official Press Information Bureau (PIB) India releases used for prompt few-shot tuning of press releases and executive memos. |
| **Multi-News Summarization Dataset** | [HuggingFace](https://huggingface.co/datasets/multi_news) | 56,000+ multi-document article clusters used for benchmarking long-document multi-point executive summary generation. |
| **IndicTTS & Common Voice India** | [HuggingFace / Mozilla](https://huggingface.co/datasets/mozilla-foundation/common_voice_11_0) | Regional Indian speech and acoustic voice dataset used for calibrating the 60-second neural audio podcast speech synthesizer. |

---

## 2. 🧠 Open-Source Foundation Models (Weights on HuggingFace)

All models are open-source and run locally on on-premise hardware without paid cloud APIs:

| Model Name | Developer / Organization | HuggingFace Identifier | Primary Role in System |
| :--- | :--- | :--- | :--- |
| **Llama 3.1 (8B / 70B Instruct)** | Meta AI | `meta-llama/Meta-Llama-3.1-8B-Instruct` | Core reasoning engine: parses structured text, enforces JSON schema, and extracts key insights. |
| **Mistral-7B-Instruct-v0.3** | Mistral AI | `mistralai/Mistral-7B-Instruct-v0.3` | Ultra-fast, lightweight on-premise summarization and question-answering. |
| **IndicTrans2** | AI4Bharat / Bhashini | `ai4bharat/indictrans2-en-indic-1B` | State-of-the-art translation from English into all 22 scheduled Indian languages. |
| **BGE-Small-EN-v1.5** | BAAI | `BAAI/bge-small-en-v1.5` | Dense vector embedding model for in-memory FAISS semantic search and citation grounding. |
| **Piper Neural TTS** | Rhasspy / Open-Source | `rhasspy/piper` | Real-time offline neural voice synthesizer generating the 60-second audio podcast. |

---

## 3. 🛠️ Open-Source Software Libraries & Repositories

| Software / Tool | License | GitHub Repository / Link | Usage in OmniTransform AI |
| :--- | :--- | :--- | :--- |
| **PyMuPDF (`fitz`)** | AGPL / Open-Source | [pymupdf/PyMuPDF](https://github.com/pymupdf/PyMuPDF) | High-speed PDF parser that extracts text lines with spatial coordinate bounding boxes `[x0, y0, x1, y1]`. |
| **pdfplumber** | MIT | [jsvine/pdfplumber](https://github.com/jsvine/pdfplumber) | Layout-aware table and multi-column document extraction. |
| **FAISS** | MIT | [facebookresearch/faiss](https://github.com/facebookresearch/faiss) | In-memory similarity search library for indexing document embeddings. |
| **Marp Core** | MIT | [marp-team/marp-core](https://github.com/marp-team/marp-core) | Converts structured markdown notes into formatted PowerPoint/HTML5 slide decks. |
| **Satori** | MIT | [vercel/satori](https://github.com/vercel/satori) | HTML/CSS to SVG/PNG engine for automated visual infographic and data card generation. |
| **PDF.js** | Apache 2.0 | [mozilla/pdf.js](https://github.com/mozilla/pdf.js) | Web canvas PDF viewer that renders the raw PDF and highlights verified source citations in yellow. |
| **FastAPI** | MIT | [tiangolo/fastapi](https://github.com/tiangolo/fastapi) | High-performance asynchronous REST API backend in Python. |
| **Next.js 14** | MIT | [vercel/next.js](https://github.com/vercel/next.js) | React-based frontend web framework with App Router. |

---

## 4. 📄 Research Papers & Official References

1. **Retrieval-Augmented Generation (RAG)**:  
   *Lewis et al. (2020)* — *Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks* (NeurIPS).  
   🔗 [arXiv:2005.11401](https://arxiv.org/abs/2005.11401)

2. **Multilingual Indian NLP (IndicTrans2)**:  
   *Gala et al. (2023)* — *IndicTrans2: Towards High-Quality and Accessible Machine Translation for all 22 Scheduled Indian Languages* (AI4Bharat).  
   🔗 [arXiv:2305.16307](https://arxiv.org/abs/2305.16307)

3. **Llama 3 Foundation Model Architecture**:  
   *Meta AI Research (2024)* — *The Llama 3 Herd of Models*.  
   🔗 [arXiv:2407.21783](https://arxiv.org/abs/2407.21783)

4. **Transformer Fundamentals**:  
   *Vaswani et al. (2017)* — *Attention Is All You Need* (NeurIPS).  
   🔗 [arXiv:1706.03762](https://arxiv.org/abs/1706.03762)

5. **Official Portals**:  
   * **Smart India Hackathon 2026 (PS ID 26154)**: [https://www.sih.gov.in/sih2026PS](https://www.sih.gov.in/sih2026PS)  
   * **National Technical Research Organisation (NTRO)**: [https://ntro.gov.in](https://ntro.gov.in)  
   * **Digital India Bhashini Division**: [https://bhashini.gov.in](https://bhashini.gov.in)  
