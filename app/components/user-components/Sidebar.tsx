"use client";
import React, { useState } from 'react';
import {
  FaHome,
  FaSearch,
  FaCamera,
  FaPlusSquare,
  FaFacebookMessenger,
  FaBell,
  FaUser,
  FaEllipsisH,
  FaToggleOn,
  FaToggleOff,
} from 'react-icons/fa';
import Link from 'next/link';
import { IoCloseSharp } from 'react-icons/io5';
import Image from 'next/image';
import Search from './Search';
import AddStory from './AddStory';
import AddPost from './AddPost';
import Message from './Message';
import Notification from './Notification';
import Profile from './Profile';
import Settings from './Settings';

// Define the props interface for the Sidebar component
interface SidebarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  isOpen: boolean;
  toggleSidebar: () => void;
  theme: {
    background: string;
    text: string;
    textHover: string;
  };
}

// The Sidebar component
const Sidebar: React.FC<SidebarProps> = ({
  darkMode,
  theme,
  toggleDarkMode,
  isOpen,
  toggleSidebar,
}) => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const onclose = () => {
    setActiveModal(null);
  };

  // Navigation items with icons and modal paths
  const navItems = [
    { label: 'Home', icon: <FaHome size={25} />, path: 'home' },
    { label: 'Search', icon: <FaSearch size={25} />, path: 'search' },
    { label: 'Add Story', icon: <FaCamera size={25} />, path: 'addStory' },
    { label: 'Create Post', icon: <FaPlusSquare size={25} />, path: 'create-post' },
    { label: 'Messages', icon: <FaFacebookMessenger size={25} />, path: 'messages' },
    { label: 'Notifications', icon: <FaBell size={25} />, path: 'notifications' },
    { label: 'Profile', icon: <FaUser size={25} />, path: 'profile' },
    { label: 'More', icon: <FaEllipsisH size={25} />, path: 'more' },
  ];

  const handleNavClick = (path: string) => {
    if (path === 'home') {
      window.location.reload();
    } else {
      setActiveModal(path);
    }
  };

  return (
    <div
      className={`fixed inset-0 z-30 transition-transform transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } md:relative md:translate-x-0 md:w-1/6 p-4 border-r-2`}
      style={{ backgroundColor: theme.background, color: theme.text }}
    >
      {/* Sidebar Close Button */}
      <button
        onClick={toggleSidebar}
        aria-label="Toggle sidebar"
        className="md:hidden p-2 rounded mb-4 transition-transform duration-300 hover:rotate-180"
      >
        <IoCloseSharp size={30} />
      </button>

      {/* Logo Section */}
      <Link href="/" aria-label="Go to Home">
        <Image
          src={darkMode ? '/bluebird-white.png' : '/bglogo.png'}
          alt="Blue Bird Logo"
          width={100}
          height={100}
          className="mb-4"
        />
      </Link>

      {/* Navigation Links */}
      <nav className="flex flex-col space-y-2">
        {navItems.map(({ label, icon, path }) => (
          <button
            key={label}
            onClick={() => handleNavClick(path)}
            className="flex items-center p-2 hover:text-black rounded hover:bg-gray-300 duration-200 transition w-full text-left"
            aria-label={label}
          >
            <span className="mr-3 transition-transform transform hover:translate-x-1">
              {icon}
            </span>
            <span className="font-medium transition-transform transform hover:translate-x-1">
              {label}
            </span>
          </button>
        ))}
      </nav>

      {/* Dark Mode Toggle */}
      <div className="mt-6">
        <button
          onClick={toggleDarkMode}
          className="flex items-center justify-center w-full p-2 rounded transition duration-200 hover:text-black hover:bg-gray-300"
          aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {darkMode ? (
            <FaToggleOn size={30} className="transition-transform transform hover:translate-x-1" />
          ) : (
            <FaToggleOff size={30} className="text-black transition-transform transform hover:translate-x-1" />
          )}
        </button>
      </div>

      {/* Render active modals if any */}
      {activeModal === 'search' && <Search key={Math.floor(Math.random() * 1000000)} userId="mongoo" theme={theme} onclose={onclose} />}
      {activeModal === 'addStory' && <AddStory key={Math.floor(Math.random() * 1000000)} userId="mongoo" theme={theme} onclose={onclose} />}
      {activeModal === 'create-post' && <AddPost key={Math.floor(Math.random() * 1000000)} userId="mongoo" theme={theme} onclose={onclose} />}
      {activeModal === 'messages' && <Message key={Math.floor(Math.random() * 1000000)} userId="mongoo" theme={theme} onclose={onclose} />}
      {activeModal === 'notifications' && <Notification key={Math.floor(Math.random() * 1000000)} userId="mongoo" theme={theme} onclose={onclose} />}
      {activeModal === 'profile' && <Profile key={Math.floor(Math.random() * 1000000)}  userId="mongoo" theme={theme} onclose={onclose} />}
      {activeModal === 'more' && <Settings key={Math.floor(Math.random() * 1000000)}  userId="mongoo" theme={theme} onclose={onclose} />}
    </div>
  );
};

export default Sidebar;
