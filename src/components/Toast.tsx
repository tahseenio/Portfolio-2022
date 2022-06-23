import { motion } from 'framer-motion';

interface Props {
  bgColor: string;
  text: string;
}

const Toast = ({ bgColor, text }: Props) => {
  return (
    <motion.aside
      style={{ backgroundColor: bgColor }}
      className='toast'
      initial={{ opacity: 0, y: 50, scale: 0.3 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.4 } }}
    >
      {text}
    </motion.aside>
  );
};

export default Toast;
