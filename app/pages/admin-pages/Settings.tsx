import React, { useState } from "react";

const Settings: React.FC<{ adminId: string; theme: any }> = ({ theme }) => {
  const [adminName, setAdminName] = useState<string>("Admin User");
  const [adminEmail, setAdminEmail] = useState<string>("admin@example.com");
  const [isDarkMode, setIsDarkMode] = useState<boolean>(theme.isDarkMode);

  const handleSave = () => {
    // Logic to save settings
    console.log("Settings saved:", { adminName, adminEmail, isDarkMode });
  };

  return (
    <div style={{ backgroundColor: theme.background, color: theme.text }}>
      <h1 className="text-2xl font-bold mb-6">Settings</h1>

      <div className="mb-8">
        <label className="block mb-2 font-semibold">Admin Name:</label>
        <input
          type="text"
          value={adminName}
          onChange={(e) => setAdminName(e.target.value)}
          className="p-2 border rounded w-full"
          style={{ backgroundColor: theme.inputBackground, color: theme.inputText }}
        />
      </div>

      <div className="mb-8">
        <label className="block mb-2 font-semibold">Admin Email:</label>
        <input
          type="email"
          value={adminEmail}
          onChange={(e) => setAdminEmail(e.target.value)}
          className="p-2 border rounded w-full"
          style={{ backgroundColor: theme.inputBackground, color: theme.inputText }}
        />
      </div>

      <div className="flex items-center mb-8">
        <input
          type="checkbox"
          checked={isDarkMode}
          onChange={() => {
            setIsDarkMode((prev) => !prev);
            theme.toggleDarkMode(); // Assuming theme has a method to toggle dark mode
          }}
          className="mr-2"
        />
        <label className="font-semibold">Enable Dark Mode</label>
      </div>

      <button
        onClick={handleSave}
        className={`p-2 ${theme.button} ${theme.buttonHover} text-white rounded`}
      >
        Save Changes
      </button>
    </div>
  );
};

export default Settings;
