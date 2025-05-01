import React from 'react';
import { TowerControl as GameController, Github, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-8 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <GameController className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            <span className="ml-2 text-lg font-bold text-gray-900 dark:text-white">GameWiki</span>
          </div>
          
          <div className="flex items-center space-x-6 mb-4 md:mb-0">
            <a 
              href="http://twitter.com/horojoga" 
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a 
              href="http://github.com/tonyhoro" 
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
          
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Developed by Tony Santos © {new Date().getFullYear()}
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
                Platforms
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="/platforms/nintendo" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    Nintendo
                  </a>
                </li>
                <li>
                  <a href="/platforms/sony" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    Sony
                  </a>
                </li>
                <li>
                  <a href="/platforms/microsoft" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    Microsoft
                  </a>
                </li>
                <li>
                  <a href="/platforms/sega" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    Sega
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
                Games
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="/games/recent" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    Recently Added
                  </a>
                </li>
                <li>
                  <a href="/games/popular" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    Most Popular
                  </a>
                </li>
                <li>
                  <a href="/games/categories" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    Categories
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
                Account
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="/login" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    Login
                  </a>
                </li>
                <li>
                  <a href="/register" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    Register
                  </a>
                </li>
                <li>
                  <a href="/profile" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    Profile
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
                About
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="/about" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="/privacy" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;