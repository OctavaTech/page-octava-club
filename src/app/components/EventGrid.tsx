import React from 'react';
import Card from './Card';
import { ProcessedEvent } from '../types/Event';

interface EventGridProps {
  events: ProcessedEvent[];
}

const EventGrid: React.FC<EventGridProps> = ({ events }) => {
  // Alternar patrón 2-1-1 y 1-1-2
  const rows: ProcessedEvent[][] = [];
  let i = 0;
  while (i < events.length) {
    rows.push(events.slice(i, i + 3));
    i += 3;
  }

  return (
    <div className="flex flex-col gap-8 mt-8">
      {rows.map((row, rowIdx) => (
        <div
          className={`grid gap-8 w-full ${rowIdx % 2 === 0 ? 'grid-cols-[2fr_1fr_1fr]' : 'grid-cols-[1fr_1fr_2fr]'} max-md:grid-cols-1`}
          key={rowIdx}
        >
          {row.map((event, idx) => {
            // Determinar si la card es doble según el patrón del grid
            let isDouble = false;
            if (rowIdx % 2 === 0) {
              // Filas pares: 2fr_1fr_1fr (primera card es doble)
              isDouble = idx === 0;
            } else {
              // Filas impares: 1fr_1fr_2fr (tercera card es doble)
              isDouble = idx === 2;
            }

            return (
              <Card 
                key={event.id} 
                {...event} 
                isDouble={isDouble}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default EventGrid; 