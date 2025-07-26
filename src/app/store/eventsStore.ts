import { create } from 'zustand';
import { ApiEvent } from '../types/Event';

interface EventsState {
  events: ApiEvent[];
  loading: boolean;
  error: string | null;
  fetchEvents: () => Promise<void>;
  clearError: () => void;
}

export const useEventsStore = create<EventsState>((set, get) => ({
  events: [],
  loading: false,
  error: null,

  fetchEvents: async () => {
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

      set({ events: data.data, loading: false });
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
})); 