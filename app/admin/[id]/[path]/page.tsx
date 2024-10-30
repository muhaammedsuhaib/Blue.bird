"use client";

import React, { useState } from "react";
import { Theme } from "../../../utils/Theme";
import Sidebar from "../../../components/admin-componets/Sidebar";
import AdminHome from "../../../components/admin-componets/AdminHome";
import ManageUsers from "../../../components/admin-componets/ManageUsers";
import ManagePosts from "../../../components/admin-componets/ManagePosts";
import Analytics from "../../../components/admin-componets/Analytics";
import Settings from "../../../components/admin-componets/Settings";
import Messages from "../../../components/admin-componets/Messages";
import Notifications from "../../../components/admin-componets/Notifications";
import Logout from "../../../components/admin-componets/Logout";
import Button from "@/app/components/Button";

interface AdminLayoutProps {
  params: {
    id: string; // Assuming id is a string, change to number if needed
    path: string; // Assuming path is also a string
  };
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ params }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const theme = Theme(darkMode);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);
  const toggleSidebar = () => setIsOpen((prev) => !prev);

  const renderActivcomponet = () => {
    const modalProps = { adminId: "mngoo", theme };
    switch (params.path) {
      case "home":
        return <AdminHome {...modalProps} />;
      case "manage-users":
        return <ManageUsers {...modalProps} />;
      case "manage-posts":
        return <ManagePosts {...modalProps} />;
      case "analytics":
        return <Analytics adminId={ "mngoo"} theme={theme} />;
      case "settings":
        return <Settings {...modalProps} />;
      case "messages":
        return <Messages {...modalProps} />;
      case "notifications":
        return <Notifications {...modalProps} />;
      case "logout":
        return <Logout {...modalProps} />;
      default:
        return null;
    }
  };

  return (
    <main
      className={`flex flex-col md:flex-row min-h-screen transition-colors duration-300`}
      style={{ backgroundColor: theme.background, color: theme.text }}
    >
      {/* Mobile Sidebar Toggle Button */}
      <Button
        onClick={toggleSidebar}
        className={`md:hidden p-2 ${theme.button } ${theme.buttonHover} ${theme.text} rounded m-4`}
        label={isOpen ? "Close Menu" : "Open Menu"}
     />

      {/* Sidebar */}
      <Sidebar
        darkMode={darkMode}
        theme={theme}
        toggleDarkMode={toggleDarkMode}
        isOpen={isOpen}
        toggleSidebar={toggleSidebar}
        pathurl={params.path}
        adminId={params.id}
      />

      {/* Main Content Area */}
      <section
        className="flex-1 w-full  h-screen p-4 overflow-auto"
        style={{ backgroundColor: theme.background }}
      >
        {renderActivcomponet()}
      </section>
    </main>
  );
};

export default AdminLayout;
