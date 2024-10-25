"use client";
import React, { useState } from 'react';
import Modal from '../Modal';

interface AddPostProps {
  userId: string;
  theme: {
    background: string;
    text: string;
  };
}

const AddPost: React.FC<AddPostProps> = ({ userId, theme }) => {
  const [postImage, setPostImage] = useState<string | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [caption, setCaption] = useState<string>(''); // Caption state

  // Handle image upload
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPostImage(file.name);
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle submit
  const handleSubmit = () => {
    if (postImage && caption) {
      console.log(`New post added by userId ${userId}:`, { postImage, caption });

    } else {
      alert("Please upload an image and write a caption to add a post.");
    }
  };

  return (
    <Modal key={23456}  theme={theme}>
      <h2 className="text-xl font-bold mb-4">Add New Post</h2>

      {/* Image Upload Input */}
      <div className="mb-4">
        <label htmlFor="post-upload" className="block text-sm font-medium mb-2">
          Upload your post image
        </label>
        <input
          id="post-upload"
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
          <img src={preview} alt="Post preview" className="w-full h-60 object-cover mt-2 rounded-lg" />
        </div>
      )}

      {/* Caption Input */}
      <div className="mb-4">
        <label htmlFor="caption" className="block text-sm font-medium mb-2">
          Write a caption
        </label>
        <textarea
          id="caption"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          placeholder="Write your caption here..."
          className="w-full p-2 border border-gray-300 rounded-lg mb-4 resize-none"
          rows={4}
        />
      </div>

      {/* Submit Button */}
      <div className="flex justify-end">
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Add Post
        </button>
      </div>
    </Modal>
  );
};

export default AddPost;
