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
  initial: { y: '-100vh' },
  animate: {
    y: 0,
    transition: { type: 'spring', bounce: 0.25, duration: 0.8 },
  },
  exit: { y: '-150vh' },
};

// ALL PAGES excluding HOME

export const parallaxBGVariants = {
  initial: { y: '-100vh' },
  animate: {
    y: 0,
    transition: { type: 'spring', bounce: 0.25, duration: 0.8 },
  },
  exit: { y: '-100vh' },
};

export const parallaxTextWrapperVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { delay: 0.4 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};
