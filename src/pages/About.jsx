// TODO: add a profile summary
// TODO: add links to github, resume, linkedin
// TODO: add github contrbutions table
// TODO: add tech stack
// TODO: make shimmer look better
// BUG: page scrolls on image load

// MOTION
// TODO: parallax background zooms in as you scroll down and then fades away

import { motion } from 'framer-motion';
import { useState } from 'react';

import AboutBackground from '../assets/about.jpg';
import SkeletonLoader from '../components/ui/SkeletonLoader';
import useParallax from '../hooks/useParallax';
import useScroll from '../hooks/useScroll';
import { parallaxBGVariants, parallaxTextWrapperVariants } from '../variants';

const About = () => {
  const { backgroundAnimation, TextAnimation, handleMouseMove } = useParallax();

  // github img shimmer loader
  const [loaded, setLoaded] = useState(false);

  // img zoom in on scroll down
  const { scale } = useScroll();

  return (
    <section onMouseMove={(e) => handleMouseMove(e)}>
      <div className='parallax--wrapper'>
        <motion.figure
          className='parallax-background-image--wrapper'
          variants={parallaxBGVariants}
          initial='initial'
          animate='animate'
          exit='initial'
        >
          <motion.img
            style={{ scale: scale }}
            className='parallax-background-image'
            src={AboutBackground}
            animate={backgroundAnimation}
            alt=''
          />
        </motion.figure>
        <motion.div
          className='parallax__info--wrapper'
          variants={parallaxTextWrapperVariants}
          initial='initial'
          animate='animate'
          exit='exit'
        >
          <motion.div className='about__title' animate={TextAnimation}>
            About
          </motion.div>
        </motion.div>
      </div>
      <div className='container'>
        <div className='row'>
          <h1>About stuff here</h1>
          <div className='gh-image--wrapper'>
            {!loaded ? <SkeletonLoader /> : null}
            <img
              className='gh-chart'
              src='http://ghchart.rshah.org/tahseenio'
              alt="tahseenio's Github chart"
              onLoad={() => setLoaded(true)}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
