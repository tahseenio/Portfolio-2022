// TODO:Maybe use react-hook-forms?
// TODO:What will the contact form include?
// TODO:Get a UI design
// TODO: Use emailjs

import { motion } from 'framer-motion';
import ContactBackground from '../assets/home.jpg';
import useParallax from '../hooks/useParallax';
import useScroll from '../hooks/useScroll';
import { parallaxBGVariants, parallaxTextWrapperVariants } from '../variants';

const Contact = () => {
  const { backgroundAnimation, TextAnimation, handleMouseMove } = useParallax();

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
            className='parallax-background-image'
            style={{ scale: scale }}
            src={ContactBackground}
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
          <motion.div className='contact__title' animate={TextAnimation}>
            Contact
          </motion.div>
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

export default Contact;
