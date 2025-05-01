import React from 'react';
import { TowerControl as Controller, Gamepad2, Users } from 'lucide-react';

const FeaturedSection: React.FC = () => {
  return (
    <section className="py-12 md:py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Why GameWiki?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Join our community of gamers who contribute to building the most comprehensive gaming resource on the web.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                <Controller className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-2">
              Comprehensive Platform Coverage
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">
              From classic consoles to modern gaming systems, we cover it all with detailed information and game catalogs.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-purple-100 dark:bg-purple-900/30 rounded-full">
                <Gamepad2 className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-2">
              Detailed Game Information
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">
              Get in-depth details about your favorite games, including screenshots, cross-platform availability, and more.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-teal-100 dark:bg-teal-900/30 rounded-full">
                <Users className="h-8 w-8 text-teal-600 dark:text-teal-400" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-2">
              Community Contributions
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">
              Edit existing entries, add new games, and help build the ultimate gaming resource with our collaborative platform.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;