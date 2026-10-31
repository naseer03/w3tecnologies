"use client";

import { useEffect, useRef, type ReactNode } from "react";

// Options carried over from the old js/home.js, keyed by the carousel's first class name.
const presets: Record<string, OwlCarouselOptions> = {
  "blog-carousel": { loop: true, margin: 10, nav: true, autoplay: true, responsive: { 0: { items: 1 } } },
  "placed-carousel": {
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    responsive: { 0: { items: 1 }, 992: { items: 2 }, 1200: { items: 3 } },
  },
  "video-carousel": {
    items: 1,
    autoplay: true,
    merge: true,
    loop: true,
    margin: 10,
    video: true,
    center: true,
    responsive: { 0: { items: 1 } },
  },
  "reviews-carousel": { loop: true, margin: 10, nav: true, autoplay: true, responsive: { 0: { items: 1 } } },
};

/**
 * Owl Carousel (jQuery plugin) mounted on server-rendered slides.
 * The slides are static, so React never re-renders the nodes Owl rearranges.
 */
export default function OwlCarousel({
  className,
  preset,
  children,
}: {
  className: string;
  preset: keyof typeof presets;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let carousel: JQuery | undefined;
    let cancelled = false;
    (async () => {
      const { default: $ } = await import("jquery");
      // Owl looks for jQuery on window when it loads.
      Object.assign(window, { jQuery: $, $ });
      await import("owl.carousel");
      if (cancelled || !ref.current) return;
      carousel = $(ref.current).owlCarousel(presets[preset]);
    })();
    return () => {
      cancelled = true;
      carousel?.trigger("destroy.owl.carousel");
    };
  }, [preset]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
