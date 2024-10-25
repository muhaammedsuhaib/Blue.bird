"use client";

import React, { useState } from "react";
import Sidebar from "../../../components/user-components/Sidebar";
import Story from "../../../components/user-components/Story";
import Post from "../../../components/user-components/Post";
import { Theme } from "../../../utils/Theme";
import Suggestions from "../../../components/user-components/Suggestions";
import Search from "@/app/components/user-components/Search";
import AddStory from "@/app/components/user-components/AddStory";
import AddPost from "@/app/components/user-components/AddPost";
import Message from "@/app/components/user-components/Message";
import Profile from "@/app/components/user-components/Profile";
import Settings from "@/app/components/user-components/Settings";
import Notification from "@/app/components/user-components/Notification";
import Image from "next/image";
import { FaBars } from "react-icons/fa";

interface UserLayoutProps {
  params: {
    id: string;
    path: string;
  };
}

const Userlayout: React.FC<UserLayoutProps> = ({ params }) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleSidebar = () => setIsOpen(!isOpen);

  const theme = Theme(darkMode);

  return (
    <main
      className={`flex flex-col md:flex-row min-h-screen overflow-auto`}
      style={{ backgroundColor: theme.background, color: theme.text }}
    >
      <div className="md:hidden flex items-center justify-between p-4">
        <Image
          src="/bglogo.png"
          alt="Blue Bird Logo"
          width={70}
          height={70}
          className="mr-2"
        />

        <button
          onClick={toggleSidebar}
          className={`p-2 ${theme.button} ${theme.buttonHover} rounded-md transition-colors duration-200 flex items-center`}
          aria-label="Toggle Sidebar"
        >
          <FaBars className="text-lg" />
        </button>
      </div>

      {/* Sidebar */}
      <Sidebar
        key={1}
        darkMode={darkMode}
        theme={theme}
        toggleDarkMode={toggleDarkMode}
        isOpen={isOpen}
        toggleSidebar={toggleSidebar}
        userId={params.id}
        pathurl={params.path}
      />
      {params.path === "search" && (
        <Search key={1} userId={params.id} theme={theme} />
      )}
      {params.path === "addStory" && (
        <AddStory key={2} userId={params.id} theme={theme} />
      )}
      {params.path === "create-post" && (
        <AddPost key={3} userId={params.id} theme={theme} />
      )}
      {params.path === "messages" && (
        <Message key={4} userId={params.id} theme={theme} />
      )}
      {params.path === "notifications" && (
        <Notification key={5} userId={params.id} theme={theme} />
      )}
      {params.path === "profile" && (
        <Profile key={6} userId={params.id} theme={theme} />
      )}
      {params.path === "Settings" && (
        <Settings key={7} userId={params.id} theme={theme} />
      )}
      {/* Main Content */}
      <section
        className="flex-1 p-2 md:h-screen overflow-auto"
        style={{ backgroundColor: theme.background }}
      >
        {/* Story section */}
        <div
          className="rounded-lg mb-4"
          style={{ backgroundColor: theme.background }}
        >
          <Story key={2} userId={params.id} theme={theme} />
        </div>

        {/* Posts section */}
        <div>
          <Post key={3} userId={params.id} theme={theme} />
        </div>
      </section>

      {/* Suggestions Section */}
      <aside
        className="w-full md:w-1/4 p-4 md:h-screen overflow-auto hidden md:block"
        style={{ backgroundColor: theme.background }}
      >
        <Suggestions key={4} userId={params.id} theme={theme} />
      </aside>
    </main>
  );
};

export default Userlayout;
