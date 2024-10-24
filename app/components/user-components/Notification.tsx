"use client";
import React, { useState } from 'react';

interface Notification {
  id: number;
  message: string;
  timestamp: string;
}

interface NotificationProps {
  userId: string; // Added userId prop
  theme: {
    background: string;
    text: string;
  };
  onclose: () => void; // Close modal function
}

const Notification: React.FC<NotificationProps> = ({ userId, theme, onclose }) => {
  // Dummy notifications data
  const [notifications, setNotifications] = useState<Notification[]>([
    { id: 1, message: "You have a new message from Alice.", timestamp: "10:30 AM" },
    { id: 2, message: "Your booking has been confirmed.", timestamp: "10:35 AM" },
    { id: 3, message: "Diana has sent you a friend request.", timestamp: "10:40 AM" },
    { id: 4, message: "Reminder: Meeting at 3 PM today.", timestamp: "10:45 AM" },
  ]);

  // Handle clearing notifications
  const handleClearNotifications = () => {
    setNotifications([]); // Clear all notifications
  };

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
          aria-label="Close Notifications"
        >
          &times;
        </button>

        <h2 className="text-xl font-bold mb-4">Notifications for User: {userId}</h2>

        {/* Notification List */}
        <div className="flex-1 overflow-auto mb-4 max-h-96">
          {notifications.length > 0 ? (
            notifications.map((notification) => (
              <div key={notification.id} className="mb-2 p-2 border-b">
                <p className="text-sm">{notification.message}</p>
                <span className="block text-xs text-gray-600 mt-1">{notification.timestamp}</span>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No notifications</p>
          )}
        </div>

        {/* Clear Notifications Button */}
        {notifications.length > 0 && (
          <button
            onClick={handleClearNotifications}
            className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition-colors"
          >
            Clear Notifications
          </button>
        )}
      </div>
    </div>
  );
};

export default Notification;
