'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { ProcessedEvent } from '../types/Event';
import { FaTimes } from 'react-icons/fa';

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
          <div className="relative bg-zinc-900 rounded-2xl max-w-xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
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
    </ModalContext.Provider>
  );
}; 