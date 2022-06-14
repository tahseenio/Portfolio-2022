import { motion, Variants } from 'framer-motion';
import { useState } from 'react';
interface Props {
  src: string;
  title: string;
  variants: Variants;
  textColor: string;
  bgColor: string;
}

const Language = ({ src, title, variants, textColor, bgColor }: Props) => {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <motion.div
      className='language'
      variants={variants}
      onHoverStart={() => setIsHovering(true)}
      onHoverEnd={() => setIsHovering(false)}
      style={{
        backgroundColor: isHovering ? bgColor : 'white',
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
        style={{ color: textColor }}
      >
        {title}
      </motion.h1>
    </motion.div>
  );
};

export default Language;
