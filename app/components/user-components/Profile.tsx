"use client";
import React from 'react';

interface ProfileProps {
  userId: string; // User ID for fetching user data
  theme: {
    background: string;
    text: string;
  };
  onclose: () => void; // Close modal function
}

const Profile: React.FC<ProfileProps> = ({ userId, theme, onclose }) => {
  // Dummy user data
  const userData = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    profilePicture: 'https://via.placeholder.com/150',
    bio: 'Software Developer with a passion for building web applications.',
    location: 'San Francisco, CA',
    website: 'https://johndoe.com',
    phone: '+1 (123) 456-7890',
  };

  return (
    <div className="fixed inset-0 z-50 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50">
      <div
        className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full relative"
        style={{ backgroundColor: theme.background, color: theme.text }}
      >
        {/* Close Button */}
        <button
          onClick={onclose} // Close modal
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
          aria-label="Close User Profile"
        >
          &times;
        </button>

        <h2 className="text-xl font-bold mb-4">User Profile</h2>

        {/* Profile Picture */}
        <div className="flex items-center mb-6">
          <img
            src={userData.profilePicture}
            alt="Profile"
            className="rounded-full w-24 h-24 mr-4 border-2 border-gray-300"
          />
          <div>
            <h3 className="text-lg font-semibold">{userData.name}</h3>
            <p className="text-gray-600">{userData.email}</p>
          </div>
        </div>

        {/* Bio */}
        <div className="mb-4">
          <h4 className="text-md font-semibold">Bio</h4>
          <p className="text-gray-700">{userData.bio}</p>
        </div>

        {/* Additional Information */}
        <div className="mb-4">
          <h4 className="text-md font-semibold">Contact Information</h4>
          <p className="text-gray-700"><strong>Location:</strong> {userData.location}</p>
          <p className="text-gray-700"><strong>Phone:</strong> {userData.phone}</p>
          <p className="text-gray-700"><strong>Website:</strong> <a href={userData.website} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">{userData.website}</a></p>
        </div>

        {/* Update Button (Optional) */}
        <button
          onClick={() => alert('Edit Profile clicked')} // Placeholder for editing functionality
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;
