import userAxios from "../lib/userAxios";
import { User } from "../types/user";

export const fetchProfile = async (id: string):Promise<User>=> {
  const response = await userAxios.get(`/user/${id}`);
  return response.data.data;
};
export const fetchSuggestions = async (id: string):Promise<User[]>=> {
  const response = await userAxios.get(`/user/suggestions/${id}`);  
  return response.data.data;
};
