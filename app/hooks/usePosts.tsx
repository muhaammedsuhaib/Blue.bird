import { useQuery } from "@tanstack/react-query";
import { fetchPosts, uniquePost } from "@/app/api/userApis";
import { GetPostResponse, GetuniquePostResponse } from "@/app/types/post";

const usePosts = (userId: string) => {
  return useQuery<GetPostResponse[]>({
    queryKey: ["fetchposts", userId],
    queryFn: () => fetchPosts(),
    enabled: !!userId,
  });
};

export default usePosts;