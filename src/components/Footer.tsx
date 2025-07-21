import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-gray-500 font-mono text-xs mb-4 md:mb-0">
            © {new Date().getFullYear()} justifydev
          </div>
          
          <div className="text-gray-500 font-mono text-xs">
            built with react + tailwind
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;