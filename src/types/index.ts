export interface Platform {
  id: string;
  name: string;
  manufacturer: string;
  image: string;
  year: string;
  gamesCount: number;
}

export interface Game {
  id: string;
  title: string;
  genre: string;
  screenshots: string[];
  platforms: string[];
}

export interface User {
  id: string;
  username: string;
  isAdmin: boolean;
  favorites: string[];
}