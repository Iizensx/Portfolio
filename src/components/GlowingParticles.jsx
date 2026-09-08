import { useEffect, useState } from "react";

export default function GlowingParticles({ starCount = 140 }) {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generatedStars = Array.from({ length: starCount }, (_, id) => ({
      id,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 5,
      duration: Math.random() * 2 + 2,
    }));
    const timer = window.setTimeout(() => setStars(generatedStars), 0);

    return () => window.clearTimeout(timer);
  }, [starCount]);

  return (
    <div className={`galaxy-container${stars.length ? " loaded" : ""}`} aria-hidden="true">
      {stars.map((star) => (
        <span
          key={star.id}
          className="star"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
