import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
import { toggleFollow } from "@/app/api/userApis";
import { FollowResponse } from "@/app/types/user";

interface FollowParams {
  userId: string;   // Current user's ID
  targetId: string; // Target user's ID to follow/unfollow
}

const useFollow = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation<FollowResponse, AxiosError<{ message: string }>, FollowParams>({
    mutationFn: async ({ userId, targetId }: FollowParams): Promise<FollowResponse> => {
      // Ensure the function matches the expected structure
      return await toggleFollow(userId, targetId);
    },
    onSuccess: (response, { userId }) => {
      toast.success(response.message || "Follow status updated successfully!");
      queryClient.invalidateQueries({ queryKey: ["userProfile", userId] });
      queryClient.invalidateQueries({ queryKey: ["suggestionsProfiles", userId] });
    },
    onError: (error: AxiosError<{ message: string }>) => {
      const errorMessage =
        error?.response?.data?.message || "Failed to update follow status!";
      toast.error(errorMessage);
    },
  });

  return {
    followToggle: mutation.mutate,
    isLoading: mutation.isPending,
    isError: mutation.isError,
    error: mutation.error,
  };
};

export default useFollow;
