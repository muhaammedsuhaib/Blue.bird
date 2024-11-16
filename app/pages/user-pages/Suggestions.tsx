import React, { useState } from "react";
import Button from "../../components/Button";
import Link from "next/link";
import ProfileView from "./ProfileView";
import Loading from "../../components/Loading";
import { FollowResponse, User } from "@/app/types/user";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  fetchProfile,
  fetchSuggestions,
  toggleFollow,
} from "@/app/api/userApis";
import { AxiosError } from "axios";
import toast from "react-hot-toast";

interface SuggestionsProps {
  userId: string;
  theme: {
    background: string;
    text: string;
    textHover: string;
  };
}

const Suggestions: React.FC<SuggestionsProps> = ({ userId, theme }) => {
  const [openProfile, setOpenprofile] = useState<null | string>(null);
  const queryClient = useQueryClient();

  const { data: user, isLoading: profileloading } = useQuery({
    queryKey: ["userProfile", userId],
    queryFn: () => fetchProfile(userId),
    enabled: !!userId,
  });
  const { data: suggestions, isLoading: suggestionsloading } = useQuery({
    queryKey: ["suggestionsProfiles", userId],
    queryFn: () => fetchSuggestions(userId),
    enabled: !!userId,
  });

  const followToggle = useMutation<
    FollowResponse,
    AxiosError,
    { userId: string; targetId: string }
  >({
    mutationFn: async ({ userId, targetId }) => {
      const response = await toggleFollow(userId, targetId);
      return response;
    },
    onSuccess: (response) => {
      toast.success(response.message || "Comment created successfully!");
      queryClient.invalidateQueries({ queryKey: ["userProfile", userId] });
      queryClient.invalidateQueries({
        queryKey: ["suggestionsProfiles", userId],
      });
    },
    onError: (error: AxiosError<any>) => {
      const errorMessage =
        error?.response?.data?.message || "Failed to Follow!";
      toast.error(errorMessage);
    },
  });

  const handleOpenProfile = (id: string) => {
    setOpenprofile(id);
  };

  const handleFollow = (id: string) => {
    followToggle.mutate({ userId, targetId: id });
  };
  if (profileloading) return <Loading message="Profile loading..." />;
  if (suggestionsloading) return <Loading message="Suggestions loading..." />;
  return (
    <div
      className="w-full h-fit p-4 border-l-2"
      style={{
        backgroundColor: theme.background,
        color: theme.text,
      }}
    >
      <div
        key={userId}
        className="flex items-center justify-between p-3 rounded-lg transition-all duration-300 ease-in-out hover:bg-gray-200"
        style={{ backgroundColor: theme?.background }}
      >
        <div className="flex items-center space-x-4 w-full">
          <img
            src={user?.profilePicture}
            alt="User Profile"
            className="w-12 h-12 rounded-full object-cover"
          />
          <span
            className="text-base truncate"
            style={{ color: theme?.text, flexGrow: 1 }}
          >
            {user?.username}
          </span>
          <Link href="/" passHref className="text-blue-600">
            Switch
          </Link>
        </div>
      </div>

      <hr className="mb-2" />

      <h3 className="text-xl font-bold mb-4" style={{ color: theme?.text }}>
        Suggested for you
      </h3>

      {/* Suggestions */}
      <div
        className="flex flex-col space-y-1 w-full rounded-lg shadow-md overflow-y-auto"
        style={{
          maxHeight: "50vh",
          backgroundColor: theme?.background,
        }}
      >
        {Array.isArray(suggestions) &&
          suggestions.map((suggestion: User) => (
            <div
              key={suggestion?._id}
              className="flex items-center justify-between p-2 rounded-lg transition-all duration-300 ease-in-out hover:bg-gray-200"
              style={{ backgroundColor: theme?.background }}
            >
              <div className="flex items-center space-x-4 w-full">
                <img
                  src={suggestion?.profilePicture}
                  alt={suggestion?.username}
                  className="w-12 h-12 rounded-full object-cover"
                  onClick={() => handleOpenProfile(suggestion?._id)}
                />
                <span
                  className="text-base truncate"
                  style={{ color: theme?.text, flexGrow: 1 }}
                >
                  {suggestion?.username}
                </span>
                <Button
                  label={
                    user?.following.includes(suggestion?._id)
                      ? "Unfollow"
                      : "Follow"
                  }
                  onClick={() => handleFollow(suggestion?._id)}
                  className="px-2 py-1 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
                />
              </div>
            </div>
          ))}
      </div>
      {openProfile && (
        <ProfileView
          onclose={() => setOpenprofile(null)}
          profileuserId={openProfile}
          theme={theme}
          userId={userId}
        />
      )}

      {/* Footer Links */}
      <div className="text-sm text-gray-500 mt-4">
        <p>
          About | Help | Press | API | Jobs | Privacy | Terms | Locations |
          Language |{" "}
          <Link
            href="https://devhubb.vercel.app/"
            className="hover:underline"
            passHref
          >
            DevHubb
          </Link>{" "}
          Verified
        </p>
        <p className="mt-2">
          © 2024 Bluebird from{" "}
          <Link
            href="https://devhubb.vercel.app/"
            className="hover:underline"
            passHref
          >
            DevHubb
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Suggestions;
