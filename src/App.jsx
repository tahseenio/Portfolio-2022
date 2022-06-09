import { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AnimatedRoutes from './components/AnimatedRoutes';

import HomeLoader from './components/HomeLoader';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';

import HomeBackground from './assets/home.webp';
import HomeNight from './assets/homeNight.webp';
import AboutBackground from './assets/about.jpg';
import ProjectBackground from './assets/projects.jpg';
import ResumeBackground from './assets/home.jpg';
import ContactBackground from './assets/home.jpg';

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const imagesPreload = [
      HomeBackground,
      HomeNight,
      ProjectBackground,
      AboutBackground,
      ResumeBackground,
      ContactBackground,
    ];
    // console.log('started');

    for (const image of imagesPreload) {
      // console.log('started for loop');
      const newImage = new Image();
      newImage.src = image;
      newImage.onload = () => {
        return;
      };
    }
    setTimeout(() => {
      // console.log('finished');
      setLoading(false);
    }, 700);
  }, []);

  return (
    <>
      {loading ? (
        <HomeLoader />
      ) : (
        <div className='App'>
          <Router>
            <Nav />
            <AnimatedRoutes />
            <Footer />
          </Router>
        </div>
      )}
    </>
  );
}

export default App;
