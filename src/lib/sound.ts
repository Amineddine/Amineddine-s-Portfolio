// A tiny synthesized "ta-dum" using the Web Audio API — no asset needed.
// Must be called from within a user gesture to satisfy autoplay policy.
let ctx: AudioContext | null = null;

export function playTaDum() {
  if (typeof window === "undefined") return;
  try {
    const AudioCtor =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext })
        .webkitAudioContext;
    if (!AudioCtor) return;
    ctx = ctx ?? new AudioCtor();
    if (ctx.state === "suspended") void ctx.resume();

    const now = ctx.currentTime;
    // two-note "ta" (lower) → "dum" (drop), the Netflix cadence
    const notes = [
      { freq: 146.83, start: 0, dur: 0.18 }, // D3 "ta"
      { freq: 110.0, start: 0.16, dur: 0.5 }, // A2 "dum"
    ];

    for (const note of notes) {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "triangle";
      osc.frequency.value = note.freq;

      const t0 = now + note.start;
      gain.gain.setValueAtTime(0.0001, t0);
      gain.gain.exponentialRampToValueAtTime(0.35, t0 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, t0 + note.dur);

      osc.connect(gain).connect(ctx.destination);
      osc.start(t0);
      osc.stop(t0 + note.dur + 0.05);
    }
  } catch {
    /* audio not available — silent fallback */
  }
}
