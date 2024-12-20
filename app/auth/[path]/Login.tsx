import React from "react";
import { useFormik } from "formik";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import * as Yup from "yup";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
import Loading from "@/app/components/Loading";
import { useRouter } from "next/navigation";
import { login } from "@/app/api/authApis";
import { useMutation } from "@tanstack/react-query";
import { LoginResponse } from "@/app/types/auth";

type ErrorResponse = {
  message: string;
};

const Login: React.FC = () => {
  const router = useRouter();

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const { mutate, isPending } = useMutation<
    LoginResponse,
    AxiosError<ErrorResponse>,
    { email: string; password: string }
  >({
    mutationFn: async (values: { email: string; password: string }) => {
      const response = await login(values.email, values.password);
      return response;
    },
    onSuccess: (response) => {
      toast.success(response?.message || "Login successful!");
      router.push(`/user/${response?.data?.user._id}/home`);
    },
    onError: (error: AxiosError<ErrorResponse>) => {
      const errorMessage = error?.response?.data?.message || "Login failed!";
      toast.error(errorMessage);
    },
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => mutate(values),
  });

  const handleGoogleSignup = () => {
    console.log("Google signup clicked");
  };

  if (isPending) return <Loading />;
  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm ">
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
              className={`block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset text-black ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
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
              className={`block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset text-black focus:ring-indigo-600 sm:text-sm sm:leading-6`}
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
            Sign in
          </button>
        </div>

        <div className="mt-6">
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

      <p className="mt-10 text-center text-sm">
        Not a member?{" "}
        <Link
          href="registration"
          className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          aria-label="Login to your account"
        >
          Create new account
        </Link>
      </p>
    </div>
  );
};

export default Login;
