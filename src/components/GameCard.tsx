import React, { useState } from 'react';
import { Game } from '../types';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface GameCardProps {
  game: Game;
}

const GameCard: React.FC<GameCardProps> = ({ game }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === game.screenshots.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? game.screenshots.length - 1 : prev - 1
    );
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <div className="aspect-video bg-gray-200 dark:bg-gray-700 overflow-hidden relative">
          <img 
            src={game.screenshots[currentImageIndex]} 
            alt={`${game.title} screenshot`} 
            className="w-full h-full object-cover"
          />
          
          {game.screenshots.length > 1 && (
            <>
              <button 
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-1 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              
              <button 
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
              
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1">
                {game.screenshots.map((_, index) => (
                  <button 
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full ${
                      index === currentImageIndex ? 'bg-white' : 'bg-white/50 hover:bg-white/70'
                    } transition-colors`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{game.title}</h3>
        
        <span className="inline-block px-2 py-1 text-sm bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-md mb-4">
          {game.genre}
        </span>
        
        <div className="mb-4">
          <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
            Available on:
          </h4>
          <div className="flex flex-wrap gap-2">
            {game.platforms.map((platform) => (
              <span 
                key={platform} 
                className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-md font-mono"
              >
                {platform}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <a 
            href={`/games/${game.id}`}
            className="inline-block px-3 py-1 bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-sm font-medium rounded-md hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors"
          >
            View Details
          </a>
          
          <button className="text-sm text-teal-600 dark:text-teal-400 hover:underline">
            Edit Game
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameCard;