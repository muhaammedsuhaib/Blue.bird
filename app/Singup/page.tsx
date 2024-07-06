"use client";
import React, { useState } from "react";
import Navbar from "../Navbar/page";
import { useAppContext } from "../Context/AppContext";

const Singup: React.FC = () => {
  const { darkMode, setDarkMode } = useAppContext();
  const [responsive,setResponsive]=useState<boolean>(false)
  const [chageC,setChangeC]=useState<boolean>(true)

  return (
    <>
      <div className={`w-full h-[100vh] flex flex-wrap ${darkMode ? 'bg-white text-black' : 'bg-black text-white'}`}>
      <div className={`hidden md:flex justify-center w-full md:w-1/2 ${darkMode ? 'bg-white text-black' : 'bg-black text-white'}`}>
  <div className="flex items-center justify-center">
    <img src={`${darkMode ? '/bglogo.png' : '/bluebird-white.png'}`} alt="BrandLogo" className="h-auto w-32 md:w-auto" />
  </div>
</div>

        <div className={`w-full md:w-1/2 ${darkMode ? 'bg-white text-black' : 'bg-black text-white'}`}>



          <div className="w-full h-screen flex items-center justify-center text-start">
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">

{chageC? <>
              <div className={`sm:mx-auto sm:w-full sm:max-w-sm ${darkMode?'bg-white text-black':'bg-black text-white'}`}>

              <div className="text-center md:hidde">
  <img
    src={`${darkMode ? '/bglogo.png' : '/bluebird-white.png'}`}
    alt="BrandLogo"
    className="mx-auto h-36 w-auto"
  />
</div>
         

                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">
                  Log into existing account
                </h2>
              </div>
            
              <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form action="#" method="POST" className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium leading-6">
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        className={`block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${darkMode?'text-black':'text-black'}`}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <label htmlFor="password" className="block text-sm font-medium leading-6">
                        Password
                      </label>
                      <div className="text-sm">
                        <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                          Forgot password?
                        </a>
                      </div>
                    </div>
                    <div className="mt-2">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        required
                        autoComplete="current-password"
                        className={`block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${darkMode?'text-black':'text-black'}`}
                      />
                    </div>
                  </div>

                  <div>
                    <button onClick={() => setDarkMode(!darkMode)}
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Sign in
                    </button>
                  </div>
                </form>

                <p className="mt-10 text-center text-sm">
                  Not a member?{' '}
                  <a href="#" onClick={()=>setChangeC(!chageC)} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                   create new account
                  </a>
                </p>
              </div>
              </>:
               <>
              <div className={`sm:mx-auto sm:w-full sm:max-w-sm ${darkMode?'bg-white text-black':'bg-black text-white'}`}>

              <div className="text-center md:hidden">
  <img
    src={`${darkMode ? '/bglogo.png' : '/bluebird-white.png'}`}
    alt="BrandLogo"
    className="mx-auto h-36 w-auto"
  />
</div>
         

                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">
                Create new account
                </h2>
              </div>
            
              <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form action="#" method="POST" className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium leading-6">
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        className={`block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${darkMode?'text-black':'text-black'}`}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <label htmlFor="password" className="block text-sm font-medium leading-6">
                        Password
                      </label>
                     
                    </div>
                    <div className="mt-2">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        required
                        autoComplete="current-password"
                        className={`block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${darkMode?'text-black':'text-black'}`}
                      />
                    </div>
                  </div>

                  <div>
                    <button onClick={() => setDarkMode(!darkMode)}
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Submit
                    </button>
                  </div>
                </form>

                <p className="mt-10 text-center text-sm">
                Have an account?{' '}
                  <a href="#"  onClick={()=>setChangeC(!chageC)}  className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                   {`login your'e account`}
                  </a>
                </p>
              </div>
              </>
              }
             

             

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Singup;
