import React from 'react';

export default function Footer() {
  return (
    <footer className="py-12 bg-white dark:bg-card-bg">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h2 className="text-2xl font-pacifico text-primary mb-4">Varna</h2>
            <p className="text-lightText dark:text-darkText opacity-80 max-w-md">
              Creating intuitive and beautiful digital experiences through thoughtful design and research.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-12 gap-y-4">
            <a href="#home" className="text-lightText dark:text-darkText hover:text-primary transition-colors duration-300">Home</a>
            <a href="#expertise" className="text-lightText dark:text-darkText hover:text-primary transition-colors duration-300">Expertise</a>
            <a href="#experience" className="text-lightText dark:text-darkText hover:text-primary transition-colors duration-300">Experience</a>
            <a href="#projects" className="text-lightText dark:text-darkText hover:text-primary transition-colors duration-300">Projects</a>
            <a href="#contact" className="text-lightText dark:text-darkText hover:text-primary transition-colors duration-300">Contact</a>
            <a href="#" className="text-lightText dark:text-darkText hover:text-primary transition-colors duration-300">Resume</a>
          </div>
        </div>
        <div className="border-t border-lightText dark:border-darkText border-opacity-10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-lightText dark:text-darkText opacity-60 mb-4 md:mb-0">© 2025 Varna. All rights reserved.</p>
          <div className="flex space-x-4">
            {/* Social icons here */}
          </div>
        </div>
      </div>
      <div className="fixed bottom-8 right-8 z-50">
        <a href="#home" className="w-12 h-12 flex items-center justify-center bg-primary text-white rounded-full shadow-lg hover:bg-opacity-90 transition-all duration-300">
          ↑
        </a>
      </div>
    </footer>
  );
}
