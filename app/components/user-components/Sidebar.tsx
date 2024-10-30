"use client";
import React from "react";
import {
  FaHome,
  FaSearch,
  FaCamera,
  FaPlusSquare,
  FaFacebookMessenger,
  FaBell,
  FaUser,
  FaToggleOn,
  FaToggleOff,
  FaCog,
} from "react-icons/fa";
import Link from "next/link";
import { IoCloseSharp } from "react-icons/io5";
import Image from "next/image";


interface SidebarProps {
  mode: boolean;
  togglemode: () => void;
  isOpen: boolean;
  toggleSidebar: () => void;
  theme: {
    background: string;
    text: string;
    textHover: string;
  };
  userId: string;
  pathurl: string;
}

// The Sidebar component
const Sidebar: React.FC<SidebarProps> = ({
  mode,
  theme,
  togglemode,
  isOpen,
  toggleSidebar,
  pathurl,
  userId,
}) => {
  // Navigation items with icons and modal paths
  const navItems = [
    { label: "Home", icon: <FaHome size={20} />, path: "home" },
    { label: "Search", icon: <FaSearch size={20} />, path: "search" },
    { label: "Add Story", icon: <FaCamera size={20} />, path: "addStory" },
    {
      label: "Create Post",
      icon: <FaPlusSquare size={20} />,
      path: "create-post",
    },
    {
      label: "Messages",
      icon: <FaFacebookMessenger size={20} />,
      path: "messages",
    },
    {
      label: "Notifications",
      icon: <FaBell size={20} />,
      path: "notifications",
    },
    { label: "Profile", icon: <FaUser size={20} />, path: "profile" },
    { label: "Settings", icon: <FaCog size={20} />, path: "Settings" },
  ];

  return (
    <div
      className={`fixed inset-0 z-30 transition-transform transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
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
          src={mode ? "/bluebird-white.png" : "/bglogo.png"}
          alt="Blue Bird Logo"
          width={100}
          height={100}
          className="mb-4"
        />
      </Link>

      {/* Navigation Links */}
      <nav className="flex flex-col space-y-2">
        {navItems.map(({ label, icon, path }) => (
          <Link
            key={label}
            href={`${path}`}
            className={`flex items-center p-2 hover:text-black rounded hover:bg-gray-300 duration-200 transition w-full text-left ${
              pathurl === path && "bg-gray-300 text-gray-600"
            }`}
            aria-label={label}
          >
            <span className="mr-3 transition-transform transform hover:translate-x-1">
              {icon}
            </span>
            <span className="font-medium transition-transform transform hover:translate-x-1">
              {label}
            </span>
          </Link>
        ))}
      </nav>

      {/* Dark Mode Toggle */}
      <div className="mt-6">
        <button
          onClick={togglemode}
          className="flex items-center justify-center w-full p-2 rounded transition duration-200 hover:text-black hover:bg-gray-300"
          aria-label={mode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {mode ? (
            <FaToggleOn
              size={30}
              className="transition-transform transform hover:translate-x-1"
            />
          ) : (
            <FaToggleOff
              size={30}
              className="text-black transition-transform transform hover:translate-x-1"
            />
          )}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
