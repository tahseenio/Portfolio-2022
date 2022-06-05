// TODO: what should landing page include?
// TODO: add loading state

// MOTION
// TODO: add a parallax effect for my name and a background image
// TODO: add a scroll effect with a slight bounce effect similar to apples UI
// ANIMATION SHARED LAYOUT

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import HomeBackground from '../assets/home.webp';

const Home = () => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, []);

  const backgroundAnimation = useAnimation();
  const TextAnimation = useAnimation();

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const moveX = clientX - window.innerWidth / 2;
    const moveY = clientY - window.innerHeight / 2;
    const offsetFactor = 15;
    const TextOffsetFactor = 50;
    backgroundAnimation.start({
      x: moveX / offsetFactor,
      y: moveY / offsetFactor,
    });
    TextAnimation.start({
      x: -moveX / TextOffsetFactor,
      y: -moveY / TextOffsetFactor,
    });
  };
  return (
    <main className='home__container' onMouseMove={(e) => handleMouseMove(e)}>
      <motion.img
        className='background-image'
        src={HomeBackground}
        animate={backgroundAnimation}
        alt=''
      />
      <motion.h1 className='home__title' animate={TextAnimation}>
        Tahseen Islam
      </motion.h1>
    </main>
  );
};

export default Home;
