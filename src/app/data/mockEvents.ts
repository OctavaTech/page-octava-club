import { ApiEvent, ApiResponse } from '../types/Event';

export const mockApiResponse: ApiResponse<ApiEvent[]> = {
  success: true,
  data: [
    {
      "_id": "Pl4gr84v20xqu01js0ybj42s6vYtIz1T",
      "name": "Saturday Night",
      "slug": "saturday-night-01-01-2025",
      "description": "Una noche épica con los mejores DJs de la escena electrónica",
      "display_date": "2025-01-01",
      "start_date": "2025-01-01T22:00:00Z",
      "end_date": "2025-01-02T03:00:00Z",
      "code": "SAT001",
      "age": 18,
      "image_url": "https://octavaclub.com/wp-content/uploads/2025/03/Vie-21-Marzo-Terraza-Post-2.jpg",
      "outfit": "casual",
      "ambiences": ["club", "electronic"],
      "music_genres": ["techno"],
      "artists": [
        {
          "name": "David Guetta",
          "image_url": "https://example.com/david-guetta.jpg"
        },
        {
          "name": "Martin Garrix",
          "image_url": "https://example.com/martin-garrix.jpg"
        }
      ],
      "organization_id": "org123",
      "location_id": "loc123",
      "location": {
        "unic_id": "loc123",
        "location_id": "loc123",
        "organization_id": "org123",
        "name": "Octava Club",
        "address": "Calle 123",
        "number": "45",
        "city": "Bogotá",
        "country": "Colombia",
        "full_address": "Calle 123 #45, Bogotá, Colombia",
        "latitude": 4.7110,
        "longitude": -74.0721,
        "timezone": "America/Bogota"
      },
      "iframe": {
        "tag_url": "https://example.com/tag",
        "script_url": "https://example.com/script"
      },
      "currency": "COP"
    },
    {
      "_id": "Pl4gr84v20xqu01js0ybj42s6vYtIz2U",
      "name": "Reggaeton Night",
      "slug": "reggaeton-night-08-01-2025",
      "description": "La mejor música urbana con los artistas más calientes del momento",
      "display_date": "2025-01-08",
      "start_date": "2025-01-08T22:00:00Z",
      "end_date": "2025-01-09T03:00:00Z",
      "code": "REG001",
      "age": 21,
      "image_url": "https://octavaclub.com/wp-content/uploads/2025/03/Vie-21-Marzo-Post-2.jpg",
      "outfit": "elegante",
      "ambiences": ["club", "urban"],
      "music_genres": ["reggaeton"],
      "artists": [
        {
          "name": "Bad Bunny",
          "image_url": "https://example.com/bad-bunny.jpg"
        },
        {
          "name": "J Balvin",
          "image_url": "https://example.com/j-balvin.jpg"
        },
        {
          "name": "Karol G",
          "image_url": "https://example.com/karol-g.jpg"
        }
      ],
      "organization_id": "org123",
      "location_id": "loc123",
      "location": {
        "unic_id": "loc123",
        "location_id": "loc123",
        "organization_id": "org123",
        "name": "Octava Club",
        "address": "Calle 123",
        "number": "45",
        "city": "Bogotá",
        "country": "Colombia",
        "full_address": "Calle 123 #45, Bogotá, Colombia",
        "latitude": 4.7110,
        "longitude": -74.0721,
        "timezone": "America/Bogota"
      },
      "iframe": {
        "tag_url": "https://example.com/tag",
        "script_url": "https://example.com/script"
      },
      "currency": "COP"
    },
    {
      "_id": "Pl4gr84v20xqu01js0ybj42s6vYtIz3V",
      "name": "House Music Festival",
      "slug": "house-music-festival-15-01-2025",
      "description": "Un festival de house music que te hará bailar toda la noche",
      "display_date": "2025-01-15",
      "start_date": "2025-01-15T22:00:00Z",
      "end_date": "2025-01-16T03:00:00Z",
      "code": "HOU001",
      "age": 18,
      "image_url": "https://octavaclub.com/wp-content/uploads/2025/02/marco-carola-salsa.jpg",
      "outfit": "casual",
      "ambiences": ["festival", "electronic"],
      "music_genres": ["house"],
      "artists": [
        {
          "name": "Calvin Harris",
          "image_url": "https://example.com/calvin-harris.jpg"
        },
        {
          "name": "Deadmau5",
          "image_url": "https://example.com/deadmau5.jpg"
        },
        {
          "name": "Swedish House Mafia",
          "image_url": "https://example.com/swedish-house-mafia.jpg"
        }
      ],
      "organization_id": "org123",
      "location_id": "loc123",
      "location": {
        "unic_id": "loc123",
        "location_id": "loc123",
        "organization_id": "org123",
        "name": "Octava Club",
        "address": "Calle 123",
        "number": "45",
        "city": "Bogotá",
        "country": "Colombia",
        "full_address": "Calle 123 #45, Bogotá, Colombia",
        "latitude": 4.7110,
        "longitude": -74.0721,
        "timezone": "America/Bogota"
      },
      "iframe": {
        "tag_url": "https://example.com/tag",
        "script_url": "https://example.com/script"
      },
      "currency": "COP"
    },
    {
      "_id": "Pl4gr84v20xqu01js0ybj42s6vYtIz4W",
      "name": "Salsa & Bachata Night",
      "slug": "salsa-bachata-night-22-01-2025",
      "description": "Una noche llena de ritmo latino y sabor caribeño",
      "display_date": "2025-01-22",
      "start_date": "2025-01-22T22:00:00Z",
      "end_date": "2025-01-23T03:00:00Z",
      "code": "SAL001",
      "age": 25,
      "image_url": "https://octavaclub.com/wp-content/uploads/2025/03/henri-bergmann-28-marzo.jpg",
      "outfit": "elegante",
      "ambiences": ["lounge", "latin"],
      "music_genres": ["salsa", "bachata"],
      "artists": [
        {
          "name": "Marc Anthony",
          "image_url": "https://example.com/marc-anthony.jpg"
        },
        {
          "name": "Gilberto Santa Rosa",
          "image_url": "https://example.com/gilberto-santa-rosa.jpg"
        },
        {
          "name": "Orquesta Guayacán",
          "image_url": "https://example.com/orquesta-guayacan.jpg"
        }
      ],
      "organization_id": "org123",
      "location_id": "loc123",
      "location": {
        "unic_id": "loc123",
        "location_id": "loc123",
        "organization_id": "org123",
        "name": "Octava Club",
        "address": "Calle 123",
        "number": "45",
        "city": "Bogotá",
        "country": "Colombia",
        "full_address": "Calle 123 #45, Bogotá, Colombia",
        "latitude": 4.7110,
        "longitude": -74.0721,
        "timezone": "America/Bogota"
      },
      "iframe": {
        "tag_url": "https://example.com/tag",
        "script_url": "https://example.com/script"
      },
      "currency": "COP"
    },
    {
      "_id": "Pl4gr84v20xqu01js0ybj42s6vYtIz5X",
      "name": "Electronic Madness",
      "slug": "electronic-madness-29-01-2025",
      "description": "Locura electrónica con los beats más intensos y energéticos",
      "display_date": "2025-01-29",
      "start_date": "2025-01-29T22:00:00Z",
      "end_date": "2025-01-30T03:00:00Z",
      "code": "ELE001",
      "age": 18,
      "image_url": "https://octavaclub.com/wp-content/uploads/2025/03/Technasia-05Abril-Post.jpg",
      "outfit": "casual",
      "ambiences": ["club", "electronic"],
      "music_genres": ["electronic", "dubstep"],
      "artists": [
        {
          "name": "Skrillex",
          "image_url": "https://example.com/skrillex.jpg"
        },
        {
          "name": "Diplo",
          "image_url": "https://example.com/diplo.jpg"
        },
        {
          "name": "Major Lazer",
          "image_url": "https://example.com/major-lazer.jpg"
        }
      ],
      "organization_id": "org123",
      "location_id": "loc123",
      "location": {
        "unic_id": "loc123",
        "location_id": "loc123",
        "organization_id": "org123",
        "name": "Octava Club",
        "address": "Calle 123",
        "number": "45",
        "city": "Bogotá",
        "country": "Colombia",
        "full_address": "Calle 123 #45, Bogotá, Colombia",
        "latitude": 4.7110,
        "longitude": -74.0721,
        "timezone": "America/Bogota"
      },
      "iframe": {
        "tag_url": "https://example.com/tag",
        "script_url": "https://example.com/script"
      },
      "currency": "COP"
    },
    {
      "_id": "Pl4gr84v20xqu01js0ybj42s6vYtIz6Y",
      "name": "Retro Dance Party",
      "slug": "retro-dance-party-05-02-2025",
      "description": "Viaja en el tiempo con los mejores hits de los 80s, 90s y 2000s",
      "display_date": "2025-02-05",
      "start_date": "2025-02-05T22:00:00Z",
      "end_date": "2025-02-06T03:00:00Z",
      "code": "RET001",
      "age": 21,
      "image_url": "https://octavaclub.com/wp-content/uploads/2025/03/Sebastien-Leger-12-Abril-Post.jpg",
      "outfit": "temático",
      "ambiences": ["club", "retro"],
      "music_genres": ["retro", "pop"],
      "artists": [
        {
          "name": "DJ Retro Mix",
          "image_url": "https://example.com/dj-retro-mix.jpg"
        },
        {
          "name": "Nostalgia Sound",
          "image_url": "https://example.com/nostalgia-sound.jpg"
        },
        {
          "name": "Time Machine",
          "image_url": "https://example.com/time-machine.jpg"
        }
      ],
      "organization_id": "org123",
      "location_id": "loc123",
      "location": {
        "unic_id": "loc123",
        "location_id": "loc123",
        "organization_id": "org123",
        "name": "Octava Club",
        "address": "Calle 123",
        "number": "45",
        "city": "Bogotá",
        "country": "Colombia",
        "full_address": "Calle 123 #45, Bogotá, Colombia",
        "latitude": 4.7110,
        "longitude": -74.0721,
        "timezone": "America/Bogota"
      },
      "iframe": {
        "tag_url": "https://example.com/tag",
        "script_url": "https://example.com/script"
      },
      "currency": "COP"
    },
    {
      "_id": "Pl4gr84v20xqu01js0ybj42s6vYtIz7Z",
      "name": "Pop Night Fever",
      "slug": "pop-night-fever-12-02-2025",
      "description": "Los mejores hits del pop internacional y nacional en una noche épica",
      "display_date": "2025-02-12",
      "start_date": "2025-02-12T22:00:00Z",
      "end_date": "2025-02-13T03:00:00Z",
      "code": "POP001",
      "age": 18,
      "image_url": "https://octavaclub.com/wp-content/uploads/2025/03/Sebastien-Leger-12-Abril-Post.jpg",
      "outfit": "casual",
      "ambiences": ["club", "pop"],
      "music_genres": ["pop"],
      "artists": [
        {
          "name": "Dua Lipa",
          "image_url": "https://example.com/dua-lipa.jpg"
        },
        {
          "name": "Ed Sheeran",
          "image_url": "https://example.com/ed-sheeran.jpg"
        },
        {
          "name": "Shakira",
          "image_url": "https://example.com/shakira.jpg"
        }
      ],
      "organization_id": "org123",
      "location_id": "loc123",
      "location": {
        "unic_id": "loc123",
        "location_id": "loc123",
        "organization_id": "org123",
        "name": "Octava Club",
        "address": "Calle 123",
        "number": "45",
        "city": "Bogotá",
        "country": "Colombia",
        "full_address": "Calle 123 #45, Bogotá, Colombia",
        "latitude": 4.7110,
        "longitude": -74.0721,
        "timezone": "America/Bogota"
      },
      "iframe": {
        "tag_url": "https://example.com/tag",
        "script_url": "https://example.com/script"
      },
      "currency": "COP"
    },
    {
      "_id": "Pl4gr84v20xqu01js0ybj42s6vYtIz8A",
      "name": "Rock Legends Night",
      "slug": "rock-legends-night-19-02-2025",
      "description": "Una noche dedicada a las leyendas del rock con covers y tributos épicos",
      "display_date": "2025-02-19",
      "start_date": "2025-02-19T22:00:00Z",
      "end_date": "2025-02-20T03:00:00Z",
      "code": "ROC001",
      "age": 21,
      "image_url": "https://octavaclub.com/wp-content/uploads/2025/03/Technasia-05Abril-Post.jpg",
      "outfit": "casual",
      "ambiences": ["club", "rock"],
      "music_genres": ["rock"],
      "artists": [
        {
          "name": "Queen Tribute",
          "image_url": "https://example.com/queen-tribute.jpg"
        },
        {
          "name": "AC/DC Experience",
          "image_url": "https://example.com/acdc-experience.jpg"
        },
        {
          "name": "Led Zeppelin Revival",
          "image_url": "https://example.com/led-zeppelin-revival.jpg"
        }
      ],
      "organization_id": "org123",
      "location_id": "loc123",
      "location": {
        "unic_id": "loc123",
        "location_id": "loc123",
        "organization_id": "org123",
        "name": "Octava Club",
        "address": "Calle 123",
        "number": "45",
        "city": "Bogotá",
        "country": "Colombia",
        "full_address": "Calle 123 #45, Bogotá, Colombia",
        "latitude": 4.7110,
        "longitude": -74.0721,
        "timezone": "America/Bogota"
      },
      "iframe": {
        "tag_url": "https://example.com/tag",
        "script_url": "https://example.com/script"
      },
      "currency": "COP"
    },
    {
      "_id": "Pl4gr84v20xqu01js0ybj42s6vYtIz9B",
      "name": "Jazz Lounge Experience",
      "slug": "jazz-lounge-experience-26-02-2025",
      "description": "Una velada sofisticada con los mejores exponentes del jazz contemporáneo",
      "display_date": "2025-02-26",
      "start_date": "2025-02-26T22:00:00Z",
      "end_date": "2025-02-27T03:00:00Z",
      "code": "JAZ001",
      "age": 25,
      "image_url": "https://octavaclub.com/wp-content/uploads/2025/03/Sebastien-Leger-12-Abril-Post.jpg",
      "outfit": "elegante",
      "ambiences": ["lounge", "jazz"],
      "music_genres": ["jazz"],
      "artists": [
        {
          "name": "Miles Davis Tribute",
          "image_url": "https://example.com/miles-davis-tribute.jpg"
        },
        {
          "name": "Modern Jazz Quartet",
          "image_url": "https://example.com/modern-jazz-quartet.jpg"
        },
        {
          "name": "Latin Jazz Ensemble",
          "image_url": "https://example.com/latin-jazz-ensemble.jpg"
        }
      ],
      "organization_id": "org123",
      "location_id": "loc123",
      "location": {
        "unic_id": "loc123",
        "location_id": "loc123",
        "organization_id": "org123",
        "name": "Octava Club",
        "address": "Calle 123",
        "number": "45",
        "city": "Bogotá",
        "country": "Colombia",
        "full_address": "Calle 123 #45, Bogotá, Colombia",
        "latitude": 4.7110,
        "longitude": -74.0721,
        "timezone": "America/Bogota"
      },
      "iframe": {
        "tag_url": "https://example.com/tag",
        "script_url": "https://example.com/script"
      },
      "currency": "COP"
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