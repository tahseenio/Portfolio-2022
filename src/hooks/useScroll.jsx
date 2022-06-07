import { useTransform, useViewportScroll } from 'framer-motion';

const useScroll = () => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  return { scale };
};

export default useScroll;
