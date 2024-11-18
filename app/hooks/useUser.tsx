import { useQuery } from "@tanstack/react-query";
import { fetchProfile } from "@/app/api/userApis";
import { User } from "../types/user";

const useUser = (userId: string) => {
  return useQuery<User>({
    queryKey: ["userProfile", userId],
    queryFn: () => fetchProfile(userId),
    enabled: !!userId,
  });
};

export default useUser;
