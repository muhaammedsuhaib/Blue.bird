import { Post } from "@/app/types/post";
import React from "react";


interface LikedPostProps {
  likedPosts: Post[];
}

const LikedPosts: React.FC<LikedPostProps> = ({ likedPosts }) => {
  if (!likedPosts || likedPosts.length === 0) {
    return <p className="text-gray-500">No liked posts yet.</p>;
  }

  return (
    <div className="mb-6">
      <h4 className="text-md font-semibold mb-2">Liked Posts</h4>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {likedPosts.map((post) => (
          <div key={post._id} className="relative group cursor-pointer">
            <img
              src={post.content || "https://via.placeholder.com/150"}
              alt={post.description || "User post"}
              className="w-full h-52 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
              <p className="text-white font-semibold">
                {post.likes?.length || 0} Likes
              </p>
              <p className="text-white font-semibold">
                {post.comments?.length || 0} Comments
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LikedPosts;
