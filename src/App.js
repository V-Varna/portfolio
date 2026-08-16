import '@fontsource/raleway';
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { revealOnScroll, blurOnLoad, smoothScroll } from './utils/effects';

import Header from './components/Header';
import Hero from './components/Hero';
import Expertise from './components/Expertise';
import About from './components/About';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

// These pages will be created in the next steps.
// For now, we are only setting up the routes.
import AllProjects from './pages/AllProjects';
import ProjectDetails from './pages/ProjectDetails';


function Portfolio() {
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
        <About />
        <Experience />
        <Achievements />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}


function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Main Portfolio */}
        <Route path="/" element={<Portfolio />} />

        {/* All Projects Page */}
        <Route
          path="/projects"
          element={<AllProjects />}
        />

        {/* Individual Project Page */}
        <Route
          path="/projects/:projectId"
          element={<ProjectDetails />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;