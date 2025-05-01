import { Game } from '../types';

export const games: Game[] = [
  {
    id: 'mario64',
    title: 'Super Mario 64',
    genre: 'Platform',
    screenshots: [
      'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/194511/pexels-photo-194511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ],
    platforms: ['N64', 'SWITCH']
  },
  {
    id: 'zelda-oot',
    title: 'The Legend of Zelda: Ocarina of Time',
    genre: 'Action RPG',
    screenshots: [
      'https://images.pexels.com/photos/371924/pexels-photo-371924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/2885014/pexels-photo-2885014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ],
    platforms: ['N64', 'GAMECUBE', '3DS']
  },
  {
    id: 'ff7',
    title: 'Final Fantasy VII',
    genre: 'RPG',
    screenshots: [
      'https://images.pexels.com/photos/2478247/pexels-photo-2478247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ],
    platforms: ['PS1', 'PC', 'SWITCH', 'PS4', 'XBOX ONE']
  },
  {
    id: 'halo',
    title: 'Halo: Combat Evolved',
    genre: 'FPS',
    screenshots: [
      'https://images.pexels.com/photos/41162/moon-landing-apollo-11-nasa-buzz-aldrin-41162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/2152/sky-space-dark-galaxy.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ],
    platforms: ['XBOX', 'PC', 'XBOX ONE', 'XBOX SERIES X']
  }
];