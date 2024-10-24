"use client";
import React, { useState } from 'react';

interface SettingsProps {
  userId: string; // User ID for saving user settings
  theme: {
    background: string;
    text: string;
  };
  onclose: () => void; // Close modal function
}

const Settings: React.FC<SettingsProps> = ({ userId, theme, onclose }) => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [themePreference, setThemePreference] = useState<'light' | 'dark'>('light');

  const handleSaveSettings = () => {
    // Logic to save settings (API call can be added here)
    alert(`Settings saved successfully for user ID: ${userId}`);
    onclose(); // Close the settings modal after saving
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
          aria-label="Close Settings"
        >
          &times;
        </button>

        <h2 className="text-xl font-bold mb-4">Settings</h2>

        {/* Notification Settings */}
        <div className="mb-6">
          <h3 className="text-md font-semibold mb-2">Notification Settings</h3>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              checked={notificationsEnabled}
              onChange={() => setNotificationsEnabled(!notificationsEnabled)}
              className="form-checkbox"
            />
            <span className="ml-2">Enable Notifications</span>
          </label>
        </div>

        {/* Theme Preferences */}
        <div className="mb-6">
          <h3 className="text-md font-semibold mb-2">Theme Preference</h3>
          <div className="flex items-center">
            <label className="mr-4">
              <input
                type="radio"
                value="light"
                checked={themePreference === 'light'}
                onChange={() => setThemePreference('light')}
                className="form-radio"
              />
              <span className="ml-2">Light</span>
            </label>
            <label>
              <input
                type="radio"
                value="dark"
                checked={themePreference === 'dark'}
                onChange={() => setThemePreference('dark')}
                className="form-radio"
              />
              <span className="ml-2">Dark</span>
            </label>
          </div>
        </div>

        {/* Save Button */}
        <button
          onClick={handleSaveSettings}
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Save Settings
        </button>
      </div>
    </div>
  );
};

export default Settings;
