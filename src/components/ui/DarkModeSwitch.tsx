// TODO: make switch look better

import { motion } from 'framer-motion';
import { RiMoonClearFill, RiSunFill } from 'react-icons/ri';

interface Props {
  isOn: boolean;
  setIsOn: React.Dispatch<React.SetStateAction<boolean>>;
}

const DarkModeSwitch = ({ isOn, setIsOn }: Props) => {
  const spring = {
    type: 'spring',
    stiffness: 700,
    damping: 30,
  };
  return (
    <div
      className='switch'
      data-ison={isOn}
      onClick={() => setIsOn((state) => !state)}
    >
      <motion.div
        className='handle'
        data-ison={isOn}
        layout
        transition={spring}
      >
        {isOn ? (
          <RiMoonClearFill className='moon--white' size={15} />
        ) : (
          <RiSunFill className='sun--yellow' size={15} />
        )}
      </motion.div>
    </div>
  );
};

export default DarkModeSwitch;
