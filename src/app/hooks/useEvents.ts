'use client';
import { useEffect, useState } from 'react';
import { useEventsStore } from '../store/eventsStore';
import { transformApiEventsToProcessedEvents } from '../utils/eventTransformers';
import { ProcessedEvent } from '../types/Event';
import { mockChannelsResponse } from '../data/mockEvents';
import { initFourVenuesApi } from '../services/fourVenuesApi';

interface UseEventsReturn {
  events: ProcessedEvent[];
  loading: boolean;
  error: string | null;
  refetch: () => void;
  clearError: () => void;
}

export const useEvents = (): UseEventsReturn => {
  const { events: apiEvents, loading, error, fetchEvents, clearError } = useEventsStore();

  useEffect(() => {
    // Cargar eventos al montar el componente
    fetchEvents();
  }, [fetchEvents]);

  // Transformar eventos de la API al formato de la aplicación
  const events: ProcessedEvent[] = transformApiEventsToProcessedEvents(apiEvents);

  return { 
    events, 
    loading, 
    error,
    refetch: fetchEvents,
    clearError 
  };
};

// Hook adicional para obtener canales
export const useChannels = (apiKey?: string) => {
  const [channels, setChannels] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchChannels = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Si no hay API key, usar datos mock
        if (!apiKey) {
          await new Promise(resolve => setTimeout(resolve, 500));
          setChannels(mockChannelsResponse.data);
          setLoading(false);
          return;
        }
        
        const apiService = initFourVenuesApi({
          apiKey,
          baseUrl: 'https://api-alpha.fourvenues.com'
        });
        
        const channelsData = await apiService.getChannels();
        setChannels(channelsData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido al cargar canales');
        console.error('Error fetching channels:', err);
        
        // En caso de error, usar datos mock como fallback
        setChannels(mockChannelsResponse.data);
      } finally {
        setLoading(false);
      }
    };

    fetchChannels();
  }, [apiKey]);

  return { channels, loading, error };
}; 