import { useQuery } from "@tanstack/react-query";
import { fetchProfile } from "@/app/api/userApis"; 

const useProfile = (profileuserId: string) => {
  const { data: user, isLoading: profileLoading, error } = useQuery({
    queryKey: ["userProfile", profileuserId],
    queryFn: () => fetchProfile(profileuserId),
    enabled: !!profileuserId, 
  });

  return { user, profileLoading, error };
};

export default useProfile;
