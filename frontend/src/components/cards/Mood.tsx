import { useAtom } from 'jotai';
import { StyledCard } from '../StyledCard';
import { moodAtom } from '../../stores/Mood';

export function Mood() {
  const [mood] = useAtom(moodAtom);
  return (
    <StyledCard title="Seattle Mood" className="h-full text-center">
      <div className="mb-2 text-6xl">{mood.emoji}</div>
      <p>{mood.description}</p>
    </StyledCard>
  );
}
