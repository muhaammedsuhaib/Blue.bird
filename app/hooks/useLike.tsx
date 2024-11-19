import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
import { toggleLike } from "@/app/api/userApis";
import { LikeResponse } from "../types/user";

interface LikeParams {
  userId: string;   
  postId: string;
}

const useLike = (refetchPosts: () => void,refetchUser:()=>void) => {
  const queryClient = useQueryClient();

  const mutation = useMutation<LikeResponse, AxiosError<{ message: string }>, LikeParams>({
    mutationFn: async ({ userId, postId }: LikeParams): Promise<LikeResponse> => {
      return await toggleLike(userId, postId);
    },
    onSuccess: (response, { userId }) => {
      toast.success(response.message || "Like status updated successfully!");
      queryClient.invalidateQueries({ queryKey: ["fetchposts", userId] });
      refetchPosts();
      refetchUser();
    //   queryClient.invalidateQueries({ queryKey: ["suggestionsProfiles", userId] });
    },
    onError: (error: AxiosError<{ message: string }>) => {
      const errorMessage =
        error?.response?.data?.message || "Failed to update Like status!";
      toast.error(errorMessage);
    },
  });

  return {
    likeToggle: mutation.mutate,
    isLoading: mutation.isPending,
    isError: mutation.isError,
    error: mutation.error,
  };
};

export default useLike;
