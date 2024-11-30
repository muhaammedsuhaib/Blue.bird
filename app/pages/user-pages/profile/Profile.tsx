"use client";
import React, { useState } from "react";
import Modal from "../../../components/Modal";
import { Itheme } from "@/app/types/theme";
import Loading from "@/app/components/Loading";
import useProfile from "@/app/hooks/useProfile";
import LikedPosts from "./LikedPosts";
import Posts from "./Posts";
import ArchivedStories from "./ArchivedStories";

interface ProfileProps {
  userId: string;
  theme: Itheme;
}

const Profile: React.FC<ProfileProps> = ({ userId, theme }) => {
  const { user, profileLoading, error } = useProfile(userId);
  const [activeTab, setActiveTab] = useState<
    "posts" | "likedPosts" | "archivedStories"
  >("posts");

  const handleTabChange = (tab: "posts" | "likedPosts" | "archivedStories") =>
    setActiveTab(tab);

  if (profileLoading) return <Loading message="Profile loading..." />;
  if (error)
    return <p className="text-red-500 text-center">Error loading profile.</p>;

  return (
    <Modal key={user?._id} theme={theme}>
      <h2 className="text-xl font-bold mb-4 text-start">Hi {user?.username}</h2>
      <div className="flex flex-col items-center mb-6">
        <img
          src={user?.profilePicture || "/user-profile.png"}
          alt="Profile"
          className="rounded-full w-24 h-24 mb-2 border-2 border-gray-300"
        />
        <h3 className="text-lg font-semibold">
          {user?.username || "Username not available"}
        </h3>
        <p className="text-gray-600">{user?.email || "Email not available"}</p>
      </div>

      <div className="mb-4">
        <h4 className="text-md font-semibold">Bio</h4>
        <p className="text-gray-700">{user?.bio || "No bio available"}</p>
      </div>

      <div className="flex justify-around mb-6">
        {[
          { label: "Posts", count: user?.posts?.length || 0 },
          { label: "Followers", count: user?.followers?.length || 0 },
          { label: "Following", count: user?.following?.length || 0 },
        ].map(({ label, count }, idx) => (
          <div key={idx} className="text-center">
            <p className="text-xl font-semibold" style={{ color: theme?.text }}>
              {count}
            </p>
            <p className="text-gray-500">{label}</p>
          </div>
        ))}
      </div>

      <div className="w-full flex justify-around mb-6">
        {["posts", "likedPosts", "archivedStories"].map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabChange(tab as typeof activeTab)}
            className={`px-4 py-2 rounded-lg ${
              activeTab === tab ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            {tab === "likedPosts"
              ? "Liked Posts"
              : tab === "archivedStories"
              ? "Archived Stories"
              : "Posts"}
          </button>
        ))}
      </div>

      {activeTab === "posts" && <Posts posts={(user?.posts as any) || []} />}
      {activeTab === "likedPosts" && (
        <LikedPosts likedPosts={(user?.likedPosts as any) || []} />
      )}
      {activeTab === "archivedStories" && (
        <ArchivedStories archivedStories={(user?.archivedStories as any) || []} />
      )}

      <button
        onClick={() => alert("Edit Profile clicked")}
        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors mt-6"
      >
        Edit Profile
      </button>
    </Modal>
  );
};

export default Profile;
