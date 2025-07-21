import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-black">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="mb-8">
            <div className="text-gray-500 font-mono text-sm mb-2">~/justifydev</div>
            <h1 className="text-4xl md:text-6xl font-mono text-white mb-4">
              full-stack developer
            </h1>
            <div className="text-green-400 font-mono text-lg">
              building digital experiences
            </div>
          </div>
          
          <div className="space-y-4 text-gray-400 font-mono text-sm max-w-2xl mx-auto mb-12">
            <p>specialized in modern web technologies</p>
            <p>clean code • scalable solutions • user-focused design</p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button
              onClick={() => scrollToSection('work')}
              className="px-6 py-3 border border-green-400 text-green-400 font-mono text-sm hover:bg-green-400 hover:text-black transition-all duration-300"
            >
              view work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-3 border border-gray-600 text-gray-400 font-mono text-sm hover:border-white hover:text-white transition-all duration-300"
            >
              get in touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;