'use client';
import { useState, useEffect } from 'react';
import { ApiEvent, ProcessedEvent } from '../types/Event';
import { processApiEvents } from '../utils/eventHelpers';
import { initFourVenuesApi, getFourVenuesApi } from '../services/fourVenuesApi';
import { mockApiResponse, mockChannelsResponse } from '../data/mockEvents';

interface UseEventsReturn {
  events: ProcessedEvent[];
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

interface UseEventsConfig {
  apiKey?: string;
  channelSlug?: string;
  enabled?: boolean;
}

export const useEvents = (config?: UseEventsConfig): UseEventsReturn => {
  const [events, setEvents] = useState<ProcessedEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchEvents = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Si no hay configuración de API, usar datos mock
      if (!config?.apiKey || !config?.channelSlug || config?.enabled === false) {
        // Simular delay de red para mostrar el loading
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        const processedEvents = processApiEvents(mockApiResponse.data);
        setEvents(processedEvents);
        setLoading(false);
        return;
      }
      
      // Inicializar el servicio API real
      const apiService = initFourVenuesApi({
        apiKey: config.apiKey,
        baseUrl: 'https://api-alpha.fourvenues.com',
        channelSlug: config.channelSlug
      });
      
      // Obtener eventos del canal
      const apiEvents: ApiEvent[] = await apiService.getEvents();
      const processedEvents = processApiEvents(apiEvents);
      
      setEvents(processedEvents);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido al cargar eventos');
      console.error('Error fetching events:', err);
      
      // En caso de error con la API real, usar datos mock como fallback
      const processedEvents = processApiEvents(mockApiResponse.data);
      setEvents(processedEvents);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, [config?.apiKey, config?.channelSlug, config?.enabled]);

  const refetch = () => {
    fetchEvents();
  };

  return {
    events,
    loading,
    error,
    refetch
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