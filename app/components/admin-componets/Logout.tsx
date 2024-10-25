import React, { useState } from "react";

const Logout: React.FC<{ adminId: string; theme: any }> = ({ adminId, theme }) => {
  const [isConfirming, setIsConfirming] = useState<boolean>(false);

  const handleLogout = () => {
    // Perform logout logic here, e.g., clearing tokens, redirecting, etc.
    console.log(`Admin ${adminId} has logged out`);
    // Redirect to login page or perform any necessary cleanup
  };

  return (
    <div style={{ backgroundColor: theme.background, color: theme.text }}>
      <h1 className="text-2xl font-bold mb-6">Logout</h1>
      <p className="mb-4">Are you sure you want to log out?</p>

      <div className="flex space-x-4">
        <button
          onClick={() => setIsConfirming(true)}
          className={`p-2 ${theme.button} ${theme.buttonHover} text-white rounded`}
        >
          Logout
        </button>
        <button
          onClick={() => setIsConfirming(false)}
          className={`p-2 ${theme.button} ${theme.buttonHover} text-white rounded`}
        >
          Cancel
        </button>
      </div>

      {isConfirming && (
        <div className="mt-4">
          <p>Are you sure you want to log out?</p>
          <div className="flex space-x-4">
            <button
              onClick={handleLogout}
              className={`p-2 ${theme.button} ${theme.buttonHover} text-white rounded`}
            >
              Yes
            </button>
            <button
              onClick={() => setIsConfirming(false)}
              className={`p-2 ${theme.button} ${theme.buttonHover} text-white rounded`}
            >
              No
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Logout;
