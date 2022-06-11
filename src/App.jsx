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
import HomeNightMobile from './assets/homeNightMobile.webp';

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
      HomeNightMobile,
    ];
    const fetchImages = () => {
      // console.log('image fetch started');
      Promise.all(
        imagesPreload.map((url) => {
          const newImage = new Image();
          newImage.src = url;
          return new Promise((res) => {
            newImage.onload = () => {
              newImage.decode().then(() => res(url));
            };
          });
        })
      ).then((item) => {
        setLoading(false);
        // console.log('DONE', item);
      });
    };
    fetchImages();
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
