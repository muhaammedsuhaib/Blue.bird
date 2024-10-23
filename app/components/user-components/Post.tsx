import React from 'react';

interface PostProps {
  userId: string;
  theme: {
    background: string;
    text: string;
    textHover: string;
  };
}

interface PostData {
  id: number;
  title: string;
  content: string;
  imageUrl: string;
  likes: number;
  comments: number;
}

const demoPosts: PostData[] = [
  {
    id: 1,
    title: "First Post",
    content: "This is the content of the first post.",
    imageUrl: "https://via.placeholder.com/600x400/92c952",
    likes: 10,
    comments: 5,
  },
  {
    id: 2,
    title: "Second Post",
    content: "This is the content of the second post.",
    imageUrl: "https://via.placeholder.com/600x400/771796",
    likes: 20,
    comments: 8,
  },
  {
    id: 3,
    title: "Third Post",
    content: "This is the content of the third post.",
    imageUrl: "https://via.placeholder.com/600x400/24f355",
    likes: 15,
    comments: 10,
  },
  {
    id: 4,
    title: "Fourth Post",
    content: "This is the content of the fourth post.",
    imageUrl: "https://via.placeholder.com/600x400/d32776",
    likes: 8,
    comments: 3,
  },
];

const Post: React.FC<PostProps> = ({ userId, theme }) => {
  
  return (
    <div>
      {demoPosts.map((post) => (
        <div key={post.id} className="rounded-lg shadow-md p-4 mb-4" style={{ backgroundColor: theme.background, color: theme.text }}>
          <h2 className="text-xl font-bold mb-2">{post.title}</h2>
          <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover rounded mb-2" />
          <p className=" mb-2">{post.content}</p>
          <div className="flex justify-between text-sm">
            <span>{post.likes} Likes</span>
            <span>{post.comments} Comments</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Post;
