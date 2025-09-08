"use client";
import { useEffect, useState } from "react";

export default function AnimatedProgressBar() {
  const targetValue = 170000000; // your final value
  const maxValue = 182276007; // max value of progress

  const [progress, setProgress] = useState(0); // start at 0

  useEffect(() => {
    let start = 0;
    const duration = 500; // animation duration in ms
    const stepTime = 1000 / 60; // ~60fps

    const increment = targetValue / (duration / stepTime);

    const animate = () => {
      start += increment;
      if (start >= targetValue) {
        setProgress(targetValue);
      } else {
        setProgress(start);
        requestAnimationFrame(animate);
      }
    };

    animate();
  }, []);

  return (
    <progress
      className="appearance-none w-full rounded-lg border border-[#07130c] h-[18px] box-border overflow-hidden"
      value={progress}
      max={maxValue}
    />
  );
}
