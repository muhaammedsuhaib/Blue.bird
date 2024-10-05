"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useAppContext } from "../Context/AppContext";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";
import Link from "next/link";
import { IoIosPartlySunny } from "react-icons/io";
import { BsFillMoonStarsFill } from "react-icons/bs";

const Signup: React.FC = () => {
  const { darkMode, setDarkMode } = useAppContext();
  const [isLogin, setIsLogin] = useState<boolean>(true);

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  // Initialize Formik
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      if (isLogin) {
        console.log("Login submitted", values);
      } else {
        console.log("Signup submitted", values);
      }
      // Clear form after submission
      formik.resetForm();
    },
  });

  const handleGoogleSignup = () => {
    // Here you would integrate Google OAuth login functionality
    console.log("Google signup clicked");
    // Redirect to Google login using OAuth
  };

  return (
    <>
      <div
        className={`w-full h-[100vh] flex flex-wrap overflow-auto ${
          darkMode ? "bg-white text-black" : "bg-black text-white"
        }`}
      >
        <header className="text-black py-4 fixed top-0 left-0 right-0">
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
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? (
                <BsFillMoonStarsFill className="text-black" size={30} />
              ) : (
                <IoIosPartlySunny className="text-blue-600" size={35} />
              )}
            </button>
          </nav>
        </header>

        <div
          className={`hidden md:flex justify-center w-full md:w-1/2 ${
            darkMode ? "bg-white text-black" : "bg-black text-white"
          }`}
        >
          <div className="flex items-center justify-center">
            <img
              src={`${darkMode ? "/bglogo.png" : "/bluebird-white.png"}`}
              alt="BrandLogo"
              className="h-auto w-32 md:w-auto"
            />
          </div>
        </div>

        <div
          className={`w-full md:w-1/2 ${
            darkMode ? "bg-white text-black" : "bg-black text-white"
          }`}
        >
          <div className="w-full h-screen flex items-center justify-center text-start">
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
              <div
                className={`sm:mx-auto sm:w-full sm:max-w-sm ${
                  darkMode ? "bg-white text-black" : "bg-black text-white"
                }`}
              >
                <div className="text-center md:hidden">
                  <img
                    src={`${darkMode ? "/bglogo.png" : "/bluebird-white.png"}`}
                    alt="BrandLogo"
                    className="mx-auto h-36 w-auto"
                  />
                </div>

                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">
                  {isLogin ? "Log into existing account" : "Create new account"}
                </h2>
              </div>

              <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={formik.handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6"
                    >
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        className={`block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
                          darkMode ? "text-black" : "text-black"
                        }`}
                      />
                      {formik.touched.email && formik.errors.email ? (
                        <div className="text-red-600 text-sm">
                          {formik.errors.email}
                        </div>
                      ) : null}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6"
                    >
                      Password
                    </label>
                    <div className="mt-2">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        required
                        autoComplete="current-password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                        className={`block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
                          darkMode ? "text-black" : "text-black"
                        }`}
                      />
                      {formik.touched.password && formik.errors.password ? (
                        <div className="text-red-600 text-sm">
                          {formik.errors.password}
                        </div>
                      ) : null}
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      {isLogin ? "Sign in" : "Create account"}
                    </button>
                  </div>
                </form>

                {!isLogin && (
                  <div className="mt-6">
                    <button
                      type="button"
                      onClick={handleGoogleSignup}
                      className="flex w-full items-center justify-center gap-2 rounded-md border border-gray-300 px-3 py-1.5 text-sm font-semibold leading-6 text-gray-700 shadow-sm hover:bg-gray-100"
                    >
                      <FcGoogle className="text-2xl" />
                      Sign up with Google
                    </button>
                  </div>
                )}

                <p className="mt-10 text-center text-sm">
                  {isLogin ? "Not a member?" : "Have an account?"}{" "}
                  <a
                    href="#"
                    onClick={() => setIsLogin(!isLogin)}
                    className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                  >
                    {isLogin ? "Create new account" : "Login to your account"}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
