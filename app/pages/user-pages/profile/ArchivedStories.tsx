import React from "react";

interface ArchivedStory {
  _id: string;
  content: string;
}

interface ArchivedStoriesProps {
  archivedStories: ArchivedStory[] | undefined;
}

const ArchivedStories: React.FC<ArchivedStoriesProps> = ({
  archivedStories,
}) => {
  if (!archivedStories || archivedStories.length === 0) {
    return <p className="text-gray-500">No archived stories available.</p>;
  }

  return (
    <div className="mb-6">
      <h4 className="text-md font-semibold mb-2">Archived Stories</h4>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {archivedStories.map((story) => (
          <div key={story._id} className="relative group cursor-pointer">
            <img
              src={story.content}
              alt="Archived Story"
              className="w-full h-32 object-cover rounded-lg transition-transform transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
              <p className="text-white font-semibold">View Story</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArchivedStories;
