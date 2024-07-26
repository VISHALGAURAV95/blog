// ThemeContext.tsx
import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

// Define the shape of the context state
interface ThemeContextProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

// Create the context with default values
const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

// Theme provider component
export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  const toggleTheme = () => {
    setIsDarkMode((prev: boolean) => {
      const newMode = !prev;
      localStorage.setItem('darkMode', JSON.stringify(newMode));
      return newMode;
    });
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the ThemeContext
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
