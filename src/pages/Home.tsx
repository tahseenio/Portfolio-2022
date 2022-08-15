import { lazy } from 'react';

import About from './About';
import Contact from './Contact';
import FetchMdx from './FetchMdx';
import Landing from './Landing';
import Projects from './Projects';
const Resume = lazy(() => import('./Resume'));

const Home = () => {
  return (
    <>
      <Landing />
      {/* <FetchMdx /> */}
      <About />
      <Projects />
      <Resume />
      <Contact />
    </>
  );
};

export default Home;
