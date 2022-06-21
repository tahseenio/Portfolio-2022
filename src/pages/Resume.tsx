// TODO: add skeleton loader for resume
// TODO: style download buttons
// TODO: animate the fade in of the buttons and make the transition from page to page smoother.

import { Viewer, Worker } from '@react-pdf-viewer/core';
import { motion } from 'framer-motion';
import '@react-pdf-viewer/core/lib/styles/index.css';

import { ImArrowRight2 } from 'react-icons/im';
import myResume from '../assets/Resume_Tahseen_Islam.pdf';
import { usePortfolioContext } from '../context/PortfolioContext';

const Resume = () => {
  const { setSelectedTab, ResumeRef } = usePortfolioContext();

  const title = 'Resume';

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

  return (
    <section className='container' ref={ResumeRef}>
      <div className='row'>
        <div className='resume__container'>
          <motion.h1
            className='resume__title'
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
          <motion.a
            className='pdfDownloadBtn'
            onViewportEnter={() => setSelectedTab('Resume')}
            href={myResume}
            download
          >
            Download Resume <ImArrowRight2 className='downloadBtn-arrow' />
          </motion.a>
          <section className='pdf--wrapper'>
            <Worker workerUrl='https://unpkg.com/pdfjs-dist@2.14.305/build/pdf.worker.min.js'>
              <Viewer fileUrl={myResume} />
            </Worker>
          </section>
          <a className='pdfDownloadBtn' href={myResume} download>
            Download Resume <ImArrowRight2 className='downloadBtn-arrow' />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
