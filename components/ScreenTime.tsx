import React, { useState } from 'react';
import type { Child } from '../types';

const Toggle: React.FC<{ enabled: boolean; onChange: (enabled: boolean) => void; }> = ({ enabled, onChange }) => {
  return (
    <button
      onClick={() => onChange(!enabled)}
      className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors ${enabled ? 'bg-brand-primary' : 'bg-base-300'}`}
    >
      <span className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${enabled ? 'translate-x-6' : 'translate-x-1'}`} />
    </button>
  );
};

const ScreenTime: React.FC<{ child: Child }> = ({ child }) => {
  const [limit, setLimit] = useState(child.screenTime.limit);
  const [bedtime, setBedtime] = useState(child.bedtime);
  
  const hours = Math.floor(limit / 60);
  const minutes = limit % 60;

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div className="bg-base-200 p-6 rounded-2xl shadow-lg">
        <h3 className="text-xl font-semibold text-text-primary mb-4">Daily Time Limit</h3>
        <div className="flex items-center justify-between mb-2">
          <span className="text-text-secondary">Set daily limit</span>
          <span className="text-2xl font-bold">{hours}h {minutes}m</span>
        </div>
        <input
          type="range"
          min="30"
          max="360"
          step="15"
          value={limit}
          onChange={(e) => setLimit(parseInt(e.target.value))}
          className="w-full h-2 bg-base-300 rounded-lg appearance-none cursor-pointer accent-brand-primary"
        />
        <div className="flex justify-between text-xs text-text-secondary mt-1">
          <span>30 min</span>
          <span>6 hours</span>
        </div>
      </div>

      <div className="bg-base-200 p-6 rounded-2xl shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-text-primary">Bedtime Schedule</h3>
          <Toggle enabled={bedtime.enabled} onChange={(e) => setBedtime({...bedtime, enabled: e})}/>
        </div>
        <p className="text-text-secondary mb-4">Block device usage during scheduled hours.</p>
        <div className={`grid grid-cols-2 gap-4 transition-opacity ${bedtime.enabled ? 'opacity-100' : 'opacity-50 pointer-events-none'}`}>
          <div>
            <label htmlFor="start-time" className="block text-sm font-medium text-text-secondary mb-1">From</label>
            <input 
              type="time" 
              id="start-time"
              value={bedtime.start}
              onChange={(e) => setBedtime({...bedtime, start: e.target.value})}
              className="bg-base-300 border-none text-text-primary rounded-lg block w-full p-2.5" 
            />
          </div>
          <div>
            <label htmlFor="end-time" className="block text-sm font-medium text-text-secondary mb-1">To</label>
            <input 
              type="time" 
              id="end-time"
              value={bedtime.end}
              onChange={(e) => setBedtime({...bedtime, end: e.target.value})}
              className="bg-base-300 border-none text-text-primary rounded-lg block w-full p-2.5" 
            />
          </div>
        </div>
      </div>
       <div className="flex justify-end">
         <button className="bg-brand-primary text-white font-bold py-2 px-6 rounded-lg hover:bg-opacity-90 transition-colors">
            Save Changes
        </button>
      </div>
    </div>
  );
};

export default ScreenTime;
