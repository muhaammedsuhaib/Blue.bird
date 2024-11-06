import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaUser } from "react-icons/fa";

const Header = () => {
  return (
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
          href="/auth/login"
          className="flex text-black items-center mx-4 text-lg hover:text-indigo-300"
          aria-label="Go to account page"
        >
          <FaUser className="mr-2" aria-hidden="true" size={20} />{" "}
          {/* User Icon */}
          <span className="hidden sm:block"> Go to account</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
