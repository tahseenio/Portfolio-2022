import { AnimatePresence } from 'framer-motion';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from '../pages/Home';

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
