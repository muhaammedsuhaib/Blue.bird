import React from "react";
import { FaTimes } from "react-icons/fa";
import Loading from "../Loading";
import { useQuery } from "@tanstack/react-query";
import { fetchProfile } from "@/app/api/userApis";

interface ProfileViewProps {
  profileuserId: string;
  userId: string;
  onclose: () => void;
  theme: {
    background: string;
    text: string;
  };
}

const ProfileView: React.FC<ProfileViewProps> = ({
  profileuserId,
  userId,
  theme,
  onclose,
}) => {
  const { data: user, isLoading: profileloading } = useQuery({
    queryKey: ["userProfile", profileuserId],
    queryFn: () => fetchProfile(profileuserId),
    enabled: !!profileuserId,
  });

  if (profileloading) return <Loading message="Profile loading..." />;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-screen h-screen bg-black bg-opacity-50 p-4 md:p-8 transition-opacity duration-300 ease-in-out">
      <div
        className="relative w-full max-w-2xl md:max-w-3xl lg:max-w-4xl bg-white rounded-lg shadow-lg p-6 md:p-8 lg:p-10 overflow-auto"
        style={{ backgroundColor: theme?.background, color: theme?.text }}
      >
        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
          onClick={onclose}
          aria-label="Close Profile"
        >
          <FaTimes className="text-2xl" />
        </button>

        {user && (
          <>
            {/* Profile Header */}
            <div className="flex flex-col items-center md:flex-row md:items-start mb-6">
              <img
                src={user?.profilePicture}
                alt={`${user?.username}'s profile`}
                className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-gray-300 mb-4 md:mb-0 md:mr-6"
              />
              <div className="text-center md:text-left">
                <h2
                  className="text-2xl font-bold mb-2"
                  style={{ color: theme?.text }}
                >
                  {user?.username}
                </h2>
                <p className="text-base mb-4" style={{ color: theme?.text }}>
                  {user?.bio}
                </p>
              </div>
            </div>

            {/* Stats Section */}
            <div className="flex justify-around mb-6">
              <div className="text-center">
                <p
                  className="text-xl font-semibold"
                  style={{ color: theme?.text }}
                >
                  {user?.posts?.length}
                </p>
                <p className="text-gray-500">Posts</p>
              </div>
              <div className="text-center">
                <p
                  className="text-xl font-semibold"
                  style={{ color: theme?.text }}
                >
                  {user?.followers?.length}
                </p>
                <p className="text-gray-500">Followers</p>
              </div>
              <div className="text-center">
                <p
                  className="text-xl font-semibold"
                  style={{ color: theme?.text }}
                >
                  {user?.following?.length}
                </p>
                <p className="text-gray-500">Following</p>
              </div>
            </div>

            {/* Follow and Message Buttons */}
            <div className="flex justify-center space-x-4">
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
          </>
        )}
      </div>
    </div>
  );
};

export default ProfileView;
