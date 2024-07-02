"use client"
import React, { useState } from "react";
import Navbar from "../Navbar/page";
import './main.css';
import { Bars3Icon, BellIcon, XMarkIcon ,PlayIcon} from "@heroicons/react/24/outline";

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
                  {/* {[...Array(10)].map((_, i) => (
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
                  ))} */}
                   <div  className="flex items-center gap-2 p-3 border-b border-gray-200">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-9">
  <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>

                      <div className="font-bold"> Home</div>
                    </div>
                   <div  className="flex items-center gap-2 p-3 border-b border-gray-200">
                   <svg id="Explore--Streamline-Carbon" xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 16 16" height="16" width="16" className="size-9"><desc>Explore Streamline Icon: https://streamlinehq.com</desc><defs></defs><path d="M10.64390625 4.356140625a0.468375 0.468375 0 0 0 -0.47971875 -0.113296875l-4.21875 1.40625a0.46921874999999996 0.46921874999999996 0 0 0 -0.29639062499999996 0.29639062499999996l-1.40625 4.21875a0.46875 0.46875 0 0 0 0.5930156249999999 0.5930156249999999l4.21875 -1.40625a0.469359375 0.469359375 0 0 0 0.29639062499999996 -0.29643749999999996l1.40625 -4.21875a0.46875 0.46875 0 0 0 -0.113296875 -0.479671875ZM5.428640625 9.57140625l1.03565625 -3.1070625L8.535937500000001 8.535937500000001Z" stroke-width="1"></path><path d="M7.5 14.0625a6.5625 6.5625 0 1 1 6.5625 -6.5625 6.56990625 6.56990625 0 0 1 -6.5625 6.5625Zm0 -12.1875a5.625 5.625 0 1 0 5.625 5.625A5.631421875 5.631421875 0 0 0 7.5 1.875Z" stroke-width="1"></path><path id="_Transparent_Rectangle_" d="M0 0h15v15H0Z" fill="none" stroke-width="1"></path></svg>
                      <div className="font-bold"> Explore</div>
                    </div>
                   <div  className="flex items-center gap-2 p-3 border-b border-gray-200">
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-9">
  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>

                    <div className="font-bold"> Search</div>
                    </div>
                   <div  className="flex items-center gap-2 p-3 border-b border-gray-200">
                   <svg id="Run--Streamline-Carbon" xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 16 16" height="16" width="16" className="size-9"><desc>Run Streamline Icon: https://streamlinehq.com</desc><defs></defs><title>run</title><path d="M9.84375 7.5a2.8125 2.8125 0 1 1 -2.8125 2.8125 2.8125 2.8125 0 0 1 2.8125 -2.8125m0 -0.9375a3.75 3.75 0 1 0 3.75 3.75 3.75 3.75 0 0 0 -3.75 -3.75Z" stroke-width="1"></path><path d="M12.1875 1.875H2.8125a0.9375 0.9375 0 0 0 -0.9375 0.9375v9.375a0.9375 0.9375 0 0 0 0.9375 0.9375h1.875v-0.9375H2.8125V5.625h10.3125V2.8125a0.9375 0.9375 0 0 0 -0.9375 -0.9375ZM2.8125 4.6875V2.8125h9.375v1.875Z" stroke-width="1"></path><path d="m8.90625 8.90625 0 2.8125 2.34375 -1.40625 -2.34375 -1.40625z" stroke-width="1"></path><path id="_Transparent_Rectangle_" d="M0 0h15v15H0Z" fill="none" stroke-width="1"></path></svg>
                      <div className="font-bold"> Video</div>
                    </div>
                   <div  className="flex items-center gap-2 p-3 border-b border-gray-200">
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-9">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
</svg>

                      <div className="font-bold"> Message</div>
                    </div>
                   <div  className="flex items-center gap-2 p-3 border-b border-gray-200">
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-9">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
</svg>


                      <div className="font-bold"> Notification</div>
                    </div>
                   <div  className="flex items-center gap-2 p-3 border-b border-gray-200">
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-9">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>



                      <div className="font-bold"> Create</div>
                    </div>
                   <div  className="flex items-center gap-2 p-3 border-b border-gray-200">
                   <img
                  src="https://scontent.fcok6-1.fna.fbcdn.net/v/t39.30808-1/448547224_493325343122558_2206856771406059895_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=105&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=knuzE3bMg20Q7kNvgGK8Xv0&_nc_ht=scontent.fcok6-1.fna&oh=00_AYAxqbS8aJfvXCJI4RmERBW6-MdDvs7al6o0sTxs4vDrRg&oe=668A1CDA"
                  alt="avatar"
                  className=" w-9 h-9 rounded-full"
                />
                      <div className="font-bold"> Profile</div>
                    </div>
                </div>
              </div>
            </div>
          </div>

          {/* Toggle button for sidebar */}
         

          {/* Main content */}
          <div className="w-full md:w-1/2 p-2 ">
             <div className="w-full md:w-1/1 p-2 flex gap-1 overflow-auto custom-scrollbar"  > 
             {[...Array(10)].map((_, i) => (
                <React.Fragment key={i}>               
                
                <img
                      src="https://via.placeholder.com/60"
                      alt="profile"
                      className="rounded-full border-2 border-blue-500"
                    />
                   
                 
                </React.Fragment>
              ))}
             <img
                      src="https://via.placeholder.com/60"
                      alt="profile"
                      className="rounded-full border-2 border-blue-500"
                    />
             <img
                      src="https://via.placeholder.com/60"
                      alt="profile"
                      className="rounded-full border-2 border-blue-500"
                    />
             </div>
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
