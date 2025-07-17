import { ApiEvent, Channel, ApiResponse, ApiConfig } from '../types/Event';

class FourVenuesApiService {
  private config: ApiConfig;

  constructor(config: ApiConfig) {
    this.config = config;
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