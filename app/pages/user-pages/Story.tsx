import React, { useState, useMemo } from "react";
import { FaTimes } from "react-icons/fa";
import InstaStories from "react-insta-stories";
import useStories from "@/app/hooks/useStories";
import { Itheme } from "@/app/types/theme";
import Loading from "@/app/components/Loading";
import { formatDate } from "@/app/utils/formatDate";
import { StoryData, StoryItem } from "@/app/types/storie";

interface StoryProps {
  theme: Itheme;
  userId: string;
}

const Story: React.FC<StoryProps> = ({ theme, userId }) => {
  const { data, isLoading, error } = useStories(userId);
  const [selectedUserIndex, setSelectedUserIndex] = useState<number | null>(
    null
  );
  const [selectedStoryIndex, setSelectedStoryIndex] = useState<number>(0);

  const stories: StoryData[] = data || [];

  const formattedStoriesByUser = useMemo(() => {
    return stories
      .map((story: StoryData) =>
        story.stories
          .filter((item: StoryItem) => item.content)
          .map((item: StoryItem) => ({
            url: item.content,
            header: {
              heading: story.author?.username || "Anonymous",
              subheading: `Posted on ${
                item.postedAt ? `${formatDate(item.postedAt)}` : "Unknown date"
              }`,
              profileImage: story.author?.profilePicture || "",
            },
          }))
      )
      .filter((userStories) => userStories.length > 0);
  }, [stories]);

  const handleClose = () => {
    setSelectedUserIndex(null);
    setSelectedStoryIndex(0);
  };

  const handleStoryEnd = () => {
    const currentUserStories = formattedStoriesByUser[selectedUserIndex!];

    if (selectedStoryIndex < currentUserStories.length - 1) {
      setSelectedStoryIndex((prev) => prev + 1);
    } else if (selectedUserIndex! < formattedStoriesByUser.length - 1) {
      setSelectedUserIndex((prev) => (prev !== null ? prev + 1 : 0));
      setSelectedStoryIndex(0);
    } else {
      handleClose();
    }
  };

  if (isLoading) return <Loading />;

  if (error) {
    return (
      <div className="flex justify-center items-center h-full text-red-500">
        Failed to load stories. Please try again later.
      </div>
    );
  }

  return (
    <div
      className="shadow-md rounded-xl p-4"
      style={{
        backgroundColor: theme?.background,
        color: theme?.text,
      }}
    >
      <div className="flex gap-4 overflow-auto no-scrollbar">
        {stories.map((story, index) => (
          <button
            key={story.author._id}
            className="flex-shrink-0 focus:outline-none"
            onClick={() => {
              setSelectedUserIndex(index);
              setSelectedStoryIndex(0);
            }}
            aria-label={`View story by ${story.author.username}`}
          >
            <div className="relative w-20 h-20">
              <img
                src={story.author.profilePicture}
                alt={story.author.username}
                className="w-full h-full rounded-full object-cover border-4"
              />
              <div
                className="absolute inset-0 rounded-full border-[3px] border-blue-600"
                style={{ boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)" }}
              ></div>
            </div>
            <span className="block text-center text-sm truncate mt-2 text-gray-700 w-7">
              {story.author.username || "Anonymous"}
            </span>
          </button>
        ))}
      </div>
      {selectedUserIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
          role="dialog"
          aria-modal="true"
        >
          <div className="w-full h-full max-w-4xl">
            <button
              className="absolute top-4 right-4 sm:right-6 md:right-8 lg:right-10 bg-gray-700 text-white hover:bg-gray-600 hover:text-gray-300 focus:outline-none p-2 rounded-full z-50 hover:animate-spin"
              onClick={handleClose}
              aria-label="Close story viewer"
            >
              <FaTimes className="text-xl sm:text-2xl" />
            </button>

            <InstaStories
              stories={formattedStoriesByUser[selectedUserIndex]}
              currentIndex={selectedStoryIndex}
              onStoryEnd={handleStoryEnd}
              defaultInterval={5000}
              width="100%"
              height="100%"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Story;
