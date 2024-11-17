import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addComment, replyComment } from "@/app/api/userApis";
import { CreateCommentResponse } from "@/app/types/comment";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
import { useState } from "react";

const useCommentActions = (postId: string, userId: string) => {
  const queryClient = useQueryClient();

  const [newComment, setNewComment] = useState("");
  const [replyContent, setReplyContent] = useState("");
  const [activeReply, setActiveReply] = useState<string | null>(null);

  const addCommentMutation = useMutation<
    CreateCommentResponse,
    AxiosError,
    { authorId: string; content: string; postId: string }
  >({
    mutationFn: async ({ authorId, content, postId }) => {
      const response = await addComment(authorId, content, postId);
      return response;
    },
    onSuccess: (response) => {
      toast.success(response.message || "Comment created successfully!");
      setNewComment("");
      queryClient.invalidateQueries({ queryKey: ["uniquePost", postId] });
    },
    onError: (error: AxiosError<any>) => {
      const errorMessage =
        error?.response?.data?.message || "Failed to create comment!";
      toast.error(errorMessage);
    },
  });

  const addReplyMutation = useMutation<
    CreateCommentResponse,
    AxiosError,
    { authorId: string; content: string; commentId: string }
  >({
    mutationFn: async ({ authorId, content, commentId }) => {
      const response = await replyComment(authorId, content, commentId);
      return response;
    },
    onSuccess: (response) => {
      toast.success(response.message || "Reply created successfully!");
      setReplyContent("");
      queryClient.invalidateQueries({ queryKey: ["uniquePost", postId] });
    },
    onError: (error: AxiosError<any>) => {
      const errorMessage =
        error?.response?.data?.message || "Failed to create reply!";
      toast.error(errorMessage);
    },
  });

  const handleAddComment = () => {
    addCommentMutation.mutate({
      authorId: userId,
      content: newComment,
      postId,
    });
  };

  const handleAddReply = (commentId: string) => {
    addReplyMutation.mutate({
      authorId: userId,
      content: replyContent,
      commentId,
    });
  };

  return {
    newComment,
    setNewComment,
    replyContent,
    setReplyContent,
    activeReply,
    setActiveReply,
    addCommentMutation,
    addReplyMutation,
    handleAddComment,
    handleAddReply,
  };
};

export default useCommentActions;
