'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { ProcessedEvent } from '../types/Event';
import { FaTimes, FaCalendar, FaMapMarkerAlt, FaMusic, FaTshirt, FaUsers, FaClock } from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';

interface ModalContextType {
  openEventModal: (event: ProcessedEvent) => void;
  closeEventModal: () => void;
  selectedEvent: ProcessedEvent | null;
  isModalOpen: boolean;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};

interface ModalProviderProps {
  children: ReactNode;
}

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [selectedEvent, setSelectedEvent] = useState<ProcessedEvent | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openEventModal = (event: ProcessedEvent) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeEventModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
    document.body.style.overflow = 'unset';
  };

  // Cerrar modal con Escape
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeEventModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isModalOpen]);

  // Formatear fecha para mostrar día de la semana
  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      const options: Intl.DateTimeFormatOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      };
      return date.toLocaleDateString('es-ES', options);
    } catch {
      return dateString;
    }
  };

  // Extraer horario de la fecha
  const extractTime = (dateString: string) => {
    try {
      // Buscar patrón de hora en el string (ej: "21:00", "9:00 PM", etc.)
      const timeMatch = dateString.match(/(\d{1,2}):(\d{2})/);
      if (timeMatch) {
        return `${timeMatch[0]} - 03:00`; // Asumiendo que termina a las 3:00
      }
      return '21:00 - 03:00'; // Horario por defecto
    } catch {
      return '21:00 - 03:00';
    }
  };

  return (
    <ModalContext.Provider value={{ openEventModal, closeEventModal, selectedEvent, isModalOpen }}>
      {children}
      
      {/* Modal renderizado fuera del componente */}
      {isModalOpen && selectedEvent && (
        <div className="fixed inset-0 z-[999999] flex items-center justify-center p-3 sm:p-4">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            onClick={closeEventModal}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: 'spring', stiffness: 220, damping: 24, mass: 0.8 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="event-modal-title"
            className="relative bg-zinc-900 rounded-2xl w-full max-w-[95vw] sm:max-w-2xl lg:max-w-4xl shadow-2xl max-h-[92vh] flex flex-col overflow-hidden"
          >
            {/* Header del modal */}
                 <div className="relative h-48 md:h-56 overflow-hidden">
                {selectedEvent.image && (
                  <img
                    src={selectedEvent.image}
                    alt={selectedEvent.title}
                    className="w-full h-full object-cover"
                  />
                )}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/60 to-transparent" />
          
          {/* Botón cerrar */}
          <button
            onClick={closeEventModal}
            aria-label="Cerrar"
            className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
          >
            <FaTimes size={20} />
          </button>

          {/* Badge de edad */}
          <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-2 rounded-full text-sm font-bold">
            +{selectedEvent.age}
          </div>

          {/* Título y fecha en overlay */}
          <div className="absolute bottom-6 left-6 right-6">
            <h2 id="event-modal-title" className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">
              {selectedEvent.title}
            </h2>
          </div>
        </div>

        {/* Contenido */}
        <div className="p-5 sm:p-6 md:p-8 flex-1 overflow-y-auto pb-24 md:pb-8">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {/* Columna principal - Información */}
            <div className="md:col-span-2 space-y-6">
              {/* Información básica */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

                {selectedEvent.musicGenres && (
                  <div className="flex items-center gap-3 text-zinc-300">
                    <div className="p-2 rounded-lg bg-purple-600/20 text-purple-400">
                      <FaMusic size={16} />
                    </div>
                    <div>
                      <div className="text-xs text-zinc-500 uppercase tracking-wide">Género Musical</div>
                      <div className="text-sm font-medium">{selectedEvent.musicGenres}</div>
                    </div>
                  </div>
                )}

                {selectedEvent.artists.length > 0 && (
                  <div className="flex items-center gap-3 text-zinc-300">
                    <div className="p-2 rounded-lg bg-orange-600/20 text-orange-400">
                      <FaUsers size={16} />
                    </div>
                    <div>
                      <div className="text-xs text-zinc-500 uppercase tracking-wide">Artistas</div>
                      <div className="text-sm font-medium">{selectedEvent.artists.join(', ')}</div>
                    </div>
                  </div>
                )}
              </div>

              {/* Descripción */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Información</h3>
                <div className="prose prose-invert prose-sm sm:prose-base max-w-none max-h-[45vh] md:max-h-none overflow-y-auto md:overflow-visible scrollbar-thin scrollbar-thumb-zinc-700/70 scrollbar-track-transparent pr-2 md:pr-0 leading-relaxed">
                  <ReactMarkdown
                    components={{
                      h1: ({ children }) => <h1 className="text-xl font-bold text-white mb-2">{children}</h1>,
                      h2: ({ children }) => <h2 className="text-lg font-bold text-white mb-2">{children}</h2>,
                      h3: ({ children }) => <h3 className="text-base font-semibold text-white mb-2">{children}</h3>,
                      p: ({ children }) => <p className="text-zinc-300 mb-3">{children}</p>,
                      ul: ({ children }) => <ul className="text-zinc-300 mb-2 list-disc list-inside space-y-1">{children}</ul>,
                      ol: ({ children }) => <ol className="text-zinc-300 mb-2 list-decimal list-inside space-y-1">{children}</ol>,
                      li: ({ children }) => <li className="text-zinc-300">{children}</li>,
                      strong: ({ children }) => <strong className="text-white font-semibold">{children}</strong>,
                      em: ({ children }) => <em className="text-blue-300 italic">{children}</em>,
                      blockquote: ({ children }) => (
                        <blockquote className="border-l-4 border-blue-500 pl-4 my-4 text-zinc-400 italic">
                          {children}
                        </blockquote>
                      ),
                    }}
                  >
                    {selectedEvent.description}
                  </ReactMarkdown>
                </div>
              </div>
            </div>

            {/* Sidebar - Entradas */}
            <div className="space-y-6 md:sticky md:top-6 h-fit hidden md:block">
              <div>
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Entradas
                </h3>

                <div className="space-y-4">                   
                    {/* Botones de acción en desktop */}
                    <div className="m-2 flex flex-col sm:flex-row gap-3">
                      {selectedEvent.buttons
                        .filter(button => button.label.toLowerCase().includes('comprar'))
                        .map((button, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            if (button.onClick) {
                              button.onClick();
                            } else if (button.href) {
                              window.open(button.href, '_blank', 'noopener,noreferrer');
                            }
                          }}
                          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
                        >
                          {button.label }
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          {/* CTA fijo en mobile al fondo del modal */}
          <div className="md:hidden absolute bottom-0 left-0 right-0 z-10 bg-zinc-900/95 backdrop-blur border-t border-zinc-800 p-4 flex gap-3">
            {selectedEvent.buttons
              .filter(button => button.label.toLowerCase().includes('comprar'))
              .map((button, index) => (
                <button
                  key={`mobile-cta-${index}`}
                  onClick={() => {
                    if (button.onClick) {
                      button.onClick();
                    } else if (button.href) {
                      window.open(button.href, '_blank', 'noopener,noreferrer');
                    }
                  }}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold"
                >
                  {button.label}
                </button>
              ))}
          </div>
          {/* Cierre del contenedor scrollable del contenido */}
          </div>
          </motion.div>
        </div>
      )}
    </ModalContext.Provider>
  );
}; 