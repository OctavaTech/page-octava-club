import React from 'react';

interface EventTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const EventTabs: React.FC<EventTabsProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'todos', label: 'TODOS' },
    { id: 'electronica', label: 'ELECTRÓNICA' },
    { id: 'salsa', label: 'SALSA' },
    { id: 'pop', label: 'POP' },
    { id: 'rock', label: 'ROCK' },
    { id: 'jazz', label: 'JAZZ' }
  ];

  return (
    <div className="flex gap-8 mb-8 border-b border-zinc-700 overflow-x-auto">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`pb-3 px-1 text-sm font-medium whitespace-nowrap transition-colors duration-200 relative ${
            activeTab === tab.id
              ? 'text-white border-b-2 border-red-500'
              : 'text-zinc-400 hover:text-zinc-200'
          }`}
        >
          {tab.label}
          {activeTab === tab.id && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-500"></div>
          )}
        </button>
      ))}
    </div>
  );
};

export default EventTabs; 