import React from 'react';
interface CardProps {
  image?: string;
  title: string;
  description: string;
  date: string;
  address: string;
  buttons: Array<{ label: string; onClick?: () => void; href?: string }>;
  artists?: string[];
  age?: number;
  musicGenres?: string;
  outfit?: string;
  isDouble?: boolean; // Nueva prop para determinar si es card doble
}

const Card: React.FC<CardProps> = ({ 
  image, 
  title, 
  description, 
  date, 
  address, 
  buttons,
  isDouble = false
}) => {
  const handleButtonClick = (button: { label: string; onClick?: () => void; href?: string }) => {
    if (button.onClick) {
      button.onClick();
    } else if (button.href) {
      window.open(button.href, '_blank', 'noopener,noreferrer');
    }
  };

  // Layout horizontal para cards dobles
  if (isDouble) {
    return (
      <div className="bg-zinc-900/95 rounded-2xl shadow-lg text-white overflow-hidden flex min-h-[300px] transition-transform duration-200 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-2xl">
        {/* Imagen a la izquierda */}
        {image && (
          <div className="w-1/2 relative overflow-hidden">
            <img src={image} alt={title} className="w-full h-full object-cover rounded-l-2xl" />
            {/* Gradiente separador */}
            <div className="absolute top-0 right-0 w-4 h-full bg-gradient-to-l from-zinc-900/95 to-transparent"></div>
          </div>
        )}
        
        {/* Contenido a la derecha */}
        <div className="flex flex-col flex-1 p-6">
          <h3 className="text-xl font-bold mb-3 tracking-wide">{title}</h3>
          <p className="text-sm text-zinc-300 mb-4 line-clamp-3">{description}</p>
          
          {/* Información adicional del evento */}
          <div className="flex flex-col gap-2 text-sm text-zinc-400 mb-4">
            <span className="flex items-center gap-2"><img src="/icons/icon-location.svg" alt="location" className="w-4 h-4" /> {address}</span>
            <span className="flex items-center gap-2"><img src="/icons/icon-calendar.svg" alt="calendar" className="w-4 h-4" /> {date}</span>
          </div>

          {/* Artistas
          {artists && artists.length > 0 && (
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-zinc-300 mb-2">Artistas:</h4>
              <div className="flex flex-wrap gap-2">
                {artists.slice(0, 3).map((artist, idx) => (
                  <span key={idx} className="text-xs bg-zinc-800 px-3 py-1 rounded-full text-zinc-300">
                    {artist}
                  </span>
                ))}
                {artists.length > 3 && (
                  <span className="text-xs bg-zinc-800 px-3 py-1 rounded-full text-zinc-300">
                    +{artists.length - 3} más
                  </span>
                )}
              </div>
            </div>
          )}
          */}

          <div className="mt-auto flex gap-3">
            {buttons.map((btn, idx) => (
              <button 
                key={idx} 
                onClick={() => handleButtonClick(btn)}
                className="border border-white text-white rounded-full px-6 py-2 text-sm font-medium transition bg-transparent hover:bg-white hover:text-zinc-900"
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Layout vertical para cards simples con gradiente
  return (
    <div className="bg-zinc-900/95 rounded-2xl shadow-lg text-white overflow-hidden flex flex-col min-h-[380px] transition-transform duration-200 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-2xl">
      {/* Imagen arriba */}
      {image && (
        <div className="w-full h-[160px] overflow-hidden relative -mb-6">
          <img src={image} alt={title} className="w-full h-full object-cover rounded-b-2xl" />
        </div>
      )}
      
      {/* Gradiente separador */}
      <div className="h-8 bg-gradient-to-t from-zinc-900/95 to-transparent relative z-10"></div>
      
      {/* Contenido abjo */}
      <div className="flex flex-col flex-1 p-6 pb-0">
        <h3 className="text-lg font-bold mb-2 tracking-wide">{title}</h3>
        <p className="text-sm text-zinc-300 mb-4 line-clamp-2">{description}</p>
        
        {/* Información adicional del evento */}
        <div className="flex flex-col gap-1 text-sm text-zinc-400 mb-4">
          <span className="flex items-center gap-2"><img src="/icons/icon-location.svg" alt="location" className="w-4 h-4" /> {address}</span>
          <span className="flex items-center gap-2"><img src="/icons/icon-calendar.svg" alt="calendar" className="w-4 h-4" /> {date}</span>
        </div>

        {/* Artistas 
        {artists && artists.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-zinc-300 mb-1">Artistas:</h4>
            <div className="flex flex-wrap gap-1">
              {artists.slice(0, 2).map((artist, idx) => (
                <span key={idx} className="text-xs bg-zinc-800 px-2 py-1 rounded-full text-zinc-300">
                  {artist}
                </span>
              ))}
              {artists.length > 2 && (
                <span className="text-xs bg-zinc-800 px-2 py-1 rounded-full text-zinc-300">
                  +{artists.length - 2} más
                </span>
              )}
            </div>
          </div>
        )}
       */}
        <div className="flex gap-3 mb-4">
          {buttons.map((btn, idx) => (
            <button 
              key={idx} 
              onClick={() => handleButtonClick(btn)}
              className="border border-white text-white rounded-full px-5 py-2 text-sm font-medium transition bg-transparent hover:bg-white hover:text-zinc-900"
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card; 