import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import type { Child } from '../types';

const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
    <div className={`bg-base-200 p-6 rounded-2xl shadow-lg ${className}`}>
        {children}
    </div>
);

const ScreenTimeCard: React.FC<{ child: Child }> = ({ child }) => {
    const { used, limit } = child.screenTime;
    const percentage = Math.round((used / limit) * 100);
    const data = [{ value: used }, { value: limit - used }];
    const COLORS = ['#4F46E5', '#374151'];

    return (
        <Card className="flex flex-col items-center justify-center">
            <h3 className="text-lg font-semibold text-text-secondary mb-4">Daily Screen Time</h3>
            <div className="w-40 h-40 relative">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie data={data} cx="50%" cy="50%" dataKey="value" innerRadius={60} outerRadius={70} startAngle={90} endAngle={450} paddingAngle={0}>
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-3xl font-bold">{percentage}%</span>
                    <span className="text-sm text-text-secondary">used</span>
                </div>
            </div>
            <p className="mt-4 text-center">
                <span className="font-bold">{Math.floor(used / 60)}h {used % 60}m</span>
                <span className="text-text-secondary"> of {Math.floor(limit / 60)}h limit</span>
            </p>
        </Card>
    );
};

const MostUsedAppCard: React.FC<{ child: Child }> = ({ child }) => {
    const mostUsed = child.appUsage.sort((a, b) => b.usage - a.usage)[0];
    return (
        <Card>
            <h3 className="text-lg font-semibold text-text-secondary mb-4">Most Used App</h3>
            <div className="flex items-center">
                <div className="bg-base-300 p-3 rounded-lg mr-4">{mostUsed.icon}</div>
                <div>
                    <p className="font-bold text-xl">{mostUsed.name}</p>
                    <p className="text-text-secondary">{mostUsed.usage} minutes today</p>
                </div>
            </div>
        </Card>
    );
};

const LocationCard: React.FC<{ child: Child }> = ({ child }) => {
    const currentLocation = child.locationHistory[0];
    return (
        <Card>
            <h3 className="text-lg font-semibold text-text-secondary mb-4">Current Location</h3>
            <div className="flex items-center">
                 <div className="p-3 bg-base-300 rounded-lg mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                 </div>
                <div>
                    <p className="font-bold text-xl">{currentLocation.name}</p>
                    <p className="text-text-secondary">Updated at {currentLocation.timestamp}</p>
                </div>
            </div>
        </Card>
    );
};

const AlertsCard: React.FC = () => (
    <Card className="col-span-1 md:col-span-2">
        <h3 className="text-lg font-semibold text-text-secondary mb-4">Recent Alerts</h3>
        <ul className="space-y-3">
            <li className="flex items-center">
                <span className="h-3 w-3 bg-yellow-400 rounded-full mr-3"></span>
                <span>Screen time limit approaching.</span>
            </li>
            <li className="flex items-center">
                <span className="h-3 w-3 bg-green-500 rounded-full mr-3"></span>
                <span>Arrived at 'School'.</span>
            </li>
             <li className="flex items-center">
                <span className="h-3 w-3 bg-red-500 rounded-full mr-3"></span>
                <span>Attempted to access a restricted site.</span>
            </li>
        </ul>
    </Card>
);


const Dashboard: React.FC<{ child: Child }> = ({ child }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ScreenTimeCard child={child} />
            <MostUsedAppCard child={child} />
            <LocationCard child={child} />
            <AlertsCard />
        </div>
    );
};

export default Dashboard;
