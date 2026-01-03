import { StyledCard } from '../StyledCard';

export function Weather() {
  // const [weather] = useAtom(weatherAtom);

  return (
    <StyledCard title="Current Weather" className="h-full">
      {/* <div className="flex items-end gap-4">
        <div>
          <div className="text-4xl font-black pb-0.5">
            {weather.temperature}°F
          </div>
          <div className="text-neutral-400">Wind: {weather.windMPH} miles per hour</div>
        </div>
      </div>
      <hr className="my-3 border-neutral-800" />
      <ul className="text-sm leading-6 text-neutral-300">
        <li>{weather.rainChance}% to rain</li>
      </ul> */}
      The weather feature is currently disabled.
    </StyledCard>
  );
}
