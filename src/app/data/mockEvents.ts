import { ApiEvent, ApiResponse } from '../types/Event';

export const mockApiResponse: ApiResponse<ApiEvent[]> = {
  success: true,
  data: [
    {
      "_id": "Pl4gr84v20xqu01js0ybj42s6vYtIz1T",
      "date": 1735689600, // 1 de enero 2025
      "end": 1735707600, // 5 horas después
      "flyer": "https://octavaclub.com/wp-content/uploads/2025/03/Vie-21-Marzo-Terraza-Post-2.jpg",
      "name": "Saturday Night",
      "slug": "saturday-night-01-01-2025",
      "start": 1735689600,
      "url": "https://www.octavaclub.com/events/saturday-night-01-01-2025",
      "description": "Una noche épica con los mejores DJs de la escena electrónica",
      "age": 18,
      "music_genres": "techno",
      "outfit": "casual",
      "location_town": "Bogotá",
      "artists": [
        "David Guetta",
        "Martin Garrix"
      ]
    },
    {
      "_id": "Pl4gr84v20xqu01js0ybj42s6vYtIz2U",
      "date": 1736294400, // 8 de enero 2025
      "end": 1736312400,
      "flyer": "https://octavaclub.com/wp-content/uploads/2025/03/Vie-21-Marzo-Post-2.jpg",
      "name": "Reggaeton Night",
      "slug": "reggaeton-night-08-01-2025",
      "start": 1736294400,
      "url": "https://www.octavaclub.com/events/reggaeton-night-08-01-2025",
      "description": "La mejor música urbana con los artistas más calientes del momento",
      "age": 21,
      "music_genres": "reggaeton",
      "outfit": "elegante",
      "location_town": "Bogotá",
      "artists": [
        "Bad Bunny",
        "J Balvin",
        "Karol G"
      ]
    },
    {
      "_id": "Pl4gr84v20xqu01js0ybj42s6vYtIz3V",
      "date": 1736899200, // 15 de enero 2025
      "end": 1736917200,
      "flyer": "https://octavaclub.com/wp-content/uploads/2025/02/marco-carola-salsa.jpg",
      "name": "House Music Festival",
      "slug": "house-music-festival-15-01-2025",
      "start": 1736899200,
      "url": "https://www.octavaclub.com/events/house-music-festival-15-01-2025",
      "description": "Un festival de house music que te hará bailar toda la noche",
      "age": 18,
      "music_genres": "house",
      "outfit": "casual",
      "location_town": "Bogotá",
      "artists": [
        "Calvin Harris",
        "Deadmau5",
        "Swedish House Mafia"
      ]
    },
    {
      "_id": "Pl4gr84v20xqu01js0ybj42s6vYtIz4W",
      "date": 1737504000, // 22 de enero 2025
      "end": 1737522000,
      "flyer": "https://octavaclub.com/wp-content/uploads/2025/03/henri-bergmann-28-marzo.jpg",
      "name": "Salsa & Bachata Night",
      "slug": "salsa-bachata-night-22-01-2025",
      "start": 1737504000,
      "url": "https://www.octavaclub.com/events/salsa-bachata-night-22-01-2025",
      "description": "Una noche llena de ritmo latino y sabor caribeño",
      "age": 25,
      "music_genres": "salsa",
      "outfit": "elegante",
      "location_town": "Bogotá",
      "artists": [
        "Marc Anthony",
        "Gilberto Santa Rosa",
        "Orquesta Guayacán"
      ]
    },
    {
      "_id": "Pl4gr84v20xqu01js0ybj42s6vYtIz5X",
      "date": 1738108800, // 29 de enero 2025
      "end": 1738126800,
      "flyer": "https://octavaclub.com/wp-content/uploads/2025/03/Technasia-05Abril-Post.jpg",
      "name": "Electronic Madness",
      "slug": "electronic-madness-29-01-2025",
      "start": 1738108800,
      "url": "https://www.octavaclub.com/events/electronic-madness-29-01-2025",
      "description": "Locura electrónica con los beats más intensos y energéticos",
      "age": 18,
      "music_genres": "electronic",
      "outfit": "casual",
      "location_town": "Bogotá",
      "artists": [
        "Skrillex",
        "Diplo",
        "Major Lazer"
      ]
    },
    {
      "_id": "Pl4gr84v20xqu01js0ybj42s6vYtIz6Y",
      "date": 1738713600, // 5 de febrero 2025
      "end": 1738731600,
      "flyer": "https://octavaclub.com/wp-content/uploads/2025/03/Sebastien-Leger-12-Abril-Post.jpg",
      "name": "Retro Dance Party",
      "slug": "retro-dance-party-05-02-2025",
      "start": 1738713600,
      "url": "https://www.octavaclub.com/events/retro-dance-party-05-02-2025",
      "description": "Viaja en el tiempo con los mejores hits de los 80s, 90s y 2000s",
      "age": 21,
      "music_genres": "retro",
      "outfit": "temático",
      "location_town": "Bogotá",
      "artists": [
        "DJ Retro Mix",
        "Nostalgia Sound",
        "Time Machine"
      ]
    }
  ]
};

export const mockChannelsResponse = {
  success: true,
  data: [
    {
      "_id": "pw2gra4r20xlu02js0ybj42s6vYpAzeX",
      "name": "Octava Club",
      "slug": "octava-club"
    }
  ]
}; 