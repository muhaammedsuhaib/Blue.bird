import React, { useState } from "react";
import Button from "../../components/Button";
import Link from "next/link";
import ProfileView from "./ProfileView";
import Loading from "../../components/Loading";
import { User } from "@/app/types/user";
import { Itheme } from "@/app/types/theme";
import useFollow from "@/app/hooks/useFollow";
import useUser from "@/app/hooks/useUser";
import useSuggestion from "@/app/hooks/useSuggestion";

interface SuggestionsProps {
  userId: string;
  theme: Itheme;
}

const Suggestions: React.FC<SuggestionsProps> = ({ userId, theme }) => {
  const [openProfile, setOpenprofile] = useState<null | string>(null);
  const { data: user, isLoading: profileloading } = useUser(userId);
  const { data: suggestions, isLoading: suggestionsloading } =
    useSuggestion(userId);

  const { followToggle, isLoading: isFollowing } = useFollow();

  const handleFollow = (id: string) => {
    followToggle({ userId, targetId: id });
  };
  const handleOpenProfile = (id: string) => {
    setOpenprofile(id);
  };

  // if (isFollowing) return <Loading message="Following loading..." />;
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
