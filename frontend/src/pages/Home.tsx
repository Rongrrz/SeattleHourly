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

      {/* Justified rows: 6 cols, fixed row height */}
      <div className="grid auto-rows-[260px] grid-cols-1 gap-4 md:grid-cols-6">
        {/* ROW 1 (6 cols total) */}
        <StyledCard title="AI Summary (Last 15 Minutes)" className="h-full md:col-span-4">
          <div className="space-y-2 text-base leading-6">
            <p>
              Light rail delays easing; I-5 northbound collision still causing backups at Mercer.
              Council pushes transit priority downtown. Expect showers this evening; AQI remains
              good. Mariners add pitching depth.
            </p>
            <ul className="list-disc pl-5 text-sm text-neutral-300">
              <li>Transit: minor Link delays; I-5 clearing</li>
              <li>Weather: scattered showers; good AQI</li>
              <li>Civics: downtown transit priority</li>
              <li>Sports: roster update</li>
            </ul>
          </div>
          <div className="mt-3 text-xs text-neutral-500">
            Generated from news, transit, weather, and Reddit sources.
          </div>
        </StyledCard>

        <StyledCard title="Current Weather & AQI" className="h-full md:col-span-2">
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

        {/* ROW 2 (6 cols total) */}
        <StyledCard title="Transportation Updates" className="h-full md:col-span-2">
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
            <li className="flex items-start justify-between">
              <div>
                <div className="font-medium">Route 8 — next arrival 7 min (Denny & Westlake)</div>
                <div className="text-xs text-neutral-500">ETA 7:14 PM · OneBusAway</div>
              </div>
              <span className="rounded-full bg-green-500/20 px-2 py-0.5 text-xs text-green-300">
                OK
              </span>
            </li>
          </ul>
        </StyledCard>

        <StyledCard title="Recent Local News" className="h-full md:col-span-2">
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

        <StyledCard title="Reddit Discussions" className="h-full md:col-span-2">
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

        {/* ROW 3 (6 cols total) */}
        <StyledCard title="Seattle Joke" className="h-full md:col-span-2">
          <blockquote className="italic">
            “In Seattle we don’t tan—we just develop different shades of ‘partly cloudy.’”
          </blockquote>
          <div className="mt-2 text-xs text-neutral-500">New joke every refresh.</div>
        </StyledCard>

        {/* Placeholder for future card (keeps row justified) */}
        <StyledCard title="Coming Soon" className="h-full md:col-span-4">
          <p className="text-sm text-neutral-300">
            Add a “Live Events”, “UW Feed”, or “Outages” panel here to keep rows perfectly aligned.
          </p>
        </StyledCard>
      </div>
    </div>
  );
}
