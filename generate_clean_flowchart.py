import sys
import matplotlib.pyplot as plt
import matplotlib.patches as patches

def draw_clean_flowchart(output_file="omnitransform_pipeline_flowchart.png"):
    # 16:9 proportional clean diagram
    fig, ax = plt.subplots(figsize=(11, 5.8), dpi=300)
    ax.set_facecolor('#FFFFFF')
    fig.patch.set_facecolor('#FFFFFF')
    ax.set_xlim(0, 100)
    ax.set_ylim(0, 100)
    ax.axis('off')

    # Natural, clean professional colors (No neon/synthetic AI colors)
    COLOR_PRIMARY = '#1B365D'      # SIH Navy
    COLOR_BG_BOX = '#F8FAFC'       # Clean light gray
    COLOR_BORDER = '#94A3B8'       # Clean standard border
    COLOR_BORDER_BLUE = '#1B365D'
    COLOR_ARROW = '#334155'        # Dark slate arrow
    COLOR_ACCENT = '#D97706'       # Clean amber/orange
    COLOR_TEXT = '#0F172A'

    def draw_clean_box(x, y, w, h, title, lines=None, is_highlight=False):
        fc = '#EFF6FF' if is_highlight else COLOR_BG_BOX
        ec = COLOR_PRIMARY if is_highlight else COLOR_BORDER
        lw = 1.5 if is_highlight else 1.0
        
        box = patches.Rectangle((x, y), w, h, ec=ec, fc=fc, lw=lw, joinstyle='round')
        ax.add_patch(box)

        # Title
        ax.text(x + w/2, y + h - 4.5, title, ha='center', va='center',
                fontsize=9.5, fontweight='bold', color=COLOR_PRIMARY, fontname='Arial')

        # Content lines
        if lines:
            start_y = y + h - 10
            line_spacing = (h - 12) / max(len(lines), 1)
            for idx, line in enumerate(lines):
                ax.text(x + 1.5, start_y - (idx * line_spacing), line, ha='left', va='top',
                        fontsize=7.8, color=COLOR_TEXT, fontname='Arial')

    def draw_arrow(x1, y1, x2, y2, label=None):
        ax.annotate('', xy=(x2, y2), xytext=(x1, y1),
                    arrowprops=dict(arrowstyle="-|>", color=COLOR_ARROW, lw=1.5, mutation_scale=12))
        if label:
            ax.text((x1+x2)/2, (y1+y2)/2 + 1.5, label, ha='center', va='bottom',
                    fontsize=7.5, color=COLOR_ARROW, fontname='Arial')

    # Title Banner
    ax.text(50, 95, "OmniTransform AI — System Architecture & Workflow",
            ha='center', va='center', fontsize=12.5, fontweight='bold', color=COLOR_PRIMARY, fontname='Arial')

    # Top Row: 3 Main Processing Stages
    # 1. Ingestion Box
    draw_clean_box(2, 54, 26, 34, "1. Document Ingestion", [
        "• Input: PDF, DOCX, Reports",
        "• PyMuPDF & pdfplumber parsing",
        "• Extracts text, headings & tables",
        "• Records exact page & coordinates"
    ])

    draw_arrow(28.5, 71, 35.5, 71)

    # 2. Text Processing & RAG
    draw_clean_box(36, 54, 28, 34, "2. Chunking & Indexing", [
        "• Semantic text splitting",
        "• Embedding generation",
        "• Vector indexing (FAISS)",
        "• Strict context retrieval for zero",
        "  unverified statements"
    ])

    draw_arrow(64.5, 71, 71.5, 71)

    # 3. LLM Transformation Engine
    draw_clean_box(72, 54, 26, 34, "3. LLM Transformation", [
        "• Model: Llama 3 / Mistral",
        "• Audience-specific prompt templates",
        "• Structured JSON output schema",
        "• Multilingual translation (IndicBERT)",
        "• Local GPU / Air-gapped execution"
    ], is_highlight=True)

    # Big Downward Connector Arrow from LLM to Output Engines
    draw_arrow(85, 54, 85, 42)

    # Horizontal distribution line
    ax.plot([10, 85], [42, 42], color=COLOR_ARROW, lw=1.2)

    # Connecting arrows to 5 output cards
    out_boxes = [
        (2, 8, 17.5, 30, "Executive Memo", ["• 1-Page Brief", "• Key takeaways", "• Source citations"]),
        (21.5, 8, 17.5, 30, "Slide Deck", ["• Formatted slides", "• Bulleted points", "• Meeting-ready"]),
        (41, 8, 17.5, 30, "Infographics", ["• Key statistics", "• Data cards", "• Social formats"]),
        (60.5, 8, 17.5, 30, "Press Release", ["• Public summary", "• English + Hindi", "• Regional Indian lang."]),
        (80.5, 8, 17.5, 30, "Audio Summary", ["• 60-second audio", "• Piper Neural TTS", "• Mobile briefing"])
    ]

    for (bx, by, bw, bh, btitle, blines) in out_boxes:
        draw_clean_box(bx, by, bw, bh, btitle, blines)
        # Vertical arrow from line to box
        center_x = bx + bw/2
        ax.plot([center_x, center_x], [42, 38], color=COLOR_ARROW, lw=1.2)
        draw_arrow(center_x, 38, center_x, by + bh)

    plt.tight_layout()
    plt.savefig(output_file, dpi=300, bbox_inches='tight', facecolor='#FFFFFF')
    print(f"Clean flowchart generated at: {output_file}")

if __name__ == "__main__":
    out = sys.argv[1] if len(sys.argv) > 1 else "omnitransform_pipeline_flowchart.png"
    draw_clean_flowchart(out)
