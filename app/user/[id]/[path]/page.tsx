"use client";

import React, { useState } from "react";
import Sidebar from "../../../pages/user-pages/Sidebar";
import Story from "../../../pages/user-pages/Story";
import Post from "../../../pages/user-pages/Post";
import { Theme } from "../../../utils/Theme";
import Suggestions from "../../../pages/user-pages/Suggestions";
import Search from "@/app/pages/user-pages/Search";
import AddStory from "@/app/pages/user-pages/AddStory";
import AddPost from "@/app/pages/user-pages/AddPost";
import Message from "@/app/pages/user-pages/Message";
import Profile from "@/app/pages/user-pages/profile/Profile";
import Settings from "@/app/pages/user-pages/Settings";
import Notification from "@/app/pages/user-pages/Notification";
import Image from "next/image";
import { FaBars } from "react-icons/fa";
import useMode from "@/app/hooks/useMode";

interface UserLayoutProps {
  params: {
    id: string;
    path: string;
  };
}

const Userlayout: React.FC<UserLayoutProps> = ({ params }) => {
  const [mode, setMode] = useMode();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const togglemode = () => setMode(!mode);
  const toggleSidebar = () => setIsOpen(!isOpen);

  const theme = Theme(mode);

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
        mode={mode}
        theme={theme}
        togglemode={togglemode}
        isOpen={isOpen}
        toggleSidebar={toggleSidebar}
        userId={params.id}
        pathurl={params.path}
      />
      {params.path === "search" && (
        <Search key={18} userId={params.id} theme={theme} />
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
