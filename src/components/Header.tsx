import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { TowerControl as GameController, Moon, Sun, Menu, X, Monitor } from 'lucide-react';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [platformsMenuOpen, setPlatformsMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (platformsMenuOpen) setPlatformsMenuOpen(false);
  };

  const togglePlatformsMenu = () => {
    setPlatformsMenuOpen(!platformsMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md transition-colors duration-300">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <GameController className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">GameWiki</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Home
            </a>
            
            <div className="relative group">
              <button 
                onClick={togglePlatformsMenu}
                className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <span>Platforms</span>
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              
              {platformsMenuOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-2 z-50">
                  <a href="/platforms/nintendo" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700">Nintendo</a>
                  <a href="/platforms/sony" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700">Sony</a>
                  <a href="/platforms/microsoft" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700">Microsoft</a>
                  <a href="/platforms/sega" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700">Sega</a>
                  <a href="/platforms/nec" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700">NEC</a>
                </div>
              )}
            </div>
            
            <a href="/games" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Games
            </a>
            
            <div className="flex items-center space-x-4">
              <button 
                onClick={toggleTheme}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
              
              <a 
                href="/login" 
                className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors"
              >
                Login / Register
              </a>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a 
              href="/" 
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </a>
            
            <button 
              onClick={togglePlatformsMenu}
              className="flex items-center justify-between text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2"
            >
              <span>Platforms</span>
              <svg className={`w-4 h-4 transform ${platformsMenuOpen ? 'rotate-180' : 'rotate-0'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            
            {platformsMenuOpen && (
              <div className="pl-4 flex flex-col space-y-2">
                <a 
                  href="/platforms/nintendo" 
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Nintendo
                </a>
                <a 
                  href="/platforms/sony" 
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sony
                </a>
                <a 
                  href="/platforms/microsoft" 
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Microsoft
                </a>
                <a 
                  href="/platforms/sega" 
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sega
                </a>
                <a 
                  href="/platforms/nec" 
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  NEC
                </a>
              </div>
            )}
            
            <a 
              href="/games" 
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Games
            </a>
            
            <a 
              href="/login" 
              className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Login / Register
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;