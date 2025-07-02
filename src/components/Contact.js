
import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaBehance, FaDribbble, FaTwitter } from 'react-icons/fa';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-[#f4f2ec]">
      <div className="container mx-auto px-6">
        <h2 className={styles.experienceTitle}>
          Let's <span className={styles.accent}>Connect</span>
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 reveal">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-[#232323]">Get in Touch</h3>
            <p className="text-[#6b6b6b] opacity-90 mb-8">
              Have a project in mind or want to discuss potential collaborations? I'd love to hear from you!
            </p>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 flex items-center justify-center bg-[#a7d6f7] rounded-full mr-4">
                <FaEnvelope className="text-white text-xl" />
              </div>
              <a href="mailto:varna@designportfolio.com" className="text-[#232323] hover:text-primary transition-colors duration-300">varna@designportfolio.com</a>
            </div>
            <div className="flex items-center mb-8">
              <div className="w-10 h-10 flex items-center justify-center bg-[#a7d6f7] rounded-full mr-4">
                <FaPhoneAlt className="text-white text-lg" />
              </div>
              <a href="tel:+1234567890" className="text-[#232323] hover:text-primary transition-colors duration-300">+1 (234) 567-890</a>
            </div>
            <div className="flex space-x-4 mt-2">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={styles.socialIcon}>
                <div className="w-10 h-10 flex items-center justify-center bg-[#a7d6f7] rounded-full">
                  <FaLinkedin className="text-white text-xl" />
                </div>
              </a>
              <a href="https://behance.net" target="_blank" rel="noopener noreferrer" aria-label="Behance" className={styles.socialIcon}>
                <div className="w-10 h-10 flex items-center justify-center bg-[#a7d6f7] rounded-full">
                  <FaBehance className="text-white text-xl" />
                </div>
              </a>
              <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" aria-label="Dribbble" className={styles.socialIcon}>
                <div className="w-10 h-10 flex items-center justify-center bg-[#a7d6f7] rounded-full">
                  <FaDribbble className="text-white text-xl" />
                </div>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className={styles.socialIcon}>
                <div className="w-10 h-10 flex items-center justify-center bg-[#a7d6f7] rounded-full">
                  <FaTwitter className="text-white text-xl" />
                </div>
              </a>
            </div>
          </div>
          <div>
            <form>
              <div className="mb-6">
                <label htmlFor="name" className="block text-[#232323] mb-2">Name</label>
                <input type="text" id="name" className="w-full px-4 py-3 rounded-button border-none bg-white focus:ring-2 focus:ring-primary text-[#232323]" placeholder="Your name" />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-[#232323] mb-2">Email</label>
                <input type="email" id="email" className="w-full px-4 py-3 rounded-button border-none bg-white focus:ring-2 focus:ring-primary text-[#232323]" placeholder="Your email" />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-[#232323] mb-2">Message</label>
                <textarea id="message" rows="5" className="w-full px-4 py-3 rounded-button border-none bg-white focus:ring-2 focus:ring-primary text-[#232323]" placeholder="Your message"></textarea>
              </div>
              <button type="submit" className="w-full bg-[#a7d6f7] text-white px-6 py-3 rounded-button font-medium hover:bg-opacity-90 transition-all duration-300 whitespace-nowrap shadow-md">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
