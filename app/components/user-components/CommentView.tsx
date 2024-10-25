import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

interface Comment {
  id: string;
  userId: string;
  content: string;
  date: string;
}

interface CommentViewProps {
  theme: {
    background: string;
    text: string;
    textHover: string;
  };
  postId: string; // Post ID to link comments to specific posts
  onclose: () => void;
}

const CommentView: React.FC<CommentViewProps> = ({ theme, postId, onclose }) => {
  const [newComment, setNewComment] = useState<string>('');

  // Dummy comments data
  const [comments, setComments] = useState<Comment[]>([
    { id: '1', userId: 'User1', content: 'Great post!', date: '2024-10-25' },
    { id: '2', userId: 'User2', content: 'Thanks for sharing!', date: '2024-10-24' },
    { id: '3', userId: 'User3', content: 'Interesting insights!', date: '2024-10-23' },
  ]);

  const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewComment(e.target.value);
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      // Create a new comment
      const newCommentData: Comment = {
        id: (comments.length + 1).toString(), // Simple ID generation
        userId: `User${comments.length + 1}`,
        content: newComment,
        date: new Date().toISOString().split('T')[0], // Current date in YYYY-MM-DD format
      };

      setComments((prevComments) => [...prevComments, newCommentData]); // Update comments state
      setNewComment(''); // Clear the input after submission
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-screen h-screen bg-black bg-opacity-50 p-4 md:p-8 transition-opacity duration-300 ease-in-out">
      <div
        className="relative w-full max-w-2xl md:max-w-3xl lg:max-w-4xl bg-white rounded-lg shadow-lg p-6 md:p-8 lg:p-10 overflow-auto"
        style={{ backgroundColor: theme.background, color: theme.text }}
      >
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
          onClick={onclose}
          aria-label="Close Profile"
        >
          <FaTimes className="text-2xl" />
        </button>
        <h3 className="text-lg font-semibold mb-4">Comments</h3>

        {/* Existing Comments */}
        <div className="max-h-64 overflow-y-auto mb-4">
          {comments.length > 0 ? (
            comments.map((comment) => (
              <div key={comment.id} className="border-b border-gray-300 py-2">
                <p className="font-semibold">{comment.userId}</p>
                <p className="text-sm text-gray-700">{comment.content}</p>
                <p className="text-xs text-gray-500">{comment.date}</p>
              </div>
            ))
          ) : (
            <p>No comments yet.</p>
          )}
        </div>

        {/* New Comment Input */}
        <form onSubmit={handleCommentSubmit} className="flex">
          <input
            type="text"
            value={newComment}
            onChange={handleCommentChange}
            placeholder="Add a comment..."
            className="flex-grow border border-gray-300 rounded-lg px-2 py-1 mr-2"
            style={{ backgroundColor: theme.text, color: theme.background }}
            aria-label="New comment input"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-lg px-4 py-1 hover:bg-blue-600"
            aria-label="Submit comment"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CommentView;
