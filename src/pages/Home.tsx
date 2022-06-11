//OTHER PAGES
// TODO: make all images .webp and optimize images (use different smaller image for mobile) for mobile to load faster
// TODO: add a scroll effect with a slight bounce effect similar to apples UI

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import HomeBackground from '../assets/home.webp';
import HomeNight from '../assets/homeNight.webp';
import HomeNightMobile from '../assets/homeNightMobile.webp';
import { usePortfolioContext } from '../context/PortfolioContext';
import useParallax from '../hooks/useParallax';
import {
  HomeBackgroundVariants,
  textVariants,
  wrapperVariants,
} from '../variants';

<link rel='preload' as='image' href={HomeNightMobile}></link>;

const Home = () => {
  const { backgroundAnimation, TextAnimation, handleMouseMove } = useParallax();

  // dark mode check
  const { isDark } = usePortfolioContext();

  const [HomeBackgroundImage, setHomeBackgroundImage] = useState('');
  useEffect(() => {
    if (window.innerWidth < 500) {
      console.log('did this');
      if (isDark) {
        setHomeBackgroundImage(HomeNightMobile);
        return;
      } else {
        setHomeBackgroundImage(HomeBackground);
        return;
      }
    }

    if (isDark) {
      setHomeBackgroundImage(HomeNight);
    } else {
      setHomeBackgroundImage(HomeBackground);
    }
  }, [isDark]);

  return (
    <>
      <main className='home__container' onMouseMove={(e) => handleMouseMove(e)}>
        <motion.figure
          className='background-image--wrapper'
          variants={HomeBackgroundVariants}
          initial='initial'
          animate='animate'
          exit='exit'
        >
          <motion.img
            className='background-image'
            alt='background image'
            decoding='async'
            src={HomeBackgroundImage}
            animate={backgroundAnimation}
          />
        </motion.figure>
        <motion.div
          className='home__info--wrapper'
          variants={wrapperVariants}
          initial='initial'
          animate='animate'
          exit='exit'
        >
          <motion.div variants={textVariants} exit={{ opacity: 0 }}>
            <motion.div className='home__title' animate={TextAnimation}>
              Tahseen Islam
            </motion.div>
          </motion.div>
          <motion.div variants={textVariants} exit={{ opacity: 0 }}>
            <motion.div className='home__description' animate={TextAnimation}>
              Frontend Developer
            </motion.div>
          </motion.div>
        </motion.div>
      </main>
    </>
  );
};

export default Home;
