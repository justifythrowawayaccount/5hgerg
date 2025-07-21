import React from 'react';
import { Heart, Coffee, Terminal } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Terminal className="w-6 h-6 text-green-400" />
              <span className="font-mono text-xl font-semibold text-white">justifydev</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Full-stack developer passionate about creating digital experiences 
              that make a difference. Always learning, always building.
            </p>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h3 className="font-mono text-white font-semibold">Quick Links</h3>
            <div className="space-y-2">
              {['About', 'Work', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    const element = document.getElementById(link.toLowerCase());
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="block text-gray-400 hover:text-green-400 transition-colors text-sm"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Tech stack */}
          <div className="space-y-4">
            <h3 className="font-mono text-white font-semibold">Built With</h3>
            <div className="flex flex-wrap gap-2">
              {['React', 'TypeScript', 'Tailwind', 'Vite'].map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-gray-800 text-green-400 font-mono text-xs rounded border border-gray-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-500 font-mono text-sm">
              <span>© {currentYear} justifydev</span>
              <span>•</span>
              <span className="flex items-center space-x-1">
                <span>Made with</span>
                <Heart size={12} className="text-red-400 fill-current" />
                <span>and</span>
                <Coffee size={12} className="text-yellow-400" />
              </span>
            </div>
            
            <div className="text-gray-500 font-mono text-sm">
              <span className="text-green-400">$</span> echo "Thanks for visiting!"
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;