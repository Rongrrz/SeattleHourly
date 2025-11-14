import { atom } from "jotai";
import type { NewsPost } from "../types/Homepage";

export const newsPostAtom = atom<NewsPost[]>([
  {
    title: 'City Council advances downtown transit priority plan',
    source: 'KUOW',
    url: '#',
  },
  {
    title: 'Mariners sign veteran pitcher to one-year deal',
    source: 'KING 5',
    url: '#',
  },
  {
    title: 'Rain returns: weekend storm timing and impacts',
    source: 'Seattle Times',
    url: '#',
  },
]);
