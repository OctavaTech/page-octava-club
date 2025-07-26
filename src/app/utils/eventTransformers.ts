import { ApiEvent, ProcessedEvent } from '../types/Event';

export const transformApiEventToProcessedEvent = (apiEvent: ApiEvent): ProcessedEvent => {
  // Convertir la fecha de display_date a un formato legible
  const displayDate = new Date(apiEvent.display_date);
  const formattedDate = displayDate.toLocaleDateString('es-ES', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  // Extraer nombres de artistas
  const artistNames = apiEvent.artists.map(artist => artist.name);

  // Crear botones para el evento
  const buttons = [
    {
      label: 'Comprar Entrada',
      href: apiEvent.iframe.tag_url,
    },
    {
      label: 'Ver Detalles',
      onClick: () => {
        // Aquí puedes agregar lógica para mostrar más detalles
        console.log('Ver detalles del evento:', apiEvent.name);
      },
    },
  ];

  return {
    id: apiEvent._id,
    image: apiEvent.image_url,
    title: apiEvent.name,
    description: apiEvent.description,
    date: formattedDate,
    address: apiEvent.location.full_address,
    buttons,
    artists: artistNames,
    age: apiEvent.age,
    musicGenres: apiEvent.music_genres.join(', '),
    outfit: apiEvent.outfit,
    url: apiEvent.iframe.tag_url,
  };
};

export const transformApiEventsToProcessedEvents = (apiEvents: ApiEvent[]): ProcessedEvent[] => {
  return apiEvents.map(transformApiEventToProcessedEvent);
}; 