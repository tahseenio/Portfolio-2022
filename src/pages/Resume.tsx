import { Viewer, Worker } from '@react-pdf-viewer/core';
import { motion } from 'framer-motion';
import '@react-pdf-viewer/core/lib/styles/index.css';

import { usePortfolioContext } from '../context/PortfolioContext';
import { container, item } from '../variants';
import myResume from '../assets/Resume_Tahseen_Islam.pdf';
import { ImArrowRight2 } from 'react-icons/im';

const Resume = () => {
  const { setSelectedTab, ResumeRef } = usePortfolioContext();

  const title = 'Resume';

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
            Download <ImArrowRight2 className='downloadBtn-arrow' />
          </motion.a>
          <section className='pdf--wrapper'>
            <Worker workerUrl='https://unpkg.com/pdfjs-dist@2.14.305/build/pdf.worker.min.js'>
              <Viewer fileUrl={myResume} />
            </Worker>
          </section>
          <a className='pdfDownloadBtn' href={myResume} download>
            Download <ImArrowRight2 className='downloadBtn-arrow' />
          </a>
          <img src="http://gg.gg/13gmy0" alt="analytics" />
        </div>
      </div>
    </section>
  );
};

export default Resume;
