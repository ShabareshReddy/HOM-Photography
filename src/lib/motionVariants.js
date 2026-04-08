/**
 * ─────────────────────────────────────────────────────────
 *  HOM Photography — Shared Motion Variants
 *  Luxury cubic-bezier: [0.16, 1, 0.3, 1]  (expo-out)
 * ─────────────────────────────────────────────────────────
 */

export const LUXURY_EASE = [0.16, 1, 0.3, 1];
export const SMOOTH_EASE = [0.22, 0.61, 0.36, 1];

/* ── Per-letter kinetic character ───────────────────────── */
export const letterVariant = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.9,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.65,
      ease: LUXURY_EASE,
    },
  },
};

/* ── Word / sentence container with stagger ─────────────── */
export const wordContainer = (stagger = 0.035, delay = 0) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
      delayChildren: delay,
    },
  },
});

/* ── Fade + slide up + blur + scale entry ───────────────── */
export const fadeSlideUp = (delay = 0, duration = 0.85) => ({
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.97,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration,
      delay,
      ease: LUXURY_EASE,
    },
  },
});

/* ── Clip-path reveal (mask slides upward) ────────────────  */
export const clipReveal = (delay = 0, duration = 1.1) => ({
  hidden: {
    clipPath: "inset(100% 0% 0% 0%)",
    opacity: 0,
  },
  visible: {
    clipPath: "inset(0% 0% 0% 0%)",
    opacity: 1,
    transition: {
      duration,
      delay,
      ease: LUXURY_EASE,
    },
  },
});

/* ── Clip-path reveal from left ──────────────────────────── */
export const clipRevealLeft = (delay = 0, duration = 1.0) => ({
  hidden: {
    clipPath: "inset(0% 100% 0% 0%)",
    opacity: 0,
  },
  visible: {
    clipPath: "inset(0% 0% 0% 0%)",
    opacity: 1,
    transition: {
      duration,
      delay,
      ease: LUXURY_EASE,
    },
  },
});

/* ── Stagger grid container ──────────────────────────────── */
export const staggerGrid = (stagger = 0.07, delay = 0.1) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
      delayChildren: delay,
    },
  },
});

/* ── Grid card item with clip + blur ─────────────────────── */
export const gridCardVariant = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.65,
      ease: LUXURY_EASE,
    },
  },
};

/* ── Simple fade up (no blur, for subtle elements) ────────── */
export const fadeUp = (delay = 0, duration = 0.7) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration, delay, ease: SMOOTH_EASE },
  },
});

/* ── Scale pop (stars, icons) ────────────────────────────── */
export const scalePop = (delay = 0) => ({
  hidden: { opacity: 0, scale: 0, rotate: -20 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
      delay,
    },
  },
});

/* ── Viewport config shorthand ─────────────────────────────  */
export const viewportOnce = { once: true, amount: 0.2 };
export const viewportOnceMore = { once: true, amount: 0.4 };
