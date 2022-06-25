// HOME PAGE
export const textVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const wrapperVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      delayChildren: 1,
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
  exit: { opacity: 0, transition: { duration: 0.1 } },
};

export const HomeBackgroundVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { type: 'spring', bounce: 0.25, duration: 0.8 },
  },
  exit: {},
};

// Letter staggerChildren
export const container = {
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export const item = {
  hidden: {
    opacity: 0,
    y: 100,
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
  },
};
