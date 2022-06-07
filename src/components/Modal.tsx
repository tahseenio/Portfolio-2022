// TODO: make modal close before routing to new pages on click

import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  isBurgerOpen: boolean;
  setIsBurgerOpen: React.Dispatch<React.SetStateAction<boolean>>;
  modalButton: React.RefObject<HTMLDivElement>;
}

const Modal = ({ setIsBurgerOpen, isBurgerOpen, modalButton }: Props) => {
  const links = [
    { title: 'Home', to: '/', id: '1' },
    { title: 'About', to: '/about', id: '2' },
    { title: 'Projects', to: '/projects', id: '3' },
    { title: 'Resume', to: '/resume', id: '4' },
    { title: 'Contact', to: '/contact', id: '5' },
  ];

  const sideVariants = {
    closed: {
      transition: {
        staggerChildren: 0.01,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        staggerChildren: 0.15,
        staggerDirection: 1,
      },
    },
  };

  const itemVariants = {
    closed: {
      opacity: 0,
    },
    open: { opacity: 1 },
  };

  const modal = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const clickHandler = (e: MouseEvent) => {
      if (
        !isBurgerOpen ||
        modalButton.current?.contains(e.target as Node) ||
        modal.current?.contains(e.target as Node)
      )
        return;
      setIsBurgerOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  return (
    <AnimatePresence>
      {isBurgerOpen && (
        <motion.main
          className='modal__container'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { delay: 0.1, duration: 0.15 },
          }}
        >
          <motion.aside
            ref={modal}
            className='modal'
            initial={{ width: 0 }}
            animate={{
              width: 300,
            }}
            exit={{
              width: 0,
              transition: { delay: 0.05, duration: 0.15 },
            }}
          >
            <motion.div
              variants={sideVariants}
              className='modal__links'
              initial='closed'
              animate='open'
              exit='closed'
            >
              {links.map(({ title, to, id }) => (
                <motion.div
                  key={id}
                  className='modal__link'
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  variants={itemVariants}
                  onClick={() => setIsBurgerOpen((state) => !state)}
                >
                  <Link to={to} className='modal__link'>
                    {title}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.aside>
        </motion.main>
      )}
    </AnimatePresence>
  );
};

export default Modal;
