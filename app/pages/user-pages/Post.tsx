"use client";
import React, { useState } from "react";
import ProfileView from "./ProfileView";
import { FiHeart } from "react-icons/fi";
import { fetchPosts } from "@/app/api/userApis";
import { useQuery } from "@tanstack/react-query";
import { GetPostResponse } from "@/app/types/post";
import { formatDate } from "@/app/utils/formatDate";
import Loading from "../../components/Loading";
import PostView from "./PostView";
import { MdComment } from "react-icons/md";
import { Itheme } from "@/app/types/theme";

interface PostProps {
  userId: string;
  theme:Itheme
}

const Post: React.FC<PostProps> = ({ userId, theme }) => {
  const [openProfile, setOpenProfile] = useState<null | string>(null);
  const [openPost, setOpenPost] = useState<null | string>(null);

  const { data: posts, isLoading: postLoading, refetch:refetchPosts} = useQuery<GetPostResponse[]>({
    queryKey: ["fetchposts"],
    queryFn: () => fetchPosts(),
    enabled: !!userId,
  });

  const handleOpenProfile = (id: string) => {
    setOpenProfile(id);
  };

  const handleOpenPost = (id: string) => {
    setOpenPost(id);
  };

  const handleCloseModal = () => {
    setOpenProfile(null);
    setOpenPost(null);
    refetchPosts(); 
  };
  if (postLoading) return <Loading />;
  return (
    <div>
      {posts?.map((post) => (
        <div
          key={post._id}
          className="rounded-lg shadow-md p-4 mb-6"
          style={{ backgroundColor: theme.background, color: theme.text }}
        >
          <div
            className="flex items-center mb-4 cursor-pointer"
            onClick={() => handleOpenProfile(post.author._id)}
          >
            <img
              src={post.author.profilePicture}
              alt="User Profile"
              className="rounded-full w-10 h-10 mr-3"
            />
            <div>
              <h4 className="font-semibold">{post.author.username}</h4>
              <p className="text-sm text-gray-500">
                {formatDate(post.createdAt)}
              </p>
            </div>
          </div>

          {/* Post Image */}
          <img
            src={post.content}
            alt={post.description}
            className="w-full h-[400px] object-cover rounded-lg mb-4"
            onClick={() => handleOpenPost(post._id)}
          />

          <p className="mb-4">{post.description}</p>

          <div className="flex justify-between items-center text-sm">
            <button
              // onClick={() => handleLike(post._id)}
              className="flex items-center space-x-1 hover:text-red-500"
              style={{ color: theme.textHover }}
            >
              <FiHeart className="text-lg" />
              <span>{post.likes?.length} Likes</span>
            </button>

            <button
              className="flex items-center space-x-1"
              style={{ color: theme.textHover }}
              onClick={() => handleOpenPost(post._id)}
            >
              <MdComment className="text-lg" />
              <span>{post.comments?.length} comments</span>
            </button>
          </div>
        </div>
      ))}

      {/* Profile View Modal */}
      {openProfile && (
        <ProfileView
          onclose={handleCloseModal}
          profileuserId={openProfile}
          theme={theme}
          userId={userId}
        />
      )}

      {/* Post View Modal */}
      {openPost && (
        <PostView
          userId={userId}
          theme={theme}
          postId={openPost}
          onclose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default Post;
