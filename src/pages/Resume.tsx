// TODO: figure out how to generate resume this based on reading my current pdf.

import { Viewer, Worker } from '@react-pdf-viewer/core';

import '@react-pdf-viewer/core/lib/styles/index.css';

import myResume from '../assets/Resume_Tahseen_Islam.pdf';

const Resume = () => {
  return (
    <div className='container'>
      <div className='row'>
        <section className='resume__container'>
          <Worker workerUrl='https://unpkg.com/pdfjs-dist@2.14.305/build/pdf.worker.min.js'>
            <Viewer fileUrl={myResume} />;
          </Worker>
        </section>
      </div>
    </div>
  );
};

export default Resume;
