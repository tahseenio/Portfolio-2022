import { AnimatePresence } from 'framer-motion';
import { Routes, Route, useLocation } from 'react-router-dom';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import Resume from '../pages/Resume';

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence initial={true} exitBeforeEnter={true}>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
