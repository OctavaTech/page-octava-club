import React from 'react';
import Card from './Card';

interface Event {
  id: string;
  image?: string;
  title: string;
  description: string;
  date: string;
  address: string;
  buttons: Array<{ label: string; onClick?: () => void }>;
}

interface EventGridProps {
  events: Event[];
}

const EventGrid: React.FC<EventGridProps> = ({ events }) => {
  // Alternar patrón 2-1-1 y 1-1-2
  const rows: Event[][] = [];
  let i = 0;
  let pattern = true; // true: 2-1-1, false: 1-1-2
  while (i < events.length) {
    rows.push(events.slice(i, i + 3));
    i += 3;
    pattern = !pattern;
  }

  return (
    <div className="flex flex-col gap-8 mt-8">
      {rows.map((row, rowIdx) => (
        <div
          className={`grid gap-8 w-full ${rowIdx % 2 === 0 ? 'grid-cols-[2fr_1fr_1fr]' : 'grid-cols-[1fr_1fr_2fr]'} max-md:grid-cols-1`}
          key={rowIdx}
        >
          {row.map((event, idx) => (
            <Card key={event.id} {...event} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default EventGrid; 