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
        <div className="fixed inset-0 z-[999999] flex items-center justify-center p-4">
          {/* Overlay */}
          <div 
            className="absolute inset-0 bg-black/90 backdrop-blur-md"
            onClick={closeEventModal}
          ></div>
          
          {/* Modal */}
          <div className="relative bg-zinc-900 rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
            <div className="flex h-full">
              {/* Imagen del evento - Lado izquierdo */}
              {selectedEvent.image && (
                <div className="w-1/2 relative">
                  <div className="relative h-full min-h-[600px]">
                    <img
                      src={selectedEvent.image}
                      alt={selectedEvent.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                    
                    {/* Badge de edad */}
                    <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                      +{selectedEvent.age}
                    </div>
                  </div>
                </div>
              )}

              {/* Información del evento - Lado derecho */}
              <div className="w-1/2 flex flex-col">
                {/* Header con botón cerrar */}
                <div className="flex justify-between items-start p-6 border-b border-zinc-800">
                  {/* Fecha y hora */}
                  <div className="text-white/80 text-sm uppercase tracking-wide">
                    {selectedEvent.date} | 21:00 → 03:00
                  </div>
                  
                  {/* Botón cerrar */}
                  <button
                    onClick={closeEventModal}
                    className="text-zinc-400 hover:text-white transition-colors p-2"
                  >
                    <FaTimes size={20} />
                  </button>
                </div>

                {/* Contenido scrolleable */}
                <div className="flex-1 overflow-y-auto p-6">
                  {/* Título del evento */}
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    {selectedEvent.title}
                  </h2>

                  {/* Información adicional */}
                  <div className="flex flex-wrap gap-4 text-sm text-white/80 mb-6">
                    <div className="flex items-center gap-2">
                      <FaUsers className="text-white" />
                      <span>+{selectedEvent.age}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaTshirt className="text-white" />
                      <span>Black dress code</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaMapMarkerAlt className="text-white" />
                      <span>Internacional • lgbt-friendly</span>
                    </div>
                  </div>

                  {/* Géneros musicales */}
                  {selectedEvent.musicGenres && (
                    <div className="flex flex-wrap gap-2 mb-6">
                      {selectedEvent.musicGenres.split(', ').map((genre, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-zinc-800 text-white px-2 py-1 rounded"
                        >
                          <FaMusic className="inline mr-1" size={10} />
                          {genre}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Sección de listas */}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                      <span className="text-blue-400">■</span>
                      Información
                    </h3>
                    
                    {/* Lista de entrada gratuita para mujeres */}
                    <div className="bg-zinc-800/50 rounded-lg p-4 mb-4">
                      <div className="flex justify-between items-center">
                         {/* Descripción con markdown */}
                  <div className="prose prose-invert prose-sm max-w-none text-zinc-300 leading-relaxed">
                    <ReactMarkdown 
                      components={{
                        h1: ({children}) => <h1 className="text-xl font-bold text-white mb-3">{children}</h1>,
                        h2: ({children}) => <h2 className="text-lg font-bold text-white mb-2">{children}</h2>,
                        h3: ({children}) => <h3 className="text-base font-bold text-white mb-2">{children}</h3>,
                        p: ({children}) => <p className="text-zinc-300 mb-3 leading-relaxed">{children}</p>,
                        ul: ({children}) => <ul className="list-disc list-inside text-zinc-300 mb-3">{children}</ul>,
                        ol: ({children}) => <ol className="list-decimal list-inside text-zinc-300 mb-3">{children}</ol>,
                        li: ({children}) => <li className="mb-1">{children}</li>,
                        strong: ({children}) => <strong className="text-white font-semibold">{children}</strong>,
                        em: ({children}) => <em className="text-blue-300">{children}</em>,
                        a: ({children, href}) => <a href={href} className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener noreferrer">{children}</a>
                      }}
                    >
                      {selectedEvent.description}
                    </ReactMarkdown>
                  </div>
                     
                      </div>
                    </div>
                  </div>

                  {/* Botón de compra principal */}
                  <div className="mb-6">
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
                          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg text-base font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                        >
                          {button.label}
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