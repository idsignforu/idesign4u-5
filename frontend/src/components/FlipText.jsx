import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

export function FlipText({
  className,
  children,
  duration = 2.2,
  delay = 0,
  loop = true,
  separator = " ",
  together = false,
}) {
  const textString = typeof children === "string" ? children : String(children || "");
  const words = useMemo(() => textString.split(separator), [textString, separator]);
  const totalChars = textString.length;

  const getCharIndex = (wordIndex, charIndex) => {
    let index = 0;
    for (let i = 0; i < wordIndex; i++) {
      index += words[i].length + (separator === " " ? 1 : separator.length);
    }
    return index + charIndex;
  };

  return (
    <div
      className={cn("flip-text-wrapper inline-block leading-none", className)}
      style={{ perspective: "1000px" }}
    >
      {words.map((word, wordIndex) => {
        const chars = word.split("");

        return (
          <span
            key={wordIndex}
            className="word inline-block whitespace-nowrap"
            style={{ transformStyle: "preserve-3d" }}
          >
            {chars.map((char, charIndex) => {
              const currentGlobalIndex = getCharIndex(wordIndex, charIndex);

              let calculatedDelay = delay;
              if (!together) {
                const normalizedIndex = currentGlobalIndex / totalChars;
                const sineValue = Math.sin(normalizedIndex * (Math.PI / 2));
                calculatedDelay = sineValue * (duration * 0.25) + delay;
              }

              return (
                <motion.span
                  key={charIndex}
                  className="flip-char inline-block relative"
                  data-char={char}
                  initial={{ rotateX: 0 }}
                  animate={{ rotateX: [0, 360] }}
                  transition={{
                    duration: duration,
                    delay: calculatedDelay,
                    repeat: loop ? Infinity : 0,
                    repeatDelay: 1.5,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                  style={{
                    transformStyle: "preserve-3d",
                    backfaceVisibility: "hidden",
                    display: "inline-block",
                  }}
                >
                  {char}
                </motion.span>
              );
            })}
            {separator === " " && wordIndex < words.length - 1 && (
              <span className="whitespace inline-block">&nbsp;</span>
            )}
            {separator !== " " && wordIndex < words.length - 1 && (
              <span className="separator inline-block">{separator}</span>
            )}
          </span>
        );
      })}
    </div>
  );
}

export default FlipText;
