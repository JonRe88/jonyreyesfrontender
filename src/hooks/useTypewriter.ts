import { useState, useEffect, useCallback } from 'react';

interface UseTypewriterProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenTexts?: number;
}

export function useTypewriter({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenTexts = 2000,
}: UseTypewriterProps) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const animateText = useCallback(() => {
    const currentText = texts[currentIndex];
    
    if (isDeleting) {
      setDisplayText(prev => prev.slice(0, -1));
      if (displayText === '') {
        setIsDeleting(false);
        setCurrentIndex(prev => (prev + 1) % texts.length);
      }
    } else {
      setDisplayText(currentText.slice(0, displayText.length + 1));
      if (displayText === currentText) {
        setTimeout(() => setIsDeleting(true), delayBetweenTexts);
      }
    }
  }, [currentIndex, displayText, isDeleting, texts, delayBetweenTexts]);

  useEffect(() => {
    const timeout = setTimeout(
      animateText,
      isDeleting ? deletingSpeed : typingSpeed
    );
    return () => clearTimeout(timeout);
  }, [animateText, isDeleting, deletingSpeed, typingSpeed]);

  return displayText;
}