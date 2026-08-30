import { ElevenLabsClient } from '@elevenlabs/elevenlabs-js';

export interface TTSOptions {
  text: string;
  voiceId?: string;
  modelId?: 'eleven_v3' | 'eleven_flash_v2_5' | 'eleven_multilingual_v2';
  languageCode?: string;
  apiKey?: string;
}

export const ELEVENLABS_VOICE_PRESETS = [
  { id: 'NOpBlnGInO9m6vDvFkFC', name: 'Zephyros / Storyteller', role: 'Cinematic / Emotional', desc: 'Optimized for eleven_v3 emotional tags [whispers], [sarcastically], [giggles]' },
  { id: 'pNInz6obpgDQGcFmaJgB', name: 'Adam', role: 'Executive Lead', desc: 'Authoritative, calm, and grounded technical briefing voice' },
  { id: '21m00Tcm4TlvDq8ikWAM', name: 'Rachel', role: 'Intelligence Anchor', desc: 'Crisp, articulate broadcast tone for news and bulletins' },
  { id: 'EXAVITQu4vr4xnSDxMaL', name: 'Bella', role: 'Public Outreach', desc: 'Warm, empathetic, and accessible narration style' },
  { id: 'TxGEqnHWrfWFTfGW9XjX', name: 'Josh', role: 'Operations Commander', desc: 'Deep resonance and decisive command presence' }
];

/**
 * Generate speech dynamically using official ElevenLabs SDK client
 */
export async function convertTextToSpeechSDK({
  text,
  voiceId = 'NOpBlnGInO9m6vDvFkFC',
  modelId = 'eleven_v3',
  languageCode = 'en',
  apiKey
}: TTSOptions): Promise<{ audioUrl: string; duration: number }> {
  const activeKey = apiKey || (import.meta.env.VITE_ELEVENLABS_API_KEY as string) || '';

  // 1. Initialize Official ElevenLabs SDK Client
  const elevenlabs = new ElevenLabsClient({
    apiKey: activeKey || undefined
  });

  // 2. Invoke textToSpeech.convert with exact requested parameters
  const audioStream = await elevenlabs.textToSpeech.convert(voiceId, {
    text,
    modelId,
    languageCode
  });

  // 3. Process Stream into Web Audio Blob
  const chunks: any[] = [];
  if (audioStream && typeof (audioStream as any)[Symbol.asyncIterator] === 'function') {
    for await (const chunk of audioStream as any) {
      chunks.push(typeof chunk === 'string' ? new TextEncoder().encode(chunk) : chunk);
    }
  } else if (audioStream instanceof Blob) {
    const arrayBuffer = await audioStream.arrayBuffer();
    chunks.push(arrayBuffer);
  } else if (audioStream instanceof ArrayBuffer) {
    chunks.push(audioStream);
  }

  const audioBlob = new Blob(chunks, { type: 'audio/mpeg' });
  const audioUrl = URL.createObjectURL(audioBlob);
  const wordCount = text.split(/\s+/).filter(Boolean).length;
  const duration = Math.max(5, Math.round((wordCount / 140) * 60));

  return { audioUrl, duration };
}
