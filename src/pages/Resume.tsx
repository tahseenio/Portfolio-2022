// TODO: add skeleton loader for resume
// TODO: style download buttons
// TODO: animate the fade in of the buttons and make the transition from page to page smoother.

import { Viewer, Worker } from '@react-pdf-viewer/core';
import { motion } from 'framer-motion';
import '@react-pdf-viewer/core/lib/styles/index.css';
import useScroll from '../hooks/useScroll';
import useParallax from '../hooks/useParallax';

import { parallaxBGVariants, parallaxTextWrapperVariants } from '../variants';
import myResume from '../assets/Resume_Tahseen_Islam.pdf';
import ResumeBackground from '../assets/home.jpg';

const Resume = () => {
  const resumeVariant = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { delay: 0.4 } },
    exit: { opacity: 0 },
  };

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
            src={ResumeBackground}
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
          <motion.div className='resume__title' animate={TextAnimation}>
            Resume
          </motion.div>
        </motion.div>
      </div>
      <div className='container'>
        <div className='row'>
          <motion.section
            variants={resumeVariant}
            initial={'initial'}
            animate={'animate'}
            exit={'exit'}
            className='resume__container'
          >
            <a href={myResume} download>
              Download Resume
            </a>
            <Worker workerUrl='https://unpkg.com/pdfjs-dist@2.14.305/build/pdf.worker.min.js'>
              <Viewer
                fileUrl={myResume}
                // renderLoader={(percentages) => (
                //   <ProgressBar progress={Math.round(percentages)} />
                // )}
              />
            </Worker>
            <a href={myResume} download>
              Download Resume
            </a>
          </motion.section>
        </div>
      </div>
    </section>
  );
};

export default Resume;
