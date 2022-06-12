import { motion } from 'framer-motion';

import Language from './ui/Language';

// TODO: add all languages

// TODO: whileInViewport start animation

const LanguageContainer = () => {
  const languages = [
    {
      title: 'JavaScript',
      src: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
      textColor: 'rgb(245, 222, 25)',
    },
    {
      title: 'TypeScript',
      src: 'https://cdn-icons-png.flaticon.com/512/5968/5968381.png',
      textColor: 'rgb(45, 121, 199)',
    },
    {
      title: 'JavaScript',
      src: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
      textColor: 'white',
    },
    {
      title: 'JavaScript',
      src: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
      textColor: 'white',
    },
    {
      title: 'JavaScript',
      src: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
      textColor: 'white',
    },
  ];

  // .text-color--html {
  //   color: rgb(240, 101, 41);
  // }
  // .text-color--css {
  //   color: rgb(79, 129, 243);
  // }
  // .text-color--js {
  //   color: rgb(245, 222, 25);
  // }
  // .text-color--react {
  //   color: rgb(124, 197, 217);
  // }
  // .text-color--ts {
  //   color: rgb(45, 121, 199);
  // }

  // .text-color--jest {
  //   color: #99424f;
  // }
  // .text-color--cypress {
  //   color: #5c5c5e;
  // }

  // .text-color--sass {
  //   color: #f06493;
  // }

  const variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };

  return (
    <motion.section
      className='language__container'
      variants={variants}
      initial='initial'
      animate='animate'
    >
      {languages.map(({ title, src, textColor }) => (
        <Language
          variants={itemVariants}
          title={title}
          src={src}
          textColor={textColor}
        />
      ))}
    </motion.section>
  );
};

export default LanguageContainer;
