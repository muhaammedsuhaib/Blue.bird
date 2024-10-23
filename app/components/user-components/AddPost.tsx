

import React, { useState } from 'react';

interface AddPostProps {
  onAddPost: (title: string, content: string, imageUrl: string) => void;
}

const AddPost: React.FC<AddPostProps> = ({ onAddPost }) => {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [imageUrl, setImageUrl] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title && content && imageUrl) {
      onAddPost(title, content, imageUrl);
      setTitle('');
      setContent('');
      setImageUrl('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg p-4 mb-4">
      <h3 className="text-lg font-semibold mb-2">Add a New Post</h3>
      <input
        type="text"
        placeholder="Post Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 border rounded mb-2"
        required
      />
      <textarea
        placeholder="Post Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full p-2 border rounded mb-2"
        required
      />
      <input
        type="text"
        placeholder="Image URL"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        className="w-full p-2 border rounded mb-2"
        required
      />
      <button
        type="submit"
        className="w-full px-4 py-2 text-white bg-indigo-600 rounded hover:bg-indigo-500 transition duration-200"
      >
        Add Post
      </button>
    </form>
  );
};

export default AddPost;
