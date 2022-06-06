// TODO: add a profile summary
// TODO: add links to github, resume, linkedin
// TODO: add github contrbutions table
// TODO: add tech stack
// BUG: page scrolls on image load

// MOTION
// TODO: parallax background zooms in as you scroll down and then fades away

import {
  useAnimation,
  motion,
  useViewportScroll,
  useTransform,
} from 'framer-motion';
import { useState } from 'react';

import AboutBackground from '../assets/about.jpg';
import SkeletonLoader from '../components/ui/SkeletonLoader';

const About = () => {
  const backgroundAnimation = useAnimation();
  const TextAnimation = useAnimation();

  const handleMouseMove = (e) => {
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

  // github img shimmer loader
  const [loaded, setLoaded] = useState(false);

  // img zoom in on scroll down
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section onMouseMove={(e) => handleMouseMove(e)}>
      <div className='parallax--wrapper'>
        <motion.figure
          className='parallax-background-image--wrapper'
          initial={{ y: '-100vh' }}
          animate={{ y: 0 }}
          exit={{ y: '-100vh', transition: { duration: 0.3 } }}
        >
          <motion.img
            style={{ scale: scale, opacity: opacity }}
            className='parallax-background-image'
            src={AboutBackground}
            animate={backgroundAnimation}
            alt=''
          />
        </motion.figure>
        <motion.div className='parallax__info--wrapper'>
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
