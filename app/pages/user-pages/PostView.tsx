import React, { useState } from "react";
import { FaReply, FaTimes } from "react-icons/fa";
import { BiSolidSend } from "react-icons/bi";
import { FiHeart } from "react-icons/fi";
import Loading from "../../components/Loading";
import { formatDate } from "@/app/utils/formatDate";
import usePost from "@/app/hooks/usePost";
import useCommentActions from "@/app/hooks/useCommentActions";
import Button from "@/app/components/Button";
import { Itheme } from "@/app/types/theme";
import ProfileView from "./ProfileView";

interface PostViewProps {
  theme: Itheme;
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
  const { data: post, isLoading: postLoading } = usePost(postId);

  const {
    newComment,
    setNewComment,
    replyContent,
    setReplyContent,
    activeReply,
    setActiveReply,
    handleAddComment,
    handleAddReply,
  } = useCommentActions(postId, userId);
  const [openProfile, setOpenProfile] = useState<null | string>(null);

  const handleOpenProfile = (id: any) => {
    setOpenProfile(id);
  };

  if (postLoading) return <Loading />;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-screen h-screen  bg-opacity-75 p-4 overflow-y-auto bg-black md:p-8 transition-opacity duration-300 ease-in-out">
      <div
        className="relative w-full max-w-3xl lg:max-w-5xl rounded-lg shadow-lg p-4 sm:p-6 lg:p-8"
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
            <div
              className="flex items-center mb-4"
              onClick={() => handleOpenProfile(post?.author?._id)}
            >
              <img
                src={post?.author?.profilePicture}
                alt={post?.author.username}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-3"
              />
              <div>
                <p className="font-semibold">{post?.author.username}</p>
                <p className="text-sm ">
                  Posted on:{" "}
                  {post?.createdAt
                    ? formatDate(post.createdAt)
                    : post?.createdAt}
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
                        onClick={() => handleOpenProfile(comment.author._id)}
                      />
                      <div>
                        <p
                          className="font-semibold"
                          onClick={() => handleOpenProfile(comment.author._id)}
                        >
                          {comment.author.username}
                        </p>
                        <p>{comment.content}</p>
                        <button
                          className="text-sm text-blue-500 hover:underline mt-1"
                          onClick={() => setActiveReply(comment._id)}
                        >
                          <FaReply className="text-sm" />
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
                              onClick={() =>
                                handleOpenProfile(reply.author._id)
                              }
                            />
                            <div>
                              <p
                                className="font-semibold"
                                onClick={() =>
                                  handleOpenProfile(reply.author._id)
                                }
                              >
                                {reply.author.username}
                              </p>
                              <p>{reply.content}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="p-2 border rounded-lg w-full text-black"
                placeholder="Write a comment..."
              />
              <Button
                label="Add Comment"
                onClick={handleAddComment}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center text-sm mt-3 lg:mt-3">
          <button
            className="flex items-center space-x-1 hover:text-red-500"
            style={{ color: theme.textHover }}
          >
            <FiHeart className="text-lg" />
            <span>{post?.likes.length} Likes</span>
          </button>
        </div>
      </div>
      {openProfile && (
        <ProfileView
          onclose={() => setOpenProfile(null)}
          profileuserId={openProfile}
          theme={theme}
          userId={userId}
        />
      )}
    </div>
  );
};

export default PostView;
