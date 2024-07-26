// Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-center md:text-left">&copy; 2024 BlogVerse. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a href="/privacy" className="text-gray-400 hover:text-gray-300">Privacy Policy</a>
            <a href="/terms" className="text-gray-400 hover:text-gray-300">Terms of Service</a>
            <a href="/contact" className="text-gray-400 hover:text-gray-300">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
