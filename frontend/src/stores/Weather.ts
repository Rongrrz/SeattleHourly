import { atom } from 'jotai';
import type { WeatherSummary } from '../types/Homepage';

export const weatherAtom = atom<WeatherSummary>({
  temperature: '52°',
  description: 'Partly cloudy',
  wind: 'Wind 7 mph',
  rain: "Won't rain today",
});
