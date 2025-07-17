import React from 'react';
import { FaMusic, FaUser } from 'react-icons/fa';
import { CiCalendar } from "react-icons/ci";
import { LiaMapMarkerAltSolid } from "react-icons/lia";



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
}

const Card: React.FC<CardProps> = ({ 
  image, 
  title, 
  description, 
  date, 
  address, 
  buttons,
  artists,
  age,
  musicGenres,
  outfit
}) => {
  const handleButtonClick = (button: { label: string; onClick?: () => void; href?: string }) => {
    if (button.onClick) {
      button.onClick();
    } else if (button.href) {
      window.open(button.href, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="bg-zinc-900/95 rounded-2xl shadow-lg text-white overflow-hidden flex flex-col min-h-[340px] transition-transform duration-200 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-2xl">
      {image && (
        <div className="w-full h-[180px] overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover rounded-t-2xl" />
        </div>
      )}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-lg font-bold mb-2 tracking-wide">{title}</h3>
        <p className="text-base text-zinc-300 mb-4 line-clamp-2">{description}</p>
        
        {/* Información adicional del evento */}
        <div className="flex flex-col gap-1 text-sm text-zinc-400 mb-4">
          <span> <CiCalendar /> {date}</span>
          <span> <LiaMapMarkerAltSolid /> {address}</span>
          {age && <span> <FaUser /> +{age} años</span>}
          {musicGenres && <span> <FaMusic /> {musicGenres}</span>}
          {outfit && <span>👔 {outfit}</span>}
        </div>

        {/* Artistas */}
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

        <div className="mt-auto flex gap-3">
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