import { AnimatePresence } from "framer-motion"
import { Routes, Route, useLocation } from 'react-router-dom';
import Landing from "../pages/Landing";
import Resume from "../pages/Resume";

const AnimatedRoutes = () => {
  const location = useLocation()
  return (
    <AnimatePresence initial={false} exitBeforeEnter={true}>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Landing />} />
        <Route path='/resume' element={<Resume />} />
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes