import React, { useState, useMemo } from 'react';
import type { Child, ActiveView } from './types';
import { CHILDREN_DATA } from './constants';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import AppUsageView from './components/AppUsageView';
import LocationTracker from './components/LocationTracker';
import ScreenTime from './components/ScreenTime';
import ContentFilters from './components/ContentFilters';
import ScreenMirror from './components/ScreenMirror';
import CameraView from './components/CameraView';

function App() {
  const [children] = useState<Child[]>(CHILDREN_DATA);
  const [selectedChildId, setSelectedChildId] = useState<number>(1);
  const [activeView, setActiveView] = useState<ActiveView>('dashboard');

  const selectedChild = useMemo(() => {
    return children.find(c => c.id === selectedChildId) || children[0];
  }, [children, selectedChildId]);
  
  const renderActiveView = () => {
    switch (activeView) {
      case 'dashboard':
        return <Dashboard child={selectedChild} />;
      case 'apps':
        return <AppUsageView child={selectedChild} />;
      case 'location':
        return <LocationTracker child={selectedChild} />;
      case 'screentime':
        return <ScreenTime child={selectedChild} />;
      case 'filters':
        return <ContentFilters child={selectedChild} />;
      case 'mirror':
        return <ScreenMirror child={selectedChild} />;
      case 'camera':
        return <CameraView child={selectedChild} />;
      default:
        return <Dashboard child={selectedChild} />;
    }
  };

  return (
    <div className="flex h-screen bg-base-100 text-text-primary">
      <Sidebar activeView={activeView} setActiveView={setActiveView} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header 
          childrenData={children}
          selectedChild={selectedChild}
          onSelectChild={setSelectedChildId}
          activeView={activeView}
        />
        <main className="flex-1 overflow-y-auto p-4 md:p-8 bg-base-100">
          {renderActiveView()}
        </main>
      </div>
    </div>
  );
}

export default App;