import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface CharacterProps {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const CharacterSpan: React.FC<CharacterProps> = ({ char, progress, range }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <span className="relative inline-block">
      {/* Invisible placeholder for natural layout and width */}
      <span className="opacity-0 select-none pointer-events-none">{char}</span>
      {/* Absolute positioned animated character */}
      <motion.span
        style={{ opacity }}
        className="absolute left-0 top-0"
      >
        {char}
      </motion.span>
    </span>
  );
};

export interface AnimatedTextProps {
  text: string;
  className?: string;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = '',
}) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const words = text.split(' ');
  const totalLength = text.length;

  let globalCharIndex = 0;

  return (
    <p
      ref={containerRef}
      className={`font-medium text-center leading-relaxed text-[#D7E2EA] ${className}`}
    >
      {words.map((word, wordIdx) => {
        const wordChars = word.split('');
        const wordStartIndex = globalCharIndex;
        globalCharIndex += word.length + 1; // +1 for the space

        return (
          <span key={wordIdx} className="inline-block whitespace-nowrap">
            {wordChars.map((char, charIdx) => {
              const charIndex = wordStartIndex + charIdx;
              const start = charIndex / totalLength;
              const end = Math.min(1, start + 2 / totalLength);

              return (
                <CharacterSpan
                  key={charIdx}
                  char={char}
                  progress={scrollYProgress}
                  range={[start, end]}
                />
              );
            })}
            {wordIdx < words.length - 1 && (
              <span className="inline-block">
                <CharacterSpan
                  char=" "
                  progress={scrollYProgress}
                  range={[
                    (wordStartIndex + word.length) / totalLength,
                    Math.min(1, (wordStartIndex + word.length + 1) / totalLength),
                  ]}
                />
              </span>
            )}
          </span>
        );
      })}
    </p>
  );
};

export default AnimatedText;
