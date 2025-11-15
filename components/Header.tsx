import React, { useState } from 'react';
import type { Child, ActiveView } from '../types';

interface HeaderProps {
  childrenData: Child[];
  selectedChild: Child;
  onSelectChild: (id: number) => void;
  activeView: ActiveView;
}

const Header: React.FC<HeaderProps> = ({ childrenData, selectedChild, onSelectChild, activeView }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const handleSelect = (id: number) => {
    onSelectChild(id);
    setIsDropdownOpen(false);
  }

  const viewTitles: Record<ActiveView, string> = {
    dashboard: 'Dashboard',
    apps: 'App Usage',
    location: 'Location',
    screentime: 'Screen Time',
    filters: 'Content Filters',
    mirror: 'Screen Mirror',
    camera: 'Camera View'
  };

  const title = viewTitles[activeView] || 'Dashboard';

  return (
    <header className="bg-base-200 p-4 flex items-center justify-between border-b border-base-300 flex-shrink-0">
      <h2 className="text-2xl font-bold text-text-primary">{title}</h2>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <button 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)} 
            className="flex items-center space-x-2 bg-base-300 px-4 py-2 rounded-lg hover:bg-opacity-80 transition-all"
          >
            <img src={selectedChild.avatar} alt={selectedChild.name} className="w-8 h-8 rounded-full" />
            <span className="font-medium">{selectedChild.name}</span>
            <svg className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-base-300 rounded-lg shadow-lg z-10">
              {childrenData.map(child => (
                <a 
                  key={child.id}
                  href="#"
                  onClick={(e) => { e.preventDefault(); handleSelect(child.id); }}
                  className="flex items-center px-4 py-2 text-text-secondary hover:bg-base-100 first:rounded-t-lg last:rounded-b-lg"
                >
                  <img src={child.avatar} alt={child.name} className="w-8 h-8 rounded-full mr-2" />
                  <span>{child.name}</span>
                </a>
              ))}
            </div>
          )}
        </div>
        <button className="relative p-2 rounded-full bg-base-300 hover:bg-opacity-80">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
          <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-red-500"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;