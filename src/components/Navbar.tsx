import React from 'react';
import { Download, Music, Video, History, Settings, Moon, Sun } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode }) => {
  return (
    <nav className={`${darkMode ? 'bg-gray-800 text-white' : 'bg-white'} shadow-lg`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <Download className="h-8 w-8 text-blue-500" />
            <span className="font-bold text-xl">UltimateDownloader</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavItem icon={<Download />} text="Download" active />
            <NavItem icon={<Music />} text="Music" />
            <NavItem icon={<Video />} text="Video" />
            <NavItem icon={<History />} text="History" />
            <NavItem icon={<Settings />} text="Settings" />
          </div>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
        </div>
      </div>
    </nav>
  );
};

const NavItem = ({ icon, text, active = false }) => (
  <button
    className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors
      ${active ? 'text-blue-500' : 'hover:text-blue-500'}`}
  >
    {icon}
    <span>{text}</span>
  </button>
);

export default Navbar;