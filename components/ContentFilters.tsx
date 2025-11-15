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

const FilterItem: React.FC<{ title: string; description: string; enabled: boolean; onToggle: () => void; }> = ({ title, description, enabled, onToggle }) => (
  <div className="flex items-center justify-between p-4 bg-base-300 rounded-lg">
    <div>
      <h4 className="font-semibold text-text-primary">{title}</h4>
      <p className="text-sm text-text-secondary">{description}</p>
    </div>
    <Toggle enabled={enabled} onChange={onToggle} />
  </div>
);

const ContentFilters: React.FC<{ child: Child }> = ({ child }) => {
  const [filters, setFilters] = useState(child.contentFilters);

  const handleToggle = (filterKey: keyof typeof filters) => {
    setFilters(prev => ({ ...prev, [filterKey]: !prev[filterKey] }));
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div className="bg-base-200 p-6 rounded-2xl shadow-lg">
        <h3 className="text-xl font-semibold text-text-primary mb-4">Content & App Filters</h3>
        <div className="space-y-4">
          <FilterItem
            title="Block Social Media"
            description="Restricts access to apps like TikTok, Instagram, etc."
            enabled={filters.socialMedia}
            onToggle={() => handleToggle('socialMedia')}
          />
          <FilterItem
            title="Block Gaming"
            description="Restricts access to most gaming applications."
            enabled={filters.gaming}
            onToggle={() => handleToggle('gaming')}
          />
          <FilterItem
            title="Block Adult Content"
            description="Filters websites and content for mature audiences."
            enabled={filters.adultContent}
            onToggle={() => handleToggle('adultContent')}
          />
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

export default ContentFilters;
