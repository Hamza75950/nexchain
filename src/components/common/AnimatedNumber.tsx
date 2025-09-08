"use client";
import { useEffect, useState } from "react";

interface AnimatedNumberProps {
  value: number; // Target value
  duration?: number; // Animation duration in ms
}

export default function AnimatedNumber({
  value,
  duration = 2000,
}: AnimatedNumberProps) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const currentValue = Math.floor(progress * value);
      setDisplayValue(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [value, duration]);

  return (
    <span>
      {displayValue.toLocaleString()} {/* adds commas */}
    </span>
  );
}
