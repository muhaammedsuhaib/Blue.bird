import React from 'react';
import {
  FaHome,
  FaUserFriends,
  FaComments,
  FaCog,
  FaBell,
  FaSearch,
  FaPlusSquare,
  FaUser,
  FaEllipsisH,
  FaToggleOn,
  FaToggleOff,
  FaFacebookMessenger,
  FaCamera,
} from 'react-icons/fa';
import Link from 'next/link';
import { IoCloseSharp } from 'react-icons/io5';
import Image from 'next/image';

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
const Sidebar: React.FC<SidebarProps> = ({ darkMode, theme, toggleDarkMode, isOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed inset-0 z-30  transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 md:w-1/6 p-4 border-r-2`}
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
          src={darkMode ? "/bluebird-white.png" : "/bglogo.png"}
          alt="Blue Bird Logo"
          width={100}
          height={100}
          className="mb-4"
        />
      </Link>

      {/* Navigation Links */}
      <nav className="flex flex-col space-y-2">
        {/* List of links with icons */}
        {[
          { href: "/", label: "Home", icon: <FaHome size={25} /> },
          { href: "/search", label: "Search", icon: <FaSearch size={25} /> },
          { href: "/galary", label: "Add Story", icon: <FaCamera size={25} /> },
          { href: "/create-post", label: "Create Post", icon: <FaPlusSquare size={25} /> },
          { href: "/messages", label: "Messages", icon: <FaFacebookMessenger size={25} /> },
          { href: "/notifications", label: "Notifications", icon: <FaBell size={25} /> },
          { href: "/profile", label: "Profile", icon: <FaUser size={25} /> },
          { href: "/more", label: "More", icon: <FaEllipsisH size={25} /> },
        ].map(({ href, label, icon }) => (
          <Link key={label} href={href} className={`flex items-center p-2 rounded hover:bg-gray-300 hover:text-black transition duration-200`} aria-label={label}>
            <span className="mr-2">{icon}</span> {label}
          </Link>
        ))}
      </nav>

      {/* Dark Mode Toggle */}
      <div className="mt-6">
        <button 
          onClick={toggleDarkMode}
          className="flex items-center justify-center w-full px-4 py-2"
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {darkMode ? (
            <FaToggleOn size={30} className="text-white" />
          ) : (
            <FaToggleOff size={30} className="text-black" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
