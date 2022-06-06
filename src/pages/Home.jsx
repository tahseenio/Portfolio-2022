// TODO: what should landing page include?
// TODO: add loading state
// TODO: make all images .webp to load faster

// MOTION
// TODO: add a parallax effect for my name and a background image
// TODO: add a scroll effect with a slight bounce effect similar to apples UI
// TODO: add stagger effecto text
// TODO: finalise the handleMouseMove and all motion variants and make it exportable to minimise code repetition

import { motion, useAnimation } from 'framer-motion';
import HomeBackground from '../assets/home.webp';

const Home = () => {
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

  const textVariants = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
  };

  const wrapperVariants = {
    initial: { transition: { staggerChildren: 0.1, staggerDirection: -1 } },
    animate: { transition: { staggerChildren: 0.1, staggerDirection: 1 } },
  };

  return (
    <>
      <main className='home__container' onMouseMove={(e) => handleMouseMove(e)}>
        <motion.figure
          className='background-image--wrapper'
          initial={{ y: '-100vh' }}
          animate={{ y: 0 }}
          exit={{ y: '-150vh', transition: { duration: 0.3 } }}
        >
          <motion.img
            className='background-image'
            src={HomeBackground}
            animate={backgroundAnimation}
            alt=''
          />
        </motion.figure>
        <motion.div
          className='home__info--wrapper'
          variants={wrapperVariants}
          initial='initial'
          animate='animate'
          exit='initial'
        >
          <motion.div variants={textVariants} exit={{ opacity: 0, x: 100 }}>
            <motion.div className='home__title' animate={TextAnimation}>
              Tahseen Islam
            </motion.div>
          </motion.div>
          <motion.div variants={textVariants} exit={{ opacity: 0, x: 100 }}>
            <motion.div className='home__title' animate={TextAnimation}>
              I am a developer
            </motion.div>
          </motion.div>
        </motion.div>
      </main>
    </>
  );
};

export default Home;
