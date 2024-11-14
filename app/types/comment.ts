export interface Reply {
  author: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  _id: string;
}

export interface CommentData {
  author: string;
  content: string;
  post: string;
  replies: Reply[];
  _id: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface CreateCommentResponse {
  message: string;
  data: CommentData;
}
