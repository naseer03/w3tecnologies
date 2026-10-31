"use client";

import { useEffect } from "react";

// Port of slideAnim() from the old js/home.js: the "Internships & Courses" cards slide left in an
// endless loop, pause on hover, can be stepped with the nav buttons, and only run while on screen.

const DEFAULT_STOP_DELAY = 1200;
const CLICK_STOP_DELAY = 100;
const DEFAULT_AFTER_DELETE_DELAY = 200;
const CLICK_AFTER_DELETE_DELAY = 30;
const FIRST_CARD_START_DELAY = 100;
const FIRST_CARD_TRANSITION = "left 0.5s cubic-bezier(0, 0.82, 0.9, 1), opacity 0.6s ease-out";
const ZERO_DURATION = "0s";
const DEFAULT_DURATION = ""; // falls back to the transition in home.css
const CLICK_DURATION = "0.2s";

function cardWidth(card: Element) {
  const style = window.getComputedStyle(card);
  return card.clientWidth + parseInt(style.marginLeft) + parseInt(style.marginRight);
}

function slideAnim(view: HTMLElement) {
  const cards = view.getElementsByClassName("cards-list")[0] as HTMLElement | undefined;
  if (!cards || cards.childElementCount === 0) return () => {};

  let stopTimer: number | null = null;
  let deleteTimer: number | null = null;
  let firstTime = true;
  const toLeft = `-${cardWidth(cards.children[0])}px`;
  const fromRight = `${cardWidth(cards.children[0])}px`;

  const isStopped = () => stopTimer === null && deleteTimer === null;

  function stop() {
    if (stopTimer !== null) clearTimeout(stopTimer);
    if (deleteTimer !== null) clearTimeout(deleteTimer);
    stopTimer = deleteTimer = null;
  }

  function slideLeft(clicked: boolean) {
    stopTimer = window.setTimeout(
      () => {
        // Once the first card has slid out, move it to the end and reset the strip.
        if (cards!.style.left === toLeft) {
          const first = cards!.children[0];
          cards!.removeChild(first);
          cards!.style.transitionDuration = ZERO_DURATION;
          cards!.style.left = "0px";
          cards!.appendChild(first);
        }
        deleteTimer = window.setTimeout(
          () => {
            if (cards!.style.left === "0px") {
              cards!.style.transitionDuration = clicked ? CLICK_DURATION : DEFAULT_DURATION;
              cards!.style.left = toLeft;
            }
            if (!isStopped()) slideLeft(false);
          },
          clicked ? CLICK_AFTER_DELETE_DELAY : DEFAULT_AFTER_DELETE_DELAY,
        );
      },
      clicked ? CLICK_STOP_DELAY : DEFAULT_STOP_DELAY,
    );
  }

  function slideRight() {
    if (cards!.style.left === "0px") {
      const first = cards!.children[0];
      const last = cards!.children[cards!.childElementCount - 1];
      cards!.style.transitionDuration = ZERO_DURATION;
      cards!.removeChild(last);
      cards!.insertBefore(last, first);
      cards!.style.left = toLeft;
    }
    deleteTimer = window.setTimeout(() => {
      if (cards!.style.left === toLeft) {
        cards!.style.transitionDuration = CLICK_DURATION;
        cards!.style.left = "0px";
      }
      if (!isStopped()) slideLeft(false);
    }, CLICK_AFTER_DELETE_DELAY);
  }

  function startFirstTime() {
    firstTime = false;
    window.setTimeout(() => {
      cards!.style.transition = FIRST_CARD_TRANSITION;
      cards!.style.left = "0px";
      cards!.style.opacity = "1";
      stopTimer = window.setTimeout(() => (cards!.style.transition = ""), 600);
      if (!isStopped()) slideLeft(false);
    }, FIRST_CARD_START_DELAY);
  }

  const leftButton = document.getElementById(`left-nav-btn-${view.id}`);
  const rightButton = document.getElementById(`right-nav-btn-${view.id}`);
  const onLeft = () => {
    stop();
    slideRight();
  };
  const onRight = () => {
    stop();
    slideLeft(true);
  };
  const onOut = () => {
    stop();
    slideLeft(false);
  };
  leftButton?.addEventListener("click", onLeft);
  rightButton?.addEventListener("click", onRight);
  cards.addEventListener("mouseover", stop);
  cards.addEventListener("mouseout", onOut);

  // Start with the first card waiting just off to the right.
  cards.style.transitionDuration = ZERO_DURATION;
  cards.style.left = fromRight;
  cards.style.opacity = "0";

  const observer = new IntersectionObserver((entries) => {
    if (entries[0].intersectionRatio <= 0) return stop();
    if (firstTime) startFirstTime();
    else {
      stop();
      slideLeft(false);
    }
  });
  observer.observe(view);

  return () => {
    stop();
    observer.disconnect();
    leftButton?.removeEventListener("click", onLeft);
    rightButton?.removeEventListener("click", onRight);
    cards.removeEventListener("mouseover", stop);
    cards.removeEventListener("mouseout", onOut);
  };
}

export default function CardsSlideAnimation({ viewId }: { viewId: string }) {
  useEffect(() => {
    let cleanup = () => {};
    // Card widths are measured, so wait for images to load (the old script ran on window.onload).
    const start = () => {
      const view = document.getElementById(viewId);
      if (view) cleanup = slideAnim(view);
    };
    if (document.readyState === "complete") start();
    else window.addEventListener("load", start, { once: true });
    return () => {
      window.removeEventListener("load", start);
      cleanup();
    };
  }, [viewId]);

  return null;
}
