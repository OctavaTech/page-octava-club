import { ApiEvent, ProcessedEvent } from '../types/Event';

export const formatEventDate = (timestamp: number): string => {
  const date = new Date(timestamp * 1000);
  const months = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];
  
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  
  return `${day} de ${month}, ${year}`;
};

export const formatEventTime = (timestamp: number): string => {
  const date = new Date(timestamp * 1000);
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
};

export const processApiEvent = (apiEvent: ApiEvent): ProcessedEvent => {
  const startTime = formatEventTime(apiEvent.start);
  const endTime = formatEventTime(apiEvent.end);
  
  return {
    id: apiEvent._id,
    image: apiEvent.flyer,
    title: apiEvent.name.toUpperCase(),
    description: `${apiEvent.description} | Artistas: ${apiEvent.artists.join(', ')}`,
    date: formatEventDate(apiEvent.date),
    address: apiEvent.location_town,
    artists: apiEvent.artists,
    age: apiEvent.age,
    musicGenres: apiEvent.music_genres,
    outfit: apiEvent.outfit,
    url: apiEvent.url,
    buttons: [
      { 
        label: 'INFO', 
        href: apiEvent.url 
      },
      { 
        label: 'COMPRAR',
        href: apiEvent.url
      }
    ]
  };
};

export const processApiEvents = (apiEvents: ApiEvent[]): ProcessedEvent[] => {
  return apiEvents.map(processApiEvent);
}; 