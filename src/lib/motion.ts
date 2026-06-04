export const EASE = {
  outExpo: [0.16, 1, 0.3, 1] as const,
  spring: [0.22, 1, 0.36, 1] as const,
};

export const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.45, ease: EASE.spring },
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.35, ease: EASE.outExpo },
};

export const staggerContainer = {
  animate: {
    transition: { staggerChildren: 0.06, delayChildren: 0.04 },
  },
};

export const staggerItem = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE.spring } },
};

export const chartAnimation = {
  animationDuration: 1400,
  animationEasing: "ease-out" as const,
};
