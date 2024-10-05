"use client";
import Image from "next/image";
import Link from "next/link";
import {
  FaUserFriends,
  FaComments,
  FaRegHeart,
  FaCamera,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa"; 

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-50 text-gray-800">
      {/* Navigation Bar */}
      <header className="text-white py-4">
        <nav className="container mx-auto flex justify-between items-center px-6">
          <Link href="/">
            <Image
              src="/bglogo.png"
              alt="Blue Bird Logo"
              width={70}
              height={70}
            />
          </Link>
          <Link
            href="/Signup"
            className="flex text-black items-center mx-4 text-lg hover:text-indigo-300"
            aria-label="Go to account page"
          >
            <FaUser className="mr-2" aria-hidden="true" size={20} />{" "}
            {/* User Icon */}
            <span className="hidden sm:block"> Go to account</span>
          </Link>
        </nav>
      </header>

      {/* Welcome Section */}
      <div className="flex flex-col justify-center items-center text-center my-12 px-4">
        <h2 className="text-5xl font-bold mb-4">Welcome to Blue Bird!</h2>
        <p className="mb-6 text-lg max-w-md">
          Connect, share, and discover with friends in an engaging social
          network!
        </p>
        <Link
          href="/Signup"
          className="rounded-md px-6 py-3 text-lg font-semibold shadow-md transition-colors bg-indigo-600 text-white hover:bg-indigo-500"
          aria-label="Get started by signing up"
        >
          Get Started
        </Link>
      </div>

      {/* Feature Icons Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full max-w-5xl px-4 mx-auto">
        {/* User Connections */}
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <FaUserFriends
            className="text-5xl text-indigo-600 mb-4"
            aria-hidden="true"
          />
          <h3 className="text-xl font-semibold">Connect with Friends</h3>
          <p className="text-center mt-2">
            Find and connect with friends around the world.
          </p>
        </div>
        {/* Messaging Feature */}
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <FaComments
            className="text-5xl text-indigo-600 mb-4"
            aria-hidden="true"
          />
          <h3 className="text-xl font-semibold">Instant Messaging</h3>
          <p className="text-center mt-2">
            Chat with friends in real-time, anytime.
          </p>
        </div>
        {/* Content Sharing */}
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <FaCamera
            className="text-5xl text-indigo-600 mb-4"
            aria-hidden="true"
          />
          <h3 className="text-xl font-semibold">Share Your Moments</h3>
          <p className="text-center mt-2">
            Post photos and updates to share with your network.
          </p>
        </div>
        {/* Likes and Interactions */}
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <FaRegHeart
            className="text-5xl text-indigo-600 mb-4"
            aria-hidden="true"
          />
          <h3 className="text-xl font-semibold">Engage with Posts</h3>
          <p className="text-center mt-2">
            Like and comment on posts from friends and creators.
          </p>
        </div>
      </div>

      {/* Brand Logo Section */}
      <div className="mt-12">
        <Image
          src="/bglogo.png"
          alt="Blue Bird Logo"
          width={150}
          height={150}
        />
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
          {/* Contact Info */}
          <div className="mb-4 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
            <p className="flex items-center">
              <FaEnvelope className="mr-2" aria-hidden="true" />
              <span>muhammedsuhaibpottayil@gmail.com</span>
            </p>
            <p className="flex items-center">
              <FaPhone className="mr-2" aria-hidden="true" />
              <span>+91 736 890297</span>
            </p>
            <p className="flex items-center">
              <FaWhatsapp className="mr-2" aria-hidden="true" />
              <span>+91 736 890297</span>
            </p>

            <p className="text-gray-400">
              Check out our company portfolio:{" "}
              <a
                href="https://dev-hubb.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:text-indigo-300"
              >
               Devhubb Technology
              </a>
            </p>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-6">
            <Link
              href="https://www.linkedin.com/in/muhammedsuhaib/"
              aria-label="LinkedIn"
              className="hover:text-gray-400"
            >
              <FaLinkedin className="text-2xl" aria-hidden="true" />
            </Link>
            <Link
              href="https://www.instagram.com/devhu.bb"
              aria-label="Instagram"
              className="hover:text-gray-400"
            >
              <FaInstagram className="text-2xl" aria-hidden="true" />
            </Link>
            <Link
              href="https://x.com/MuhaammedSuhaib"
              aria-label="Twitter"
              className="hover:text-gray-400"
            >
              <FaTwitter className="text-2xl" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
