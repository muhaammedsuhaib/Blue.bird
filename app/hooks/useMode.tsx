"use client"
import { useState, useEffect } from "react";
const useMode = () => {
  const [mode, setMode] = useState<boolean>(() => {
    const savedMode = localStorage.getItem("mode");
    return savedMode === "true"; 
  });

  useEffect(() => {
    localStorage.setItem("mode", String(mode)); 
  }, [mode]);

  return [mode, setMode] as const;
};

export default useMode;
