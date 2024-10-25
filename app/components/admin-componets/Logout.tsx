import React, { useState } from "react";
import Button from "../Button";

interface LogoutProps {
  adminId: string;
  theme: {
    background: string;
    text: string;
    textHover: string;
    buttonHover: string;
    button: string;
  };
}

const Logout: React.FC<LogoutProps> = ({ adminId, theme }) => {

  const [isConfirming, setIsConfirming] = useState<boolean>(false);

  const handleLogout = () => {
    console.log(`Admin ${adminId} has logged out`);
   
  };

  return (
    <div style={{ backgroundColor: theme.background, color: theme.text }}>
      <h1 className="text-2xl font-bold mb-6">Logout</h1>
      <p className="mb-4">Are you sure you want to log out?</p>

      <div className="flex space-x-4">
        <Button
          onClick={() => setIsConfirming(true)}
          className={`p-2 ${theme.button} ${theme.buttonHover} ${theme.text}  rounded`}
          label="Logout"
        />
        <Button
          onClick={() => setIsConfirming(false)}
          className={`p-2 ${theme.button} ${theme.buttonHover} rounded`}
          label="Cancel"
        />
      </div>

      {isConfirming && (
        <div className="mt-4">
          <p>Are you sure you want to log out?</p>
          <div className="flex space-x-4">
            <Button
              onClick={handleLogout}
              label="Yes"
              className={`p-2 ${theme.button} ${theme.buttonHover} text-white rounded`}
           />
            <Button
              onClick={() => setIsConfirming(false)}
              label="No"
              className={`p-2 ${theme.button} ${theme.buttonHover} text-white rounded`}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Logout;
