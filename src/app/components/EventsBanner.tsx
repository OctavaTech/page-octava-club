'use client';
import React, { useState, useEffect } from 'react';
import { ProcessedEvent } from '../types/Event';
import { FaChevronLeft, FaChevronRight, FaPlay, FaPause, FaTimes } from 'react-icons/fa';

interface EventsBannerProps {
  events: ProcessedEvent[];
  loading: boolean;
}

const EventsBanner: React.FC<EventsBannerProps> = ({ events, loading }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [selectedEvent, setSelectedEvent] = useState<ProcessedEvent | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const eventsPerView = 6; // Mostrar 6 eventos a la vez

  // Auto-play
  useEffect(() => {
    if (!isAutoPlaying || events.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.max(1, events.length - eventsPerView + 1));
    }, 5000); // Cambiar cada 4 segundos

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

  const openEventModal = (event: ProcessedEvent) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
    setIsAutoPlaying(false); // Pausar el banner
  };

  const closeEventModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
    setIsAutoPlaying(true); // Reanudar el banner
  };

  // Cerrar modal con Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeEventModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevenir scroll
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

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
                 <div className="p-3 flex flex-col min-h-[120px]">
                   <div className="flex-grow">
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
                      <div className="mb-2">
                        <div className="flex flex-wrap gap-1">
                          {event.musicGenres ? (
                            event.musicGenres.split(', ').slice(0, 1).map((genre, idx) => (
                              <span
                                key={idx}
                                className="text-xs bg-blue-600/20 text-blue-300 px-2 py-1 rounded-full"
                              >
                                {genre}
                              </span>
                            ))
                          ) : (
                            <span className="text-xs bg-blue-600/20 text-blue-300 px-2 py-1 rounded-full">
                              techno
                            </span>
                          )}
                        </div>
                      </div>
                   </div>

                   {/* Botón principal - siempre al fondo */}
                   <div className="mt-auto pt-2">
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
                 </div>

                {/* Overlay hover - solo en la imagen */}
                <div 
                  className="absolute top-0 left-0 right-0 h-32 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer"
                  onClick={() => openEventModal(event)}
                >
                  <div className="text-center">
                    <p className="text-white text-sm font-semibold">Ver Detalles</p>
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

      {/* Modal de detalles del evento */}
      {isModalOpen && selectedEvent && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4">
          {/* Overlay */}
          <div 
            className="absolute inset-0 bg-black/90 backdrop-blur-md z-[99999]"
            onClick={closeEventModal}
          ></div>
          
                     {/* Modal */}
           <div className="relative bg-zinc-900 rounded-2xl max-w-xl w-full max-h-[90vh] overflow-hidden shadow-2xl z-[999999]">
             {/* Header del modal */}
             <div className="sticky top-0 bg-zinc-900 rounded-t-2xl p-3 md:p-4 border-b border-zinc-800 z-20">
               <div className="flex justify-between items-start">
                 <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-white pr-4 line-clamp-2">
                   {selectedEvent.title}
                 </h2>
                 <button
                   onClick={closeEventModal}
                   className="text-zinc-400 hover:text-white transition-colors p-2 flex-shrink-0"
                 >
                   <FaTimes size={20} />
                 </button>
               </div>
             </div>

             {/* Contenido del modal - Layout vertical en móvil, horizontal en desktop */}
             <div className="flex flex-col lg:flex-row">
               {/* Imagen del evento - Arriba en móvil, izquierda en desktop */}
               {selectedEvent.image && (
                 <div className="w-full lg:w-1/2 relative">
                   <div className="relative h-48 md:h-56 lg:h-full">
                     <img
                       src={selectedEvent.image}
                       alt={selectedEvent.title}
                       className="w-full h-full object-cover"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                     
                     {/* Badge de edad */}
                     <div className="absolute top-3 right-3 bg-red-600 text-white px-2 py-1 rounded-full text-xs font-bold">
                       +{selectedEvent.age}
                     </div>
                   </div>
                 </div>
               )}

               {/* Contenido - Abajo en móvil, derecha en desktop */}
               <div className="w-full lg:w-1/2 p-3 md:p-4 overflow-y-auto">
                 {/* Descripción */}
                 <div className="mb-3 md:mb-4">
                   <p className="text-xs md:text-sm text-zinc-300 leading-relaxed">
                     {selectedEvent.description}
                   </p>
                 </div>

                 {/* Botones de acción - Solo botones que no sean "Ver Detalles" */}
                 <div className="flex flex-col gap-2 pt-3 border-t border-zinc-800">
                   {selectedEvent.buttons
                     .filter(button => !button.label.toLowerCase().includes('detalles') && !button.label.toLowerCase().includes('ver'))
                     .map((button, btnIndex) => (
                       <button
                         key={btnIndex}
                         onClick={() => {
                           if (button.onClick) {
                             button.onClick();
                           } else if (button.href) {
                             window.open(button.href, '_blank', 'noopener,noreferrer');
                           }
                         }}
                         className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 md:py-3 px-4 rounded-lg text-sm md:text-base font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                       >
                         {button.label}
                       </button>
                     ))}
                 </div>
               </div>
             </div>
           </div>
        </div>
      )}
    </div>
  );
};

export default EventsBanner; 