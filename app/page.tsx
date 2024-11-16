"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaUserFriends,
  FaComments,
  FaRegHeart,
  FaCamera,
} from "react-icons/fa";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <Header />

      {/* Welcome Section */}
      <section className="flex flex-col items-center text-center my-12 px-4 animate-">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          Welcome to Blue Bird!
        </h2>
        <p className="text-lg text-gray-600 max-w-md mb-6">
          Connect, share, and discover with friends in an engaging social
          network!
        </p>
        <Link
          href="/auth/login"
          className="rounded-md px-6 py-3 text-lg font-semibold shadow-lg transition-colors bg-indigo-600 text-white hover:bg-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-300 hover:scale-105"
          aria-label="Get started by signing up"
        >
          Get Started
        </Link>
      </section>

      {/* Feature Icons Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-5xl px-4 mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            {feature.icon}
            <h3 className="text-xl font-semibold text-gray-800 mt-2 animate-pulse">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-sm text-center mt-2">
              {feature.description}
            </p>
          </div>
        ))}
      </section>

      <div className="relative flex items-center w-full justify-center mt-14 max-w-5xl px-4 mx-auto">
        <video
          autoPlay
          loop
          muted
          className="absolute w-full h-full object-cover rounded-lg"
        >
          <source src="/bluebird-bg.mp4" type="video/mp4" />
        </video>
        <Image
          src="/Bluebirdsocial.png"
          alt="Blue Bird Logo"
          width={200}
          height={200}
          priority
          className="rounded-full shadow-2xl hover:scale-105 transition-transform z-10 p-6"
        />
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}

// Feature data map
const features = [
  {
    icon: (
      <FaUserFriends
        className="text-5xl text-indigo-600 mb-4 animate-bounce"
        aria-hidden="true"
      />
    ),
    title: "Connect with Friends",
    description: "Find and connect with friends around the world.",
  },
  {
    icon: (
      <FaComments
        className="text-5xl text-indigo-600 mb-4 animate-bounce"
        aria-hidden="true"
      />
    ),
    title: "Instant Messaging",
    description: "Chat with friends in real-time, anytime.",
  },
  {
    icon: (
      <FaCamera
        className="text-5xl text-indigo-600 mb-4 animate-bounce"
        aria-hidden="true"
      />
    ),
    title: "Share Your Moments",
    description: "Post photos and updates to share with your network.",
  },
  {
    icon: (
      <FaRegHeart
        className="text-5xl text-indigo-600 mb-4 animate-bounce"
        aria-hidden="true"
      />
    ),
    title: "Engage with Posts",
    description: "Like and comment on posts from friends and creators.",
  },
];
