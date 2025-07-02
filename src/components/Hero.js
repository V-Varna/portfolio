import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 relative overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-12 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="gradient-text">Varna</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium mb-6">
            UI Designer & Researcher
          </h2>
          <p className="text-lg mb-8 max-w-lg">
            I craft intuitive digital experiences through thoughtful research and beautiful interfaces that connect with users on a deeper level.
          </p>
          <div className="flex items-center gap-4 mb-6">
            {/* Social icons here */}
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="bg-primary text-white px-6 py-3 rounded-button font-medium hover:bg-opacity-90 transition-all duration-300 whitespace-nowrap">View Projects</a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[var(--accent)] to-[var(--secondary)] text-white px-6 py-3 rounded-button font-medium shadow-md hover:opacity-90 transition-all duration-300 whitespace-nowrap"
            >
              My Resume
            </a>
          </div>
        </div>
        <div className="md:w-2/5 relative">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary shadow-xl floating">
            <div className="w-full h-full bg-cover bg-center" style={{backgroundImage: "url('https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20a%20young%20female%20UI%20designer%20with%20a%20confident%20smile%2C%20modern%20stylish%20appearance%2C%20soft%20lighting%2C%20minimalist%20background%2C%20high%20quality%20professional%20headshot&width=800&height=800&seq=1&orientation=squarish')"}}></div>
          </div>
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary rounded-full opacity-20 floating" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary rounded-full opacity-20 floating" style={{animationDelay: '1s'}}></div>
        </div>
      </div>
    </section>
  );
}
