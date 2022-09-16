// TODO: add better loading state
//  ADD min width to it as it messes up for phones
// SAFARI DROPDOWN AND POPUP changes max height which hides visibility of upper and lwoer section of the button
//  X BUTTON is cutting off on small screens
// set higher z index as the language popups are covering it

import { AnimatePresence, motion } from 'framer-motion';
import { IoMdClose } from 'react-icons/io';
import { useEffect } from 'react';
import Markdown from 'markdown-to-jsx';
import { usePortfolioContext } from '../context/PortfolioContext';
import SkeletonLoader from './ui/SkeletonLoader';

const MoreInfoOpen = () => {
  const {
    userName,
    link,
    text,
    setText,
    loading,
    setLoading,
    moreInfoIsOpen,
    setMoreInfoIsOpen,
  } = usePortfolioContext();

  const moreInfoVariants = {
    initial: { opacity: 0, scale: 0.7 },
    animate: { opacity: 1, scale: 1 },
  };

  useEffect(() => {
    const fetchData = async () => {
      if (link === '') return;
      try {
        const promise = await fetch(
          `https://raw.githubusercontent.com/${userName}/${link}/master/README.md`
        );
        const data = await promise.text();
        // console.log(data);
        setText(data);
      } catch (err) {
        console.log(err);
      }
      setTimeout(() => {
        setLoading(false);
      }, 700);
    };
    fetchData();
  }, [link, loading, userName, setLoading, setText]);

  const handleClose = () => {
    setMoreInfoIsOpen(false);
  };

  return (
    <AnimatePresence>
      {moreInfoIsOpen ? (
        <motion.div
          initial='animate'
          exit={{ opacity: 0 }}
          className='project__more-info--bg'
          onClick={handleClose}
        >
          <motion.div
            variants={moreInfoVariants}
            initial='initial'
            animate='animate'
            className='project__more-info--wrapper'
            exit={{ opacity: 0, scale: 0.7, transition: { duration: 0.1 } }}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <IoMdClose className='closeBtn--more-info' onClick={handleClose} />
            <div className='project__more-info'>
              {loading ? <SkeletonLoader /> : <Markdown>{text}</Markdown>}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default MoreInfoOpen;
