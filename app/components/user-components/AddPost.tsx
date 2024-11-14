"use client";
import React, { useState } from "react";
import Modal from "../Modal";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { ErrorResponse } from "@/app/types/commen";
import { CreatePostResponse } from "@/app/types/post";
import toast from "react-hot-toast";
import { createPost } from "@/app/api/userApis";
import { useRouter } from "next/navigation";
import Loading from "../Loading";

interface AddPostProps {
  userId: string;
  theme: {
    background: string;
    text: string;
  };
}

const AddPost: React.FC<AddPostProps> = ({ userId, theme }) => {
  const router = useRouter();
  const [postImage, setPostImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [caption, setCaption] = useState<string>("");

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      if (!["image/jpeg", "image/png", "image/gif"].includes(file.type)) {
        setPostImage(null);
        setPreview(null);
        toast.error(
          "Invalid file type. Please upload a JPEG, PNG, or GIF image."
        );
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setPostImage(file);
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const { mutate, isPending } = useMutation<
    CreatePostResponse,
    AxiosError<ErrorResponse>,
    FormData
  >({
    mutationFn: async (formData) => {
      const response = await createPost(formData);
      return response as CreatePostResponse;
    },
    onSuccess: (response) => {
      toast.success(response?.message || "Post created successfully!");
      setCaption("");
      setPostImage(null);
      setPreview(null);
      router.push("home");
    },
    onError: (error: AxiosError<ErrorResponse>) => {
      const errorMessage =
        error?.response?.data?.message || "Failed to create post!";
      toast.error(errorMessage);
    },
  });

  const handleSubmit = () => {
    if (postImage && caption) {
      const formData = new FormData();
      formData.append("description", caption);
      formData.append("file", postImage);
      formData.append("author", userId);
      mutate(formData);
    } else {
      toast.error("Please upload an image and write a caption to add a post.");
    }
  };
if(isPending) return <Loading/>
  return (
    <Modal key={23456} theme={theme}>
      <h2 className="text-xl font-bold mb-4">Add New Post</h2>

      <div className="mb-4">
        <label htmlFor="post-upload" className="block text-sm font-medium mb-2">
          Upload your post image
        </label>
        <input
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
        <button
          onClick={handleSubmit}
          disabled={isPending || !postImage || !caption}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          {isPending ? "Adding Post..." : "Add Post"}
        </button>
      </div>
    </Modal>
  );
};

export default AddPost;
