import React from 'react';
import ThemeToggle from './ThemeToggle';
// import styles from './Header.module.css';
// import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#expertise', label: 'Expertise' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  return (
    <header className="py-6 fixed w-full z-50 transition-all duration-300" id="header">
      <div className="container mx-auto px-6 flex justify-center">
        <nav className="bg-gradient-to-r from-[var(--accent)] to-[var(--secondary)] bg-opacity-0 backdrop-blur-md shadow-md rounded-full px-8 py-3 inline-flex items-center transition-all duration-300">
          <ul className="flex space-x-8">
            {navLinks.map(link => (
              <li key={link.href}>
                <a href={link.href} className="nav-link text-white hover:text-opacity-80 transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="ml-8 flex items-center">
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}
