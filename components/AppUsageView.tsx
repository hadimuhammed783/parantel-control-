import React from 'react';
import type { Child } from '../types';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid } from 'recharts';

const AppUsageView: React.FC<{ child: Child }> = ({ child }) => {
  const sortedAppUsage = [...child.appUsage].sort((a, b) => b.usage - a.usage);

  const CustomTooltip: React.FC<any> = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-base-300 p-2 border border-base-100 rounded">
          <p className="font-bold">{label}</p>
          <p className="text-brand-primary">{`Usage: ${payload[0].value} mins`}</p>
        </div>
      );
    }
    return null;
  };
  
  return (
    <div className="space-y-8">
      <div className="bg-base-200 p-6 rounded-2xl shadow-lg">
        <h3 className="text-xl font-semibold text-text-primary mb-4">App Usage Breakdown</h3>
        <div style={{ width: '100%', height: 300 }}>
          <ResponsiveContainer>
            <BarChart data={sortedAppUsage} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
              <XAxis dataKey="name" stroke="#D1D5DB" />
              <YAxis stroke="#D1D5DB" />
              <Tooltip content={<CustomTooltip />} cursor={{fill: 'rgba(79, 70, 229, 0.1)'}}/>
              <Legend />
              <Bar dataKey="usage" name="Minutes Used" fill="#4F46E5" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      <div className="bg-base-200 p-6 rounded-2xl shadow-lg">
        <h3 className="text-xl font-semibold text-text-primary mb-4">All Apps</h3>
        <ul className="space-y-4">
          {sortedAppUsage.map((app) => (
            <li key={app.id} className="flex items-center justify-between p-4 bg-base-300 rounded-lg">
              <div className="flex items-center">
                <div className="bg-base-100 p-2 rounded-lg mr-4">{app.icon}</div>
                <div>
                  <p className="font-semibold">{app.name}</p>
                  <p className="text-sm text-text-secondary">{app.category}</p>
                </div>
              </div>
              <p className="font-bold text-lg">{app.usage} min</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AppUsageView;
