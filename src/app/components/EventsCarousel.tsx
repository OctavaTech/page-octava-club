'use client';
import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ProcessedEvent } from '../types/Event';
import { FaChevronLeft, FaChevronRight, FaPlay, FaPause, FaCalendar, FaMapMarkerAlt, FaMusic, FaTshirt, FaUsers } from 'react-icons/fa';
import { useModal } from '../contexts/ModalContext';

interface EventsCarouselProps {
  events: ProcessedEvent[];
  loading: boolean;
}

const EventsCarousel: React.FC<EventsCarouselProps> = ({ events, loading }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [eventsPerView, setEventsPerView] = useState(3);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [virtualIndex, setVirtualIndex] = useState(0);
  const [isInstant, setIsInstant] = useState(false);
  const { openEventModal } = useModal();


  // Detectar el número de eventos por vista basado en el tamaño de pantalla
  useEffect(() => {
    const updateEventsPerView = () => {
      if (window.innerWidth < 768) {
        setEventsPerView(1); // Móvil: 1 evento
      } else if (window.innerWidth < 1024) {
        setEventsPerView(2); // Tablet: 2 eventos
      } else {
        setEventsPerView(3); // Desktop: 3 eventos
      }
    };

    updateEventsPerView();
    window.addEventListener('resize', updateEventsPerView);
    return () => window.removeEventListener('resize', updateEventsPerView);
  }, []);

  // Lista duplicada para loop infinito
  const duplicatedEvents = useMemo(() => {
    if (!events || events.length === 0) return [] as ProcessedEvent[];
    return [...events, ...events, ...events];
  }, [events]);

  // Inicializar índice virtual en el segmento central
  useEffect(() => {
    if (events.length > 0) {
      setVirtualIndex(events.length + currentIndex);
    }
  }, [events.length]);

  // Mantener el índice virtual en el bloque central para un loop continuo
  useEffect(() => {
    const total = events.length;
    if (total === 0) return;
    if (virtualIndex >= total * 2) {
      setIsInstant(true);
      setVirtualIndex((prev) => prev - total);
      requestAnimationFrame(() => setIsInstant(false));
    } else if (virtualIndex < total) {
      setIsInstant(true);
      setVirtualIndex((prev) => prev + total);
      requestAnimationFrame(() => setIsInstant(false));
    }
  }, [virtualIndex, events.length]);

  // Auto-play
  useEffect(() => {
    if (!isAutoPlaying || events.length === 0) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % Math.max(1, events.length - eventsPerView + 1));
      setVirtualIndex((prev) => prev + 1);
    }, 9000); // Cambiar cada 9 segundos

    return () => clearInterval(interval);
  }, [isAutoPlaying, events.length, eventsPerView]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => {
      if (prev >= events.length - eventsPerView) {
        // wrap hacia el inicio mantiene dirección positiva
        return 0;
      }
      return prev + 1;
    });
    setVirtualIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => 
      prev === 0 ? Math.max(0, events.length - eventsPerView) : prev - 1
    );
    setVirtualIndex((prev) => prev - 1);
  };

  const goToSlide = (index: number) => {
    const dir: 1 | -1 = index > currentIndex ? 1 : -1;
    setDirection(dir);
    setVirtualIndex((prev) => prev + (index - currentIndex));
    setCurrentIndex(index);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  const handleOpenModal = (event: ProcessedEvent) => {
    openEventModal(event);
    setIsAutoPlaying(false); // Pausar el carrusel
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
        <span className="ml-4 text-white">Cargando eventos...</span>
      </div>
    );
  }

  if (events.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-zinc-400 text-lg">No hay eventos disponibles en este momento</p>
      </div>
    );
  }

  return (
    <div className="relative w-full">
      {/* Controles del carrusel */}
      <div className="flex justify-end items-center mb-6">
        <div className="flex items-center gap-4">
          <button
            onClick={toggleAutoPlay}
            className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors"
          >
            {isAutoPlaying ? <FaPause size={16} /> : <FaPlay size={16} />}
            <span className="text-sm hidden sm:inline">{isAutoPlaying ? 'Pausar' : 'Reproducir'}</span>
          </button>
          
          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <FaChevronLeft className="text-white" size={16} />
            </button>
            
            <span className="text-white text-sm hidden sm:inline">
              {currentIndex + 1} - {Math.min(currentIndex + eventsPerView, events.length)} de {events.length}
            </span>
            
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <FaChevronRight className="text-white" size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Carrusel principal - infinito */}
      <div className="relative rounded-2xl">
        <motion.div
          className="flex"
          animate={{ x: `-${virtualIndex * (100 / eventsPerView)}%` }}
          transition={isInstant ? { duration: 0 } : { type: 'spring', stiffness: 260, damping: 28, mass: 0.9 }}
          style={{ willChange: 'transform' }}
        >
          {duplicatedEvents.map((event, index) => (
            <div
              key={`${event.id}-${index}`}
              className={`${
                eventsPerView === 1 ? 'w-full' : 
                eventsPerView === 2 ? 'w-1/2' : 'w-1/3'
              } flex-shrink-0 px-4`}
            >
              <div className="bg-zinc-900/70 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full max-w-sm mx-auto flex flex-col">
                {/* Imagen del evento */}
                <div className="relative h-48 sm:h-56 overflow-hidden rounded-t-xl">
                  {event.image && (
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                  
                  {/* Badge de edad */}
                  <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    +{event.age}
                  </div>
                  
                </div>

                {/* Contenido */}
                <div className="p-4 sm:p-6 flex flex-col flex-grow">
                  <div className="flex-grow">
                    <h4 className="text-base sm:text-lg font-bold text-white mb-2 line-clamp-2 min-h-[3rem]">
                      {event.title}
                    </h4>
                    
                    <p className="text-xs sm:text-sm text-zinc-300 mb-3 line-clamp-2 min-h-[2.5rem]">
                      {event.description}
                    </p>

                    {/* Fecha y ubicación */}
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-zinc-400 mb-3">
                      <span className="flex items-center gap-1">
                        <img src="/icons/icon-calendar.svg" alt="calendar" className="w-3 h-3 sm:w-4 sm:h-4" />
                        {event.date}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-xs sm:text-sm text-zinc-400 mb-4">
                      <span className="flex items-center gap-1">
                        <img src="/icons/icon-location.svg" alt="location" className="w-3 h-3 sm:w-4 sm:h-4" />
                        {event.address}
                      </span>
                    </div>

                    {/* Géneros musicales */}
                    {event.musicGenres && (
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-1">
                          {event.musicGenres.split(', ').slice(0, 2).map((genre, idx) => (
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
                  </div>

                  {/* Botones - siempre al fondo */}
                  <div className="flex gap-2 mt-auto pt-4">
                    {event.buttons.map((button, btnIndex) => (
                      <button
                        key={btnIndex}
                        onClick={() => {
                          if (button.label.toLowerCase().includes('detalles') || button.label.toLowerCase().includes('ver')) {
                            handleOpenModal(event);
                          } else if (button.onClick) {
                            button.onClick();
                          } else if (button.href) {
                            window.open(button.href, '_blank', 'noopener,noreferrer');
                          }
                        }}
                        className="flex-1 border-2 border-blue-500 text-white py-2 px-3 sm:px-4 rounded-full text-xs sm:text-sm font-semibold hover:border-blue-500 hover:bg-blue-500 hover:text-white transition-colors"
                      >
                        {button.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

             {/* Indicadores de puntos */}
       <div className="flex justify-center mt-6 gap-2">
         {Array.from({ length: Math.ceil(events.length / eventsPerView) }).map((_, index) => (
           <button
             key={index}
             onClick={() => goToSlide(index * eventsPerView)}
             className={`w-3 h-3 rounded-full transition-colors ${
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

export default EventsCarousel; 