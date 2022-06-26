import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface Props {
  reverseColumnLayout: boolean;
  image: string;
  bgColor: string;
  title: string;
  description: string;
  liveLink: string;
  sourceLink: string;
  languages: string[];
}

const Project = ({
  reverseColumnLayout,
  image,
  bgColor,
  title,
  description,
  liveLink,
  sourceLink,
  languages,
}: Props) => {
  const [gridColumns, setGridColumns] = useState<string>('0.7fr 0.3fr');
  const [gridArea, setGridArea] = useState<string>("'image info'");
  useEffect(() => {
    if (reverseColumnLayout) {
      setGridColumns('0.3fr 0.7fr');
      setGridArea("'info image'");
    }
  }, [reverseColumnLayout]);

  const projectVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  const projectDescription = {
    hidden: { opacity: 0, height: '10%' },
    visible: {
      opacity: 1,
      height: '100%',
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: reverseColumnLayout ? 100 : -100 },
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

  return (
    <motion.div
      className='project'
      style={{ gridTemplateColumns: gridColumns, gridTemplateAreas: gridArea }}
      variants={projectVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.5 }}
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
            style={{ justifyContent: reverseColumnLayout ? 'flex-end' : '' }}
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

      <motion.figure className='project__img--wrapper' variants={imageVariants}>
        <img src={image} className='project__img' alt={`${title}`} />
      </motion.figure>
      <motion.div
        className='project__info'
        variants={projectDescription}
        style={{ backgroundColor: bgColor }}
      >
        <h1>{title}</h1>
        <p>{description}</p>
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
    </motion.div>
  );
};

export default Project;
