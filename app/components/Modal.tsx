import Link from 'next/link';
import React from 'react';
import { FaTimes } from 'react-icons/fa';

interface ModalProps {
  children: React.ReactNode;
  theme: {
    background: string;
    text: string; 
  };
}

const Modal: React.FC<ModalProps> = ({  children, theme }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-screen h-screen bg-black bg-opacity-50 p-4 md:p-8 transition-opacity duration-300 ease-in-out">
      <div
        className="relative w-full max-w-2xl md:max-w-3xl lg:max-w-4xl bg-white rounded-lg shadow-lg p-6 md:p-8 lg:p-10 overflow-auto"
        style={{ backgroundColor: theme.background, color: theme.text }}
      >
        {/* Close Button */}
        <Link
          href={`home`}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-600"
          aria-label="Close Modal"
        >
          <FaTimes className="text-2xl" />
        </Link>

        {/* Modal Content */}
        <div className="max-h-[80vh] overflow-auto">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
