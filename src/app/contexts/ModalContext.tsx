'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { ProcessedEvent } from '../types/Event';
import { FaTimes, FaCalendar, FaMapMarkerAlt, FaMusic, FaTshirt, FaUsers } from 'react-icons/fa';
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

  return (
    <ModalContext.Provider value={{ openEventModal, closeEventModal, selectedEvent, isModalOpen }}>
      {children}
      
      {/* Modal renderizado fuera del componente */}
      {isModalOpen && selectedEvent && (
        <div className="fixed inset-0 z-[999999] flex items-center justify-center p-2 sm:p-4 md:p-6">
          {/* Overlay */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
            onClick={closeEventModal}
          ></div>
          
          {/* Modal */}
          <div className="relative bg-zinc-900/80 backdrop-blur-md rounded-3xl max-w-2xl w-full h-[70vh] overflow-hidden shadow-2xl border border-zinc-700/50">
            <div className="flex flex-col lg:flex-row h-full">
              {/* Imagen del evento - Pequeña arriba en móvil, completa izquierda en desktop */}
              {selectedEvent.image && (
                <div className="w-full lg:w-1/2 relative h-48 sm:h-56 lg:h-full">
                  <div className="relative h-full w-full">
                    <img
                      src={selectedEvent.image}
                      alt={selectedEvent.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                    
                    {/* Badge de edad */}
                    <div className="absolute top-3 left-3 bg-red-600 text-white px-2 py-1 rounded-full text-xs font-bold">
                      +{selectedEvent.age}
                    </div>
                  </div>
                </div>
              )}

              {/* Panel de información - Abajo en móvil, derecha en desktop */}
              <div className="w-full lg:w-1/2 flex flex-col flex-1 lg:h-full">
                {/* Header con botón cerrar - FIJO */}
                <div className="flex-shrink-0 flex justify-between items-start px-3 py-2 border-b border-zinc-800 bg-zinc-900/95">
                  {/* Fecha y hora */}
                  <div className="text-white/80 text-xs sm:text-sm uppercase tracking-wide">
                    {selectedEvent.date}
                  </div>
                  
                  {/* Botón cerrar */}
                  <button
                    onClick={closeEventModal}
                    className="text-zinc-400 hover:text-white transition-colors px-2"
                  >
                    <FaTimes size={18} />
                  </button>
                </div>

                {/* Contenido scrolleable - ALTURA CALCULADA AUTOMÁTICAMENTE */}
                <div className="flex-1 overflow-hidden min-h-0">
                  <div className="overflow-y-auto h-full p-3 sm:p-4">
                  {/* Título del evento */}
                  <h2 className="text-base sm:text-lg lg:text-md font-bold text-white mb-2 sm:mb-3 leading-tight">
                    {selectedEvent.title}
                  </h2>

                  {/* Información adicional */}
                  <div className="flex flex-wrap gap-3 text-xs sm:text-sm text-white/80 mb-2">
                    <div className="flex items-center gap-1">
                      <FaUsers className="text-white" size={12} />
                      <span>+{selectedEvent.age}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaTshirt className="text-white" size={12} />
                      <span>{selectedEvent.outfit}</span>
                    </div>
                    {/* Géneros musicales */}
                  {selectedEvent.musicGenres && (
                    <div className="flex flex-wrap gap-1">
                      {selectedEvent.musicGenres.split(', ').map((genre, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-zinc-800 text-white px-2 py-0.5 rounded"
                        >
                          <FaMusic className="inline mr-1" size={8} />
                          {genre}
                        </span>
                      ))}
                    </div>
                  )}
                  </div>

                  {/* Sección de listas */}
                  <div className="mb-2">
                    <div className="bg-zinc-800/50 rounded-lg p-2">
                      <div className="flex justify-between items-center">
                         {/* Descripción con markdown */}
                  <div className="prose prose-invert max-w-none text-zinc-300 text-xs sm:text-sm leading-snug">
                    <ReactMarkdown 
                      components={{
                        p: ({children}) => <p className="text-zinc-300 mb-2 leading-snug text-xs sm:text-sm">{children}</p>,
                        ul: ({children}) => <ul className="list-disc list-inside text-zinc-300 mb-2 text-xs sm:text-sm">{children}</ul>,
                        ol: ({children}) => <ol className="list-decimal list-inside text-zinc-300 mb-2 text-xs sm:text-sm">{children}</ol>,
                        li: ({children}) => <li className="mb-0.5 text-xs sm:text-sm">{children}</li>,
                        strong: ({children}) => <strong className="text-white font-semibold text-xs sm:text-sm">{children}</strong>,
                        em: ({children}) => <em className="text-blue-300 text-xs sm:text-sm">{children}</em>,
                        a: ({children, href}) => <a href={href} className="text-blue-400 hover:text-blue-300 underline text-xs sm:text-sm" target="_blank" rel="noopener noreferrer">{children}</a>
                      }}
                    >
                      {selectedEvent.description}
                    </ReactMarkdown>
                  </div>
                     
                      </div>
                    </div>
                  </div>

                  </div>
                </div>

                {/* BOTÓN DE COMPRA - SOLO EN LA MITAD DERECHA */}
                <div className="flex-shrink-0 border-t border-zinc-800 bg-zinc-900/98 backdrop-blur-md p-3 sm:p-4">
                  <div className="flex justify-end">
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
                          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg text-sm sm:text-base font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] min-h-[48px] flex items-center justify-center border border-blue-500/20"
                        >
                          <span className="truncate max-w-full">{button.label}</span>
                        </button>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </ModalContext.Provider>
  );
}; 