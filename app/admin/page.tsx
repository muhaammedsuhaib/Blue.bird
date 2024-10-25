"use client";

import React, {  useState } from "react";
import { Theme } from "../utils/Theme";

const Userlayout: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [isOpen, setIsOpen] = useState<boolean>(false);


  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleSidebar = () => setIsOpen(!isOpen);

  const theme = Theme(darkMode);

  return (
    <main
      className={`flex flex-col md:flex-row min-h-screen overflow-auto`}
      style={{ backgroundColor: theme.background, color: theme.text }}
    >
      {/* Button to toggle sidebar on mobile */}
      <button
        onClick={toggleSidebar}
        className={`md:hidden p-2 ${theme.button} ${theme.buttonHover} text-white rounded m-4`}
      >
        {isOpen ? "Close Menu" : "Open Menu"}
      </button>
      welcome back...   
im admin 
      {/* Sidebar */}
      {/* <Sidebar
       key={Math.floor(Math.random() * 1000000)}
       darkMode={darkMode}
        theme={theme}
        toggleDarkMode={toggleDarkMode}
        isOpen={isOpen}
        toggleSidebar={toggleSidebar}
      /> */}

      {/* Main Content */}
      <section className="flex-1 p-2 md:h-screen overflow-auto" style={{ backgroundColor: theme.background }}>
        {/* Story section */}
        {/* <div className="rounded-lg mb-4" style={{ backgroundColor: theme.background }}>
          <Story key={Math.floor(Math.random() * 1000000)} userId={'mongodbId...'} theme={theme} />
        </div> */}

        {/* Posts section */}
        {/* <div>
          <Post key={Math.floor(Math.random() * 1000000)} userId={'mongodbId...'} theme={theme} />
        </div> */}
      </section>

      {/* Suggestions Section */}
      {/* <aside className="w-full md:w-1/4 p-4 md:h-screen overflow-auto hidden md:block" style={{ backgroundColor: theme.background }}>
        <Suggestions key={Math.floor(Math.random() * 1000000)} userId={'mongo id'} theme={theme}/>
      </aside> */}
      ss
    </main>
  );
};

export default Userlayout;
