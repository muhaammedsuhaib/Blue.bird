"use client";
import React, { useState } from 'react';
import Modal from '../../components/Modal';
import { Itheme } from '@/app/types/theme';

interface SettingsProps {
  userId: string; 
  theme:Itheme
 
}

const Settings: React.FC<SettingsProps> = ({ userId, theme }) => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [themePreference, setThemePreference] = useState<'light' | 'dark'>('light');

  const handleSaveSettings = () => {
    // Logic to save settings (API call can be added here)
    alert(`Settings saved successfully for user ID: ${userId}`);
  
  };

  return (
    <Modal key={15476}  theme={theme}>
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
    </Modal>
  );
};

export default Settings;
