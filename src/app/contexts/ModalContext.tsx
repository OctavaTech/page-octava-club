'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { ProcessedEvent } from '../types/Event';
import EventDetailsModal from '../components/EventDetailsModal';

interface ModalContextType {
  isEventModalOpen: boolean;
  selectedEvent: ProcessedEvent | null;
  openEventModal: (event: ProcessedEvent) => void;
  closeEventModal: () => void;
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
  const [isEventModalOpen, setIsEventModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<ProcessedEvent | null>(null);

  const openEventModal = (event: ProcessedEvent) => {
    setSelectedEvent(event);
    setIsEventModalOpen(true);
    // Prevenir scroll del body cuando el modal está abierto
    document.body.style.overflow = 'hidden';
  };

  const closeEventModal = () => {
    setIsEventModalOpen(false);
    setSelectedEvent(null);
    // Restaurar scroll del body
    document.body.style.overflow = 'unset';
  };

  return (
    <ModalContext.Provider
      value={{
        isEventModalOpen,
        selectedEvent,
        openEventModal,
        closeEventModal,
      }}
    >
      {children}
      {/* Renderizar el modal */}
      {isEventModalOpen && selectedEvent && (
        <EventDetailsModal
          event={selectedEvent}
          isOpen={isEventModalOpen}
          onClose={closeEventModal}
        />
      )}
    </ModalContext.Provider>
  );
};
