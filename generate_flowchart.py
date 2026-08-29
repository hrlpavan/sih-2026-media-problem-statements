import sys
import matplotlib.pyplot as plt
import matplotlib.patches as patches

def draw_flowchart(output_file="omnitransform_pipeline_flowchart.png"):
    fig, ax = plt.subplots(figsize=(12, 6.5), dpi=300)
    ax.set_facecolor('#FFFFFF')
    fig.patch.set_facecolor('#FFFFFF')
    ax.set_xlim(0, 100)
    ax.set_ylim(100)
    ax.axis('off')

    # Color Palette (Official SIH Navy Blue & Saffron)
    C_BLUE = '#1B365D'
    C_ORANGE = '#F37021'
    C_LIGHT_BG = '#F4F7FB'
    C_BORDER = '#CBD5E1'
    C_TEXT = '#14181E'
    C_ACCENT_BG = '#EBF3FB'

    # Helper function for drawing rounded boxes
    def draw_box(x, y, w, h, title, subtitle=None, is_primary=False, is_accent=False):
        bg = C_BLUE if is_primary else (C_ACCENT_BG if is_accent else C_LIGHT_BG)
        border = C_BLUE if is_primary else (C_ORANGE if is_accent else C_BORDER)
        box = patches.FancyBboxPatch((x, y), w, h,
                                     boxstyle="round,pad=0.5,rounding_size=1.5",
                                     ec=border, fc=bg, lw=1.5)
        ax.add_patch(box)

        t_color = '#FFFFFF' if is_primary else C_BLUE
        st_color = '#E2E8F0' if is_primary else C_TEXT

        if subtitle:
            ax.text(x + w/2, y + h*0.62, title, ha='center', va='center',
                    fontsize=10.5, fontweight='bold', color=t_color, fontname='Arial')
            ax.text(x + w/2, y + h*0.28, subtitle, ha='center', va='center',
                    fontsize=8.5, color=st_color, fontname='Arial')
        else:
            ax.text(x + w/2, y + h/2, title, ha='center', va='center',
                    fontsize=10, fontweight='bold', color=t_color, fontname='Arial')

    # Helper function for drawing arrows
    def draw_arrow(x1, y1, x2, y2, label=None):
        ax.annotate('', xy=(x2, y2), xytext=(x1, y1),
                    arrowprops=dict(arrowstyle="-|>", color=C_ORANGE, lw=2.0, mutation_scale=15))
        if label:
            ax.text((x1+x2)/2, (y1+y2)/2 + 2, label, ha='center', va='bottom',
                    fontsize=7.5, fontweight='bold', color=C_BLUE, fontname='Arial')

    # 1. Main Title at Top
    ax.text(50, 95, "OmniTransform AI — End-to-End System Process Architecture",
            ha='center', va='center', fontsize=14, fontweight='bold', color=C_BLUE, fontname='Arial')
    ax.text(50, 90.5, "Single-Pass Ingestion to 5 Synchronized Enterprise Communication Assets",
            ha='center', va='center', fontsize=9.5, color='#64748B', fontname='Arial')

    # 2. Stage 1: Document Ingestion
    draw_box(2, 68, 22, 16, "1. Document Ingestion", "PyMuPDF / Spatial Bounding-Box Parser\n(PDF, Advisories, Policy Whitepapers)")

    # Arrow 1 -> 2
    draw_arrow(25, 76, 29, 76)

    # 3. Stage 2: Structured Chunking & RAG
    draw_box(30, 68, 24, 16, "2. Structured Chunking & RAG", "Hierarchical Coordinate Embedding\n(In-Memory FAISS / Qdrant Store)")

    # Arrow 2 -> 3
    draw_arrow(55, 76, 59, 76)

    # 4. Stage 3: Multi-Persona Orchestrator
    draw_box(60, 68, 38, 16, "3. Multi-Persona Orchestrator", "Constrained JSON Schema Extraction\n(Sovereign Llama 3.3 / Mistral Large)", is_primary=True)

    # Big Downward Connector Arrow from Orchestrator to Parallel Engines
    ax.annotate('', xy=(79, 52), xytext=(79, 67),
                arrowprops=dict(arrowstyle="-|>", color=C_ORANGE, lw=2.5, mutation_scale=18))
    ax.text(79, 59, "Parallel Multi-Engine Synthesis", ha='center', va='center',
            fontsize=8.5, fontweight='bold', color=C_ORANGE, fontname='Arial',
            bbox=dict(boxstyle="square,pad=0.3", fc='#FFFFFF', ec='none'))

    # 5. Stage 4: 5 Output Engines (Horizontal Grid)
    engines = [
        (2, 33, 17.5, 15, "Executive Brief", "1-Page Summary Memo\n(Clickable Citations)"),
        (21.5, 33, 17.5, 15, "Slide Compiler", "Marp / HTML5 Deck\n(Meeting-Ready)"),
        (41, 33, 17.5, 15, "Visual Canvas", "Satori Auto-Renderer\n(Infographic & Social)"),
        (60.5, 33, 18.5, 15, "Press Engine", "Regional Translation\n(IndicBERT / English)"),
        (81, 33, 17, 15, "Voice Podcast", "Piper / ElevenLabs TTS\n(60s Audio Briefing)")
    ]

    for (ex, ey, ew, eh, etitle, esub) in engines:
        draw_box(ex, ey, ew, eh, etitle, esub, is_accent=True)
        # Downward arrow to Verification Stage
        draw_arrow(ex + ew/2, ey - 1, ex + ew/2, 17)

    # 6. Stage 5: Verification & Sovereign Dashboard (Bottom Bar)
    draw_box(2, 3, 96, 13, "5. Interactive Verification UI & Sovereign On-Premise Dashboard",
             "Zero-Hallucination Reverse Citation Coordinate Highlighting  |  Air-Gapped Docker Host  |  Real-Time Persona Switcher", is_primary=True)

    plt.tight_layout()
    plt.savefig(output_file, dpi=300, bbox_inches='tight', facecolor='#FFFFFF')
    print(f"Professional flowchart generated at: {output_file}")

if __name__ == "__main__":
    out = sys.argv[1] if len(sys.argv) > 1 else "omnitransform_pipeline_flowchart.png"
    draw_flowchart(out)
