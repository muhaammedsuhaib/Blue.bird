import Link from "next/link";
import React from "react";
import {
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-14 rounded-md w-full px-6 mx-auto">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
        <div>
          <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
          <div className="space-y-3 text-sm">
            <p className="flex items-center">
              <FaEnvelope className="mr-2 text-indigo-400" aria-hidden="true" />
              <span>muhammedsuhaibpottayil@gmail.com</span>
            </p>
            <p className="flex items-center">
              <FaPhone className="mr-2 text-indigo-400" aria-hidden="true" />
              <span>+91 736 890297</span>
            </p>
            <p className="flex items-center">
              <FaWhatsapp className="mr-2 text-indigo-400" aria-hidden="true" />
              <span>+91 736 890297</span>
            </p>
          </div>

          <p className="mt-4 text-gray-400 text-sm">
            Check out our portfolio:{" "}
            <a
              href="https://devhubb.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300 underline"
            >
              Devhubb Technology
            </a>
          </p>
        </div>
        <div className="flex space-x-6 animate-bounce">
          <Link
            href="https://www.linkedin.com/in/muhammedsuhaib/"
            aria-label="LinkedIn Profile"
            className="hover:text-indigo-400 transition-colors duration-200"
          >
            <FaLinkedin className="text-3xl" aria-hidden="true" />
          </Link>
          <Link
            href="https://www.instagram.com/devhu.bb"
            aria-label="Instagram Profile"
            className="hover:text-indigo-400 transition-colors duration-200"
          >
            <FaInstagram className="text-3xl" aria-hidden="true" />
          </Link>
          <Link
            href="https://x.com/MuhaammedSuhaib"
            aria-label="Twitter Profile"
            className="hover:text-indigo-400 transition-colors duration-200"
          >
            <FaTwitter className="text-3xl" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
