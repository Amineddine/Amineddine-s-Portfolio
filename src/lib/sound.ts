// A tiny synthesized intro motif using the Web Audio API — no asset needed.
// Original three-note rising arpeggio (E4 → B4 → F#5, stacked fifths) with a
// soft bell-like decay. Must be called from within a user gesture to satisfy
// autoplay policy.
let ctx: AudioContext | null = null;

export function playIntroMotif() {
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
    const notes = [
      { freq: 329.63, start: 0, dur: 0.9 }, // E4
      { freq: 493.88, start: 0.11, dur: 0.9 }, // B4
      { freq: 739.99, start: 0.22, dur: 1.3 }, // F#5
    ];

    for (const note of notes) {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.value = note.freq;

      const t0 = now + note.start;
      gain.gain.setValueAtTime(0.0001, t0);
      gain.gain.exponentialRampToValueAtTime(0.16, t0 + 0.015);
      gain.gain.exponentialRampToValueAtTime(0.0001, t0 + note.dur);

      osc.connect(gain).connect(ctx.destination);
      osc.start(t0);
      osc.stop(t0 + note.dur + 0.05);
    }
  } catch {
    /* audio not available — silent fallback */
  }
}
