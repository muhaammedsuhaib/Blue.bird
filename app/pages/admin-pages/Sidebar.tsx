"use client";
import React from 'react';
import {
  FaHome,
  FaUserFriends,
  FaClipboardList,
  FaChartBar,
  FaCog,
  FaFacebookMessenger,
  FaBell,
  FaSignOutAlt,
  FaToggleOn,
  FaToggleOff,
} from 'react-icons/fa';
import Link from 'next/link';
import { IoCloseSharp } from 'react-icons/io5';
import Image from 'next/image';

interface SidebarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  isOpen: boolean;
  toggleSidebar: () => void;
  theme: {
    background: string;
    text: string;
  };
  pathurl:string;
  adminId:string;
}

const Sidebar: React.FC<SidebarProps> = ({
  darkMode,
  theme,
  toggleDarkMode,
  isOpen,
  toggleSidebar,
  pathurl,
  adminId,
}) => {
  // Navigation items
  const navItems = [
    { label: 'Home', icon: <FaHome />, path: 'home' },
    { label: 'Manage Users', icon: <FaUserFriends />, path: 'manage-users' },
    { label: 'Manage Posts', icon: <FaClipboardList />, path: 'manage-posts' },
    { label: 'Analytics', icon: <FaChartBar />, path: 'analytics' },
    { label: 'Settings', icon: <FaCog />, path: 'settings' },
    { label: 'Messages', icon: <FaFacebookMessenger />, path: 'messages' },
    { label: 'Notifications', icon: <FaBell />, path: 'notifications' },
    { label: 'Logout', icon: <FaSignOutAlt />, path: 'logout' },
  ];

  // const handleNavClick = (path: string) => {

  //     setActivComponet(path);

  // };

  return (
    <div
      className={`fixed inset-0 z-30 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 md:w-1/6 p-4 border-r-2`}
      style={{ backgroundColor: theme.background, color: theme.text }}
    >
      {/* Sidebar Close Button */}
      <button
        onClick={toggleSidebar}
        aria-label="Toggle sidebar"
        className="md:hidden p-2 rounded mb-4"
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
           <Link  key={label} href={`${path}`} aria-label={label}  className={`flex  items-center p-2 rounded hover:text-black hover:bg-gray-300 transition duration-200 ${pathurl=== path && 'bg-gray-300 text-black' }`} >
          {/* <button
            key={label}
            onClick={() => handleNavClick(path)}
            className={`flex  items-center p-2 rounded hover:text-black hover:bg-gray-300 transition duration-200 ${pathurl=== path && 'bg-gray-300 text-black' }`}
            aria-label=
          > */}
            <span className="mr-3">{icon}</span>
            <span className="font-medium">{label}</span>
          {/* </button> */}
          </Link>
        ))}
      </nav>

      {/* Dark Mode Toggle */}
      <div className="mt-6">
        <button
          onClick={toggleDarkMode}
          className="flex items-center justify-center w-full p-2 rounded hover:bg-gray-300 transition duration-200"
          aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {darkMode ? (
            <FaToggleOn size={30} />
          ) : (
            <FaToggleOff size={30} />
          )}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
