import React from 'react';
import type { Child } from './types';

const YouTubeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" viewBox="0 0 24 24" fill="currentColor">
        <path d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418 c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768 C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.861-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12S22,7.746,21.582,6.186z M10,15.464V8.536L16,12L10,15.464z" />
    </svg>
);

const TikTokIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-2.43.03-4.83-1-6.7-2.9-1.31-1.31-2.13-3.11-2.22-4.99-.02-.05-.02-.11-.02-.16-.04-2.2.49-4.34 1.62-6.15 .41-.64.89-1.24 1.44-1.76.01.11.02.22.02.33.01 2.22-.02 4.43.02 6.65.03 1.2.36 2.37 1.03 3.39 1.11 1.69 3.24 2.64 5.42 2.49 1.09-.07 2.15-.49 2.98-1.2.41-.36.75-.79.98-1.28.02-.05.02-.1.02-.15v-7.68c-.63.26-1.29.41-1.96.41-1.42 0-2.83-.52-3.96-1.52-1.43-1.25-2.1-3.14-2.01-4.95.05-.92.31-1.82.7-2.65.39-.84.95-1.58 1.64-2.2.02 1.7.02 3.4.02 5.11Z"/>
    </svg>
);

const GameIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16.5,9L13.5,12L16.5,15H22V9M9,16.5V22H15V16.5L12,13.5M7.5,9H2V15H7.5L10.5,12M15,7.5V2H9V7.5L12,10.5L15,7.5Z" />
    </svg>
);

const BookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-500" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z" />
    </svg>
);


export const CHILDREN_DATA: Child[] = [
  {
    id: 1,
    name: 'Alex',
    avatar: 'https://picsum.photos/seed/alex/100/100',
    appUsage: [
      { id: 'yt', name: 'YouTube', usage: 125, icon: <YouTubeIcon />, category: 'Entertainment' },
      { id: 'tk', name: 'TikTok', usage: 90, icon: <TikTokIcon />, category: 'Social' },
      { id: 'game1', name: 'Roblox', usage: 75, icon: <GameIcon />, category: 'Games' },
      { id: 'edu1', name: 'Khan Academy', usage: 30, icon: <BookIcon />, category: 'Education' },
    ],
    locationHistory: [
      { name: 'Home', lat: 34.0522, lng: -118.2437, timestamp: '9:05 AM' },
      { name: 'School', lat: 34.0722, lng: -118.2637, timestamp: '8:15 AM' },
      { name: 'Park', lat: 34.0622, lng: -118.2537, timestamp: 'Yesterday' },
    ],
    screenTime: {
      limit: 180,
      used: 135,
    },
    bedtime: {
        start: '21:00',
        end: '07:00',
        enabled: true,
    },
    contentFilters: {
        socialMedia: true,
        gaming: false,
        adultContent: true,
    },
    cameraFeed: {
        front: 'https://picsum.photos/seed/alex_front/640/480',
        rear: 'https://picsum.photos/seed/alex_rear/640/480',
        snapshots: [
            { url: 'https://picsum.photos/seed/alex_snap1/150/100', timestamp: '11:32 AM' },
            { url: 'https://picsum.photos/seed/alex_snap2/150/100', timestamp: '10:55 AM' },
            { url: 'https://picsum.photos/seed/alex_snap3/150/100', timestamp: 'Yesterday' },
        ]
    }
  },
  {
    id: 2,
    name: 'Sarah',
    avatar: 'https://picsum.photos/seed/sarah/100/100',
    appUsage: [
      { id: 'yt', name: 'YouTube', usage: 45, icon: <YouTubeIcon />, category: 'Entertainment' },
      { id: 'edu1', name: 'Khan Academy', usage: 95, icon: <BookIcon />, category: 'Education' },
      { id: 'tk', name: 'TikTok', usage: 20, icon: <TikTokIcon />, category: 'Social' },
      { id: 'game1', name: 'Minecraft', usage: 60, icon: <GameIcon />, category: 'Games' },
    ],
    locationHistory: [
      { name: 'Home', lat: 34.0522, lng: -118.2437, timestamp: '9:12 AM' },
      { name: 'Library', lat: 34.058, lng: -118.25, timestamp: 'Yesterday' },
    ],
    screenTime: {
      limit: 120,
      used: 88,
    },
    bedtime: {
        start: '20:30',
        end: '06:30',
        enabled: false,
    },
    contentFilters: {
        socialMedia: true,
        gaming: true,
        adultContent: true,
    },
    cameraFeed: {
        front: 'https://picsum.photos/seed/sarah_front/640/480',
        rear: 'https://picsum.photos/seed/sarah_rear/640/480',
        snapshots: [
            { url: 'https://picsum.photos/seed/sarah_snap1/150/100', timestamp: '9:41 AM' },
            { url: 'https://picsum.photos/seed/sarah_snap2/150/100', timestamp: '8:20 AM' },
        ]
    }
  },
];