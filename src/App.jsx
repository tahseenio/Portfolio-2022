import { BrowserRouter as Router } from 'react-router-dom';
import AnimatedRoutes from './components/AnimatedRoutes';

import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import { Loader } from '@mantine/core';

import HomeBackground from './assets/home.webp';
import HomeJPG from './assets/home.jpg';
import AboutBackground from './assets/about.jpg';
import Projects from './assets/projects.jpg';

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    console.log('started');
    const imagesPreload = [HomeBackground, AboutBackground, HomeJPG, Projects];

    for (let i = 0; i < imagesPreload.length; i++) {
      imagesPreload.forEach((image) => {
        const newImage = new Image();
        newImage.src = image;
      });
    }
    setTimeout(() => {
      setLoading((state) => !state);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
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
