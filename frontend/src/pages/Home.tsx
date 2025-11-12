import { Link } from 'react-router-dom';
import { StyledCard } from '../components/StyledCard';

export function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl p-4 md:p-6">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-neutral-100">Last updated: just now</h1>
        <button
          onClick={() => window.location.reload()}
          className="rounded text-xs text-blue-400 transition hover:text-blue-300 hover:underline focus:ring-1 focus:ring-blue-500/40 focus:outline-none"
        >
          Refresh
        </button>
      </div>

      {/* 3x3 dashboard */}
      <div className="grid auto-rows-[minmax(240px,_1fr)] grid-cols-1 gap-4 md:grid-cols-3">
        {/* Row 1 */}
        <StyledCard
          title="AI Summary (Last 15 Minutes)"
          className="h-full md:col-span-2"
          right={
            <button className="rounded text-xs text-blue-400 hover:text-blue-300 hover:underline focus:ring-1 focus:ring-blue-500/40 focus:outline-none">
              Regenerate
            </button>
          }
        >
          <div className="space-y-2 text-base leading-6">
            <p>
              Light rail delays easing; I-5 northbound collision still causing backups at Mercer.
              Council pushes transit priority downtown. Expect showers this evening; AQI remains
              good. Mariners add pitching depth.
            </p>
            <ul className="list-disc pl-5 text-sm text-neutral-300">
              <li>Transit: Link minor delays</li>
              <li>Weather: scattered showers</li>
              <li>Civics: new downtown plan</li>
              <li>Sports: Mariners trade news</li>
            </ul>
          </div>
          <div className="mt-3 text-xs text-neutral-500">
            Generated from Reddit, news, transit, and weather sources.
          </div>
        </StyledCard>

        <StyledCard
          title="Reddit Discussions"
          className="row-span-2 h-full"
          right={
            <Link to="/" className="text-xs text-blue-400 hover:underline">
              View all
            </Link>
          }
        >
          <ul className="space-y-3">
            <li>
              <a href="#" className="font-medium hover:underline" target="_blank" rel="noreferrer">
                Best rainproof commuter routes from Capitol Hill?
              </a>
              <div className="text-xs text-neutral-500">r/Seattle · 5 mins ago · 23 comments</div>
            </li>
            <li>
              <a href="#" className="font-medium hover:underline" target="_blank" rel="noreferrer">
                UW library study spots with actual outlets?
              </a>
              <div className="text-xs text-neutral-500">r/udub · 11 mins ago · 12 comments</div>
            </li>
            <li>
              <a href="#" className="font-medium hover:underline" target="_blank" rel="noreferrer">
                Favorite rainy-day café to code in?
              </a>
              <div className="text-xs text-neutral-500">r/SeattleWA · 14 mins ago · 8 comments</div>
            </li>
          </ul>
        </StyledCard>

        {/* Row 2 */}
        <StyledCard title="Current Weather & AQI" className="h-full">
          <div className="flex items-end gap-4">
            <div>
              <div className="text-4xl font-black">52°</div>
              <div className="text-neutral-400">Partly cloudy · Wind 7 mph</div>
            </div>
            <div className="ml-auto text-right">
              <div className="text-sm">
                AQI: <span className="font-medium text-green-400">38 · Good</span>
              </div>
              <div className="text-xs text-neutral-500">Downtown · 10 min ago</div>
            </div>
          </div>
          <hr className="my-3 border-neutral-800" />
          <ul className="text-sm leading-6 text-neutral-300">
            <li>Next hour: light showers likely</li>
            <li>Tonight: low 44°, breezy</li>
            <li>Tomorrow: high 55°, scattered rain</li>
          </ul>
        </StyledCard>

        <StyledCard title="Rain / Umbrella Index ☂️" className="h-full">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-5xl">🌧️</span>
            <div className="text-right">
              <div className="text-xl font-semibold text-blue-400">Umbrella Required</div>
              <div className="text-xs text-neutral-500">
                85% chance you’ll regret not bringing one
              </div>
            </div>
          </div>
          <div className="text-sm text-neutral-300">
            <p>Light rain expected most of the day. Winds increasing in the afternoon.</p>
          </div>
        </StyledCard>

        {/* Row 3 */}
        <StyledCard title="Local News" className="h-full">
          <ul className="space-y-2">
            <li>
              <a className="font-medium hover:underline" href="#" target="_blank" rel="noreferrer">
                City Council advances downtown transit priority plan
              </a>
              <div className="text-xs text-neutral-500">KUOW · 9 mins ago</div>
            </li>
            <li>
              <a className="font-medium hover:underline" href="#" target="_blank" rel="noreferrer">
                Mariners sign veteran pitcher to one-year deal
              </a>
              <div className="text-xs text-neutral-500">KING 5 · 12 mins ago</div>
            </li>
            <li>
              <a className="font-medium hover:underline" href="#" target="_blank" rel="noreferrer">
                Rain returns: weekend storm timing and impacts
              </a>
              <div className="text-xs text-neutral-500">Seattle Times · 13 mins ago</div>
            </li>
          </ul>
        </StyledCard>

        <StyledCard title="Transportation Updates" className="h-full">
          <ul className="space-y-2">
            <li className="flex items-start justify-between">
              <div>
                <div className="font-medium">I-5 North — collision at Mercer</div>
                <div className="text-xs text-neutral-500">
                  Lanes 1–2 blocked · 8 mins ago · WSDOT
                </div>
              </div>
              <span className="rounded-full bg-yellow-500/20 px-2 py-0.5 text-xs text-yellow-300">
                Delay
              </span>
            </li>
            <li className="flex items-start justify-between">
              <div>
                <div className="font-medium">Link Light Rail — minor delays</div>
                <div className="text-xs text-neutral-500">
                  Operational · 5 mins ago · Sound Transit
                </div>
              </div>
              <span className="rounded-full bg-orange-500/20 px-2 py-0.5 text-xs text-orange-300">
                Alert
              </span>
            </li>
          </ul>
        </StyledCard>

        <StyledCard title="Seattle Mood" className="h-full text-center">
          <div className="mb-2 text-6xl">🌧️☕</div>
          <p className="text-sm text-neutral-300">
            Calm, rainy, and caffeinated — Seattle feels introspective today.
          </p>
          <div className="mt-2 text-xs text-neutral-500">
            Mood generated from Reddit & weather trends
          </div>
        </StyledCard>
      </div>
    </div>
  );
}
