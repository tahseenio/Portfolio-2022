import { BrowserRouter as Router } from 'react-router-dom';
import AnimatedRoutes from './components/AnimatedRoutes';

import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Router>
        <Nav />
        <AnimatedRoutes />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
