// BUG: ERROR 404 if branch is not from main
// TODO: add better loading state
// TODO: fix layout css when rendering from mdx to jsx
// TODO: fix fetched based on if from master or main
//  - Wakefile is master
// typeform is master

import { AnimatePresence, motion } from 'framer-motion';
import { IoMdClose } from 'react-icons/io';
import { useEffect } from 'react';
import Markdown from 'markdown-to-jsx';
import { usePortfolioContext } from '../context/PortfolioContext';

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
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };

  useEffect(() => {
    console.log('username is now:', userName);
  }, [link, userName]);

  useEffect(() => {
    const testFetch = async () => {
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
      }, 300);
    };
    testFetch();
  }, [link, setLoading, setText, userName]);

  const handleClose = () => {
    setLoading(true);
    setText('');
    setMoreInfoIsOpen(false);
  };

  return (
    <AnimatePresence>
      {moreInfoIsOpen ? (
        <motion.div
          initial='animate'
          exit={{ opacity: 0 }}
          className='project__more-info--wrapper'
          onClick={handleClose}
        >
          <motion.div
            variants={moreInfoVariants}
            initial='initial'
            animate='animate'
            exit={{ opacity: 0 }}
            className='project__more-info'
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <IoMdClose className='closeBtn--more-info' onClick={handleClose} />
            {loading ? <>Loading...</> : <Markdown>{text}</Markdown>}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default MoreInfoOpen;
