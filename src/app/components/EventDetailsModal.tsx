'use client';
import React, { useEffect } from 'react';
import { ProcessedEvent } from '../types/Event';
import { FaTimes, FaCalendar, FaMapMarkerAlt, FaMusic, FaTshirt, FaUsers, FaClock } from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';

interface EventDetailsModalProps {
  event: ProcessedEvent;
  isOpen: boolean;
  onClose: () => void;
}

const EventDetailsModal: React.FC<EventDetailsModalProps> = ({ event, isOpen, onClose }) => {
  // Cerrar modal con ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

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
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 overflow-y-auto">
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-zinc-900 rounded-2xl max-w-4xl w-full shadow-2xl min-h-10">
        {/* Header con imagen de fondo */}
        <div className="relative h-64 md:h-80 overflow-hidden">
          {event.image && (
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/60 to-transparent" />
          
          {/* Botón cerrar */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
          >
            <FaTimes size={20} />
          </button>

          {/* Badge de edad */}
          <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-2 rounded-full text-sm font-bold">
            +{event.age}
          </div>

          {/* Título y fecha en overlay */}
          <div className="absolute bottom-6 left-6 right-6">
            <div className="text-sm text-zinc-300 mb-2 uppercase tracking-wide">
              {formatDate(event.date)}
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">
              {event.title}
            </h2>
            <div className="flex items-center gap-2 text-zinc-300">
              <FaClock size={16} />
              <span>{extractTime(event.date)}</span>
            </div>
          </div>
        </div>

        {/* Contenido */}
        <div className="p-6 md:p-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Columna principal - Información */}
            <div className="md:col-span-2 space-y-6">
              {/* Información básica */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 text-zinc-300">
                  <div className="p-2 rounded-lg bg-blue-600/20 text-blue-400">
                    <FaMapMarkerAlt size={16} />
                  </div>
                  <div>
                    <div className="text-xs text-zinc-500 uppercase tracking-wide">Ubicación</div>
                    <div className="text-sm font-medium">{event.address}</div>
                  </div>
                </div>

                {event.musicGenres && (
                  <div className="flex items-center gap-3 text-zinc-300">
                    <div className="p-2 rounded-lg bg-purple-600/20 text-purple-400">
                      <FaMusic size={16} />
                    </div>
                    <div>
                      <div className="text-xs text-zinc-500 uppercase tracking-wide">Género Musical</div>
                      <div className="text-sm font-medium">{event.musicGenres}</div>
                    </div>
                  </div>
                )}

                {event.outfit && (
                  <div className="flex items-center gap-3 text-zinc-300">
                    <div className="p-2 rounded-lg bg-green-600/20 text-green-400">
                      <FaTshirt size={16} />
                    </div>
                    <div>
                      <div className="text-xs text-zinc-500 uppercase tracking-wide">Dress Code</div>
                      <div className="text-sm font-medium capitalize">{event.outfit}</div>
                    </div>
                  </div>
                )}

                {event.artists.length > 0 && (
                  <div className="flex items-center gap-3 text-zinc-300">
                    <div className="p-2 rounded-lg bg-orange-600/20 text-orange-400">
                      <FaUsers size={16} />
                    </div>
                    <div>
                      <div className="text-xs text-zinc-500 uppercase tracking-wide">Artistas</div>
                      <div className="text-sm font-medium">{event.artists.join(', ')}</div>
                    </div>
                  </div>
                )}
              </div>

              {/* Descripción */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Información</h3>
                <div className="prose prose-invert prose-sm max-w-none">
                  <ReactMarkdown
                    components={{
                      h1: ({ children }) => <h1 className="text-xl font-bold text-white mb-3">{children}</h1>,
                      h2: ({ children }) => <h2 className="text-lg font-bold text-white mb-2">{children}</h2>,
                      h3: ({ children }) => <h3 className="text-base font-semibold text-white mb-2">{children}</h3>,
                      p: ({ children }) => <p className="text-zinc-300 mb-3 leading-relaxed">{children}</p>,
                      ul: ({ children }) => <ul className="text-zinc-300 mb-3 list-disc list-inside space-y-1">{children}</ul>,
                      ol: ({ children }) => <ol className="text-zinc-300 mb-3 list-decimal list-inside space-y-1">{children}</ol>,
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
                    {event.description}
                  </ReactMarkdown>
                </div>
              </div>

              {/* Géneros musicales expandidos */}
              {event.musicGenres && (
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Géneros Musicales</h3>
                  <div className="flex flex-wrap gap-2">
                    {event.musicGenres.split(', ').map((genre, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm border border-blue-600/30"
                      >
                        {genre.trim()}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar - Entradas */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Entradas
                </h3>
                
                {/* Lista de entrada gratuita si aplica */}
                <div className="space-y-4">
                  {/* Entrada gratuita para mujeres */}
                  <div className="bg-zinc-800/50 rounded-xl p-4 border border-zinc-700/50">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-white">Entrada Free - Women</h4>
                      <span className="text-green-400 font-bold">Gratis</span>
                    </div>
                    <p className="text-xs text-zinc-400 mb-3">
                      Desde el inicio del evento hasta las 23:00 chicas gratis<br/>
                      Incluye: Solo acceso a las 100 primeras mujeres en llegar al evento hasta las 11:00PM
                    </p>
                    <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg text-sm font-semibold transition-colors">
                      Obtener
                    </button>
                  </div>

                  {/* Entrada general */}
                  <div className="bg-zinc-800/50 rounded-xl p-4 border border-zinc-700/50">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-white">Pre-venta GENERAL ANYTIME</h4>
                      <span className="text-white font-bold">35.000 COP</span>
                    </div>
                    <p className="text-xs text-zinc-400 mb-3">
                      Solo acceso al evento anytime.<br/>
                      ~$20.000 CONSUMIBLES~
                    </p>
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm font-semibold transition-colors">
                      Comprar
                    </button>
                  </div>

                  {/* Entrada VIP */}
                  <div className="bg-zinc-800/50 rounded-xl p-4 border border-yellow-600/30">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-white">VIP ANYTIME</h4>
                      <span className="text-yellow-400 font-bold">40.000 COP</span>
                    </div>
                    <p className="text-xs text-zinc-400 mb-3">
                      Acceso anytime a la zona VIP del evento<br/>
                      ~$20.000 CONSUMIBLES~
                    </p>
                    <button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-2 px-4 rounded-lg text-sm font-semibold transition-colors">
                      Comprar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Botones de acción en móvil */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            {event.buttons.map((button, index) => (
              <button
                key={index}
                onClick={() => {
                  if (button.onClick) {
                    button.onClick();
                  } else if (button.href) {
                    window.open(button.href, '_blank', 'noopener,noreferrer');
                  }
                  onClose();
                }}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
              >
                {button.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailsModal;