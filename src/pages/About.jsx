// TODO: add a profile summary
// TODO: add links to github, resume, linkedin
// TODO: add github contrbutions table
// TODO:
// TODO: add tech stack

import { useAnimation, motion } from 'framer-motion';

import AboutBackground from '../assets/about.jpg';

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
            className='parallax-background-image'
            src={AboutBackground}
            animate={backgroundAnimation}
            alt=''
          />
        </motion.figure>
        <motion.div className='parallax__info--wrapper'>
          <motion.div animate={TextAnimation}>About</motion.div>
        </motion.div>
      </div>
      <div className='container'>
        <div className='row'>
          <h1>Contact stuff here</h1>
        </div>
      </div>
    </section>
  );
};

export default About;
