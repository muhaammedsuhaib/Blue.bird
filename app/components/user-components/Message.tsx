"use client";
import React, { useState } from 'react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'other';
  timestamp: string;
  friendId?: number; // Added friendId to associate messages with friends
}

interface Friend {
  id: number;
  name: string;
}

interface MessageProps {
  userId: string;
  theme: {
    background: string;
    text: string;
  };
  onclose: () => void; // Updated prop name for consistency
}

const Message: React.FC<MessageProps> = ({ userId, theme, onclose }) => {
  // Dummy friends data
  const [friends] = useState<Friend[]>([
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
    { id: 4, name: "Diana" },
    { id: 5, name: "Ethan" },
  ]);
  
  // Selected friend state
  const [selectedFriend, setSelectedFriend] = useState<Friend | null>(null);
  
  // Dummy messages data with friendId to link to specific friends
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hello! How are you?", sender: 'other', timestamp: "10:30 AM", friendId: 1 },
    { id: 2, text: "I'm good, thanks! How about you?", sender: 'user', timestamp: "10:31 AM", friendId: 1 },
    { id: 3, text: "What are you up to today?", sender: 'other', timestamp: "10:32 AM", friendId: 2 },
    { id: 4, text: "Just working on some projects. You?", sender: 'user', timestamp: "10:33 AM", friendId: 2 },
    { id: 5, text: "Hey! Long time no see.", sender: 'other', timestamp: "10:35 AM", friendId: 3 },
    { id: 6, text: "Yeah, I’ve been busy!", sender: 'user', timestamp: "10:36 AM", friendId: 3 },
  ]);
  
  const [newMessage, setNewMessage] = useState<string>('');

  // Handle sending a new message
  const handleSendMessage = () => {
    if (newMessage.trim() && selectedFriend) {
      const newMessageObj: Message = {
        id: messages.length + 1,
        text: newMessage,
        sender: 'user',
        timestamp: new Date().toLocaleTimeString(),
        friendId: selectedFriend.id, // Associate the message with the selected friend
      };
      setMessages((prevMessages) => [...prevMessages, newMessageObj]);
      setNewMessage(''); // Clear input
    }
  };

  // Handle friend selection
  const handleSelectFriend = (friend: Friend) => {
    setSelectedFriend(friend);
    // Optionally, reset messages or load specific messages for the selected friend
    // setMessages([]); // Clear messages if needed
  };

  // Filter messages for the selected friend
  const filteredMessages = selectedFriend
    ? messages.filter(message => message.friendId === selectedFriend.id)
    : [];

  return (
    <div className="fixed inset-0 z-50 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50">
      <div
        className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full relative"
        style={{ backgroundColor: theme.background, color: theme.text }}
      >
        {/* Close Button */}
        <button
          onClick={onclose} // Close modal
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
          aria-label="Close Messages"
        >
          &times;
        </button>

        <h2 className="text-xl font-bold mb-4">Messages</h2>

        {/* Conditional Rendering */}
        {!selectedFriend ? (
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Friends List</h3>
            <ul className="space-y-2">
              {friends.map((friend) => (
                <li
                  key={friend.id}
                  onClick={() => handleSelectFriend(friend)} // Select friend on click
                  className="cursor-pointer p-2 rounded-lg hover:bg-gray-200"
                >
                  {friend.name}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <>
            {/* Message Display */}
            <div className="flex-1 overflow-auto mb-4 max-h-96">
              {filteredMessages.map((message) => (
                <div
                  key={message.id}
                  className={`mb-2 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs p-2 rounded-lg ${
                      message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <span className="block text-xs text-gray-600 mt-1">{message.timestamp}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="flex items-center border-t pt-2">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 p-2 border border-gray-300 rounded-lg"
              />
              <button
                onClick={handleSendMessage}
                className="ml-2 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Send
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Message;
