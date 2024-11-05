export interface User {
  id: string;
  name: string;
  age: number;
  bio: string;
  photos: string[];
  gender: string;
  orientation: string;
  location: string;
  interests: string[];
  isPremium: boolean;
}

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: number;
}

export type Language = 'en' | 'pt';

export interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}