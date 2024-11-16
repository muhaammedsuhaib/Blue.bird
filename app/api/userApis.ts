import userAxios from "../lib/userAxios";
import { CreateCommentResponse } from "../types/comment";
import {
  CreatePostResponse,
  GetPostResponse,
  GetuniquePostResponse,
  Post,
} from "../types/post";
import { FollowResponse, User } from "../types/user";

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
    const response = await userAxios.post("/post", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data as CreatePostResponse;
  } catch (error) {
    console.error("Post creation failed:", error);
    throw error;
  }
};
export const fetchPosts = async (): Promise<GetPostResponse[]> => {
  const response = await userAxios.get("/post");
  return response.data.data;
};
export const uniquePost = async (
  id: string
): Promise<GetuniquePostResponse> => {
  const response = await userAxios.get(`/post/${id}`);
  return response.data.data;
};
export const addComment = async (
  authorId: string,
  content: string,
  postId: string
): Promise<CreateCommentResponse> => {
  try {
    const response = await userAxios.post("/comment", {
      authorId,
      content,
      postId,
    });
    return response.data as CreateCommentResponse;
  } catch (error) {
    console.error("Post creation failed:", error);
    throw error;
  }
};
export const replyComment = async (
  authorId: string,
  content: string,
  commentId: string
): Promise<CreateCommentResponse> => {
  try {
    const response = await userAxios.post("/comment/reply", {
      authorId,
      content,
      commentId,
    });
    return response.data as CreateCommentResponse;
  } catch (error) {
    console.error("Post creation failed:", error);
    throw error;
  }
};
export const toggleFollow = async ( userId:string, targetId:string): Promise<FollowResponse> => {
  try {
    const response = await userAxios.post("/user/togglefollow", { userId, targetId   });
    return response.data as FollowResponse;
  } catch (error) {
    console.error("Follow or Unfollow creation failed:", error);
    throw error;
  }
};
