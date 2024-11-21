import { useQuery } from "@tanstack/react-query";
import { fetchStories } from "../api/userApis";

const useStories = (userId: string) => {
  return useQuery<any>({
    queryKey: ["story", userId],
    queryFn: () => fetchStories(userId),
    enabled: !!userId,
  });
};

export default useStories;
