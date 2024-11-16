import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { FaReply, FaTimes } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import Loading from "../../components/Loading";
import { uniquePost, addComment, replyComment } from "@/app/api/userApis";
import { formatDate } from "@/app/utils/formatDate";
import { GetuniquePostResponse } from "@/app/types/post";
import { BiSolidSend } from "react-icons/bi";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
import { CreateCommentResponse } from "@/app/types/comment";
import { ErrorResponse } from "@/app/types/commen";

interface PostViewProps {
  theme: {
    background: string;
    text: string;
    textHover: string;
  };
  postId: string;
  userId: string;
  onclose: () => void;
}

const PostView: React.FC<PostViewProps> = ({
  theme,
  postId,
  onclose,
  userId,
}) => {
  const queryClient = useQueryClient();
  const { data: post, isLoading: postLoading } =
    useQuery<GetuniquePostResponse>({
      queryKey: ["uniquePost", postId],
      queryFn: () => uniquePost(postId),
      enabled: !!postId,
    });

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
        error?.response?.data?.message || "Failed to create post!";
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

  if (postLoading) return <Loading />;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-screen h-screen  bg-opacity-50 p-4 overflow-y-auto">
      <div
        className="relative w-full max-w-3xl lg:max-w-5xl bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8"
        style={{ backgroundColor: theme.background, color: theme.text }}
      >
        <button
          className="absolute top-3 right-3 text-gray-500 "
          onClick={onclose}
          aria-label="Close Post View"
        >
          <FaTimes className="text-xl sm:text-2xl" />
        </button>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          <div className="flex-shrink-0 w-full lg:w-1/2">
            <img
              src={post?.content}
              alt={post?.description}
              className="w-full h-60 sm:h-72 md:h-96 object-cover rounded-lg"
            />
          </div>

          <div className="flex flex-col flex-grow w-full lg:w-1/2">
            <div className="flex items-center mb-4">
              <img
                src={post?.author?.profilePicture}
                alt={post?.author.username}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-3"
              />
              <div>
                <p className="font-semibold">{post?.author.username}</p>
                <p className="text-sm text-gray-300">
                  Posted on: {post?.createdAt ? formatDate(post.createdAt) : post?.createdAt}
                </p>
              </div>
            </div>

            <div className="mb-4 lg:mb-6 overflow-auto max-h-40 lg:max-h-48">
              <h3 className="font-semibold text-base sm:text-lg mb-2">
                Comments
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {post?.comments?.map((comment) => (
                  <div key={comment._id} className="space-y-1">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <img
                        src={comment.author.profilePicture}
                        alt={comment.author.username}
                        className="w-8 h-8 sm:w-10 sm:h-10 rounded-full"
                      />
                      <div>
                        <p className="font-semibold">
                          {comment.author.username}
                        </p>
                        <p className="text-gray-400">{comment.content}</p>
                        <button
                          className="text-sm text-blue-500 hover:underline mt-1"
                          onClick={() => setActiveReply(comment._id)}
                        >
                          <FaReply className="text-lg" />
                        </button>

                        {activeReply === comment._id && (
                          <div className="flex items-center gap-2 mt-2">
                            <input
                              type="text"
                              value={replyContent}
                              onChange={(e) => setReplyContent(e.target.value)}
                              className="w-full p-2 text-sm border rounded-lg focus:outline-none"
                              placeholder="Write a reply..."
                            />
                            <button
                              onClick={() => handleAddReply(comment._id)}
                              className="px-3 py-1.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                            >
                              <BiSolidSend />
                            </button>
                          </div>
                        )}

                        {comment.replies.map((reply) => (
                          <div
                            key={reply._id}
                            className="flex items-start ml-10 mt-2 gap-2"
                          >
                            <img
                              src={reply.author.profilePicture}
                              alt={reply.author.username}
                              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full"
                            />
                            <div>
                              <p className="font-semibold">
                                {reply.author.username}
                              </p>
                              <p className="text-gray-400">{reply.content}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-2 lg:mt-4">
              <h4 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">
                Add a Comment
              </h4>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  className="w-full p-2 text-sm sm:text-base border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Write a comment..."
                  style={{ color: theme.text }}
                />
                <button
                  onClick={handleAddComment}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-500 text-white text-sm sm:text-base rounded-lg hover:bg-blue-600"
                >
                  <BiSolidSend />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center text-sm mt-4 lg:mt-6">
          <button
            className="flex items-center space-x-1 hover:text-red-500"
            style={{ color: theme.textHover }}
          >
            <FiHeart className="text-lg" />
            <span>{post?.likes.length} Likes</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostView;
