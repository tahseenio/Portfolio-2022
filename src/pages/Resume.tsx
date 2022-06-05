// TODO: add skeleton loader for resume
// TODO: style buttons

import { Viewer, Worker } from '@react-pdf-viewer/core';

import '@react-pdf-viewer/core/lib/styles/index.css';
import { motion, useAnimation } from 'framer-motion';
import myResume from '../assets/Resume_Tahseen_Islam.pdf';
import HomeBackground from '../assets/home.webp';

const Resume = () => {
  const resumeVariant = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { delay: 0.4 } },
    exit: { opacity: 0 },
  };

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
            src={HomeBackground}
            animate={backgroundAnimation}
            alt=''
          />
        </motion.figure>
        <motion.div className='parallax__info--wrapper'>
          <motion.div animate={TextAnimation}>Resume</motion.div>
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
