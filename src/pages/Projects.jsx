import { motion } from 'framer-motion';
import ProjectBackground from '../assets/projects.jpg';
import { usePortfolioContext } from '../context/PortfolioContext';
import useParallax from '../hooks/useParallax';
import useScroll from '../hooks/useScroll';
import { parallaxBGVariants, parallaxTextWrapperVariants } from '../variants';

const Projects = () => {
  const { backgroundAnimation, TextAnimation, handleMouseMove } = useParallax();

  const { scale } = useScroll();

  const { setSelectedTab, ProjectsRef } = usePortfolioContext();

  return (
    <section
      id='projects'
      onMouseMove={(e) => handleMouseMove(e)}
      ref={ProjectsRef}
    >
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
            src={ProjectBackground}
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
          <motion.div
            className='projects__title'
            animate={TextAnimation}
            onViewportEnter={() => setSelectedTab('Projects')}
          >
            Projects
          </motion.div>
        </motion.div>
      </div>
      <div className='container'>
        <div className='row'>
          <h1>project stuff here</h1>
        </div>
      </div>
    </section>
  );
};

export default Projects;
