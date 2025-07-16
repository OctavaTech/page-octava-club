import React from 'react';

interface CardProps {
  image?: string;
  title: string;
  description: string;
  date: string;
  address: string;
  buttons: Array<{ label: string; onClick?: () => void }>;
}

const Card: React.FC<CardProps> = ({ image, title, description, date, address, buttons }) => {
  return (
    <div className="bg-zinc-900/95 rounded-2xl shadow-lg text-white overflow-hidden flex flex-col min-h-[340px] transition-transform duration-200 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-2xl">
      {image && (
        <div className="w-full h-[180px] overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover rounded-t-2xl" />
        </div>
      )}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-lg font-bold mb-2 tracking-wide">{title}</h3>
        <p className="text-base text-zinc-300 mb-4">{description}</p>
        <div className="flex flex-col gap-1 text-sm text-zinc-400 mb-5">
          <span>📅 {date}</span>
          <span>📍 {address}</span>
        </div>
        <div className="mt-auto flex gap-3">
          {buttons.map((btn, idx) => (
            <button key={idx} onClick={btn.onClick} className="border border-white text-white rounded-full px-5 py-2 text-sm font-medium transition bg-transparent hover:bg-white hover:text-zinc-900">
              {btn.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card; 