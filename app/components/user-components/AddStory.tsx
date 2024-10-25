import React, { useState } from 'react';
import Modal from '../Modal';

interface AddStoryProps {
  userId: string; 
  theme: {
    background: string;
    text: string;
  };
}

const AddStory: React.FC<AddStoryProps> = ({ userId, theme }) => {
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
    } else {
      alert("Please upload an image to add a story");
    }
  };

  return (
    <Modal key={34567} theme={theme}>
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
    </Modal>
  );
};

export default AddStory;
