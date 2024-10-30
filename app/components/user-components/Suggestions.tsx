import React, { useState } from 'react';
import Button from '../Button';
import Link from 'next/link';
import ProfileView from './ProfileView';

interface UserSuggestion {
  id: string; // MongoDB ObjectId as a string
  name: string;
  profileImage: string;
}

interface SuggestionsProps {
  userId: string; // MongoDB ObjectId
  theme: {
    background: string;
    text: string;
    textHover: string;
  };
}

// Dummy data for user suggestions
const dummySuggestions: UserSuggestion[] = [
  {
    id: '1',
    name: 'Alice Johnson',
    profileImage: 'https://via.placeholder.com/100/92c952',
  },
  {
    id: '2',
    name: 'Bob Smith',
    profileImage: 'https://via.placeholder.com/100/771796',
  },
  {
    id: '3',
    name: 'Charlie Brown',
    profileImage: 'https://via.placeholder.com/100/24f355',
  },
  {
    id: '4',
    name: 'David Wilson',
    profileImage: 'https://via.placeholder.com/100/d32776',
  },
  {
    id: '5',
    name: 'Eve Davis',
    profileImage: 'https://via.placeholder.com/100/f66b20',
  },
];

const Suggestions: React.FC<SuggestionsProps> = ({ userId, theme }) => {

  const [openProfile,setOpenprofile]=useState<null | string>(null);

  const handleopenProfile = (id:string)=>{
    setOpenprofile(id);
  }
  const handleFollow = (id: string) => {
    console.log(`User ${userId} followed user with ID: ${id}`);
  };

  return (
    <div
      className="w-full h-fit p-4 border-l-2"
      style={{
        backgroundColor: theme.background,
        color: theme.text,
      }}
    >
      {/* Current User Profile */}
      <div
        key={userId}
        className="flex items-center justify-between p-3 rounded-lg transition-all duration-300 ease-in-out hover:bg-gray-200"
        style={{ backgroundColor: theme.background }}
      >
        <div className="flex items-center space-x-4 w-full">
          <img
            src="https://via.placeholder.com/100/771796"
            alt="User Profile"
            className="w-12 h-12 rounded-full object-cover"
          />
          <span className="text-base truncate" style={{ color: theme.text, flexGrow: 1 }}>
            Suhaib
          </span>
          <Link href="/" passHref className="text-blue-600">
            Switch
          </Link>
        </div>
      </div>

      <hr className="mb-2" />

      <h3 className="text-xl font-bold mb-4" style={{ color: theme.text }}>
        Suggested for you
      </h3>

      {/* Suggestions */}
      <div
        className="flex flex-col space-y-1 w-full rounded-lg shadow-md overflow-y-auto"
        style={{
          maxHeight: '50vh', // Adjust this value based on your layout preferences
          backgroundColor: theme.background,
        }}
      >
        {dummySuggestions.map((suggestion) => (
          <div
            key={suggestion.id}
            className="flex items-center justify-between p-2 rounded-lg transition-all duration-300 ease-in-out hover:bg-gray-200"
            style={{ backgroundColor: theme.background }}
          >
            <div className="flex items-center space-x-4 w-full">
              <img
                src={suggestion.profileImage}
                alt={suggestion.name}
                className="w-12 h-12 rounded-full object-cover"
                onClick={()=>handleopenProfile(suggestion.id)}
              />
              <span className="text-base truncate" style={{ color: theme.text, flexGrow: 1 }}>
                {suggestion.name}
              </span>
              <Button
                label="Follow"
                onClick={() => handleFollow(suggestion.id)}
                className="px-2 py-1 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
              />
            </div>
          </div>
        ))}
      </div>
      {openProfile&& <ProfileView onclose={()=>setOpenprofile(null)}  profileuserId={openProfile} theme={theme} userId={userId}/>}
      
      {/* Footer Links */}
      <div className="text-sm text-gray-500 mt-4">
        <p>About | Help | Press | API | Jobs | Privacy | Terms | Locations | Language | <Link href="https://devhubb.vercel.app/" className='hover:underline' passHref>DevHubb</Link> Verified</p>
        <p className="mt-2">© 2024 Bluebird from <Link href="https://devhubb.vercel.app/" className='hover:underline' passHref>DevHubb</Link></p>
      </div>
    </div>
  );
};

export default Suggestions;
