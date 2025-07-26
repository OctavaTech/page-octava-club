export interface ApiEvent {
  _id: string;
  name: string;
  slug: string;
  description: string;
  display_date: string;
  start_date: string;
  end_date: string;
  code: string;
  age: number;
  image_url: string;
  outfit: string;
  ambiences: string[];
  music_genres: string[];
  artists: Array<{
    name: string;
    image_url: string;
  }>;
  organization_id: string;
  location_id: string;
  location: {
    unic_id: string;
    location_id: string;
    organization_id: string;
    name: string;
    address: string;
    number: string;
    city: string;
    country: string;
    full_address: string;
    latitude: number;
    longitude: number;
    timezone: string;
  };
  iframe: {
    tag_url: string;
    script_url: string;
  };
  currency: string;
}

export interface ProcessedEvent {
  id: string;
  image?: string;
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