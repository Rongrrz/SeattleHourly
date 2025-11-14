import { useAtom } from 'jotai';
import { summaryAtom } from '../../stores/Summary';
import { StyledCard } from '../StyledCard';

export function Summary() {
  const [summary] = useAtom(summaryAtom);
  return (
    <StyledCard title="AI Summary" className="h-full">
      <div className="space-y-2 text-base leading-6">{summary}</div>
      <div className="mt-3 text-xs text-neutral-500">
        Generated from Reddit, news, transit, and weather sources.
      </div>
    </StyledCard>
  );
}
