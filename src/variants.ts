// HOME PAGE
export const textVariants = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0 },
};

export const wrapperVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      delayChildren: 1,
      staggerChildren: 0.1,
      staggerDirection: 1,
    },
  },
  exit: { opacity: 0, transition: { duration: 0.1 } },
};

export const HomeBackgroundVariants = {
  initial: { y: '-100vh' },
  animate: {
    y: 0,
    transition: { type: 'spring', bounce: 0.25, duration: 0.4 },
  },
  exit: { y: '-150vh' },
};

// ALL PAGES excluding HOME

export const parallaxBGVariants = {
  initial: { y: '-100vh' },
  animate: {
    y: 0,
    transition: { type: 'spring', bounce: 0.25, duration: 0.4 },
  },
  exit: { y: '-100vh' },
};

export const parallaxTextWrapperVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { delay: 0.4 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};
