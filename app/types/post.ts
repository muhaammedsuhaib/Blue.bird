export interface Comment {
  _id: string;
  user: {
    username: string;
    profilePicture: string;
  };
  text: string;
}
interface Author {
  _id: string;
  username: string;
  profilePicture: string;
}

export interface Post {
  author: string;
  content: string;
  description: string;
  likes: string[];
  _id: string;
  comments: Comment[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface PostResponse {
  message: string;
  data: Post;
}

export interface CreatePostResponse {
  message: string;
  data: Post;
}

export interface GetPostResponse {
  _id: string;
  author: Author;
  content: string;
  description: string;
  likes: string[];
  comments: Comment[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface GetuniquePostResponse {
  _id: string;
  content: string;
  description: string;
  createdAt: string;
  likes: string[];
  author: {
    _id: string;
    username: string;
    profilePicture: string;
  };
  comments: Comment[];
}

export interface Comment {
  _id: string;
  content: string;
  createdAt: string;
  author: {
    _id: string;
    username: string;
    profilePicture: string;
  };
  replies: Reply[];
}

export interface Reply {
  _id: string;
  content: string;
  createdAt: string;
  author: {
    _id: string;
    username: string;
    profilePicture: string;
  };
}
