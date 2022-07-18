import { lazy } from 'react';

import About from './About';
import Contact from './Contact';
import Landing from './Landing';
import Projects from './Projects';
const Resume = lazy(() => import('./Resume'));

const Home = () => {
  return (
    <>
      <Landing />
      <About />
      <Projects />
      <Resume />
      <Contact />
    </>
  );
};

export default Home;
