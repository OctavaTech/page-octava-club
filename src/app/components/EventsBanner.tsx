'use client';
import React, { useState, useEffect } from 'react';
import { ProcessedEvent } from '../types/Event';
import { FaChevronLeft, FaChevronRight, FaPlay, FaPause } from 'react-icons/fa';

interface EventsBannerProps {
  events: ProcessedEvent[];
  loading: boolean;
}

const EventsBanner: React.FC<EventsBannerProps> = ({ events, loading }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const eventsPerView = 6; // Mostrar 6 eventos a la vez

  // Auto-play
  useEffect(() => {
    if (!isAutoPlaying || events.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.max(1, events.length - eventsPerView + 1));
    }, 4000); // Cambiar cada 4 segundos

    return () => clearInterval(interval);
  }, [isAutoPlaying, events.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev >= events.length - eventsPerView ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? Math.max(0, events.length - eventsPerView) : prev - 1
    );
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
        <span className="ml-3 text-white">Cargando eventos...</span>
      </div>
    );
  }

  if (events.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-zinc-400">No hay eventos disponibles en este momento</p>
      </div>
    );
  }

  // Calcular eventos visibles
  const visibleEvents = events.slice(currentIndex, currentIndex + eventsPerView);

  return (
    <div className="relative w-full">
      {/* Controles del banner */}
      <div className="flex justify-end items-center mb-6">
        <div className="flex items-center gap-4">
          <button
            onClick={toggleAutoPlay}
            className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors"
          >
            {isAutoPlaying ? <FaPause size={14} /> : <FaPlay size={14} />}
            <span className="text-sm">{isAutoPlaying ? 'Pausar' : 'Reproducir'}</span>
          </button>
          
          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <FaChevronLeft className="text-white" size={14} />
            </button>
            
            <span className="text-white text-sm min-w-[80px] text-center">
              {currentIndex + 1} - {Math.min(currentIndex + eventsPerView, events.length)} de {events.length}
            </span>
            
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <FaChevronRight className="text-white" size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* Banner principal */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-zinc-900/50 to-zinc-800/50 backdrop-blur-sm">
        <div className="p-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {visibleEvents.map((event, index) => (
              <div
                key={event.id}
                className="group relative bg-zinc-900/80 rounded-xl overflow-hidden hover:bg-zinc-800/90 transition-all duration-300 hover:scale-105"
              >
                {/* Imagen del evento */}
                <div className="relative h-32 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  {/* Badge de edad */}
                  <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded-full text-xs font-bold">
                    +{event.age}
                  </div>
                </div>

                {/* Contenido */}
                <div className="p-3">
                  <h4 className="text-sm font-bold text-white mb-1 line-clamp-1">
                    {event.title}
                  </h4>
                  
                  <p className="text-xs text-zinc-300 mb-2 line-clamp-2">
                    {event.description}
                  </p>

                  {/* Fecha */}
                  <div className="flex items-center gap-1 text-xs text-zinc-400 mb-2">
                    <img src="/icons/icon-calendar.svg" alt="calendar" className="w-3 h-3" />
                    <span className="line-clamp-1">{event.date}</span>
                  </div>

                  {/* Géneros musicales */}
                  {event.musicGenres && (
                    <div className="mb-3">
                      <div className="flex flex-wrap gap-1">
                        {event.musicGenres.split(', ').slice(0, 1).map((genre, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-blue-600/20 text-blue-300 px-2 py-1 rounded-full"
                          >
                            {genre}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Botón principal */}
                  <button
                    onClick={() => {
                      const primaryButton = event.buttons[0];
                      if (primaryButton?.href) {
                        window.open(primaryButton.href, '_blank', 'noopener,noreferrer');
                      }
                    }}
                    className="w-full bg-white text-zinc-900 py-1.5 px-3 rounded-lg text-xs font-semibold hover:bg-zinc-200 transition-colors"
                  >
                    {event.buttons[0]?.label || 'Ver Evento'}
                  </button>
                </div>

                {/* Overlay hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-white text-sm font-semibold mb-2">Ver Detalles</p>
                    <div className="flex gap-2">
                      {event.buttons.map((button, btnIndex) => (
                        <button
                          key={btnIndex}
                          onClick={(e) => {
                            e.stopPropagation();
                            if (button.onClick) {
                              button.onClick();
                            } else if (button.href) {
                              window.open(button.href, '_blank', 'noopener,noreferrer');
                            }
                          }}
                          className="bg-white text-zinc-900 py-1 px-3 rounded text-xs font-semibold hover:bg-zinc-200 transition-colors"
                        >
                          {button.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Indicadores de progreso */}
      <div className="flex justify-center mt-6 gap-2">
        {Array.from({ length: Math.ceil(events.length / eventsPerView) }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index * eventsPerView)}
            className={`w-2 h-2 rounded-full transition-colors ${
              Math.floor(currentIndex / eventsPerView) === index
                ? 'bg-white'
                : 'bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default EventsBanner; 