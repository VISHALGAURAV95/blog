import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../components/ThemeContext';
import classNames from 'classnames';

const LandingPage: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme(); // Get theme context
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for toggling the menu
  const navigate = useNavigate();

  useEffect(() => {
    // Check for JWT token
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, []);

  const handleSignOut = () => {
    // Clear token from local storage
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    // Navigate to home page
    navigate('/');
  };

  return (
    <div
      className={classNames("min-h-screen flex flex-col", {
        'bg-gray-100 text-gray-800': !isDarkMode,
        'bg-gray-900 text-gray-100': isDarkMode,
      })}
    >
      {/* Navbar */}
      <nav
        className={classNames("shadow-md py-4", {
          'bg-white': !isDarkMode,
          'bg-gray-800': isDarkMode,
        })}
      >
        <div className="container mx-auto flex justify-between items-center px-6">
          <div className="text-2xl font-bold">BlogVerse</div>
          <button
            className="block lg:hidden text-gray-600 hover:text-gray-900 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
          <div
            className={classNames(
              "space-x-4 flex-col lg:flex-row lg:flex lg:space-x-4",
              {
                hidden: !isMenuOpen,
                flex: isMenuOpen,
              }
            )}
          >
            <a
              href="#features"
              className={classNames("hover:text-gray-900", {
                'text-gray-600': !isDarkMode,
                'text-gray-300': isDarkMode,
              })}
            >
              Features
            </a>
            <a
              href="#about"
              className={classNames("hover:text-gray-900", {
                'text-gray-600': !isDarkMode,
                'text-gray-300': isDarkMode,
              })}
            >
              About
            </a>
            <a
              href="#contact"
              className={classNames("hover:text-gray-900", {
                'text-gray-600': !isDarkMode,
                'text-gray-300': isDarkMode,
              })}
            >
              Contact
            </a>
            {isAuthenticated ? (
              <>
                <a
                  href="/create-blog"
                  className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300"
                >
                  Create Blog
                </a>
                <a
                  href="/blogs"
                  className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300"
                >
                  All Blogs
                </a>
                <button
                  onClick={handleSignOut}
                  className={classNames("hover:text-gray-900", {
                    'text-gray-600': !isDarkMode,
                    'text-gray-300': isDarkMode,
                  })}
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/signin"
                  className={classNames("hover:text-gray-900", {
                    'text-gray-600': !isDarkMode,
                    'text-gray-300': isDarkMode,
                  })}
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className={classNames("hover:text-gray-900", {
                    'text-gray-600': !isDarkMode,
                    'text-gray-300': isDarkMode,
                  })}
                >
                  Sign Up
                </Link>
              </>
            )}
            <button
              onClick={toggleTheme}
              className={classNames("hover:text-gray-900", {
                'text-gray-600': !isDarkMode,
                'text-gray-300': isDarkMode,
              })}
            >
              {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className={classNames(
          "flex flex-col items-center justify-center py-16 px-6 text-center",
          {
            'bg-indigo-600 text-white': !isDarkMode,
            'bg-indigo-800 text-gray-100': isDarkMode,
          }
        )}
      >
        <h1 className="text-5xl font-extrabold mb-4">Share Your Ideas</h1>
        <p className="text-lg mb-8">
          Join a community of writers and readers. Publish your stories and read
          the best articles.
        </p>
        <a
          href="/create-blog"
          className="bg-white text-indigo-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300"
        >
          Get Started
        </a>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className={classNames("py-16", {
          'bg-white': !isDarkMode,
          'bg-gray-800': isDarkMode,
        })}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div
              className={classNames("p-6 rounded-lg shadow-lg", {
                'bg-gray-100': !isDarkMode,
                'bg-gray-700': isDarkMode,
              })}
            >
              <h3 className="text-2xl font-semibold mb-4">Easy to Use</h3>
              <p
                className={classNames("text-gray-600", {
                  'text-gray-300': isDarkMode,
                })}
              >
                Create and manage your blog posts with an intuitive and
                user-friendly interface.
              </p>
            </div>
            <div
              className={classNames("p-6 rounded-lg shadow-lg", {
                'bg-gray-100': !isDarkMode,
                'bg-gray-700': isDarkMode,
              })}
            >
              <h3 className="text-2xl font-semibold mb-4">Engaging Content</h3>
              <p
                className={classNames("text-gray-600", {
                  'text-gray-300': isDarkMode,
                })}
              >
                Discover and read articles on a wide range of topics, written by
                talented writers.
              </p>
            </div>
            <div
              className={classNames("p-6 rounded-lg shadow-lg", {
                'bg-gray-100': !isDarkMode,
                'bg-gray-700': isDarkMode,
              })}
            >
              <h3 className="text-2xl font-semibold mb-4">Community</h3>
              <p
                className={classNames("text-gray-600", {
                  'text-gray-300': isDarkMode,
                })}
              >
                Connect with readers and writers, share ideas, and get feedback
                on your work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className={classNames("py-16", {
          'bg-gray-50': !isDarkMode,
          'bg-gray-900': isDarkMode,
        })}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">About Us</h2>
          <p
            className={classNames("text-lg text-center", {
              'text-gray-600': !isDarkMode,
              'text-gray-300': isDarkMode,
            })}
          >
            Our mission is to provide a platform where people can share their
            thoughts, experiences, and knowledge. We believe in the power of
            writing and aim to support writers of all levels to express
            themselves freely.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className={classNames("py-16", {
          'bg-white': !isDarkMode,
          'bg-gray-800': isDarkMode,
        })}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
          <div className="text-center">
            <p
              className={classNames("text-lg mb-4", {
                'text-gray-600': !isDarkMode,
                'text-gray-300': isDarkMode,
              })}
            >
              Have questions or feedback? We’d love to hear from you!
            </p>
            <a
              href="mailto:gvvishal95@gmail.com"
              className="bg-indigo-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-indigo-700 transition duration-300"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={classNames("py-4", {
          'bg-gray-800': !isDarkMode,
          'bg-gray-900': isDarkMode,
        })}
      >
        <div className="container mx-auto text-center">
          <p
            className={classNames("text-sm", {
              'text-gray-400': !isDarkMode,
              'text-gray-600': isDarkMode,
            })}
          >
            © 2024 BlogVerse. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
