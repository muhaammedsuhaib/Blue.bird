import React, { useState } from "react";

interface Notification {
  id: number;
  message: string;
  date: string;
  isRead: boolean;
}

const initialNotifications: Notification[] = [
  {
    id: 1,
    message: "New user registration approved.",
    date: "2024-10-10",
    isRead: false,
  },
  {
    id: 2,
    message: "Server maintenance scheduled for tonight.",
    date: "2024-10-11",
    isRead: true,
  },
  {
    id: 3,
    message: "New message received from support.",
    date: "2024-10-12",
    isRead: false,
  },
  // Add more notifications as needed
];

const Notifications: React.FC<{ adminId: string; theme: any }> = ({ theme }) => {
  const [notifications, setNotifications] = useState<Notification[]>(initialNotifications);

  const toggleReadStatus = (id: number) => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification) =>
        notification.id === id ? { ...notification, isRead: !notification.isRead } : notification
      )
    );
  };

  const deleteNotification = (id: number) => {
    setNotifications((prevNotifications) => prevNotifications.filter((notification) => notification.id !== id));
  };

  return (
    <div style={{ backgroundColor: theme.background, color: theme.text }}>
      <h1 className="text-2xl font-bold mb-6">Notifications</h1>

      <div className="space-y-4">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`p-4 border rounded ${notification.isRead ? "bg-gray-100" : "bg-white"}`}
            style={{ borderColor: theme.border }}
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="font-semibold">{notification.message}</p>
                <p className="text-sm text-gray-500">Date: {notification.date}</p>
              </div>
              <div>
                <button
                  onClick={() => toggleReadStatus(notification.id)}
                  className={`mr-2 ${theme.button} ${theme.buttonHover} text-white rounded`}
                >
                  {notification.isRead ? "Mark as Unread" : "Mark as Read"}
                </button>
                <button
                  onClick={() => deleteNotification(notification.id)}
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

export default Notifications;
