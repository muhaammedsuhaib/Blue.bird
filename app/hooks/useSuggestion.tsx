import { useQuery } from "@tanstack/react-query";
import {  fetchSuggestions } from "@/app/api/userApis";
import { User } from "../types/user";

const useSuggestion = (userId: string) => {
  return useQuery<User[]>({
    queryKey: ["suggestionsProfiles", userId],
    queryFn: () => fetchSuggestions(userId),
    enabled: !!userId,
  });
};

export default useSuggestion;
