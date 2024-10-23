"use client";  

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface AppContextInterface {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

const AppContext = createContext<AppContextInterface | null>(null);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  
  const [darkMode, setDarkMode] = useState<boolean>(false); // Default to false (light mode)

  useEffect(() => {
    // Get initial value from local storage
    const savedMode = localStorage.getItem("darkMode");
    setDarkMode(savedMode ? JSON.parse(savedMode) : false); // Check localStorage only on client side

    // Update local storage whenever darkMode changes
    return () => {
      localStorage.setItem("darkMode", JSON.stringify(darkMode));
    };
  }, [darkMode]);

  return (
    <AppContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
