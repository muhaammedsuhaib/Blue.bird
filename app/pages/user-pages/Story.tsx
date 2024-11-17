import React, { useState } from 'react';
import StoryView from './StoryView';
import { Itheme } from '@/app/types/theme';

interface Story {
  id: number;
  title: string;
  imageUrl: string;
  content: string; // Added content field for the story
  author: string; // Added author field
  authorImage: string; // Added author image URL
  date: string; // Added publication date
}


interface StoryProps {
  theme: Itheme;
  userId: string; // Added userId prop
}

const stories: Story[] = [
  {
    id: 1,
    title: 'Story 1',
    imageUrl: 'https://muhaammedsuhaib.github.io/Front-end-Developer-portfolio/assets/imgs/avatar.jpg',
    content: 'This is the content of Story 1.',
    author: 'Alice Johnson',
    authorImage: 'https://muhaammedsuhaib.github.io/Front-end-Developer-portfolio/assets/imgs/avatar.jpg',
    date: 'October 24, 2024',
  },
  {
    id: 2,
    title: 'Story 2',
    imageUrl: 'https://via.placeholder.com/150/771796',
    content: 'This is the content of Story 2.',
    author: 'Bob Smith',
    authorImage: 'https://via.placeholder.com/50',
    date: 'October 23, 2024',
  },
  {
    id: 3,
    title: 'Story 2',
    imageUrl: 'https://via.placeholder.com/150/771796',
    content: 'This is the content of Story 2.',
    author: 'Bob Smith',
    authorImage: 'https://via.placeholder.com/50',
    date: 'October 23, 2024',
  },
  {
    id: 4,
    title: 'Story 2',
    imageUrl: 'https://via.placeholder.com/150/771796',
    content: 'This is the content of Story 2.',
    author: 'Bob Smith',
    authorImage: 'https://via.placeholder.com/50',
    date: 'October 23, 2024',
  },
  {
    id: 5,
    title: 'Story 2',
    imageUrl: 'https://via.placeholder.com/150/771796',
    content: 'This is the content of Story 2.',
    author: 'Bob Smith',
    authorImage: 'https://via.placeholder.com/50',
    date: 'October 23, 2024',
  },
  {
    id: 6,
    title: 'Story 2',
    imageUrl: 'https://via.placeholder.com/150/771796',
    content: 'This is the content of Story 2.',
    author: 'Bob Smith',
    authorImage: 'https://via.placeholder.com/50',
    date: 'October 23, 2024',
  },
  {
    id: 7,
    title: 'Story 2',
    imageUrl: 'https://via.placeholder.com/150/771796',
    content: 'This is the content of Story 2.',
    author: 'Bob Smith',
    authorImage: 'https://via.placeholder.com/50',
    date: 'October 23, 2024',
  },
  
];

const Story: React.FC<StoryProps> = ({ theme, userId }) => {


  const [selectedStory, setSelectedStory] = useState<Story | null>(null);

  const handleClose = () => {
    setSelectedStory(null); 
  };

  return (
    <div
      className="shadow-md rounded-xl p-2"
      style={{
        backgroundColor: theme?.background,
        color: theme?.text,
      }}
    >
      <div className="flex gap-1 overflow-auto no-scrollbar">
        {stories?.map((story) => (
          <div key={story?.id} className="flex-shrink-0" onClick={() => setSelectedStory(story)}>
            <div className="flex flex-col items-center p-2">
              <img
                src={story?.imageUrl}
                alt={story?.title}
                aria-label={story?.title}
                className="w-20 h-20 rounded-full object-cover mb-2 cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg"
                style={{
                  borderColor: theme?.textHover,
                  borderWidth: '3px',
                  borderStyle: 'solid',
                }}
              />
              <span className="text-sm text-center" style={{ color: theme?.text }}>
                {story?.title}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Render StoryView if a story is selected */}
      {selectedStory && (
        <StoryView
          key={selectedStory?.title}
          title={selectedStory?.title}
          content={selectedStory?.content}
          author={selectedStory?.author}
          authorImage={selectedStory?.authorImage}
          date={selectedStory?.date}
          onclose={handleClose} // Function to close the modal
          theme={theme}
          imageUrl={selectedStory?.imageUrl}
        />
      )}
    </div>
  );
};

export default Story;
