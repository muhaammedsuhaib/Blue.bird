"use client";  // Enables use of hooks in server components

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface AppContextInterface {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

const AppContext = createContext<AppContextInterface | null>(null);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    // Get initial value from local storage
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : false; // Default to false (light mode)
  });

  // Update local storage whenever darkMode changes
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <AppContext.Provider value={{darkMode, setDarkMode }}>
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
