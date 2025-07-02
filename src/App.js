import '@fontsource/raleway';
import React, { useEffect } from 'react';
import { revealOnScroll, blurOnLoad, smoothScroll } from './utils/effects';

import Header from './components/Header';
import Hero from './components/Hero';
import Expertise from './components/Expertise';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  useEffect(() => {
    blurOnLoad();
    revealOnScroll();
    window.addEventListener('scroll', revealOnScroll);
    smoothScroll();
    return () => {
      window.removeEventListener('scroll', revealOnScroll);
    };
  }, []);
  return (
    <div className="blur-load min-h-screen">
      <Header />
      <main>
        <Hero />
        <Expertise />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
