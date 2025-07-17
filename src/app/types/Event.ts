export interface ApiEvent {
  _id: string;
  date: number; // timestamp
  end: number; // timestamp
  flyer: string; // URL de la imagen
  name: string;
  slug: string;
  start: number; // timestamp
  url: string;
  description: string;
  age: number;
  music_genres: string;
  outfit: string;
  location_town: string;
  artists: string[];
}

export interface ProcessedEvent {
  id: string;
  image: string;
  title: string;
  description: string;
  date: string;
  address: string;
  buttons: Array<{ label: string; onClick?: () => void; href?: string }>;
  artists: string[];
  age: number;
  musicGenres: string;
  outfit: string;
  url: string;
}

export interface Channel {
  _id: string;
  name: string;
  slug: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
}

export interface ApiConfig {
  apiKey: string;
  baseUrl: string;
  channelSlug?: string;
} 