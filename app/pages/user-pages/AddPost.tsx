"use client";
import React from "react";
import Modal from "../../components/Modal";
import Loading from "../../components/Loading";
import { Itheme } from "@/app/types/theme";
import Input from "@/app/components/Input";
import Button from "@/app/components/Button";
import { useCreatePost } from "@/app/hooks/useCreatePost";

interface AddPostProps {
  userId: string;
  theme: Itheme;
}

const AddPost: React.FC<AddPostProps> = ({ userId, theme }) => {
  const {
    postImage,
    preview,
    caption,
    setCaption,
    handleImageUpload,
    handleSubmit,
    isPending,
  } = useCreatePost(userId);

  if (isPending) return <Loading />;
  return (
    <Modal key={23456} theme={theme}>
      <h2 className="text-xl font-bold mb-4">Add New Post</h2>

      <div className="mb-4">
        <label htmlFor="post-upload" className="block text-sm font-medium mb-2">
          Upload your post image
        </label>
        <Input
          id="post-upload"
          type="file"
          required
          accept="image/*"
          onChange={handleImageUpload}
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />
      </div>

      {preview && (
        <div className="mb-4">
          <h3 className="text-sm font-medium">Preview:</h3>
          <img
            src={preview}
            alt="Post preview"
            className="w-full h-60 object-cover mt-2 rounded-lg"
          />
        </div>
      )}

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
          required
        />
      </div>

      <div className="flex justify-end">
        <Button
          onClick={handleSubmit}
          disabled={isPending || !postImage || !caption}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          label={isPending ? "Adding Post..." : "Add Post"}
        />
      </div>
    </Modal>
  );
};

export default AddPost;