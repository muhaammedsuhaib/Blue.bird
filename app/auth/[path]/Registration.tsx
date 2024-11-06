// components/Registration.tsx
import React, { useState } from "react";
import { useFormik } from "formik";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import * as Yup from "yup"; // Make sure to import Yup for validation schema
import  { AxiosError } from "axios";
import toast from "react-hot-toast";
import Loading from "@/app/components/Loading";
import axiosInstance from "@/app/lib/userAxios";

type ErrorResponse = {
  message: string;
};

const Registration: React.FC = () => {

  const [loading, setloading] = useState<Boolean>(false);

  const validationSchema = Yup.object({
    username: Yup.string()
      .required("Username is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      setloading(true);
      try {
        const response = await axiosInstance.post(`/auth/register`, {
          email: values.email,
          username:values.username,
          password: values.password,
        });
        toast.success(response?.data?.message || 'Login successful!');
        formik.resetForm();
      } catch (error) {
        const err = error as AxiosError<ErrorResponse>;
        toast.error(err?.response?.data.message|| 'Registration failed!');
      } finally {
        setloading(false);
      }
    },
  });

  const handleGoogleSignup = () => {
    console.log("Google signup clicked");
  };
  if (loading) return <Loading />;
  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form onSubmit={formik.handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="username"
            className="block text-sm font-medium leading-6"
          >
            Username
          </label>
          <div>
            <input
              id="username"
              name="username"
              type="text"
              required
              autoComplete="username"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
              className={`block w-full rounded-md border-0 py-1.5 shadow-sm  text-black ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
            />
            {formik.touched.username && formik.errors.username ? (
              <div className="text-red-600 text-sm">{formik.errors.username}</div>
            ) : null}
          </div>
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6"
          >
            Email address
          </label>
          <div>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className={`block w-full rounded-md border-0 py-1.5 shadow-sm text-black ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-600 text-sm">{formik.errors.email}</div>
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
          <div>
            <input
              id="password"
              name="password"
              type="password"
              required
              autoComplete="current-password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              className={`block w-full rounded-md border-0 text-black py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
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
            Create account
          </button>
        </div>

        <div >
          <button
            type="button"
            onClick={handleGoogleSignup}
            className="flex w-full bg-white items-center justify-center gap-2 rounded-md border border-gray-300 px-3 py-1.5 text-sm font-semibold leading-6 text-gray-700 shadow-sm hover:bg-gray-100"
          >
            <FcGoogle className="text-2xl" />
            Continue With Google
          </button>
        </div>
      </form>

      <p className="mt-2 text-center text-sm">
        Not a member?{" "}
        <Link
          href="login"
          className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          aria-label="Login to your account"
        >
          Login to your account
        </Link>
      </p>
    </div>
  );
};

export default Registration;
