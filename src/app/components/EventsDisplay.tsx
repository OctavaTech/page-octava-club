'use client';
import React, { useState } from 'react';
import { ProcessedEvent } from '../types/Event';
import EventsBanner from './EventsBanner';
import EventsCarousel from './EventsCarousel';
import { FaTh, FaList } from 'react-icons/fa';

interface EventsDisplayProps {
  events: ProcessedEvent[];
  loading: boolean;
}

type DisplayMode = 'banner' | 'carousel';

const EventsDisplay: React.FC<EventsDisplayProps> = ({ events, loading }) => {
  const [displayMode, setDisplayMode] = useState<DisplayMode>('banner');

  return (
    <div className="w-full">
      {/* Controles de visualización */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">Eventos Destacados</h2>
          <p className="text-zinc-300">Descubre los mejores eventos de la noche</p>
        </div>
        
        <div className="flex items-center gap-2 bg-zinc-800/50 rounded-lg p-1">
          <button
            onClick={() => setDisplayMode('banner')}
            className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
              displayMode === 'banner'
                ? 'bg-white text-zinc-900'
                : 'text-white hover:bg-white/10'
            }`}
          >
            <FaTh size={14} />
            <span className="text-sm">Banner</span>
          </button>
          
          <button
            onClick={() => setDisplayMode('carousel')}
            className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
              displayMode === 'carousel'
                ? 'bg-white text-zinc-900'
                : 'text-white hover:bg-white/10'
            }`}
          >
            <FaList size={14} />
            <span className="text-sm">Carrusel</span>
          </button>
        </div>
      </div>

      {/* Contenido dinámico */}
      <div className="transition-all duration-300">
        {displayMode === 'banner' ? (
          <EventsBanner events={events} loading={loading} />
        ) : (
          <EventsCarousel events={events} loading={loading} />
        )}
      </div>
    </div>
  );
};

export default EventsDisplay; 