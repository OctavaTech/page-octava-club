import { ApiEvent, Channel, ApiResponse, ApiConfig } from '../types/Event';

class FourVenuesApiService {
  private config: ApiConfig;

  constructor(config: ApiConfig) {
    this.config = config;
  }

  async authenticate(): Promise<any> {
    try {
      const response = await fetch('/api/auth', {
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
      
      return data;
    } catch (error) {
      console.error('Error authenticating:', error);
      throw error;
    }
  }

  private async makeRequest<T>(endpoint: string): Promise<T> {
    const url = `${this.config.baseUrl}${endpoint}`;
    
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'X-Api-Key': this.config.apiKey,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);
      }

      const data: ApiResponse<T> = await response.json();
      
      if (!data.success) {
        throw new Error('API returned success: false');
      }

      return data.data;
    } catch (error) {
      console.error(`Error fetching ${endpoint}:`, error);
      throw error;
    }
  }

  async getChannels(): Promise<Channel[]> {
    return this.makeRequest<Channel[]>('/integrations/channels');
  }

  async getEvents(channelSlug?: string): Promise<ApiEvent[]> {
    const slug = channelSlug || this.config.channelSlug;
    if (!slug) {
      throw new Error('Channel slug is required to fetch events');
    }
    
    return this.makeRequest<ApiEvent[]>(`/integrations/channels/${slug}/events`);
  }

  async getEventBySlug(channelSlug: string, eventSlug: string): Promise<ApiEvent> {
    return this.makeRequest<ApiEvent>(`/integrations/channels/${channelSlug}/events/${eventSlug}`);
  }

  async getEventById(eventId: string): Promise<ApiEvent> {
    return this.makeRequestWithAlphaApi<ApiEvent>(`/integrations/events/${eventId}`);
  }

    async getAllEvents(): Promise<ApiEvent[]> {
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

      const data: ApiResponse<ApiEvent[]> = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      if (!data.success) {
        throw new Error('API returned success: false');
      }

      return data.data;
    } catch (error) {
      console.error(`Error fetching events:`, error);
      throw error;
    }
  }

  private async makeRequestWithAlphaApi<T>(endpoint: string): Promise<T> {
    const url = `https://api-alpha.fourvenues.com${endpoint}`;
    
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'integration_id': this.config.apiKey,
          'secret': this.config.apiKey,
          'x-api-key': this.config.apiKey,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);
      }

      const data: ApiResponse<T> = await response.json();
      
      if (!data.success) {
        throw new Error('API returned success: false');
      }

      return data.data;
    } catch (error) {
      console.error(`Error fetching ${endpoint}:`, error);
      throw error;
    }
  }
}

// Singleton instance
let apiServiceInstance: FourVenuesApiService | null = null;

export const initFourVenuesApi = (config: ApiConfig): FourVenuesApiService => {
  apiServiceInstance = new FourVenuesApiService(config);
  return apiServiceInstance;
};

export const getFourVenuesApi = (): FourVenuesApiService => {
  if (!apiServiceInstance) {
    throw new Error('FourVenues API not initialized. Call initFourVenuesApi first.');
  }
  return apiServiceInstance;
};

export { FourVenuesApiService }; 