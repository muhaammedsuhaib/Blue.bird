"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoIosPartlySunny } from "react-icons/io";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { Theme } from "@/app/utils/Theme";
import Registration from "./Registration";
import Login from "./Login";

interface AuthProps {
  params: {
    path: string;
  };
}
const Auth: React.FC<AuthProps> = ({ params }) => {

  const [mode, setmode] = useState<boolean>(false);

  useEffect(() => {
    const savedmode = localStorage.getItem("mode");
    if (savedmode === "true") {
      setmode(true);
    } else {
      setmode(false);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("mode", JSON.stringify(mode));
  }, [mode]);

  const them = Theme(mode);

  return (
    <>
      <div
        className={`w-full h-[100vh] flex flex-wrap overflow-auto `}
        style={{ backgroundColor: them.background, color: them.text }}
      >
        <header className=" py-4 fixed top-0 left-0 right-0">
          <nav className="container mx-auto flex justify-between items-center px-6">
            <Link href="/">
              <Image
                src="/BrandLogo.png"
                alt="Blue Bird Logo"
                width={70}
                height={70}
              />
            </Link>

            <button
              className="flex items-center gap-2 text-end  rounded-md p-4 "
              onClick={() => setmode(!mode)}
            >
              {!mode ? (
                <BsFillMoonStarsFill className="text-black" size={30} />
              ) : (
                <IoIosPartlySunny className="text-blue-600" size={35} />
              )}
            </button>
          </nav>
        </header>

        <div className={`hidden md:flex justify-center w-full md:w-1/2`}>
          <div className="flex items-center justify-center">
            <img
              src={`${!mode ? "/bglogo.png" : "/bluebird-white.png"}`}
              alt="BrandLogo"
              className="h-auto w-32 md:w-auto"
            />
          </div>
        </div>

        <div className={`w-full md:w-1/2`}>
          <div className="w-full h-screen flex items-center justify-center text-start">
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
              <div className={`sm:mx-auto sm:w-full sm:max-w-sm`}>
                <div className="text-center md:hidden">
                  <img
                    src={`${!mode ? "/bglogo.png" : "/bluebird-white.png"}`}
                    alt="BrandLogo"
                    className="mx-auto h-36 w-auto"
                  />
                </div>

                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">
                  {params.path === "login"? "Log into existing account": "Create new account"}
                </h2>
              </div>
              {params.path === "login" ? <Login /> : <Registration />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth;
