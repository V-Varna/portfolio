import React from 'react';

const About = () => (
  <section id="about" className="w-full max-w-4xl mx-auto py-20 px-4 flex flex-col items-center text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary dark:text-accent">About Me</h2>
    <p className="text-lg md:text-xl text-text dark:text-darkText max-w-2xl mb-6">
      Hi! I’m <span className="font-semibold text-secondary dark:text-accent">Varna</span>, a passionate UI Designer dedicated to crafting beautiful, accessible, and user-centric digital experiences. With a keen eye for detail and a love for modern design systems, I transform ideas into engaging interfaces that delight users and drive results.
    </p>
    <div className="flex flex-wrap gap-4 justify-center mt-4">
      <div className="bg-gradient-to-br from-secondary to-accent rounded-xl px-6 py-3 text-white font-semibold shadow-lg">
        UI/UX Design
      </div>
      <div className="bg-gradient-to-br from-accent to-secondary rounded-xl px-6 py-3 text-white font-semibold shadow-lg">
        Prototyping
      </div>
      <div className="bg-gradient-to-br from-primary to-secondary rounded-xl px-6 py-3 text-text font-semibold shadow-lg dark:text-white">
        Design Systems
      </div>
    </div>
  </section>
);

export default About;
