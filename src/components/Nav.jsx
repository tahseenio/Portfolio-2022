// TODO: What should the nav bar include?
// TODO: get a nav bar design UI
// TODO: animate my T logo
// TODO: after a certain point, nav bar gets hidden and on scroll up nav bar is shown
// TODO: finish burger menu

import { useEffect, useState, useRef } from 'react';
import { motion, useViewportScroll } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Burger, Switch } from '@mantine/core';

import navLogo from '../assets/logo_inverted.svg';
import Modal from './Modal';
import { usePortfolioContext } from '../context/PortfolioContext';

const Nav = () => {
  const links = ['Home', 'About', 'Projects', 'Resume', 'Contact'];
  const location = useLocation();

  const getURL = () => {
    let pathname = location.pathname;
    if (pathname === '/') {
      return 'Home';
    } else if (pathname === '/about') {
      return 'About';
    } else if (pathname === '/projects') {
      return 'Projects';
    } else if (pathname === '/resume') {
      return 'Resume';
    } else if (pathname === '/contact') {
      return 'Contact';
    }
  };

  const [selectedTab, setSelectedTab] = useState(() => getURL());

  // dark mode functions
  const { isDark, setIsDark } = usePortfolioContext();

  if (isDark) {
    document.body.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.body.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }

  // hide nav on scroll
  const [navVisible, setNavVisible] = useState(true);

  const { scrollY } = useViewportScroll();

  const updateNavPosition = () => {
    if (scrollY?.current < scrollY?.prev) {
      setNavVisible(true);
    } else if (scrollY?.current > 100 && scrollY?.current > scrollY?.prev) {
      setNavVisible(false);
    }
  };

  useEffect(() => {
    return scrollY.onChange(() => updateNavPosition());
  });

  const navAnimation = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 1, y: -80 },
  };

  // burger menu
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const modalButton = useRef(null);

  return (
    <motion.div
      variants={navAnimation}
      animate={navVisible ? 'visible' : 'hidden'}
      transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.3 }}
      className='nav__container'
    >
      <nav>
        <Modal
          setIsBurgerOpen={setIsBurgerOpen}
          isBurgerOpen={isBurgerOpen}
          modalButton={modalButton}
        />
        <img src={navLogo} className='nav__logo' alt='nav logo' />
        <ul className='nav__links'>
          {links.map((item) => (
            <Link
              to={item !== 'Home' ? `/${item.toLowerCase()}` : '/'}
              key={item}
              className={
                item !== selectedTab ? 'nav__link' : 'nav__link active'
              }
              onClick={() => setSelectedTab(item)}
            >
              <p>{item}</p>
              {item === selectedTab ? (
                <motion.div
                  layoutId='navLinksBackground'
                  className='selected'
                ></motion.div>
              ) : null}
            </Link>
          ))}
          <Switch
            size='md'
            color={'dark'}
            checked={isDark}
            style={{ marginLeft: '10px' }}
            // onLabel='Dark'
            // offLabel='Light'
            onChange={() => setIsDark((state) => !state)}
          />
          <Burger
            ref={modalButton}
            classNames={{ root: 'modal__button' }}
            opened={isBurgerOpen}
            onClick={() => setIsBurgerOpen((state) => !state)}
          />
        </ul>
      </nav>
    </motion.div>
  );
};

export default Nav;
