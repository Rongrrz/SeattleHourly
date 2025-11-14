import { atom } from "jotai";
import type { Mood } from "../types/Homepage";

export const moodAtom = atom<Mood>({
  emoji: '🌧️',
  description: 'Calm, rainy, and caffeinated — Seattle feels introspective today.',
});
