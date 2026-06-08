// Shared cubic-bezier easings, typed as 4-tuples so framer-motion's `Easing`
// type accepts them (a bare number[] is not assignable to `Easing`).
export const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];
export const EASE_IN: [number, number, number, number] = [0.7, 0, 0.84, 0];
export const EASE_STD: [number, number, number, number] = [0.4, 0, 0.2, 1];
