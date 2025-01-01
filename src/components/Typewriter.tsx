
import { useTypewriter } from '../hooks/useTypewriter';

interface TypewriterProps {
  texts: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenTexts?: number;
}

export default function Typewriter({
  texts,
  className = '',
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenTexts = 2000,
}: TypewriterProps) {
  const displayText = useTypewriter({
    texts,
    typingSpeed,
    deletingSpeed,
    delayBetweenTexts,
  });

  return (
    <div className={className}>
      {displayText}
      <span className="animate-pulse">|</span>
    </div>
  );
}