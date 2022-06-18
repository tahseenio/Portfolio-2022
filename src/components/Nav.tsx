// TODO: What should the nav bar include?
// TODO: get a nav bar design UI
// TODO: after a certain point, nav bar gets hidden and on scroll up nav bar is shown

import { useEffect, useState, useRef } from 'react';
import { motion, useViewportScroll } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { Burger, Switch } from '@mantine/core';

import navLogo from '../assets/logo_inverted.svg';
import Modal from './Modal';
import { usePortfolioContext } from '../context/PortfolioContext';

const Nav = () => {
  const { HomeRef, AboutRef, ProjectsRef, ResumeRef, ContactRef } =
    usePortfolioContext();

  const links = [
    { title: 'Home', reference: HomeRef, id: '1' },
    { title: 'About', reference: AboutRef, id: '2' },
    { title: 'Projects', reference: ProjectsRef, id: '3' },
    { title: 'Resume', reference: ResumeRef, id: '4' },
    { title: 'Contact', reference: ContactRef, id: '5' },
  ];
  const location = useLocation();

  const { selectedTab, setSelectedTab } = usePortfolioContext();

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

  const { scrollY }: any = useViewportScroll();

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
          {links.map(({ title, id, reference }) => (
            <li
              key={id}
              className={`nav__link ${title === selectedTab ? 'active' : null}`}
              onClick={() => {
                // setSelectedTab(title);
                reference?.current!.scrollIntoView();
              }}
            >
              <p>{title}</p>
              {title === selectedTab ? (
                <motion.div
                  layoutId='navLinksBackground'
                  className='selected'
                ></motion.div>
              ) : null}
            </li>
          ))}
          <Switch
            size='md'
            color={'dark'}
            checked={isDark}
            style={{ marginLeft: '10px' }}
            onLabel='🌙'
            offLabel='☀️'
            classNames={{ input: 'switchInput' }}
            onChange={() => setIsDark((state) => !state)}
          />
          <Burger
            ref={modalButton}
            color={isDark ? 'white' : 'black'}
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
