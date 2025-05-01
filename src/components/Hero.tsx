import React from 'react';
import { TowerControl as GameController } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="absolute inset-0 bg-black opacity-30"></div>
      
      <div className="relative container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl">
          <div className="flex items-center space-x-2 mb-6">
            <GameController className="h-8 w-8 text-white" />
            <h1 className="text-3xl md:text-4xl font-bold">GameWiki</h1>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            The Collaborative Gaming Encyclopedia
          </h2>
          
          <p className="text-lg md:text-xl mb-8 text-blue-100">
            Explore, discover, and contribute to our growing collection of gaming knowledge, spanning across platforms, generations, and genres.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="/platforms"
              className="px-6 py-3 bg-white text-blue-600 font-medium rounded-md hover:bg-blue-50 transition-colors text-center"
            >
              Browse Platforms
            </a>
            
            <a 
              href="/games"
              className="px-6 py-3 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-400 transition-colors text-center"
            >
              Explore Games
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;