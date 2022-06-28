import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface Props {
  image: string;
  bgColor: string;
  txtColor: string;
  title: string;
  description: string;
  liveLink: string;
  sourceLink: string;
  languages: string[];
}

const Project = ({
  image,
  bgColor,
  title,
  description,
  liveLink,
  sourceLink,
  languages,
  txtColor,
}: Props) => {
  const projectVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  const projectDescription = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  const [isHovering, setIsHovering] = useState<boolean>(false);

  const staggerLanguages = {
    hidden: {
      transition: {
        staggerChildren: 0.1,
        staggerDirection: 1,
      },
    },
    visible: {
      transition: {
        staggerChildren: 0.15,
        staggerDirection: 1,
      },
    },
  };

  const language = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
  };

  const smallScreen = window.innerWidth;

  return (
    <motion.div
      className='project'
      variants={projectVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 500 > smallScreen ? 0.1 : 0.8 }}
      onHoverStart={() => setIsHovering(true)}
      onHoverEnd={() => setIsHovering(false)}
    >
      <AnimatePresence>
        {isHovering ? (
          <motion.div
            variants={staggerLanguages}
            initial='hidden'
            animate='visible'
            exit='hidden'
            className='project__languages--wrapper'
          >
            {languages.map((item, id) => (
              <motion.p
                key={id}
                variants={language}
                className='project__language'
              >
                {item}
              </motion.p>
            ))}
          </motion.div>
        ) : null}
      </AnimatePresence>

      <motion.div
        className='project__info'
        variants={projectDescription}
        style={{ backgroundColor: bgColor, color: txtColor }}
      >
        <div>
          <h1 style={{ color: txtColor }} className='project__title'>
            {title}
          </h1>
          <p style={{ color: txtColor }} className='project__para'>
            {description}
          </p>
        </div>
        <div className='project-buttons--wrapper'>
          <motion.a
            className='projectsBtn'
            href={liveLink}
            target='_blank'
            rel='noreferrer'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Live View
          </motion.a>
          <motion.a
            className='projectsBtn projectsBtn--black'
            href={sourceLink}
            target='_blank'
            rel='noreferrer'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Source Code
          </motion.a>
        </div>
      </motion.div>
      <motion.figure className='project__img--wrapper' variants={imageVariants}>
        <img src={image} className='project__img' alt={`${title}`} />
      </motion.figure>
    </motion.div>
  );
};

export default Project;
