import React from 'react';
import type { Child } from '../types';

const LocationTracker: React.FC<{ child: Child }> = ({ child }) => {
  const currentLocation = child.locationHistory[0];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 bg-base-200 p-6 rounded-2xl shadow-lg">
        <h3 className="text-xl font-semibold text-text-primary mb-4">Live Map</h3>
        <div className="aspect-video w-full rounded-lg overflow-hidden border-2 border-base-300">
          <iframe
            width="100%"
            height="100%"
            loading="lazy"
            allowFullScreen
            src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${currentLocation.lat},${currentLocation.lng}&zoom=15`}
            className="border-0"
          ></iframe>
          <div className="p-2 bg-base-300 text-center text-xs text-text-secondary">
            Note: Map embedding requires a Google Maps API key. This is a placeholder.
          </div>
        </div>
      </div>
      
      <div className="bg-base-200 p-6 rounded-2xl shadow-lg">
        <h3 className="text-xl font-semibold text-text-primary mb-4">Location History</h3>
        <ul className="space-y-4">
          {child.locationHistory.map((location, index) => (
            <li key={index} className="flex items-center p-3 bg-base-300 rounded-lg">
              <div className="p-2 bg-brand-secondary/20 rounded-full mr-4">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <div>
                <p className="font-semibold">{location.name}</p>
                <p className="text-sm text-text-secondary">{location.timestamp}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LocationTracker;
