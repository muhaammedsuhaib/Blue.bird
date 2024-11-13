import userAxios from "../lib/userAxios";
import { CreatePostResponse } from "../types/post";
import { User } from "../types/user";

export const fetchProfile = async (id: string): Promise<User> => {
  const response = await userAxios.get(`/user/${id}`);
  return response.data.data;
};
export const fetchSuggestions = async (id: string): Promise<User[]> => {
  const response = await userAxios.get(`/user/suggestions/${id}`);
  return response.data.data;
};
export const searchUsers = async (id: string, query: string): Promise<any> => {
  try {
    const response = await userAxios.get(`/user/search/${id}?query=${query}`);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching search results:", error);
    return [];
  }
};

export const createPost = async (
  formData: FormData
): Promise<CreatePostResponse> => {
  try {
    const response = await userAxios.post("/user/post", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data as CreatePostResponse;
  } catch (error) {
    console.error("Post creation failed:", error);
    throw error;
  }
};
