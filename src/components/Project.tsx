import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Props {
  reverseColumnLayout?: boolean;
  image: string;
  bgColor: string;
  title: string;
  description: string;
  liveLink: string;
  sourceLink: string;
}

const Project = ({
  reverseColumnLayout,
  image,
  bgColor,
  title,
  description,
  liveLink,
  sourceLink,
}: Props) => {
  const [gridColumns, setGridColumns] = useState<string>('0.7fr 0.3fr');
  const [gridArea, setGridArea] = useState<string>("'image info'");
  useEffect(() => {
    if (reverseColumnLayout === true) {
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

  return (
    <motion.div
      className='project'
      style={{ gridTemplateColumns: gridColumns, gridTemplateAreas: gridArea }}
      variants={projectVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.5 }}
    >
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
        <div></div>
        <a href={liveLink} target='_blank' rel='noreferrer'>
          Live View
        </a>
        <a href={sourceLink} target='_blank' rel='noreferrer'>
          Source Code
        </a>
      </motion.div>
    </motion.div>
  );
};

export default Project;
