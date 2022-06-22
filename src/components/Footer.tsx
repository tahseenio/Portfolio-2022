// TODO: what will footer include?
// TODO: get an idea for Footer UI

import { motion } from 'framer-motion';

import { AiOutlineArrowUp } from 'react-icons/ai';

import footerLogo from '../assets/logo_inverted.svg';
import { usePortfolioContext } from '../context/PortfolioContext';

const Footer = () => {
  const { HomeRef, AboutRef, ProjectsRef, ResumeRef, ContactRef } =
    usePortfolioContext();

  const links = [
    { title: 'Home', reference: HomeRef, id: '1' },
    { title: 'About', reference: AboutRef, id: '2' },
    { title: 'Projects', reference: ProjectsRef, id: '3' },
    { title: 'Resume', reference: ResumeRef, id: '4' },
    { title: 'Contact', reference: ContactRef, id: '5' },
  ];

  const socialLinks = [
    { title: 'LinkedIn', link: 'https://www.linkedin.com/in/tahseen1/' },
    { title: 'Github', link: 'https://github.com/tahseenio/' },
  ];

  const linkVariants = {
    hover: { scale: 1.1, rotate: 5 },
    tap: { scale: 0.9 },
  };

  return (
    <footer>
      <div className='footer--top'>
        <ul className='footer__links'>
          {links.map(({ title, id, reference }) => (
            <motion.li
              key={id}
              onClick={() => {
                reference?.current!.scrollIntoView();
              }}
              className='footer__link'
              variants={linkVariants}
              whileHover='hover'
              whileTap='tap'
            >
              {title}
            </motion.li>
          ))}
        </ul>
        <figure
          className='footer__figure'
          onClick={() => window.scrollTo(0, 0)}
        >
          <img src={footerLogo} className='footer__logo' alt='footer logo' />
          <span className='footer__logo--popper'>
            Top <AiOutlineArrowUp />
          </span>
        </figure>
        <ul className='footer__links'>
          {socialLinks.map(({ title, link }, index) => (
            <motion.li
              className='footer__link'
              variants={linkVariants}
              whileHover='hover'
              whileTap='tap'
            >
              <a
                key={index}
                className='footer__link--anchor'
                href={link}
                target='_blank'
              >
                {title}
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
      <p className='footer__description'>Copyright © 2022 By Tahseen Islam</p>
    </footer>
  );
};

export default Footer;
