"use client";

import Image from "next/image";
import Link from "next/link";
import { FaUserFriends, FaComments, FaRegHeart, FaCamera } from "react-icons/fa"; 
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-50 text-gray-800">

      {/* Header */}
      <Header />

      {/* Welcome Section */}
      <section className="flex flex-col justify-center items-center text-center my-12 px-4">
        <h2 className="text-5xl font-bold mb-4">Welcome to Blue Bird!</h2>
        <p className="mb-6 text-lg max-w-md">
          Connect, share, and discover with friends in an engaging social network!
        </p>
        <Link
          href="/auth/login"
          className="rounded-md px-6 py-3 text-lg font-semibold shadow-md transition-colors bg-indigo-600 text-white hover:bg-indigo-500"
          aria-label="Get started by signing up"
        >
          Get Started
        </Link>
      </section>

      {/* Feature Icons Section */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full max-w-5xl px-4 mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105"
          >
            {feature.icon}
            <h3 className="text-xl font-semibold">{feature.title}</h3>
            <p className="text-center mt-2">{feature.description}</p>
          </div>
        ))}
      </section>

      {/* Brand Logo Section */}
      <div className="flex items-center justify-center mt-12">
        <Image
          src="/bglogo.png"
          alt="Blue Bird Logo"
          width={150}
          height={150}
        />
      </div>

      {/* Footer Section */}
      <Footer />
    </main>
  );
}

// Feature data  map 
const features = [
  {
    icon: <FaUserFriends className="text-5xl text-indigo-600 mb-4" aria-hidden="true" />,
    title: "Connect with Friends",
    description: "Find and connect with friends around the world.",
  },
  {
    icon: <FaComments className="text-5xl text-indigo-600 mb-4" aria-hidden="true" />,
    title: "Instant Messaging",
    description: "Chat with friends in real-time, anytime.",
  },
  {
    icon: <FaCamera className="text-5xl text-indigo-600 mb-4" aria-hidden="true" />,
    title: "Share Your Moments",
    description: "Post photos and updates to share with your network.",
  },
  {
    icon: <FaRegHeart className="text-5xl text-indigo-600 mb-4" aria-hidden="true" />,
    title: "Engage with Posts",
    description: "Like and comment on posts from friends and creators.",
  },
];
