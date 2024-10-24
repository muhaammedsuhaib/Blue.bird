import React from 'react';
import { FaTimes } from 'react-icons/fa';
import Modal from '../Modal';

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
    <Modal key={68751} onclose={onclose} theme={theme}>

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
    </Modal>
  );
};

export default StoryView;
