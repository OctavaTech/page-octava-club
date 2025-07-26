import { create } from 'zustand';
import { ApiEvent } from '../types/Event';

interface EventsState {
  events: ApiEvent[];
  loading: boolean;
  error: string | null;
  hasLoaded: boolean; // Nuevo estado para controlar si ya se cargaron los datos
  fetchEvents: () => Promise<void>;
  clearError: () => void;
  resetStore: () => void; // Función para resetear el store si es necesario
}

export const useEventsStore = create<EventsState>((set, get) => ({
  events: [],
  loading: false,
  error: null,
  hasLoaded: false,

  fetchEvents: async () => {
    const { hasLoaded, loading } = get();
    
    // Si ya se cargaron los datos y no hay error, no hacer nada
    if (hasLoaded && !loading) {
      return;
    }
    
    set({ loading: true, error: null });
    
    try {
      const response = await fetch('/api/events', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      
      if (data.error) {
        throw new Error(data.error);
      }

      if (!data.success) {
        throw new Error('API returned success: false');
      }

      set({ 
        events: data.data, 
        loading: false, 
        hasLoaded: true 
      });
    } catch (error) {
      console.error('Error fetching events:', error);
      set({ 
        error: error instanceof Error ? error.message : 'Error desconocido',
        loading: false 
      });
    }
  },

  clearError: () => {
    set({ error: null });
  },

  resetStore: () => {
    set({ 
      events: [], 
      loading: false, 
      error: null, 
      hasLoaded: false 
    });
  },
})); 