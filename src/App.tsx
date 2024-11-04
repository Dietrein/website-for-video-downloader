import React, { useState } from 'react';
import { Download, Music, Video, History, Settings, Moon, Sun, Search } from 'lucide-react';
import Navbar from './components/Navbar';
import DownloadPanel from './components/DownloadPanel';
import MediaBrowser from './components/MediaBrowser';
import DownloadQueue from './components/DownloadQueue';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState('download');

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {activeTab === 'download' && <DownloadPanel />}
            {activeTab === 'browse' && <MediaBrowser />}
          </div>
          
          <div className="lg:col-span-1">
            <DownloadQueue />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;