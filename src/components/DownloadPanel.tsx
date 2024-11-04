import React, { useState } from 'react';
import { Download, Link, Settings } from 'lucide-react';

const DownloadPanel = () => {
  const [url, setUrl] = useState('');
  const [format, setFormat] = useState('mp4');
  const [quality, setQuality] = useState('high');

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate download process
    console.log('Downloading:', { url, format, quality });
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6 dark:text-white">Download Media</h2>
      
      <form onSubmit={handleDownload} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Paste URL
          </label>
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Link className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://example.com/video"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center gap-2"
            >
              <Download className="h-5 w-5" />
              Download
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Format
            </label>
            <select
              value={format}
              onChange={(e) => setFormat(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="mp4">MP4 Video</option>
              <option value="mp3">MP3 Audio</option>
              <option value="wav">WAV Audio</option>
              <option value="flac">FLAC Audio</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Quality
            </label>
            <select
              value={quality}
              onChange={(e) => setQuality(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="low">Low (480p)</option>
              <option value="medium">Medium (720p)</option>
              <option value="high">High (1080p)</option>
              <option value="4k">4K (2160p)</option>
            </select>
          </div>
        </div>
      </form>

      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4 dark:text-white">Supported Platforms</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['YouTube', 'Vimeo', 'SoundCloud', 'Spotify'].map((platform) => (
            <div key={platform} className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <span className="text-sm font-medium dark:text-gray-300">{platform}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DownloadPanel;