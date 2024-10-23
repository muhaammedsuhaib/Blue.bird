import Link from 'next/link'
import React from 'react'
import { FaEnvelope, FaInstagram, FaLinkedin, FaPhone, FaTwitter, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
  return (
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
  )
}

export default Footer