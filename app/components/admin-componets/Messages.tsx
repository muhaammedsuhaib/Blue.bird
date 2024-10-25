import React, { useState } from "react";

interface Message {
  id: number;
  subject: string;
  sender: string;
  date: string;
  isRead: boolean;
}

const initialMessages: Message[] = [
  {
    id: 1,
    subject: "Welcome to the Admin Dashboard",
    sender: "system@example.com",
    date: "2024-10-01",
    isRead: false,
  },
  {
    id: 2,
    subject: "Reminder: Meeting on Friday",
    sender: "manager@example.com",
    date: "2024-10-02",
    isRead: true,
  },
  // Add more messages as needed
];

const Messages: React.FC<{ adminId: string; theme: any }> = ({ theme }) => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);

  const toggleReadStatus = (id: number) => {
    setMessages((prevMessages) =>
      prevMessages.map((message) =>
        message.id === id ? { ...message, isRead: !message.isRead } : message
      )
    );
  };

  const deleteMessage = (id: number) => {
    setMessages((prevMessages) => prevMessages.filter((message) => message.id !== id));
  };

  return (
    <div style={{ backgroundColor: theme.background, color: theme.text }}>
      <h1 className="text-2xl font-bold mb-6">Messages</h1>

      <div className="space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`p-4 border rounded ${message.isRead ? "bg-gray-100" : "bg-white"}`}
            style={{ borderColor: theme.border }}
          >
            <div className="flex justify-between items-center">
              <div>
                <h2 className="font-semibold">{message.subject}</h2>
                <p className="text-sm text-gray-500">From: {message.sender}</p>
                <p className="text-sm text-gray-500">Date: {message.date}</p>
              </div>
              <div>
                <button
                  onClick={() => toggleReadStatus(message.id)}
                  className={`mr-2 ${theme.button} ${theme.buttonHover} text-white rounded`}
                >
                  {message.isRead ? "Mark as Unread" : "Mark as Read"}
                </button>
                <button
                  onClick={() => deleteMessage(message.id)}
                  className={`p-2 ${theme.button} ${theme.buttonHover} text-white rounded`}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Messages;
