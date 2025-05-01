import React from 'react';
import Hero from '../components/Hero';
import PlatformGrid from '../components/PlatformGrid';
import GameGrid from '../components/GameGrid';
import StatsSection from '../components/StatsSection';
import CallToAction from '../components/CallToAction';
import { games } from '../data/games';

const HomePage: React.FC = () => {
  // Mock user object since no user data is currently available
  const user = { favorites: [] };

  return (
    <div>
      <Hero />
      
      <div className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <PlatformGrid />
        </div>
      </div>
      
      <StatsSection />
      
      <div className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4 space-y-16">
          <GameGrid title="Featured Games" games={games.slice(0, 4)} />
          <GameGrid title="Random Games" games={games.slice().sort(() => Math.random() - 0.5).slice(0, 4)} />
          <GameGrid title="For You" games={games.filter(game => user?.favorites?.includes(game.id)).slice(0, 4)} />
        </div>
      </div>
      
      <CallToAction />
    </div>
  );
};

export default HomePage