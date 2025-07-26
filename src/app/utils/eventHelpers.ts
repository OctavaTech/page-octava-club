import { ApiEvent, ProcessedEvent } from '../types/Event';

export const formatEventDate = (dateString: string): string => {
  const date = new Date(dateString);
  const months = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];
  
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  
  return `${day} de ${month}, ${year}`;
};

export const formatEventTime = (dateString: string): string => {
  const date = new Date(dateString);
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
};

export const processApiEvent = (apiEvent: ApiEvent): ProcessedEvent => {
  const startTime = formatEventTime(apiEvent.start_date);
  const endTime = formatEventTime(apiEvent.end_date);
  
  return {
    id: apiEvent._id,
    image: apiEvent.image_url,
    title: apiEvent.name.toUpperCase(),
    description: `${apiEvent.description} | Artistas: ${apiEvent.artists.map(a => a.name).join(', ')}`,
    date: formatEventDate(apiEvent.display_date),
    address: apiEvent.location.full_address,
    artists: apiEvent.artists.map(a => a.name),
    age: apiEvent.age,
    musicGenres: apiEvent.music_genres.join(', '),
    outfit: apiEvent.outfit,
    url: `https://www.octavaclub.com/events/${apiEvent.slug}`,
    buttons: [
      { 
        label: 'INFO', 
        href: `https://www.octavaclub.com/events/${apiEvent.slug}` 
      },
      { 
        label: 'COMPRAR',
        href: `https://www.octavaclub.com/events/${apiEvent.slug}`
      }
    ]
  };
};

export const processApiEvents = (apiEvents: ApiEvent[]): ProcessedEvent[] => {
  return apiEvents.map(processApiEvent);
}; 