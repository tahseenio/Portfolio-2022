import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface Props {
  icon: ReactNode;
  left: string;
  top: string;
  color?: string;
  delay: number;
  onClick: () => void;
  animationDelay: string;
}

const FloaterPDF = ({
  icon,
  left,
  top,
  color,
  delay,
  onClick,
  animationDelay,
}: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: delay } }}
      onClick={onClick}
      className='floater'
      style={{
        color: color,
        transform: 'translate(-50%, -50%)',
        left: `calc(100vw / 2 + ${left})`,
        top: `calc(100vh / 2 + ${top})`,
        animationDelay: animationDelay,
      }}
    >
      {icon}
    </motion.div>
  );
};

export default FloaterPDF;
