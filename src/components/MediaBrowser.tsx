import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';

const MediaBrowser = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Simulated search results
  const results = [
    {
      id: 1,
      title: 'Summer Vibes Mix 2024',
      thumbnail: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80',
      duration: '3:45',
      type: 'music',
    },
    {
      id: 2,
      title: 'Travel Vlog - Paradise Island',
      thumbnail: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800&q=80',
      duration: '12:30',
      type: 'video',
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
      <div className="flex items-center gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for music or videos..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <button className="p-2 rounded-md border border-gray-300 hover:bg-gray-50">
          <Filter className="h-5 w-5 text-gray-500" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {results.map((item) => (
          <div key={item.id} className="group relative rounded-lg overflow-hidden">
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                Download
              </button>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-700">
              <h3 className="font-medium dark:text-white">{item.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{item.duration}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MediaBrowser;