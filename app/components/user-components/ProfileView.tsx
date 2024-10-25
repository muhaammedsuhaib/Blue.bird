import React, { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';

interface ProfileViewProps {
  profileuserId: string; // ID of the profile to fetch data for
  userId: string; // ID of the currently logged-in user
  onclose: () => void; // Function to close the view
  theme: {
    background: string; // Background color
    text: string; // Text color
  };
}

interface ProfileData {
  username: string;
  bio: string;
  profileImage: string;
  followerCount: number;
  followingCount: number;
  postCount: number;
}

const ProfileView: React.FC<ProfileViewProps> = ({ profileuserId, userId, theme, onclose }) => {
  const [profileData, setProfileData] = useState<ProfileData | null>(null);

  // Simulate fetching user profile data
  useEffect(() => {
    // Simulating a fetch request for the user profile
    const fetchProfileData = async () => {
      const dummyData = {
        username: `User_${profileuserId}`,
        bio: "Lover of photography, nature, and tech.",
        profileImage: "https://via.placeholder.com/150", // Dummy profile image
        followerCount: 2500,
        followingCount: 180,
        postCount: 65,
      };
      setProfileData(dummyData);
    };

    fetchProfileData();
  }, [profileuserId]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-screen h-screen bg-black bg-opacity-50 p-4 md:p-8 transition-opacity duration-300 ease-in-out">
      <div
        className="relative w-full max-w-2xl md:max-w-3xl lg:max-w-4xl bg-white rounded-lg shadow-lg p-6 md:p-8 lg:p-10 overflow-auto"
        style={{ backgroundColor: theme.background, color: theme.text }}
      >
        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
          onClick={onclose}
          aria-label="Close Profile"
        >
          <FaTimes className="text-2xl" />
        </button>

        {profileData ? (
          <>
            {/* Profile Header */}
            <div className="flex flex-col items-center md:flex-row md:items-start mb-6">
              <img
                src={profileData.profileImage}
                alt={`${profileData.username}'s profile`}
                className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-gray-300 mb-4 md:mb-0 md:mr-6"
              />
              <div className="text-center md:text-left">
                <h2 className="text-2xl font-bold mb-2" style={{ color: theme.text }}>
                  {profileData.username}
                </h2>
                <p className="text-base mb-4" style={{ color: theme.text }}>
                  {profileData.bio}
                </p>
              </div>
            </div>

            {/* Stats Section */}
            <div className="flex justify-around mb-6">
              <div className="text-center">
                <p className="text-xl font-semibold" style={{ color: theme.text }}>{profileData.postCount}</p>
                <p className="text-gray-500">Posts</p>
              </div>
              <div className="text-center">
                <p className="text-xl font-semibold" style={{ color: theme.text }}>{profileData.followerCount}</p>
                <p className="text-gray-500">Followers</p>
              </div>
              <div className="text-center">
                <p className="text-xl font-semibold" style={{ color: theme.text }}>{profileData.followingCount}</p>
                <p className="text-gray-500">Following</p>
              </div>
            </div>

            {/* Follow and Message Buttons */}
            <div className="flex justify-center space-x-4">
              <button
                className="bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-600 transition"
                style={{ backgroundColor: theme.text, color: theme.background }}
              >
                Follow
              </button>
              <button
                className="border border-gray-400 text-gray-700 font-semibold py-2 px-6 rounded-lg hover:bg-gray-200 transition"
                style={{ color: theme.text }}
              >
                Message
              </button>
            </div>
          </>
        ) : (
          <p>Loading profile...</p>
        )}
      </div>
    </div>
  );
};

export default ProfileView;
