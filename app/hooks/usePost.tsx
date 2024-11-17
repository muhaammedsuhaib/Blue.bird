import { useQuery } from "@tanstack/react-query";
import { uniquePost } from "@/app/api/userApis";
import { GetuniquePostResponse } from "@/app/types/post";

const usePost = (postId: string) => {
  return useQuery<GetuniquePostResponse>({
    queryKey: ["uniquePost", postId],
    queryFn: () => uniquePost(postId),
    enabled: !!postId,
  });
};

export default usePost;
