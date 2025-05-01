import React from 'react';
import { Platform } from '../types';

interface PlatformCardProps {
  platform: Platform;
}

const PlatformCard: React.FC<PlatformCardProps> = ({ platform }) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg group">
      <div className="aspect-video">
        <img 
          src={platform.image} 
          alt={platform.name} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="text-2xl font-bold text-white mb-1">{platform.name}</h3>
        <div className="flex justify-between items-center">
          <span className="text-sm font-mono text-gray-300">{platform.year}</span>
          <span className="text-sm font-mono text-gray-300">{platform.gamesCount} games</span>
        </div>
      </div>
    </div>
  );
};

export default PlatformCard