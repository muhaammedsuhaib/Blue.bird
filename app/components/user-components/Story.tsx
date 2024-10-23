import React from 'react';

interface Story {
  id: number;
  title: string;
  imageUrl: string;
}

interface Theme {
  background: string;
  text: string;
  textHover: string;
}

interface StoryProps {
  theme: Theme;
  userId: string; // Added userId prop
}

const stories: Story[] = [
  { id: 1, title: 'Story 1', imageUrl: 'https://via.placeholder.com/150/92c952' },
  { id: 2, title: 'Story 2', imageUrl: 'https://via.placeholder.com/150/771796' },
  { id: 3, title: 'Story 3', imageUrl: 'https://via.placeholder.com/150/24f355' },
  { id: 4, title: 'Story 4', imageUrl: 'https://via.placeholder.com/150/d32776' },
  { id: 5, title: 'Story 5', imageUrl: 'https://via.placeholder.com/150/f66b20' },
  { id: 6, title: 'Story 6', imageUrl: 'https://via.placeholder.com/150/f66b20' },
  { id: 7, title: 'Story 7', imageUrl: 'https://via.placeholder.com/150/f66b20' },
  { id: 8, title: 'Story 8', imageUrl: 'https://via.placeholder.com/150/f66b20' },
];

const Story: React.FC<StoryProps> = ({ theme, userId }) => {
  return (
    <div
      className="shadow-md rounded-xl p-2"
      style={{
        backgroundColor: theme.background,
        color: theme.text,
      }}
    >
      <div className="flex gap-1 overflow-auto no-scrollbar">
        {stories.map((story) => (
          <div key={story.id} className="flex-shrink-0">
            <div className="flex flex-col items-center p-2">
              <img
                src={story.imageUrl}
                alt={story.title}
                aria-label={story.title}
                className="w-20 h-20 rounded-full object-cover mb-2 cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg"
                style={{
                  borderColor: theme.textHover,
                  borderWidth: '3px',
                  borderStyle: 'solid', 
                }}
              />
              <span className="text-sm text-center" style={{ color: theme.text }}>
                {story.title}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Story;
