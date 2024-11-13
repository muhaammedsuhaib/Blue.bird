import { User } from "./user";


export interface Post {
    author: string;                 
    content: string;                
    description: string;            
    likes: string[];                
    _id: string;                    
    comments: string[];             
    createdAt: string;               
    updatedAt: string;               
    __v: number;                     
  }

export interface PostResponse {
    message: string;
    data: {
      user: User;
    };
  }
  export interface CreatePostResponse {
    message: string;
    data: Post;
  }