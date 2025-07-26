import React from 'react';

interface LoadingSpinnerProps {
  message?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ message = "Cargando eventos..." }) => {
  return (
    <div className="flex flex-col justify-center items-center py-20">
      <div className="relative">
        {/* Spinner principal */}
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white"></div>
        
        {/* Spinner secundario */}
        <div className="absolute top-1 left-1 animate-spin rounded-full h-14 w-14 border-b-2 border-blue-400 animate-reverse"></div>
      </div>
      
      <div className="mt-6 text-center">
        <p className="text-white text-lg font-medium mb-2">{message}</p>
        <p className="text-zinc-400 text-sm">Conectando con FourVenues...</p>
      </div>
      
      {/* Puntos animados */}
      <div className="flex gap-1 mt-4">
        <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
        <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
        <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
      </div>
    </div>
  );
};

export default LoadingSpinner; 