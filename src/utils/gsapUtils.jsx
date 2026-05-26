export const splitTextToSpans = (text) => {
  return text.split(' ').map((word, wordIndex) => {
    return (
      <span key={`word-${wordIndex}`} className="inline-block overflow-hidden mr-[0.3em] last:mr-0 align-bottom leading-tight">
        {word.split('').map((char, charIndex) => (
          <span
            key={`char-${wordIndex}-${charIndex}`}
            className="inline-block split-char transform-gpu"
            style={{ display: 'inline-block', whiteSpace: char === ' ' ? 'pre' : 'normal' }}
          >
            {char}
          </span>
        ))}
      </span>
    );
  });
};
