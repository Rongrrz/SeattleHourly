import { LocalNews } from '../components/cards/LocalNews';
import { RedditPosts } from '../components/cards/RedditPosts';
import { Summary } from '../components/cards/Summary';
import { Transportation } from '../components/cards/Transportation';
import { Weather } from '../components/cards/Weather';

export function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl p-4 md:p-6 md:pt-4">
      <h1 className="mb-4 text-2xl font-bold text-neutral-100">Last updated: (Do Later)</h1>

      <div className="grid auto-rows-[minmax(240px,1fr)] grid-cols-1 gap-4 md:grid-cols-3">
        <Summary />

        <Weather />

        <RedditPosts />

        <LocalNews />

        <Transportation />
      </div>
    </div>
  );
}
