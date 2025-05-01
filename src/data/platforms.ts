import { Platform } from '../types';

export const platforms: Platform[] = [
  // Nintendo
  {
    id: 'nes',
    name: 'NES',
    manufacturer: 'Nintendo',
    image: 'https://images.pexels.com/photos/13189670/pexels-photo-13189670.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    year: '1983',
    description: 'The Nintendo Entertainment System is an 8-bit third-generation home video game console produced by Nintendo.'
  },
  {
    id: 'snes',
    name: 'Super Nintendo',
    manufacturer: 'Nintendo',
    image: 'https://images.pexels.com/photos/13189671/pexels-photo-13189671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    year: '1990',
    description: 'The Super Nintendo Entertainment System, commonly shortened to Super NES or SNES, is a 16-bit home video game console.'
  },
  {
    id: 'n64',
    name: 'Nintendo 64',
    manufacturer: 'Nintendo',
    image: 'https://images.pexels.com/photos/13189673/pexels-photo-13189673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    year: '1996',
    description: 'The Nintendo 64 is a home video game console developed and marketed by Nintendo.'
  },
  
  // Sony
  {
    id: 'ps1',
    name: 'PlayStation',
    manufacturer: 'Sony',
    image: 'https://images.pexels.com/photos/13038109/pexels-photo-13038109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    year: '1994',
    description: 'The PlayStation is a home video game console developed and marketed by Sony Computer Entertainment.'
  },
  {
    id: 'ps2',
    name: 'PlayStation 2',
    manufacturer: 'Sony',
    image: 'https://images.pexels.com/photos/13038110/pexels-photo-13038110.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    year: '2000',
    description: 'The PlayStation 2 is a home video game console developed and marketed by Sony Computer Entertainment.'
  },
  
  // Microsoft
  {
    id: 'xbox',
    name: 'Xbox',
    manufacturer: 'Microsoft',
    image: 'https://images.pexels.com/photos/13038113/pexels-photo-13038113.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    year: '2001',
    description: 'The Xbox is a home video game console and the first installment in the Xbox series of consoles manufactured by Microsoft.'
  },
  {
    id: 'xbox360',
    name: 'Xbox 360',
    manufacturer: 'Microsoft',
    image: 'https://images.pexels.com/photos/13038115/pexels-photo-13038115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    year: '2005',
    description: 'The Xbox 360 is a home video game console developed by Microsoft as the successor to the original Xbox.'
  },
  
  // Sega
  {
    id: 'genesis',
    name: 'Genesis',
    manufacturer: 'Sega',
    image: 'https://images.pexels.com/photos/13038120/pexels-photo-13038120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    year: '1988',
    description: 'The Sega Genesis, known as the Mega Drive outside North America, is a 16-bit home video game console developed and sold by Sega.'
  },
  {
    id: 'dreamcast',
    name: 'Dreamcast',
    manufacturer: 'Sega',
    image: 'https://images.pexels.com/photos/13038122/pexels-photo-13038122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    year: '1998',
    description: 'The Dreamcast is a home video game console released by Sega on November 27, 1998 in Japan.'
  },
  
  // NEC
  {
    id: 'pcengine',
    name: 'PC Engine',
    manufacturer: 'NEC',
    image: 'https://images.pexels.com/photos/13038124/pexels-photo-13038124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    year: '1987',
    description: 'The PC Engine is a home video game console manufactured by NEC Home Electronics and released in 1987.'
  }
];

export const manufacturers = Array.from(new Set(platforms.map(platform => platform.manufacturer)));

export const getPlatformsByManufacturer = (manufacturer: string) => {
  return platforms.filter(platform => platform.manufacturer === manufacturer);
};