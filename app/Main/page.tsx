"use client"
import React, { useState } from "react";
import Navbar from "../Navbar/page";
import './main.css';
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

const Main = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <Navbar />
      <section className="container mx-auto text-center bg-white">
        <div className="flex flex-wrap">
        

          {/* Sidebar */}
          <div className="w-full md:hidden text-start p-2">

            <button
              onClick={toggleSidebar}
              className="bg-transparent text-black p-2 rounded-md"
            >
              {isSidebarOpen ?<XMarkIcon className="block h-6 w-6" aria-hidden="true" /> : <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
}
            </button>
          </div>
          
          <div className={`w-full md:w-1/5 p-2 ${isSidebarOpen ? 'block' : 'hidden'} md:block`}>
            <div className="bg-transparent">
              <div className="p-0 bg-transparent">
                <div className="rounded-md bg-transparent h-[85vh] overflow-auto custom-scrollbar">
                  {/* Sidebar content */}
                  {[...Array(10)].map((_, i) => (
                    <div key={i} className="flex items-center gap-2 p-3 border-b border-gray-200">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-gray-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                      <div>Muhammed suhaib</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Toggle button for sidebar */}
         

          {/* Main content */}
          <div className="w-full md:w-1/2 p-2">
            <div className="bg-gray-800 rounded-lg h-[85vh] overflow-auto custom-scrollbar">
              {[...Array(5)].map((_, i) => (
                <React.Fragment key={i}>
                  <img
                    src="https://scontent.fcok6-2.fna.fbcdn.net/v/t39.30808-6/435000590_452617757193317_6463377531588323765_n.jpg?stp=cp6_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=IytGm5gvABQQ7kNvgH0tF8O&_nc_ht=scontent.fcok6-2.fna&oh=00_AYB0j-XLstEk-aaxsXuY0zmWl2Ag3MWpL3RcGJCf5c2LzQ&oe=6689E9E2"
                    alt="avatar"
                    className="w-full h-40 object-cover"
                  />
                  <div className="bg-black bg-opacity-60 p-2">
                    <img
                      src="https://via.placeholder.com/40"
                      alt="profile"
                      className="rounded-full border-2 border-blue-500"
                    />
                    <p className="text-white text-center mt-2">Ronaldo</p>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Extra content or sidebar */}
          <div className="w-full md:w-1/4 p-2">
            <div className="bg-gray-800 rounded-lg p-4">
              <div className="flex items-center gap-4 border-b border-gray-200 pb-2">
                <img
                  src="https://via.placeholder.com/40"
                  alt="avatar"
                  className="rounded-full border-2 border-blue-500"
                />
                <input
                  type="text"
                  className="w-full border-none bg-gray-700 text-white focus:outline-none"
                  placeholder="Type something..."
                />
              </div>
              {/* Progress bars can be added here */}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Main;
