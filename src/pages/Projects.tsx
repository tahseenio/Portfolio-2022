import { motion } from 'framer-motion';

import Project from '../components/Project';
import { usePortfolioContext } from '../context/PortfolioContext';
import { container, item } from '../variants';

import Notes from '../assets/notes_mockup.webp';
import Discord from '../assets/discord_mockup.webp';
import Library from '../assets/library_mockup.webp';
import Mosque from '../assets/Mosque_mockup.webp';
import TMDB from '../assets/TMDB_mockup.webp';
import Treact from '../assets/treact_mockup.webp';
import LoginSignup from '../assets/login_signup_mockup.webp';
import FoodCart from '../assets/food_cart_mockup.webp';
import VRChat from '../assets/vrchat_mockup.webp';

const Projects = () => {
  const { setSelectedTab, ProjectsRef } = usePortfolioContext();

  const title = 'Projects';

  const projects = [
    {
      image: TMDB,
      name: 'Movie Search',
      description: `Search for any movie with the ability to filter by popular, trending or top rated movies if you are not sure what movies are good to watch. Consumes the TMDB API using Axios and loads all movie information with skeleton loading. End to end testing completed with Cypress to ensure web app is functional.`,
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
      name: 'Notes App',
      description: `A simple notes app where you can create, edit, and delete notes. In this project I learned TypeScript and Context API as a global state management. Framer motion was used to create smooth animations of notes shifting and being deleted.`,
      liveLink: 'http://notes-react-nine.vercel.app/',
      sourceLink: 'https://github.com/tahseenio/notes-react',
      languages: ['React', 'TypeScript', 'Framer Motion'],
      config: {
        bgColor: '#EBEBEB',
        txtColor: 'black',
      },
    },
    {
      image: LoginSignup,
      name: 'Login Signup',
      description: `A sleek login and signup system where users are able to create a new account or log in with a previous email or using a google account. The form was created using react-hook-forms and yup was used to handle error handling and input validation. All animations were created using Framer Motion such as exit animations to different pages. Context API along with Firebase and Firestore was used for user authentication and user date storage.
      
      Demo email: demo@demo.com 
      Demo password: demo1234`,
      liveLink: 'http://login-signup-sable.vercel.app/',
      sourceLink: 'https://github.com/tahseenio/login-signup',
      languages: ['React', 'TypeScript', 'Firebase', 'Framer Motion'],
      config: {
        bgColor: '#1D2A32',
        txtColor: 'white',
      },
    },
    {
      image: VRChat,
      name: 'VRChat Notes Extension',
      description: `This extension allows users to take notes of new friends they have made in VRChat on the official VRChat website. It utilizes Chrome's Manifest v3 to inject a responsive HTML Element that re-renders if you switch to a different users profile.`,
      liveLink: '',
      sourceLink: 'https://github.com/tahseenio/vrchat-notes-chrome-extension',
      languages: ['JavaScript'],
      config: {
        bgColor: '#0E1013',
        txtColor: 'white',
      },
    },
    {
      image: Library,
      name: 'Book Store',
      description: `A book store where you can find popular discounted books and purchase them. Features skeleton loading for a better user experience, use of React router and useParams to create dynamic pages which show detailed descriptions of any book.`,
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
      name: 'Discord Clone',
      description: `A partial clone of the official Discord's landing page and downloads page. Learned to create responsive CSS grid layouts from this project and create reusable React components for efficient and consistent code. `,
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
      name: 'Wakefield Mosque',
      description: `A religious website created for the Muslim community in Wakefield, UK. Built with two other web developers in less than a few weeks. I was tasked with creating the daily prayer timetable and monthly timetable page which consisted of creating a JSON of all prayer times throughout the year and displaying is using the map method. The current day is highlighted and is determined during the mapping process.`,
      liveLink: 'https://madinamasjidwakefield.netlify.app/',
      sourceLink: 'https://github.com/Faizzy7867/Madina-Masjid-website',
      languages: ['HTML', 'CSS', 'JavaScript'],
      config: {
        bgColor: '#0B6737',
        txtColor: 'white',
      },
    },
    {
      image: FoodCart,
      name: 'Food Cart',
      description: `Find unique food carts all throughout Brisbane such as Korean, African, Turkish cuisines and many more! Consumes data from the Brisbane City Council API and displayed in a user-friendly UI design. Utilises crucial Javascript methods such as map and filter to search and filter food items and utilises localStorage to provide detailed information of any food cart.`,
      liveLink: 'http://deco-1400-project.vercel.app/',
      sourceLink: 'https://github.com/tahseenio/DECO1400-project',
      languages: ['HTML', 'CSS', 'JavaScript'],
      config: {
        bgColor: '#E54C61',
        txtColor: 'white',
      },
    },
    {
      image: Treact,
      name: 'Treact Clone',
      description: `A Treact template clone created following best practices such as using semantic HTML and CSS BEM (Block Element Modifier). Important key concepts for CSS were learned during the creation of the website such as flexbox, positioning elements, CSS selectors, pseudo-classes and pseudo-elements.  Swift animations on scroll are created using the AOS library. Responsiveness was ensured using media queries.`,
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
