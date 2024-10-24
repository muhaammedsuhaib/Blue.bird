import React, { useState } from 'react';
import Modal from '../Modal';
import Input from '../Input';

interface User {
  id: string;
  username: string;
  name: string;
  profileImage: string;
}

interface SearchProps {
  userId: string; // MongoDB ObjectId as a string
  onclose: () => void; // Updated to only close the modal
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

const Search: React.FC<SearchProps> = ({ userId, theme, onclose }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter users based on the search term
  const filteredUsers = dummyUsers.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Modal key={176876} onclose={onclose} theme={theme}>
      <h2 className="text-xl font-bold mb-4" style={{ color: theme.text }}>
        Search for Users
      </h2>
      <Input
      key={1}
        type="text"
        placeholder="Search users..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />

      <div className="max-h-60 overflow-y-auto ">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <div key={user.id} className="flex items-center p-2 rounded hover:bg-gray-100 transition duration-200 hover:text-black">
              <img
                src={user.profileImage}
                alt={user.name}
                className="w-10 h-10 rounded-full object-cover mr-3"
              />
              <div className="flex flex-col">
                <span className="text-base font-semibold hover:text-black">
                  {user.name}
                </span>
                <span className="text-sm text-gray-500 hover:text-black">
                  @{user.username}
                </span>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No users found</p>
        )}
      </div>
    </Modal>
  );
};

export default Search;
