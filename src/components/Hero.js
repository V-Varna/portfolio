import React from 'react';
import { FaEnvelope, FaLinkedinIn, FaGithub } from 'react-icons/fa';

export default function Hero() {
  // Smoothly scroll to the Projects section
  const scrollToProjects = (e) => {
    e.preventDefault();

    const projectsSection = document.getElementById('projects');

    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  // Open user's default email application
  const openEmail = () => {
    window.location.href = 'mailto:v2005varna@gmail.com';
  };

  return (
    <section
      id="home"
      className="pt-32 pb-20 relative overflow-hidden"
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">

        {/* Left Content */}
        <div className="w-full md:w-1/2 mb-12 md:mb-0">

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="gradient-text">Varna</span>
          </h1>

          {/* Role */}
          <h2
            className="text-2xl md:text-3xl font-medium mb-6"
            style={{ color: 'var(--text-primary)' }}
          >
            IT Student | Software Developer
          </h2>

          {/* Description */}
          <p
            className="text-base sm:text-lg mb-8 max-w-lg leading-relaxed"
            style={{ color: 'var(--text-primary)' }}
          >
            I enjoy learning new things, building practical web applications,
            and taking on unfamiliar challenges. I work with clarity,
            attention to detail, and the determination to see every task through.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mb-6">

            {/* View Projects */}
            <a
              href="#projects"
              onClick={scrollToProjects}
              className="
                px-6 py-3 rounded-button font-medium text-white
                transition-all duration-300
                hover:text-black hover:-translate-y-1 hover:shadow-lg
                whitespace-nowrap
              "
              style={{ backgroundColor: 'var(--accent)' }}
            >
              View Projects
            </a>

            {/* Resume */}
            <a
              href="https://drive.google.com/file/d/1t-dwWySyrLWmZFVmqS8ZHylEazEyBT4T/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-6 py-3 rounded-button font-medium text-white shadow-md
                transition-all duration-300
                hover:text-black hover:-translate-y-1 hover:shadow-lg
                whitespace-nowrap
              "
              style={{
                background:
                  'linear-gradient(to right, var(--accent), var(--secondary))',
              }}
            >
              My Resume
            </a>

          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-5">

            {/* Email */}
            <button
              type="button"
              onClick={openEmail}
              aria-label="Send email to Varna"
              title="Email"
              className="
                text-xl bg-transparent border-0 p-0 cursor-pointer
                transition-all duration-300
                hover:-translate-y-1 hover:scale-110
              "
              style={{ color: 'var(--text-primary)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--accent)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-primary)';
              }}
            >
              <FaEnvelope />
            </button>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/varna-vanamala/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Varna's LinkedIn profile"
              title="LinkedIn"
              className="
                text-xl
                transition-all duration-300
                hover:-translate-y-1 hover:scale-110
              "
              style={{ color: 'var(--text-primary)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--accent)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-primary)';
              }}
            >
              <FaLinkedinIn />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/V-Varna"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Varna's GitHub profile"
              title="GitHub"
              className="
                text-xl
                transition-all duration-300
                hover:-translate-y-1 hover:scale-110
              "
              style={{ color: 'var(--text-primary)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--accent)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-primary)';
              }}
            >
              <FaGithub />
            </a>

          </div>
        </div>

        {/* Right Side - Profile Image */}
        <div className="w-full md:w-2/5 relative flex justify-center">

          <div
            className="
              w-64 h-64 md:w-80 md:h-80
              rounded-full overflow-hidden border-4 shadow-xl floating
            "
            style={{ borderColor: 'var(--accent)' }}
          >
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20a%20young%20female%20UI%20designer%20with%20a%20confident%20smile%2C%20modern%20stylish%20appearance%2C%20soft%20lighting%2C%20minimalist%20background%2C%20high%20quality%20professional%20headshot&width=800&height=800&seq=1&orientation=squarish')",
              }}
            />
          </div>

          {/* Decorative Circle - Bottom Right */}
          <div
            className="
              absolute -bottom-4 -right-4
              w-24 h-24 md:w-32 md:h-32
              rounded-full floating opacity-20
            "
            style={{
              backgroundColor: 'var(--secondary)',
              animationDelay: '0.5s',
            }}
          />

          {/* Decorative Circle - Top Left */}
          <div
            className="
              absolute -top-4 -left-4
              w-20 h-20 md:w-24 md:h-24
              rounded-full floating opacity-20
            "
            style={{
              backgroundColor: 'var(--accent)',
              animationDelay: '1s',
            }}
          />

        </div>
      </div>
    </section>
  );
}