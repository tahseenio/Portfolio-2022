import { motion } from 'framer-motion';

import Language from './ui/Language';
// all images found from icons8
import TypeScriptImg from '../assets/languages/typescript.webp';
import ReactImg from '../assets/languages/react.webp';
import JestImg from '../assets/languages/jest.webp';
import GitImg from '../assets/languages/git.webp';
import CypressImg from '../assets/languages/cypress.webp';
import NextjsImg from '../assets/languages/nextjs.webp';
import FramerImg from '../assets/languages/framer.svg';
import ExpressImg from '../assets/languages/express.webp';
import NodeImg from '../assets/languages/nodejs.webp';
import JSImg from '../assets/languages/JS.webp';
import HTMLImg from '../assets/languages/HTML.webp';
import CSSImg from '../assets/languages/CSS.webp';
import postgres from '../assets/languages/postgres.png';

interface languageProps {
  title: string;
  src: string;
  textColor: string;
  bgColor: string;
}

const LanguageContainer = () => {
  const languages: languageProps[] = [
    {
      title: 'TypeScript',
      src: TypeScriptImg,
      textColor: 'white',
      bgColor: '#1677C7',
    },
    {
      title: 'JavaScript',
      src: JSImg,
      textColor: '',
      bgColor: '#FFDF00',
    },
    {
      title: 'HTML',
      src: HTMLImg,
      textColor: 'white',
      bgColor: '#FC490B',
    },
    {
      title: 'CSS',
      src: CSSImg,
      textColor: 'white',
      bgColor: '#2195F2',
    },
    {
      title: 'React',
      src: ReactImg,
      textColor: 'white',
      bgColor: '#61DAFB',
    },
    {
      title: 'Next.js',
      src: NextjsImg,
      textColor: 'white',
      bgColor: 'black',
    },
    {
      title: 'Node.js',
      src: NodeImg,
      textColor: 'white',
      bgColor: '#4CAF50',
    },
    {
      title: 'Express.js',
      src: ExpressImg,
      textColor: 'white',
      bgColor: '#323232',
    },
    {
      title: 'Postgres',
      src: postgres,
      textColor: 'white',
      bgColor: '#0275B9',
    },
    {
      title: 'Git',
      src: GitImg,
      textColor: 'white',
      bgColor: '#DE4C36',
    },
    {
      title: 'Framer',
      src: FramerImg,
      textColor: 'white',
      bgColor: 'black',
    },

    {
      title: 'Cypress',
      src: CypressImg,
      textColor: 'white',
      bgColor: '#5c5c5e',
    },
    {
      title: 'Jest',
      src: JestImg,
      textColor: 'white',
      bgColor: '#99424F',
    },
  ];

  const variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { staggerChildren: 0.02 } },
  };

  const itemVariants = {
    initial: { opacity: 0, scale: 0, x: 100 },
    animate: { opacity: 1, scale: 1, x: 0 },
  };

  return (
    <motion.section
      className='language__container'
      variants={variants}
      initial='initial'
      whileInView='animate'
      viewport={{ once: true, amount: 0.1 }}
    >
      {languages.map(({ title, src, textColor, bgColor }) => (
        <Language
          key={title}
          variants={itemVariants}
          title={title}
          src={src}
          textColor={textColor}
          bgColor={bgColor}
        />
      ))}
    </motion.section>
  );
};

export default LanguageContainer;
