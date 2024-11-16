import React, { useState, useEffect } from "react";
import Modal from "../../components/Modal";
import Input from "../../components/Input";
import { useQuery } from "@tanstack/react-query";
import { searchUsers } from "@/app/api/userApis";
import { User } from "@/app/types/user";
import ProfileView from "./ProfileView";

interface SearchProps {
  userId: string;
  theme: {
    background: string;
    text: string;
  };
}

const Search: React.FC<SearchProps> = ({ userId, theme }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState<string>("");
  const [openProfile, setOpenprofile] = useState<null | string>(null);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  const {
    data: users,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["searchusers", userId, debouncedSearchTerm],
    queryFn: () => searchUsers(userId, debouncedSearchTerm),
    enabled: !!debouncedSearchTerm,
  });
  const handleOpenProfile = (id: string) => {
    setOpenprofile(id);
  };

  return (
    <Modal theme={theme}>
      <h2 className="text-xl font-bold mb-4" style={{ color: theme.text }}>
        Search for Users
      </h2>
      <Input
        type="text"
        placeholder="Search users..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded mb-4 text-black"
      />

      {isLoading ? (
        <p>Loading...</p>
      ) : isError ? (
        <p>Error occurred while searching</p>
      ) : (
        <div className="max-h-60 overflow-y-auto">
          {users && users.length > 0 ? (
            users.map((user: User) => (
              <div
                key={user._id}
                className="flex items-center p-2 rounded hover:bg-gray-100 transition duration-200 hover:text-black"
                onClick={() => handleOpenProfile(user._id)}
              >
                <img
                  src={user.profilePicture}
                  alt={user.username}
                  className="w-10 h-10 rounded-full object-cover mr-3"
                />
                <div className="flex flex-col">
                  <span className="text-base font-semibold hover:text-black">
                    {user.username}
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
      )}
      {openProfile && (
        <ProfileView
          onclose={() => setOpenprofile(null)}
          profileuserId={openProfile}
          theme={theme}
          userId={userId}
        />
      )}
    </Modal>
  );
};

export default Search;
