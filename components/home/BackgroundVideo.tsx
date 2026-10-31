"use client";

import { useEffect, useRef } from "react";

/**
 * Muted, looping banner video. React doesn't put `muted` in the server HTML, and browsers only
 * autoplay muted video, so set it on the element and start playback after hydration.
 */
export default function BackgroundVideo({ src }: { src: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    video.muted = true;
    video.play().catch(() => {});
  }, []);

  return (
    <video ref={ref} autoPlay loop muted playsInline>
      <source src={src} type="video/mp4" />
    </video>
  );
}
