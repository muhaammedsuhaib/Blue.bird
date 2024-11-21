import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { createStory } from "@/app/api/userApis";
import { CreateStorieResponse } from "@/app/types/storie";
import { ErrorResponse } from "@/app/types/commen";

const useCreateStory = (userId: string) => {
  const [storyImage, setStoryImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const router = useRouter();

  const { mutate, isPending } = useMutation<
    CreateStorieResponse,
    AxiosError<ErrorResponse>,
    FormData
  >({
    mutationFn: async (formData) => {
      const response = await createStory(formData);
      return response as CreateStorieResponse;
    },
    onSuccess: (response) => {
      toast.success(response?.message || "Story created successfully!");
      setStoryImage(null);
      setPreview(null);
      router.push("home");
    },
    onError: (error: AxiosError<ErrorResponse>) => {
      const errorMessage =
        error?.response?.data?.message || "Failed to create story!";
      toast.error(errorMessage);
    },
  });

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      if (!["image/jpeg", "image/png", "image/gif"].includes(file.type)) {
        setStoryImage(null);
        setPreview(null);
        toast.error(
          "Invalid file type. Please upload a JPEG, PNG, or GIF image."
        );
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setStoryImage(file);
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    if (storyImage) {
      const formData = new FormData();
      formData.append("file", storyImage);
      formData.append("author", userId);
      mutate(formData);
    } else {
      toast.error("Please upload an image to add a story.");
    }
  };

  return {
    storyImage,
    preview,
    handleImageUpload,
    handleSubmit,
    isPending,
  };
};

export default useCreateStory;
