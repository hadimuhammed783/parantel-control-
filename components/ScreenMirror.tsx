import React, { useState } from 'react';
import type { Child } from '../types';

// A simple toast-like notification component
const Notification: React.FC<{ message: string; show: boolean; onClose: () => void }> = ({ message, show, onClose }) => {
    if (!show) return null;

    React.useEffect(() => {
        const timer = setTimeout(onClose, 2000);
        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className="fixed bottom-5 right-5 bg-brand-secondary text-white py-2 px-4 rounded-lg shadow-lg animate-fade-in-up">
            {message}
        </div>
    );
};


const ScreenMirror: React.FC<{ child: Child }> = ({ child }) => {
    const [notification, setNotification] = useState({ show: false, message: '' });

    const showNotification = (message: string) => {
        setNotification({ show: true, message });
    };

    return (
        <div className="max-w-4xl mx-auto">
            <Notification 
                show={notification.show} 
                message={notification.message} 
                onClose={() => setNotification({ ...notification, show: false })} 
            />

            <div className="bg-base-200 p-6 rounded-2xl shadow-lg flex flex-col items-center">
                <h3 className="text-xl font-semibold text-text-primary mb-4 self-start">Live Screen View</h3>
                
                {/* Phone Mockup */}
                <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
                    <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
                    <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
                    <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
                    <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
                    <div className="rounded-[2rem] overflow-hidden w-full h-full bg-base-100">
                        {/* Simulated screen content */}
                        <img src={`https://picsum.photos/seed/${child.name}_screen/300/600`} alt="Child's screen" className="w-full h-full object-cover" />
                    </div>
                </div>

                {/* Controls */}
                <div className="w-full mt-8 pt-6 border-t border-base-300">
                    <h4 className="text-lg font-semibold text-text-secondary mb-4 text-center">Remote Control</h4>
                    <div className="flex justify-center items-center gap-4 flex-wrap">
                        <button onClick={() => showNotification("Screenshot captured!")} className="flex items-center gap-2 bg-base-300 hover:bg-brand-primary/20 text-text-primary font-semibold py-2 px-4 rounded-lg transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z" /><path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.022 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" /></svg>
                            Take Screenshot
                        </button>
                        <button onClick={() => showNotification(`Device locked for ${child.name}.`)} className="flex items-center gap-2 bg-base-300 hover:bg-brand-primary/20 text-text-primary font-semibold py-2 px-4 rounded-lg transition-colors">
                             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" /></svg>
                            Lock Screen
                        </button>
                         <button onClick={() => showNotification(`Alert sent to ${child.name}'s device.`)} className="flex items-center gap-2 bg-yellow-500/20 hover:bg-yellow-500/40 text-yellow-300 font-semibold py-2 px-4 rounded-lg transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 3.001-1.742 3.001H4.42c-1.53 0-2.493-1.667-1.743-3.001l5.58-9.92zM10 13a1 1 0 110-2 1 1 0 010 2zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
                            Send Alert
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScreenMirror;