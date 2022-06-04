// TODO: figure out how to generate resume this based on reading my current pdf.

import { Document, Page } from 'react-pdf';

const url = 'something';

const Resume = () => {
  return (
    <section className='container'>
      <div className='row'>
        <Document file={url}>
          <Page pageNumber={1} />
        </Document>
      </div>
    </section>
  );
};

export default Resume;
