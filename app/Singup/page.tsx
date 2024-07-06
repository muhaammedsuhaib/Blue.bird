"use client";
import React from "react";
import Navbar from "../Navbar/page";
import { useAppContext } from "../Context/AppContext";

const Singup: React.FC = () => {
  const { darkMode, setDarkMode } = useAppContext();

  return (
    <>
      <div className={`w-full h-[100vh] flex flex-wrap ${darkMode ? 'bg-white text-black' : 'bg-black text-white'}`}>
        <div className={`hidden md:flex w-full md:w-1/2 ${darkMode ? 'bg-white text-black' : 'bg-black text-white'}`}>
          <div className="text-center">
            <img src={`${darkMode ? '/bglogo.png' :'/bluebird-white.png' } `} alt="BrandLogo" className='w-auto h-auto' />
          </div>
        </div>

        <div className={`w-full md:w-1/2 ${darkMode ? 'bg-white text-black' : 'bg-black text-white'}`}>
          <div className="w-full h-screen flex items-center justify-center text-start">
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
              <div className={`sm:mx-auto sm:w-full sm:max-w-sm ${darkMode?'bg-white text-black':'bg-black text-white'}`}>
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">
                  Sign in to your account
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
                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                        className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                  <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                    Start a 14 day free trial
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Singup;
