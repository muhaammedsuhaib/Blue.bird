import React, { useState } from "react";

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

const mockUsers: User[] = [
  { id: "1", name: "Alice Smith", email: "alice@example.com", role: "Admin" },
  { id: "2", name: "Bob Johnson", email: "bob@example.com", role: "User" },
  { id: "3", name: "Charlie Brown", email: "charlie@example.com", role: "Moderator" },
  // Add more sample users here
];

const ManageUsers: React.FC<{ adminId: string; theme: any }> = ({ theme }) => {
  const [users, setUsers] = useState<User[]>(mockUsers);
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Function to handle search input change
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Filtered list of users based on search term
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ backgroundColor: theme.background, color: theme.text }}>
      <h1 className="text-xl font-bold mb-4">Manage Users</h1>

      {/* Search input */}
      <input
        type="text"
        placeholder="Search users..."
        value={searchTerm}
        onChange={handleSearch}
        className="p-2 border border-gray-300 rounded mb-4"
        style={{ backgroundColor: theme.inputBackground, color: theme.inputText }}
      />

      {/* Users list */}
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Role</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <tr key={user.id} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b">{user.name}</td>
                <td className="py-2 px-4 border-b">{user.email}</td>
                <td className="py-2 px-4 border-b">{user.role}</td>
                <td className="py-2 px-4 border-b">
                  <button className="text-blue-500 hover:underline mr-2">Edit</button>
                  <button className="text-red-500 hover:underline">Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4} className="text-center py-4">No users found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUsers;
