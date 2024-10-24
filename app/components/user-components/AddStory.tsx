"use client";
import React, { useState } from 'react';

interface AddStoryProps {
  userId: string; 
  theme: {
    background: string;
    text: string;
  };
  onclose: (value: string | null) => void; 
}

const AddStory: React.FC<AddStoryProps> = ({ userId, theme, onclose }) => {
  const [storyImage, setStoryImage] = useState<string | null>(null); // Image file name
  const [preview, setPreview] = useState<string | null>(null); // Image preview

  // Handle image upload and preview
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setStoryImage(file.name);
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle submit and pass the image to the backend or another function
  const handleSubmit = () => {
    if (storyImage) {
      console.log(`New story added by userId ${userId}:`, storyImage);
      onclose('Story added');
    } else {
      alert("Please upload an image to add a story");
    }
  };

  return (
    <div className="fixed inset-0 z-50 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50">
      <div
        className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full relative"
        style={{ backgroundColor: theme.background, color: theme.text }}
      >
        {/* Close Button */}
        <button
          onClick={() => onclose(null)} // Close modal
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
          aria-label="Close Modal"
        >
          &times;
        </button>

        <h2 className="text-xl font-bold mb-4">Add New Story</h2>

        {/* Image Upload Input */}
        <div className="mb-4">
          <label htmlFor="story-upload" className="block text-sm font-medium mb-2">
            Upload your story image
          </label>
          <input
            id="story-upload"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
        </div>

        {/* Image Preview */}
        {preview && (
          <div className="mb-4">
            <h3 className="text-sm font-medium">Preview:</h3>
            <img src={preview} alt="Story preview" className="w-full h-60 object-cover mt-2 rounded-lg" />
          </div>
        )}

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Add Story
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddStory;
