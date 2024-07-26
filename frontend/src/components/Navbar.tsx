// Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from './ThemeContext'; // Adjust the path as needed

const Navbar: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <nav className={`shadow-md ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <Link to="/" className={`text-2xl font-bold ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>
              BlogVerse
            </Link>
          </div>
          <div className="hidden md:flex space-x-6">
            <Link to="/" className={`hover:text-gray-900 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Home</Link>
            <Link to="/create-blog" className={`hover:text-gray-900 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Create Blog</Link>
            <Link to="/blogs" className={`hover:text-gray-900 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>All Blog</Link>
            {/* <Link to="/about" className={`hover:text-gray-900 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>About</Link> */}
          </div>
          <div className="md:hidden">
            <button 
              onClick={toggleTheme}
              className={`text-gray-600 hover:text-gray-900 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
