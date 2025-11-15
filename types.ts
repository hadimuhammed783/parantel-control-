export interface AppUsage {
  id: string;
  name: string;
  usage: number; // in minutes
  icon: React.ReactNode;
  category: 'Social' | 'Games' | 'Education' | 'Entertainment';
}

export interface Location {
  name: string;
  lat: number;
  lng: number;
  timestamp: string;
}

export interface CameraFeed {
    front: string;
    rear: string;
    snapshots: {
        url: string;
        timestamp: string;
    }[];
}

export interface Child {
  id: number;
  name: string;
  avatar: string;
  appUsage: AppUsage[];
  locationHistory: Location[];
  screenTime: {
    limit: number; // in minutes
    used: number; // in minutes
  };
  bedtime: {
    start: string;
    end: string;
    enabled: boolean;
  };
  contentFilters: {
    socialMedia: boolean;
    gaming: boolean;
    adultContent: boolean;
  };
  cameraFeed: CameraFeed;
}

export type ActiveView = 'dashboard' | 'apps' | 'location' | 'screentime' | 'filters' | 'mirror' | 'camera';