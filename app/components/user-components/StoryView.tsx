import React from 'react';
import { FaTimes } from 'react-icons/fa';

interface StoryViewProps {
  title: string; // Title of the story
  content: string; // Main content of the story
  author: string; // Author's name
  authorImage: string; // Author's profile image URL
  imageUrl: string; // Main story image URL
  date: string; // Date the story was published
  onclose: () => void; // Function to close the view
  theme: {
    background: string; // Background color
    text: string; // Text color
  };
}

const StoryView: React.FC<StoryViewProps> = ({
  title,
  content,
  author,
  authorImage,
  date,
  onclose,
  theme,
  imageUrl,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-screen h-screen bg-black bg-opacity-50 p-4 md:p-8 transition-opacity duration-300 ease-in-out">
      <div
        className="relative w-full max-w-2xl md:max-w-3xl lg:max-w-4xl bg-white rounded-lg shadow-lg p-6 md:p-8 lg:p-10 overflow-auto"
        style={{ backgroundColor: theme.background, color: theme.text }}
      >
        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
          onClick={onclose}
          aria-label="Close Story"
        >
          <FaTimes className="text-2xl" />
        </button>

        {/* Story Image */}
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />

        {/* Story Title */}
        <h2 className="text-2xl font-bold mb-2" style={{ color: theme.text }}>
          {title}
        </h2>

        {/* Author Info */}
        <div className="flex items-center mb-4">
          <img
            src={authorImage}
            alt={author}
            className="rounded-full w-10 h-10 mr-3 border-2 border-gray-300"
          />
          <p className="text-sm text-gray-500" style={{ color: theme.text }}>
            {`By ${author} on ${date}`}
          </p>
        </div>

        {/* Story Content */}
        <p className="text-base text-gray-700" style={{ color: theme.text }}>
          {content}
        </p>
      </div>
    </div>
  );
};

export default StoryView;
