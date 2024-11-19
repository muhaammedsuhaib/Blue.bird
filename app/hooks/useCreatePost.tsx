import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { ErrorResponse } from "@/app/types/commen";
import { CreatePostResponse } from "@/app/types/post";
import toast from "react-hot-toast";
import { createPost } from "@/app/api/userApis";
import { useRouter } from "next/navigation";

export const useCreatePost = (userId: string) => {
  const [postImage, setPostImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [caption, setCaption] = useState<string>("");
  const router = useRouter();
  const { mutate, isPending } = useMutation<CreatePostResponse, AxiosError<ErrorResponse>, FormData>({
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
      const errorMessage = error?.response?.data?.message || "Failed to create post!";
      toast.error(errorMessage);
    },
  });

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      if (!["image/jpeg", "image/png", "image/gif"].includes(file.type)) {
        setPostImage(null);
        setPreview(null);
        toast.error("Invalid file type. Please upload a JPEG, PNG, or GIF image.");
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

  return {
    postImage,
    preview,
    caption,
    setCaption,
    handleImageUpload,
    handleSubmit,
    isPending,
  };
};
