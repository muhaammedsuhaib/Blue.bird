import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import Loading from "../../components/Loading";
import useProfile from "@/app/hooks/useProfile";
import PostView from "./PostView";
import { Itheme } from "@/app/types/theme";

interface ProfileViewProps {
  profileuserId: string;
  userId: string;
  onclose: () => void;
  theme: Itheme;
}

const ProfileView: React.FC<ProfileViewProps> = ({
  profileuserId,
  userId,
  theme,
  onclose,
}) => {
  const { user, profileLoading, error } = useProfile(profileuserId);
  const [openPost, setOpenPost] = useState<null | string>(null);

  const handleOpenPost = (id: string) => {
    setOpenPost(id);
  };
  if (profileLoading) {
    return <Loading message="Profile loading..." />;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-screen h-screen bg-black bg-opacity-70 p-4">
      <div
        className="relative w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-auto p-6 md:p-8"
        style={{ backgroundColor: theme?.background, color: theme?.text }}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-500 transition-transform transform hover:scale-110"
          onClick={onclose}
          aria-label="Close Profile"
        >
          <FaTimes className="text-2xl" />
        </button>
        {error instanceof Error && (
          <div className="text-center text-red-500">Error: {error.message}</div>
        )}
        <div className="max-h-96 overflow-y-auto">
          {user ? (
            <>
              {/* Profile Header */}
              <div className="flex flex-col md:flex-row md:items-center mb-6">
                <img
                  src={
                    user?.profilePicture ||
                    "https://bluebir-d.vercel.app/user-profile.png"
                  }
                  alt={`${user?.username}'s profile`}
                  className="w-24 h-24 rounded-full border-4 border-gray-300 mb-4 md:mb-0 md:mr-6"
                />
                <div className="text-center md:text-left">
                  <h2
                    className="text-3xl font-bold mb-2"
                    style={{ color: theme?.text }}
                  >
                    {user?.username}
                  </h2>
                  <p className="text-base mb-4" style={{ color: theme?.text }}>
                    {user?.bio || "No bio available"}
                  </p>
                </div>
              </div>

              {/* Profile Stats */}
              <div className="flex justify-around mb-6">
                <div className="text-center">
                  <p
                    className="text-xl font-semibold"
                    style={{ color: theme?.text }}
                  >
                    {user?.posts?.length || 0}
                  </p>
                  <p className="text-gray-500">Posts</p>
                </div>
                <div className="text-center">
                  <p
                    className="text-xl font-semibold"
                    style={{ color: theme?.text }}
                  >
                    {user?.followers?.length || 0}
                  </p>
                  <p className="text-gray-500">Followers</p>
                </div>
                <div className="text-center">
                  <p
                    className="text-xl font-semibold"
                    style={{ color: theme?.text }}
                  >
                    {user?.following?.length || 0}
                  </p>
                  <p className="text-gray-500">Following</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-center space-x-4 mb-6">
                <button
                  className="bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-600 transition"
                  style={{
                    backgroundColor: theme?.text,
                    color: theme?.background,
                  }}
                >
                  Follow
                </button>
                <button
                  className="border border-gray-400 text-gray-700 font-semibold py-2 px-6 rounded-lg hover:bg-gray-200 transition"
                  style={{ color: theme?.text }}
                >
                  Message
                </button>
              </div>

              {/* User Posts */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {user?.posts?.map((post: any, index: number) => (
                  <div
                    key={index}
                    className="relative group cursor-pointer"
                    onClick={() => handleOpenPost(post._id)}
                  >
                    <img
                      src={post.content || "https://via.placeholder.com/150"}
                      alt={post.content || "User post"}
                      className="w-full h-52 object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                      <p className="text-white font-semibold">
                        {post.likes.length || 0} Likes
                      </p>
                      <p className="text-white font-semibold">
                        {post.comments.length || 0} Comments
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <p className="text-center text-gray-500">User not found</p>
          )}
        </div>
      </div>
      {openPost && (
        <PostView
          userId={userId}
          theme={theme}
          postId={openPost}
          onclose={() => setOpenPost(null)}
        />
      )}
    </div>
  );
};

export default ProfileView;
