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
import LoginSignup from '../assets/login_signup_mockup.png';
import FoodCart from '../assets/food_cart_mockup.png';

const Projects = () => {
  const { setSelectedTab, ProjectsRef } = usePortfolioContext();

  const title = 'Projects';

  const projects = [
    {
      image: TMDB,
      name: 'Movie Search',
      description: `Created a movie search website, using ReactJS, HTML5, CSS3 and JavaScript, that fetches from “The Movie Database” API to find movies requested by the user.`,
      liveLink: 'https://movie-search-react-one.vercel.app/',
      sourceLink: 'https://github.com/tahseenio/movie-search-react',
      languages: ['React', 'TypeScript', 'Cypress'],
      config: {
        bgColor: '#0D253F',
        txtColor: 'white',
      },
    },
    {
      image: Notes,
      name: 'Notes',
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
      liveLink: 'http://notes-react-nine.vercel.app/',
      sourceLink: 'https://github.com/tahseenio/notes-react',
      languages: ['React', 'TypeScript'],
      config: {
        bgColor: '#EBEBEB',
        txtColor: 'black',
      },
    },
    {
      image: Library,
      name: 'Library',
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
      liveLink: 'https://book-store-react-eta.vercel.app/',
      sourceLink: 'https://github.com/tahseenio/book-store-react',
      languages: ['React', 'TypeScript'],
      config: {
        bgColor: '#D8EBF0',
        txtColor: 'black',
      },
    },
    {
      image: Discord,
      name: 'Discord',
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
      liveLink: 'https://discord-clone-self-ten.vercel.app/',
      sourceLink: 'https://github.com/tahseenio/discord-clone',
      languages: ['React', 'TypeScript'],
      config: {
        bgColor: '#404EED',
        txtColor: 'white',
      },
    },
    {
      image: Mosque,
      name: 'Mosque',
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
      liveLink: 'https://madinamasjidwakefield.netlify.app/',
      sourceLink: 'https://github.com/Faizzy7867/Madina-Masjid-website',
      languages: ['HTML', 'CSS', 'JS'],
      config: {
        bgColor: '#0B6737',
        txtColor: 'white',
      },
    },
    {
      image: LoginSignup,
      name: 'Login Signup (WIP)',
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
      liveLink: 'http://login-signup-sable.vercel.app/',
      sourceLink: 'https://github.com/tahseenio/login-signup',
      languages: ['React', 'Firebase'],
      config: {
        bgColor: '#1D2A32',
        txtColor: 'white',
      },
    },
    {
      image: FoodCart,
      name: 'Food Cart',
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
      liveLink: 'http://deco-1400-project.vercel.app/',
      sourceLink: 'https://github.com/tahseenio/DECO1400-project',
      languages: ['HTML', 'CSS', 'JS'],
      config: {
        bgColor: '#E54C61',
        txtColor: 'white',
      },
    },
    {
      image: Treact,
      name: 'Treact Clone',
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
      liveLink: 'https://treact-clone.vercel.app/',
      sourceLink: 'https://github.com/tahseenio/treact-clone',
      languages: ['HTML', 'CSS'],
      config: {
        bgColor: '#691CFF',
        txtColor: 'white',
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
          viewport={{ amount: 0.65, once: true }}
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
              bgColor={item.config.bgColor}
              txtColor={item.config.txtColor}
              languages={item.languages}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
