// components/WavingHand.tsx
"use client";
import { useEffect, useState } from "react";

export default function WavingHand() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <span
      className={`inline-block origin-[70%_70%] ${
        animate ? "animate-wave" : ""
      }`}
    >
      👋
    </span>
  );
}
