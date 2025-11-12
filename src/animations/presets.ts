import type { Transition, Variants } from "framer-motion";

const BASE_DURATION = 0.36;
const BASE_EXIT_DURATION = 0.24;
const BASE_STAGGER = 0.08;
const BASE_EASE: Transition["ease"] = [0.16, 1, 0.3, 1];

export const shouldReduceMotion = (): boolean => {
  if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
    return false;
  }
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

const maybeReduceVariants = (variants: Variants): Variants => {
  if (!shouldReduceMotion()) return variants;
  return {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.18 } },
    exit: { opacity: 0, transition: { duration: 0.18 } },
  };
};

export const fadeInUp = (delay = 0): Variants =>
  maybeReduceVariants({
    hidden: { opacity: 0, y: 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: BASE_DURATION, ease: BASE_EASE, delay },
    },
    exit: {
      opacity: 0,
      y: -12,
      transition: { duration: BASE_EXIT_DURATION, ease: BASE_EASE },
    },
  });

export const fadeIn: Variants = maybeReduceVariants({
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: BASE_DURATION, ease: BASE_EASE },
  },
  exit: {
    opacity: 0,
    transition: { duration: BASE_EXIT_DURATION, ease: BASE_EASE },
  },
});

export const staggerContainer = (stagger = BASE_STAGGER, delayChildren = 0.08): Variants =>
  maybeReduceVariants({
    hidden: {},
    show: {
      transition: {
        staggerChildren: stagger,
        delayChildren,
      },
    },
  });

export const scaleIn: Variants = maybeReduceVariants({
  hidden: { opacity: 0, scale: 0.96 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: BASE_EASE },
  },
  exit: {
    opacity: 0,
    scale: 0.98,
    transition: { duration: 0.24, ease: BASE_EASE },
  },
});

export const slideInLeft = (distance = 36, delay = 0): Variants =>
  maybeReduceVariants({
    hidden: { opacity: 0, x: -distance },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: BASE_DURATION, ease: BASE_EASE, delay },
    },
    exit: {
      opacity: 0,
      x: -distance / 2,
      transition: { duration: BASE_EXIT_DURATION, ease: BASE_EASE },
    },
  });

export const slideInRight = (distance = 36, delay = 0): Variants =>
  maybeReduceVariants({
    hidden: { opacity: 0, x: distance },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: BASE_DURATION, ease: BASE_EASE, delay },
    },
    exit: {
      opacity: 0,
      x: distance / 2,
      transition: { duration: BASE_EXIT_DURATION, ease: BASE_EASE },
    },
  });

export const zoomInSoft = (delay = 0): Variants =>
  maybeReduceVariants({
    hidden: { opacity: 0, scale: 0.94 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.38, ease: BASE_EASE, delay },
    },
    exit: {
      opacity: 0,
      scale: 0.97,
      transition: { duration: BASE_EXIT_DURATION, ease: BASE_EASE },
    },
  });

export const revealClip: Variants = maybeReduceVariants({
  hidden: {
    opacity: 0,
    clipPath: "inset(12% 18% 18% 12% round 18px)",
  },
  show: {
    opacity: 1,
    clipPath: "inset(0% 0% 0% 0%)",
    transition: { duration: 0.52, ease: BASE_EASE },
  },
  exit: {
    opacity: 0,
    clipPath: "inset(8% 12% 12% 8% round 18px)",
    transition: { duration: 0.28, ease: BASE_EASE },
  },
});

export const routeTransition: Variants = maybeReduceVariants({
  hidden: {
    opacity: 0,
    filter: "blur(12px)",
    scale: 0.985,
  },
  show: {
    opacity: 1,
    filter: "blur(0px)",
    scale: 1,
    transition: { duration: 0.48, ease: BASE_EASE },
  },
  exit: {
    opacity: 0,
    filter: "blur(14px)",
    scale: 0.99,
    transition: { duration: 0.32, ease: BASE_EASE },
  },
});

export const springHover = {
  scale: 1.03,
  transition: { type: "spring", stiffness: 260, damping: 18 },
  filter: "brightness(1.05)",
};

