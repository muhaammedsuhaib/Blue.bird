import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiAccountCircleFill } from "react-icons/ri";

const Header = () => {
  return (
    <header className="py-4 w-full max-w-5xl px-4 mx-auto">
      <nav
        className="flex justify-between items-center"
        role="navigation"
        aria-label="Main Navigation"
      >
        <Link href="/" aria-label="Home">
          <Image
            src="/bglogo.png"
            alt="Blue Bird Logo"
            width={100}
            height={100}
            priority
            className="hover:opacity-90 transition-opacity duration-200  hover:scale-105"
          />
        </Link>
        <Link
          href="/auth/login"
          className="flex items-center text-black text-lg bg-blue-200 rounded-full p-2 hover:bg-blue-300 transition-colors duration-200 focus:ring-2 focus:ring-blue-400  hover:scale-105"
          aria-label="Go to account page"
        >
          <RiAccountCircleFill
            className="md:mr-2"
            aria-hidden="true"
            size={28}
          />
          <span className="hidden sm:block font-medium">Account</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
