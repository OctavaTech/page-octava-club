import { useState, useMemo } from 'react';
import { ProcessedEvent } from '../types/Event';

export const useEventFilters = (events: ProcessedEvent[]) => {
  const [activeTab, setActiveTab] = useState<string>('todos');

  // Mapeo de tabs a géneros musicales
  const genreMapping: Record<string, string[]> = {
    'todos': [],
    'electronica': ['techno', 'electronic', 'house'],
    'salsa': ['salsa'],
    'pop': ['pop'],
    'rock': ['rock'],
    'jazz': ['jazz'],
    'reggaeton': ['reggaeton'],
    'retro': ['retro']
  };

  const filteredEvents = useMemo(() => {
    if (activeTab === 'todos') {
      return events;
    }

    const allowedGenres = genreMapping[activeTab] || [];
    return events.filter(event => 
      allowedGenres.some(genre => 
        event.musicGenres?.toLowerCase().includes(genre.toLowerCase())
      )
    );
  }, [events, activeTab]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return {
    activeTab,
    filteredEvents,
    handleTabChange
  };
}; 