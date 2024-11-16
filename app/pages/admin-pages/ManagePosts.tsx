import React, { useState } from "react";

interface Post {
  id: string;
  title: string;
  author: string;
  date: string;
  status: string;
}

const mockPosts: Post[] = [
  { id: "1", title: "Post 1", author: "Author A", date: "2024-01-01", status: "Published" },
  { id: "2", title: "Post 2", author: "Author B", date: "2024-01-02", status: "Draft" },
  { id: "3", title: "Post 3", author: "Author C", date: "2024-01-03", status: "Archived" },
  // Add more sample posts here
];

const ManagePosts: React.FC<{ adminId: string; theme: any }> = ({ theme }) => {
  const [posts, setPosts] = useState<Post[]>(mockPosts);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ backgroundColor: theme.background, color: theme.text }}>
      <h1 className="text-xl font-bold mb-4">Manage Posts</h1>

      {/* Search input */}
      <input
        type="text"
        placeholder="Search posts..."
        value={searchTerm}
        onChange={handleSearch}
        className="p-2 border border-gray-300 rounded mb-4"
        style={{ backgroundColor: theme.inputBackground, color: theme.inputText }}
      />

      {/* Posts list */}
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Title</th>
            <th className="py-2 px-4 border-b">Author</th>
            <th className="py-2 px-4 border-b">Date</th>
            <th className="py-2 px-4 border-b">Status</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <tr key={post.id} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b">{post.title}</td>
                <td className="py-2 px-4 border-b">{post.author}</td>
                <td className="py-2 px-4 border-b">{post.date}</td>
                <td className="py-2 px-4 border-b">{post.status}</td>
                <td className="py-2 px-4 border-b">
                  <button className="text-blue-500 hover:underline mr-2">Edit</button>
                  <button className="text-red-500 hover:underline">Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} className="text-center py-4">No posts found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ManagePosts;
