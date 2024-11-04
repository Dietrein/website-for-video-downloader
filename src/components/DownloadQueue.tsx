import React from 'react';
import { Download, Pause, X } from 'lucide-react';

const DownloadQueue = () => {
  // Simulated download queue
  const downloads = [
    {
      id: 1,
      title: 'Summer Vibes Mix 2024',
      progress: 45,
      status: 'downloading',
    },
    {
      id: 2,
      title: 'Travel Vlog - Paradise Island',
      progress: 100,
      status: 'completed',
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-bold mb-4 dark:text-white">Download Queue</h2>
      
      <div className="space-y-4">
        {downloads.map((download) => (
          <div
            key={download.id}
            className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium dark:text-white">{download.title}</h3>
              <div className="flex items-center gap-2">
                {download.status === 'downloading' ? (
                  <button className="p-1 hover:bg-gray-200 dark:hover:bg-gray-600 rounded">
                    <Pause className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                  </button>
                ) : null}
                <button className="p-1 hover:bg-gray-200 dark:hover:bg-gray-600 rounded">
                  <X className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                </button>
              </div>
            </div>
            
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div>
                  <span className="text-xs font-semibold inline-block text-blue-600">
                    {download.progress}%
                  </span>
                </div>
              </div>
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200 dark:bg-gray-600">
                <div
                  style={{ width: `${download.progress}%` }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DownloadQueue;