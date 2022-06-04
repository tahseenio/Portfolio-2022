// TODO: add skeleton loader for resume
// TODO: style buttons

import { Viewer, Worker } from '@react-pdf-viewer/core';

import '@react-pdf-viewer/core/lib/styles/index.css';
import { motion } from 'framer-motion';
import myResume from '../assets/Resume_Tahseen_Islam.pdf';

const Resume = () => {
  const resumeVariant = {
    initial: { opacity: 0, y: '-100vh' },
    animate: { opacity: 1, y: '0' },
    exit: { opacity: 0, y: '-200vh' },
  };

  return (
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
  );
};

export default Resume;
