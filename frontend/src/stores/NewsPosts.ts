import { atom } from "jotai";
import type { NewsPost } from "../types/Homepage";

export const newsPostAtom = atom<NewsPost[]>([
  {
    title: 'Researchers found out that Christmas is in December',
    source: 'Best source ever',
    url: '#',
  },
  {
    title: 'Mariners unfortunately lost 3:4 :(',
    source: 'The source',
    url: '#',
  },
]);
