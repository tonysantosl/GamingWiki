import React from 'react';
import { manufacturers, getPlatformsByManufacturer } from '../data/platforms';
import PlatformCard from './PlatformCard';

const PlatformGrid: React.FC = () => {
  return (
    <div className="space-y-12">
      {manufacturers.map((manufacturer) => (
        <div key={manufacturer} className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
            {manufacturer}
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {getPlatformsByManufacturer(manufacturer).map((platform) => (
              <PlatformCard key={platform.id} platform={platform} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlatformGrid;