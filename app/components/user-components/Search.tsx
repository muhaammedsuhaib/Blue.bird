// components/Search.tsx

import React, { useState } from 'react';

interface User {
  id: string; // MongoDB ObjectId as a string
  username: string;
  name: string;
  profileImage: string;
}

interface SearchProps {
  isOpen: boolean; // To control modal visibility
  onRequestClose: () => void; // Function to close the modal
  userId: string; // MongoDB ObjectId as a string
  theme: {
    background: string;
    text: string;
  };
}

// Dummy data for users
const dummyUsers: User[] = [
  {
    id: '1',
    username: 'alice_johnson',
    name: 'Alice Johnson',
    profileImage: 'https://via.placeholder.com/100/92c952',
  },
  {
    id: '2',
    username: 'bob_smith',
    name: 'Bob Smith',
    profileImage: 'https://via.placeholder.com/100/771796',
  },
  {
    id: '3',
    username: 'charlie_brown',
    name: 'Charlie Brown',
    profileImage: 'https://via.placeholder.com/100/24f355',
  },
  {
    id: '4',
    username: 'david_wilson',
    name: 'David Wilson',
    profileImage: 'https://via.placeholder.com/100/d32776',
  },
  {
    id: '5',
    username: 'eve_davis',
    name: 'Eve Davis',
    profileImage: 'https://via.placeholder.com/100/f66b20',
  },
];

const Search: React.FC<SearchProps> = ({ isOpen, onRequestClose, userId, theme }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter users based on the search term
  const filteredUsers = dummyUsers.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!isOpen) return null; // Don't render if not open

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={onRequestClose} // Close on overlay click
      />
      <div
        className="bg-white rounded-lg shadow-lg p-6 m-4 max-w-lg w-full"
        style={{ backgroundColor: theme.background, color: theme.text }}
      >
        <h2 className="text-xl font-bold mb-4" style={{ color: theme.text }}>
          Search for Users
        </h2>
        <input
          type="text"
          placeholder="Search users..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />

        <div className="max-h-60 overflow-y-auto">
          {filteredUsers.length > 0 ? (
            filteredUsers.map(user => (
              <div key={user.id} className="flex items-center p-2 rounded hover:bg-gray-100">
                <img
                  src={user.profileImage}
                  alt={user.name}
                  className="w-10 h-10 rounded-full object-cover mr-3"
                />
                <div className="flex flex-col">
                  <span className="text-base font-semibold" style={{ color: theme.text }}>
                    {user.name}
                  </span>
                  <span className="text-sm text-gray-500" style={{ color: theme.text }}>
                    @{user.username}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No users found</p>
          )}
        </div>

        <button
          onClick={onRequestClose}
          className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Search;
