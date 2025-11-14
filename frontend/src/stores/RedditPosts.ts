import { atom } from 'jotai';
import type { RedditPost } from '../types/Homepage';

export const redditPostsAtom = atom<RedditPost[]>([
  {
    title: 'Two weeks of straight rain...',
    subreddit: 'r/Seattle',
    comments: 23,
    url: '#',
  },
  {
    title: 'Best place to study?',
    subreddit: 'r/udub',
    comments: 12,
    url: '#',
  },
  {
    title: 'My hot takes on the light-rail',
    subreddit: 'r/SeattleWA',
    comments: 8,
    url: '#',
  },
]);
