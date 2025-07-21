import React, { useEffect, useState } from 'react';
import { Terminal, Code, Coffee } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState('');
  const fullText = 'justifydev@portfolio:~$ whoami';

  useEffect(() => {
    setIsVisible(true);
    
    // Typing animation
    let i = 0;
    const typeTimer = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typeTimer);
      }
    }, 100);

    return () => clearInterval(typeTimer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.02"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Terminal window */}
          <div className="bg-gray-900 border border-gray-700 rounded-lg shadow-2xl max-w-4xl mx-auto mb-12">
            {/* Terminal header */}
            <div className="flex items-center justify-between px-4 py-3 bg-gray-800 rounded-t-lg border-b border-gray-700">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <Terminal size={16} />
                <span>terminal</span>
              </div>
            </div>
            
            {/* Terminal content */}
            <div className="p-6 font-mono text-left">
              <div className="text-green-400 mb-4">
                {typedText}
                <span className="animate-pulse">|</span>
              </div>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center space-x-2">
                  <span className="text-cyan-400">name:</span>
                  <span>justifydev</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-cyan-400">role:</span>
                  <span>full-stack developer</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-cyan-400">location:</span>
                  <span>building digital experiences</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-cyan-400">status:</span>
                  <span className="text-green-400">available for work</span>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-gray-700">
                <div className="text-gray-500 text-sm mb-2">$ cat skills.txt</div>
                <div className="flex flex-wrap gap-2">
                  {['react', 'typescript', 'node.js', 'python', 'postgresql', 'aws'].map((skill) => (
                    <span key={skill} className="px-2 py-1 bg-gray-800 text-green-400 rounded text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button
              onClick={() => scrollToSection('work')}
              className="group px-8 py-4 bg-gradient-to-r from-green-500 to-cyan-500 text-black font-mono text-sm font-semibold rounded-lg hover:from-green-400 hover:to-cyan-400 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <span className="flex items-center space-x-2">
                <Code size={16} />
                <span>view projects</span>
              </span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="group px-8 py-4 border-2 border-gray-600 text-gray-300 font-mono text-sm font-semibold rounded-lg hover:border-green-400 hover:text-green-400 transition-all duration-300 transform hover:scale-105"
            >
              <span className="flex items-center space-x-2">
                <Coffee size={16} />
                <span>let's chat</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;