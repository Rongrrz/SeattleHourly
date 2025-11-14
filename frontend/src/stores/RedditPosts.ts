import { atom } from 'jotai';
import type { RedditPost } from '../types/Homepage';

export const redditPostsAtom = atom<RedditPost[]>([
  {
    title: 'Best rainproof commuter routes from Capitol Hill?',
    subreddit: 'r/Seattle',
    comments: 23,
    url: '#',
  },
  {
    title: 'UW library study spots with actual outlets?',
    subreddit: 'r/udub',
    comments: 12,
    url: '#',
  },
  {
    title: 'Favorite rainy-day café to code in?',
    subreddit: 'r/SeattleWA',
    comments: 8,
    url: '#',
  },
]);
