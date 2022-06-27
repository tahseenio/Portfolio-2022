import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaLinkedin } from 'react-icons/fa';
import { BsGithub, BsFileEarmarkPdf } from 'react-icons/bs';

import Floater from '../components/Floater';
import HomeBackground from '../assets/home.webp';
import HomeNight from '../assets/homeNight.webp';
import HomeNightMobile from '../assets/homeNightMobile.webp';
import {
  HomeBackgroundVariants,
  textVariants,
  wrapperVariants,
} from '../variants';
import { usePortfolioContext } from '../context/PortfolioContext';

const Landing = () => {
  const backgroundAnimation = useAnimation();
  const TextAnimation = useAnimation();

  const handleMouseMove = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const { clientX, clientY } = e;
    const moveX = clientX - window.innerWidth / 2;
    const moveY = clientY - window.innerHeight / 2;
    const offsetFactor = 15;
    const TextOffsetFactor = 100;

    backgroundAnimation.start({
      x: moveX / offsetFactor,
      y: moveY / offsetFactor,
    });
    TextAnimation.start({
      x: -moveX / TextOffsetFactor,
      y: -moveY / TextOffsetFactor,
    });
  };

  // dark mode check
  const { isDark, setSelectedTab, HomeRef, ResumeRef } = usePortfolioContext();

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
    <main
      className='home__container'
      onMouseMove={(e) => handleMouseMove(e)}
      ref={HomeRef}
    >
      <Floater
        icon={<BsGithub />}
        link={'https://github.com/tahseenio/'}
        left={'20%'}
        top={'25%'}
        delay={2}
        color={'black'}
        animationDelay={'2.2s'}
      />
      <Floater
        icon={<FaLinkedin />}
        link={'https://www.linkedin.com/in/tahseen1/'}
        left={'-20%'}
        delay={2.2}
        top={'30%'}
        animationDelay={'2.5s'}
      />
      <Floater
        icon={<BsFileEarmarkPdf />}
        left={'10%'}
        top={'-20%'}
        color={'black'}
        delay={2.4}
        animationDelay={'3s'}
        onClick={() => {
          ResumeRef?.current!.scrollIntoView();
        }}
      />
      <motion.div
        className='secret'
        onViewportEnter={() => setSelectedTab('Home')}
      >
        {' '}
      </motion.div>
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
  );
};

export default Landing;
