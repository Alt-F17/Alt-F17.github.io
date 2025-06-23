import React, { useEffect, useState } from 'react';

interface ScrambledTextProps {
  initialText: string;
  targetText: string;
  scrambleChars?: string[];
  duration?: number; // total animation duration in seconds
  speed?: number; // interval in ms between scrambles
  className?: string;
}

const defaultScrambleChars = ['.', ':', '⠿', '⠻', '⠽', '⠾', '⠄'];

const ScrambledText: React.FC<ScrambledTextProps> = ({
  initialText,
  targetText,
  scrambleChars = defaultScrambleChars,
  duration = 1.2,
  speed = 50,
  className,
}) => {
  const [displayText, setDisplayText] = useState<string>(initialText);

  useEffect(() => {
    const maxLen = Math.max(initialText.length, targetText.length);
    let step = 0;
    const totalSteps = targetText.length;
    const stepDelay = (duration * 1000) / totalSteps;

    const scrambleInterval = setInterval(() => {
      step++;
      const newText = Array.from({ length: maxLen }, (_, i) => {
        if (i < step) {
          return targetText[i] || '';
        }
        // pick random char
        return scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
      }).join('');

      setDisplayText(newText);

      if (step >= totalSteps) {
        clearInterval(scrambleInterval);
        setDisplayText(targetText);
      }
    }, Math.max(speed, stepDelay));

    return () => clearInterval(scrambleInterval);
  }, [initialText, targetText, scrambleChars, duration, speed]);

  return <span className={className}>{displayText}</span>;
};

export default ScrambledText;
