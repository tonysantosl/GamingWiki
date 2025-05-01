import React from 'react';

const StatsSection: React.FC = () => {
  return (
    <section className="py-12 md:py-20 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              500+
            </div>
            <div className="text-gray-600 dark:text-gray-300 font-medium">
              Gaming Platforms
            </div>
          </div>
          
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-purple-600 dark:text-purple-400 mb-2">
              10,000+
            </div>
            <div className="text-gray-600 dark:text-gray-300 font-medium">
              Games Documented
            </div>
          </div>
          
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-teal-600 dark:text-teal-400 mb-2">
              25,000+
            </div>
            <div className="text-gray-600 dark:text-gray-300 font-medium">
              Community Members
            </div>
          </div>
          
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-amber-600 dark:text-amber-400 mb-2">
              100K+
            </div>
            <div className="text-gray-600 dark:text-gray-300 font-medium">
              Monthly Visitors
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;