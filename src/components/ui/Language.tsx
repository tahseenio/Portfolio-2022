import { motion, Variants } from 'framer-motion';
import { useState } from 'react';

// TODO: change variable textColor to backgroundColor and change textColor for best accessibility

interface Props {
  src: string;
  alt: string;
  title: string;
  textColor: string;
  variants: Variants;
}

const Language = ({ src, title, variants, textColor }: Props) => {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <motion.div
      className='language'
      variants={variants}
      onHoverStart={() => setIsHovering(true)}
      onHoverEnd={() => setIsHovering(false)}
      style={{
        backgroundColor: isHovering ? textColor : 'white',
        transition: '700ms',
      }}
    >
      <motion.img
        initial={{ x: 0 }}
        animate={{ x: isHovering ? 100 : 0 }}
        transition={{
          delay: isHovering ? 0.15 : 0,
          duration: 0.3,
          type: 'spring',
        }}
        className='language__image'
        src={src}
        alt={title}
      />
      <motion.h1
        className='language__title'
        initial={{ x: -100 }}
        animate={{ x: isHovering ? 0 : -100 }}
        transition={{
          delay: isHovering ? 0.15 : 0,
          duration: 0.3,
          type: 'spring',
        }}
        // style={{ color: 'white' }}
      >
        {title}
      </motion.h1>
    </motion.div>
  );
};

export default Language;
