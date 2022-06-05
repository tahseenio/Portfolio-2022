// TODO: what will footer include?
// TODO: get an idea for Footer UI

import { useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();

  if (location.pathname === '/') return null;

  return (
    <footer>
      <p className='footer__description'>Copyright © 2022 By Tahseen Islam</p>
    </footer>
  );
};

export default Footer;
