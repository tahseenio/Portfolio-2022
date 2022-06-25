import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface Props {
  icon: ReactNode;
  left: string;
  top: string;
  color?: string;
  link?: string;
  delay: number;
  onClick?: () => void;
  animationDelay: string;
}

const Floater = ({
  icon,
  left,
  top,
  color,
  link,
  delay,
  onClick,
  animationDelay,
}: Props) => {
  return (
    <motion.a
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: delay } }}
      onClick={onClick}
      href={link}
      className='floater'
      target='_blank'
      style={{
        color: color,
        transform: 'translate(-50%, -50%)',
        left: `calc(100vw / 2 + ${left})`,
        top: `calc(100vh / 2 + ${top})`,
        animationDelay: animationDelay,
      }}
    >
      {icon}
    </motion.a>
  );
};

export default Floater;
