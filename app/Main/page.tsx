"use client"
import React, { useState ,ChangeEvent, FormEvent } from "react";
import Navbar from "../Navbar/page";
import './main.css';
import { Bars3Icon, BellIcon, XMarkIcon ,PlayIcon} from "@heroicons/react/24/outline";
import { useAppContext } from "../Context/AppContext";

const Main: React.FC = () => {
  const {isSidebarOpen, setIsSidebarOpen, darkMode, setDarkMode } = useAppContext();


  const [comment, setComment] = useState<any>("");

  // Function to handle input change and update the state
  const handleCommentInput = (e: ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  // Function to handle form submission and collect data
  const handleCommentSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Comment submitted:", comment);
    // Add your data collection logic here (e.g., send to API)
  };




  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return ( 
    <div>
      <Navbar />
      <br /><br />
      <section className={`container mx-auto text-center ${darkMode?"bg-white text-black":"bg-black text-white"}`}>
      {/* <button onClick={()=>setDarkMode(!darkMode)}>Change Darck mode</button> */}
        <div className="flex flex-wrap">
          {/* Sidebar */}
          {/* {!isSidebarOpen&& <>
          <div className={`w-full md:hidden text-start p-2 ${darkMode?"bg-white text-black":"bg-black text-white"} flex justify-around`}>

          <div>  <svg xmlns="http://www.w3.org/2000/svg" fill="none"  viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
  <path strokeLinecap="round" strokeLinejoin="round"  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg></div>
          <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="m20.893 13.393-1.135-1.135a2.252 2.252 0 0 1-.421-.585l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 0 1-1.383-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.411-2.353a2.25 2.25 0 0 0 .286-.76m11.928 9.869A9 9 0 0 0 8.965 3.525m11.928 9.868A9 9 0 1 1 8.965 3.525" />
</svg></div>
          <div> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg></div>
<div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg></div>
<div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
</svg></div>
            <button
              onClick={toggleSidebar}
              className="bg-transparent  p-2 rounded-md"
              >
              {isSidebarOpen ?<XMarkIcon className="block h-6 w-6" aria-hidden="true" /> : <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
}
            </button>
          </div> </>} */}
          <div className={`w-full md:w-1/5 p-2 ${isSidebarOpen ? 'block' : 'hidden'} ${darkMode?"bg-white text-black":"bg-black text-white"} md:block mt-5`}>
            <div className="bg-transparent">
              <div className="p-0 bg-transparent">
                <div className="rounded-md bg-transparent h-[89vh] overflow-auto custom-scrollbar">
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
                   <div  className="flex items-center gap-2 p-3 ">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-9">
  <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>

                      <div className="font-bold"> Home</div>
                    </div>
                   <div  className="flex items-center gap-2 p-3 ">
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-9">
  <path strokeLinecap="round" strokeLinejoin="round" d="m20.893 13.393-1.135-1.135a2.252 2.252 0 0 1-.421-.585l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 0 1-1.383-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.411-2.353a2.25 2.25 0 0 0 .286-.76m11.928 9.869A9 9 0 0 0 8.965 3.525m11.928 9.868A9 9 0 1 1 8.965 3.525" />
</svg>

                  <div className="font-bold"> Explore</div>
                    </div>
                   <div  className="flex items-center gap-2 p-3 ">
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-9">
  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>

                    <div className="font-bold"> Search</div>
                    </div>
                   <div  className="flex items-center gap-2 p-3 ">
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-9">
  <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
</svg>
<div className="font-bold"> Video</div>
                    </div>
                   <div  className="flex items-center gap-2 p-3 ">
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-9">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
</svg>

                      <div className="font-bold"> Message</div>
                    </div>
                   <div  className="flex items-center gap-2 p-3 ">
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-9">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
</svg>


                      <div className="font-bold" onClick={()=>setDarkMode(!darkMode)}> Notification</div>
                    </div>
                   <div  className="flex items-center gap-2 p-3 ">
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-9">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
                      <div className="font-bold"> Create</div>
                    </div>
                   <div  className="flex items-center gap-2 p-3 ">
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
          <div className={`w-full md:w-1/2 p-2 ${darkMode?"bg-white text-black":"bg-black text-white"} h-[90vh] overflow-auto custom-scrollbar mt-5`}>
             <div className="w-full md:w-1/1 p-2 flex gap-1 overflow-auto custom-scrollbar"  > 
             <div className="container"><div className="relative inline-block">
  <img
    className="min-h-16 max-w-20 rounded-full"
    src="https://scontent.fcok6-1.fna.fbcdn.net/v/t39.30808-1/448547224_493325343122558_2206856771406059895_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=105&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=knuzE3bMg20Q7kNvgGK8Xv0&_nc_ht=scontent.fcok6-1.fna&oh=00_AYAxqbS8aJfvXCJI4RmERBW6-MdDvs7al6o0sTxs4vDrRg&oe=668A1CDA"
    alt="Profile Image"
  />
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-10 h-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>
</div></div>
             
                    
           {[...Array(17)].map((_, i) => (
        <React.Fragment key={i}>
          <img
            className="h-16 w-16 rounded-full border-2 border-blue-500 object-cover"
            src="https://muhaammedsuhaib.github.io/Front-end-Developer-portfolio/assets/imgs/avatar.jpg"
            alt="avatar"
          />
        </React.Fragment>
      ))}
             </div>
             <div className=" rounded-lg ">
  {[...Array(5)].map((_, i) => (
    <React.Fragment key={i}>
     <div className="container  p-1 text-start flex items-center">
  <img
    className="h-11 w-11 rounded-full border-2 border-blue-500 object-cover"
    src="https://muhaammedsuhaib.github.io/Front-end-Developer-portfolio/assets/imgs/avatar.jpg"
    alt="avatar"
  />
  <p className="ml-2 font-bold">suhaii.bb</p>
</div>

      <img
        src="https://scontent.fcok6-2.fna.fbcdn.net/v/t39.30808-6/435000590_452617757193317_6463377531588323765_n.jpg?stp=cp6_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=IytGm5gvABQQ7kNvgH0tF8O&_nc_ht=scontent.fcok6-2.fna&oh=00_AYB0j-XLstEk-aaxsXuY0zmWl2Ag3MWpL3RcGJCf5c2LzQ&oe=6689E9E2"
        alt="avatar"
        className="w-full h-auto object-cover"
        style={{ maxHeight: 'auto' }} // Example: set a max height for the image
      />
<div className="flex p-1">
       <div className="w-full md:w-1/2">
       <div className="flex gap-5">
        <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
</svg></div>
        <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
</svg>
</div>
        <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
</svg>

</div>
       </div>

            </div>
       <div className="w-full md:w-1/2">
       <div className="flex gap-5 justify-end">
       
        
        <div>  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
</svg>
</div>
       </div>

            </div>
            </div>
            <p className="text-start">2,847 likes</p>
            <div className={` ${darkMode?"bg-white text-black":"bg-black text-white"} `}>             
        {/* Button to submit the comment */}
            <form className="flex" onSubmit={handleCommentSubmit}>
        {/* Input field to add a comment */}
        <input
          type="text"
          className="w-full bg-transparent border-none focus:outline-none"
          placeholder="Add a comment…"
          value={comment}
          onChange={handleCommentInput}
        />
        {comment.length === 0 ? null:(
        <button type="submit" className="text-blue-800">Post</button>
      ) }
      </form>
          </div>
            <details className="text-start text-gray-500 text-sm ">
  <summary className="outline-none ">View all 10 comments</summary>
  <p className="p-4">നിര്‍ത്തിയിട്ട മൂന്നു കാറുകള്‍ക്ക് മേല്‍ മരം വീണു; കാറിനുള്ളില്‍ ആളില്ലാതിരുന്നതിനാൽ ഒഴിവായത് വൻഅപകടം #car #tree #cartree #kerala #rain #rainupdate</p>           
  <p className="p-4">നിര്‍ത്തിയിട്ട മൂന്നു കാറുകള്‍ക്ക് മേല്‍ മരം വീണു; കാറിനുള്ളില്‍ ആളില്ലാതിരുന്നതിനാൽ ഒഴിവായത് വൻഅപകടം #car #tree #cartree #kerala #rain #rainupdate</p>           
  <p className="p-4">നിര്‍ത്തിയിട്ട മൂന്നു കാറുകള്‍ക്ക് മേല്‍ മരം വീണു; കാറിനുള്ളില്‍ ആളില്ലാതിരുന്നതിനാൽ ഒഴിവായത് വൻഅപകടം #car #tree #cartree #kerala #rain #rainupdate</p>           
  <p className="p-4">നിര്‍ത്തിയിട്ട മൂന്നു കാറുകള്‍ക്ക് മേല്‍ മരം വീണു; കാറിനുള്ളില്‍ ആളില്ലാതിരുന്നതിനാൽ ഒഴിവായത് വൻഅപകടം #car #tree #cartree #kerala #rain #rainupdate</p>           
  <p className="p-4">നിര്‍ത്തിയിട്ട മൂന്നു കാറുകള്‍ക്ക് മേല്‍ മരം വീണു; കാറിനുള്ളില്‍ ആളില്ലാതിരുന്നതിനാൽ ഒഴിവായത് വൻഅപകടം #car #tree #cartree #kerala #rain #rainupdate</p>           
</details>           
            <hr />
    </React.Fragment>
  ))}
</div>

          </div>

          {/* Extra content or sidebar */}
          <div className={`w-full md:w-1/4 p-2 ${darkMode?"bg-white text-black":"bg-black text-white"} mt-5`}>
            <div className="rounded-lg p-4">
              <div className="flex items-center gap-4 border-b border-gray-200 pb-2">
                <img
                  src="https://via.placeholder.com/40"
                  alt="avatar"
                  className="rounded-full border-2 border-blue-500"
                />
                <input
                  type="text"
                  className="w-full border-none  text-white focus:outline-none"
                  placeholder="Type something..."
                />
              </div>
              {/* Progress bars can be added here */}
            </div>
          </div>

        </div>
      </section>
      {!isSidebarOpen && (
        <div className={`fixed bottom-0 w-full md:hidden text-start p-2 ${darkMode ? "bg-white text-black" : "bg-black text-white"} flex justify-around`}>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="m20.893 13.393-1.135-1.135a2.252 2.252 0 0 1-.421-.585l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 0 1-1.383-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.411-2.353a2.25 2.25 0 0 0 .286-.76m11.928 9.869A9 9 0 0 0 8.965 3.525m11.928 9.868A9 9 0 1 1 8.965 3.525" />
            </svg>
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </div>
          <div>
          <img
                        className="h-8 w-8 rounded-full"
                        src="https://muhaammedsuhaib.github.io/Front-end-Developer-portfolio/assets/imgs/avatar.jpg"
                        alt="Profile"
                      />
          </div>
          
          {/* <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>
          </div> */}
          {/* <button
            onClick={toggleSidebar}
            className="bg-transparent p-2 rounded-md"
          >
            {isSidebarOpen ? <XMarkIcon className="block h-6 w-6" aria-hidden="true" /> : <Bars3Icon className="block h-6 w-6" aria-hidden="true" />}
          </button> */}
        </div>
      )}
    </div>
  );
};

export default Main;
