import { atom } from 'jotai';
import type { WeatherSummary } from '../types/Homepage';

export const weatherAtom = atom<WeatherSummary>({
  temperature: 52,
  wind: 7,
  rainChance: 10,
});
