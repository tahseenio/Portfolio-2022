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

import AboutBackground from '../assets/about.jpg';
import LanguageContainer from '../components/LanguageContainer';
import SkeletonLoader from '../components/ui/SkeletonLoader';
import { usePortfolioContext } from '../context/PortfolioContext';
import useParallax from '../hooks/useParallax';
import useScroll from '../hooks/useScroll';
import { parallaxBGVariants, parallaxTextWrapperVariants } from '../variants';

const About = () => {
  const { backgroundAnimation, TextAnimation, handleMouseMove } = useParallax();

  const { scrollYProgress } = useViewportScroll();
  const yRange = useTransform(scrollYProgress, [0, 1], [0, -1600]);
  const yRangeSpring = useSpring(yRange, { stiffness: 400, damping: 90 });
  const [XInt, setXInt] = useState(0);

  useEffect(() => yRangeSpring.onChange((v) => setXInt(v)), [yRangeSpring]);

  // const xMovement = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const [loaded, setLoaded] = useState(false);

  // img zoom in on scroll down
  // const { scale } = useScroll();

  const { setSelectedTab, AboutRef } = usePortfolioContext();

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

  const title = 'About';

  return (
    <section className='container' ref={AboutRef}>
      <div className='row'>
        <motion.h1
          className='about__title'
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
        <motion.p
          className='about__para'
          onViewportEnter={() => setSelectedTab('About')}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam
          placeat autem veritatis labore? Voluptate quo unde modi maxime quod
          sapiente sit eius asperiores sed velit itaque architecto inventore
          nesciunt officiis, repudiandae, expedita minus quidem veniam officia
          repellendus deserunt. Deleniti labore harum suscipit hic temporibus
          rerum repellendus iure enim minima, explicabo quos blanditiis aperiam
          aliquid consequatur laudantium dicta. Sit nesciunt provident ipsum
          nihil consectetur laborum beatae nisi eius obcaecati unde rerum culpa
          alias ipsam corrupti aliquid, deserunt esse excepturi, dolores
          veritatis amet voluptatibus. Corrupti error, possimus dolore tenetur
          animi laborum quaerat! Fuga dignissimos blanditiis error molestias
          modi natus ea, aliquid at.
        </motion.p>
        <motion.h1
          className='about__title--tech'
          initial={{}}
          animate={{
            x: XInt - 1000,
            transition: { duration: 0.05, ease: 'linear' },
          }}
        >
          Tech Stack - Tech Stack - Tech Stack - Tech Stack - Tech Stack - Tech
          Stack - Tech Stack - Tech Stack - Tech Stack - Tech Stack - Tech Stack
          - Tech Stack - Tech Stack - Tech Stack
        </motion.h1>
        <LanguageContainer />
      </div>
    </section>
  );
};

export default About;
