// TODO: add a profile summary
// TODO: add links to github, resume, linkedin
// TODO: add github contrbutions table
// TODO: add tech stack
// TODO: make shimmer look better
// BUG: page scrolls on image load

// MOTION
// TODO: parallax background zooms in as you scroll down and then fades away

import {
  motion,
  useSpring,
  useTransform,
  useViewportScroll,
} from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

import LanguageContainer from '../components/LanguageContainer';
import Project from '../components/Project';
import SkeletonLoader from '../components/ui/SkeletonLoader';
import { usePortfolioContext } from '../context/PortfolioContext';
import useParallax from '../hooks/useParallax';
import useScroll from '../hooks/useScroll';
import { parallaxBGVariants, parallaxTextWrapperVariants } from '../variants';

import AboutBackground from '../assets/notes_mockup.png';

const Projects = () => {
  const { scrollYProgress } = useViewportScroll();
  const yRange = useTransform(scrollYProgress, [0, 1], [0, -1600]);
  const yRangeSpring = useSpring(yRange, { stiffness: 400, damping: 90 });
  const [XInt, setXInt] = useState(0);

  useEffect(() => yRangeSpring.onChange((v) => setXInt(v)), [yRangeSpring]);

  // const xMovement = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const [loaded, setLoaded] = useState(false);

  // img zoom in on scroll down
  // const { scale } = useScroll();

  const { setSelectedTab, ProjectsRef } = usePortfolioContext();

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const item = {
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

  const title = 'Projects';

  return (
    <section className='container' ref={ProjectsRef}>
      <div className='row'>
        <motion.h1
          className='projects__title'
          variants={container}
          initial='hidden'
          whileInView='visible'
          viewport={{ amount: 0.8, once: true }}
        >
          {title.split('').map((letter, index) => (
            <motion.span
              key={index}
              variants={item}
              style={{
                display: 'inline-block',
              }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.h1>
        <div className='projects'>
          <motion.div
            className='project--viewport-trigger'
            onViewportEnter={() => setSelectedTab('Projects')}
          ></motion.div>
          <Project image={AboutBackground} bgColor={'lightblue'} />
          <Project
            image={AboutBackground}
            reverseColumnLayout={true}
            bgColor={'lightblue'}
          />
          <Project image={AboutBackground} bgColor={'lightblue'} />
          <Project
            image={AboutBackground}
            reverseColumnLayout={true}
            bgColor={'lightblue'}
          />
          <Project image={AboutBackground} bgColor={'lightblue'} />
        </div>
      </div>
    </section>
  );
};

export default Projects;
