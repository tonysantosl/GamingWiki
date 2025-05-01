import React from 'react';
import { Game } from '../types';
import GameCard from './GameCard';

interface GameGridProps {
  title: string;
  games: Game[];
}

const GameGrid: React.FC<GameGridProps> = ({ title, games }) => {
  if (!games?.length) return null;

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
        {title}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
};

export default GameGrid