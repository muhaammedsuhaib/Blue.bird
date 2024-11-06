"use client";
import React, { useState } from "react";
import ProfileView from "./ProfileView";
import { FiHeart } from "react-icons/fi"; // Import heart icon
import CommentView from "./CommentView";

interface PostProps {
  userId: string;
  theme: {
    background: string;
    text: string;
    textHover: string;
  };
}

interface PostData {
  id: string;
  title: string;
  content: string;
  imageUrl: string;
  likes: number;
  comments: number;
}

const demoPosts: PostData[] = [
  {
    id: "1",
    title: "First Post",
    content: "This is the content of the first post.",
    imageUrl: "https://via.placeholder.com/600x400/92c952",
    likes: 122220,
    comments: 4245,
  },
  {
    id: "2",
    title: "Second Post",
    content: "This is the content of the second post.",
    imageUrl: "https://via.placeholder.com/600x400/92c952",
    likes: 1000,
    comments: 454355,
  },
];

const Post: React.FC<PostProps> = ({ userId, theme }) => {
  const [openProfile, setOpenProfile] = useState<null | string>(null);
  const [openComments, setOpenComments] = useState<null | string>(null);
  const [likes, setLikes] = useState<{ [key: string]: number }>({});

  const handleOpenProfile = (id: string) => {
    setOpenProfile(id);
  };

  const handleOpenComments = (id: string) => {
    setOpenComments(id);
  };

  const handleLike = (postId: string) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [postId]:
        (prevLikes[postId] ||
          demoPosts.find((p) => p.id === postId)?.likes ||
          0) + 1,
    }));
  };

  return (
    <div>
      {demoPosts.map((post) => (
        <div
          key={post.id}
          className="rounded-lg shadow-md p-4 mb-6"
          style={{ backgroundColor: theme.background, color: theme.text }}
        >
          {/* Profile Section */}
          <div
            className="flex items-center mb-4 cursor-pointer"
            onClick={() => handleOpenProfile(post.id)}
          >
            <img
              src={`https://muhaammedsuhaib.github.io/Front-end-Developer-portfolio/assets/imgs/avatar.jpg`} // Unique avatar per post
              alt="User Profile"
              className="rounded-full w-10 h-10 mr-3"
            />
            <div>
              <h4 className="font-semibold">{`User ${userId}`}</h4>
              <p className="text-sm text-gray-500">Posted on 25/10/2024</p>
            </div>
          </div>

          {/* Post Image */}
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-60 object-cover rounded-lg mb-4"
          />

          {/* Post Title and Content */}
          <h2 className="text-xl font-bold mb-2">{post.title}</h2>
          <p className="mb-4">{post.content}</p>

          {/* Likes and Comments */}
          <div className="flex justify-between items-center text-sm">
            <button
              onClick={() => handleLike(post.id)}
              className="flex items-center space-x-1 hover:text-red-500"
              style={{ color: theme.textHover }}
            >
              <FiHeart className="text-lg" /> {/* Heart icon */}
              <span>{likes[post.id] || post.likes} Likes</span>
            </button>

            <button
              className="flex items-center space-x-1"
              style={{ color: theme.textHover }}
              onClick={() => handleOpenComments(post.id)}
            >
              <span>{post.comments} Comments</span>
            </button>
          </div>
        </div>
      ))}

      {/* Profile View Modal */}
      {openProfile && (
        <ProfileView
          onclose={() => setOpenProfile(null)}
          profileuserId={userId}
          theme={theme}
          userId={userId}
        />
      )}

      {/* Comments View Modal */}
      {openComments && (
        <CommentView
          theme={theme}
          postId={openComments}
          onclose={() => setOpenComments(null)}
        />
      )}
    </div>
  );
};

export default Post;
