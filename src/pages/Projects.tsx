// TODO: on hover show languages used to create project

import { motion } from 'framer-motion';

import Project from '../components/Project';
import { usePortfolioContext } from '../context/PortfolioContext';
import { container, item } from '../variants';

import Notes from '../assets/notes_mockup.png';
import Discord from '../assets/discord_mockup.png';
import Library from '../assets/library_mockup.png';
import Mosque from '../assets/Mosque_mockup.png';
import TMDB from '../assets/TMDB_mockup.png';
import Treact from '../assets/treact_mockup.png';

const Projects = () => {
  const { setSelectedTab, ProjectsRef } = usePortfolioContext();

  const title = 'Projects';

  const projects = [
    {
      image: Notes,
      name: 'Notes',
      description: 'lorem ipsum',
      liveLink: 'http://notes-react-nine.vercel.app/',
      sourceLink: 'https://github.com/tahseenio/notes-react',
      languages: ['React', 'TypeScript'],
      config: {
        reverseColumnLayout: false,
        bgColor: '#EBEBEB',
      },
    },
    {
      image: Discord,
      name: 'Discord',
      description: 'lorem ipsum',
      liveLink: 'https://discord-clone-self-ten.vercel.app/',
      sourceLink: 'https://github.com/tahseenio/discord-clone',
      languages: ['React', 'TypeScript'],
      config: {
        reverseColumnLayout: true,
        bgColor: '#404EED',
      },
    },
    {
      image: Library,
      name: 'Library',
      description: 'lorem ipsum',
      liveLink: 'https://book-store-react-eta.vercel.app/',
      sourceLink: 'https://github.com/tahseenio/book-store-react',
      languages: ['React', 'TypeScript'],
      config: {
        reverseColumnLayout: false,
        bgColor: '#D8EBF0',
      },
    },
    {
      image: Mosque,
      name: 'Mosque',
      description: 'lorem ipsum',
      liveLink: 'https://madinamasjidwakefield.netlify.app/',
      sourceLink: 'https://github.com/Faizzy7867/Madina-Masjid-website',
      languages: ['HTML', 'CSS', 'JS'],
      config: {
        reverseColumnLayout: true,
        bgColor: '#0B6737',
      },
    },
    {
      image: TMDB,
      name: 'Movie Search',
      description: 'lorem ipsum',
      liveLink: 'https://movie-search-react-one.vercel.app/',
      sourceLink: 'https://github.com/tahseenio/movie-search-react',
      languages: ['React', 'TypeScript'],
      config: {
        reverseColumnLayout: false,
        bgColor: '#0D253F',
      },
    },
    {
      image: Treact,
      name: 'Treact Clone',
      description: 'lorem ipsum',
      liveLink: 'https://treact-clone.vercel.app/',
      sourceLink: 'https://github.com/tahseenio/treact-clone',
      languages: ['HTML', 'CSS'],
      config: {
        reverseColumnLayout: true,
        bgColor: '#691CFF',
      },
    },
    {
      image: Treact,
      name: 'LoginSignup',
      description: 'lorem ipsum',
      liveLink: 'http://login-signup-sable.vercel.app/',
      sourceLink: 'https://github.com/tahseenio/login-signup',
      languages: ['React', 'TypeScript'],
      config: {
        reverseColumnLayout: false,
        bgColor: '#1D2A32',
      },
    },
    {
      image: Treact,
      name: 'DECO1400 Project',
      description: 'lorem ipsum',
      liveLink: 'http://deco-1400-project.vercel.app/',
      sourceLink: 'https://github.com/tahseenio/DECO1400-project',
      languages: ['HTML', 'CSS', 'JS'],
      config: {
        reverseColumnLayout: true,
        bgColor: '#E54C61',
      },
    },
  ];

  return (
    <section className='container' ref={ProjectsRef}>
      <div className='row'>
        <motion.h1
          className='projects__title'
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
        <div className='projects'>
          <motion.div
            className='project--viewport-trigger'
            onViewportEnter={() => setSelectedTab('Projects')}
          ></motion.div>
          {projects.map((item, id) => (
            <Project
              key={id}
              image={item.image}
              title={item.name}
              description={item.description}
              liveLink={item.liveLink}
              sourceLink={item.sourceLink}
              reverseColumnLayout={item.config.reverseColumnLayout}
              bgColor={item.config.bgColor}
              languages={item.languages}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
