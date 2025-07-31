'use client';
import React, { useState, useEffect } from 'react';
import { ProcessedEvent } from '../types/Event';
import { FaChevronLeft, FaChevronRight, FaPlay, FaPause, FaTimes, FaCalendar, FaMapMarkerAlt, FaMusic, FaTshirt, FaUsers } from 'react-icons/fa';

interface EventsCarouselProps {
  events: ProcessedEvent[];
  loading: boolean;
}

const EventsCarousel: React.FC<EventsCarouselProps> = ({ events, loading }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [visibleEvents, setVisibleEvents] = useState<ProcessedEvent[]>([]);
  const [eventsPerView, setEventsPerView] = useState(4);
  const [selectedEvent, setSelectedEvent] = useState<ProcessedEvent | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Detectar el número de eventos por vista basado en el tamaño de pantalla
  useEffect(() => {
    const updateEventsPerView = () => {
      if (window.innerWidth < 768) {
        setEventsPerView(1); // Móvil: 1 evento
      } else if (window.innerWidth < 1024) {
        setEventsPerView(2); // Tablet: 2 eventos
      } else {
        setEventsPerView(4); // Desktop: 3 eventos
      }
    };

    updateEventsPerView();
    window.addEventListener('resize', updateEventsPerView);
    return () => window.removeEventListener('resize', updateEventsPerView);
  }, []);

  // Calcular eventos visibles basados en el índice actual
  useEffect(() => {
    if (events.length > 0) {
      const startIndex = currentIndex;
      const endIndex = Math.min(startIndex + eventsPerView, events.length);
      setVisibleEvents(events.slice(startIndex, endIndex));
    }
  }, [currentIndex, events, eventsPerView]);

  // Auto-play
  useEffect(() => {
    if (!isAutoPlaying || events.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.max(1, events.length - eventsPerView + 1));
    }, 9000); // Cambiar cada 9 segundos

    return () => clearInterval(interval);
  }, [isAutoPlaying, events.length, eventsPerView]);

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

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  const openEventModal = (event: ProcessedEvent) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
    setIsAutoPlaying(false); // Pausar el carrusel
  };

  const closeEventModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
    setIsAutoPlaying(true); // Reanudar el carrusel
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

      {/* Carrusel principal */}
      <div className="relative overflow-hidden rounded-2xl">
        <div className="flex transition-transform duration-700 ease-out">
          {visibleEvents.map((event, index) => (
            <div
              key={event.id}
              className={`flex-shrink-0 px-4 ${
                eventsPerView === 1 ? 'w-full' : 
                eventsPerView === 3 ? 'w-1/2' : 'w-1/4'
              }`}
            >
              <div className="bg-zinc-900/95 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full max-w-sm mx-auto flex flex-col">
                {/* Imagen del evento */}
                <div className="relative h-48 sm:h-56 overflow-hidden flex-shrink-0">
                  {event.image && (
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                      loading="eager"
                    />
                  )}
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
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
                            openEventModal(event);
                          } else if (button.onClick) {
                            button.onClick();
                          } else if (button.href) {
                            window.open(button.href, '_blank', 'noopener,noreferrer');
                          }
                        }}
                        className="flex-1 bg-white text-zinc-900 py-2 px-3 sm:px-4 rounded-lg text-xs sm:text-sm font-semibold hover:bg-zinc-200 transition-colors"
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

export default EventsCarousel; 