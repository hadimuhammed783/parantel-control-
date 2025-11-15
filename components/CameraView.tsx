import React, { useState } from 'react';
import type { Child, CameraFeed } from '../types';

const CameraView: React.FC<{ child: Child }> = ({ child }) => {
    const [activeCamera, setActiveCamera] = useState<'front' | 'rear'>('rear');
    const [snapshots, setSnapshots] = useState<CameraFeed['snapshots']>(child.cameraFeed.snapshots);
    const [isCapturing, setIsCapturing] = useState(false);

    const takeSnapshot = () => {
        setIsCapturing(true);
        // Simulate capture delay
        setTimeout(() => {
            const newSnapshot = {
                url: `${child.cameraFeed[activeCamera]}&t=${Date.now()}`, // Add timestamp to URL to get a "new" image from picsum
                timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            };
            setSnapshots(prev => [newSnapshot, ...prev]);
            setIsCapturing(false);
        }, 500);
    };

    const feedUrl = child.cameraFeed[activeCamera];

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-base-200 p-6 rounded-2xl shadow-lg">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold text-text-primary">Live Camera Feed</h3>
                    <div className="flex gap-2">
                        <button 
                            onClick={() => setActiveCamera('front')}
                            className={`px-3 py-1 rounded-md text-sm font-medium ${activeCamera === 'front' ? 'bg-brand-primary text-white' : 'bg-base-300 text-text-secondary'}`}
                        >
                            Front
                        </button>
                        <button 
                            onClick={() => setActiveCamera('rear')}
                            className={`px-3 py-1 rounded-md text-sm font-medium ${activeCamera === 'rear' ? 'bg-brand-primary text-white' : 'bg-base-300 text-text-secondary'}`}
                        >
                            Rear
                        </button>
                    </div>
                </div>
                <div className="relative aspect-video w-full rounded-lg overflow-hidden bg-base-100 border-2 border-base-300">
                    <img src={feedUrl} alt={`${activeCamera} camera feed`} className="w-full h-full object-cover" />
                    <div className="absolute top-2 left-2 bg-red-500/80 text-white text-xs font-bold px-2 py-1 rounded flex items-center gap-1">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                        </span>
                        LIVE
                    </div>
                </div>
                 <div className="mt-4 flex justify-center">
                    <button 
                        onClick={takeSnapshot}
                        disabled={isCapturing}
                        className="flex items-center gap-2 bg-base-300 hover:bg-brand-primary/20 text-text-primary font-bold py-2 px-5 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                           <path d="M2 6a2 2 0 012-2h1.586a1 1 0 01.707.293l1.414 1.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l1.414-1.414A1 1 0 0114.414 4H16a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                           <path d="M10 14a3 3 0 100-6 3 3 0 000 6z" />
                        </svg>
                        {isCapturing ? 'Capturing...' : 'Take Snapshot'}
                    </button>
                </div>
            </div>

            <div className="bg-base-200 p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-semibold text-text-primary mb-4">Recent Snapshots</h3>
                <ul className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
                    {snapshots.length > 0 ? snapshots.map((snap, index) => (
                        <li key={index} className="flex items-center gap-4 p-2 bg-base-300 rounded-lg">
                            <img src={snap.url} alt={`snapshot ${index}`} className="w-20 h-16 object-cover rounded-md" />
                            <div>
                                <p className="font-semibold text-sm">Snapshot #{snapshots.length - index}</p>
                                <p className="text-xs text-text-secondary">{snap.timestamp}</p>
                            </div>
                        </li>
                    )) : (
                        <p className="text-center text-text-secondary">No snapshots taken yet.</p>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default CameraView;