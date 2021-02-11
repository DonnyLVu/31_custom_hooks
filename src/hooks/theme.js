import React, { createContext, useState, useContext } from 'react';

export const Theme = createContext(null);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');
  return (
    <Theme.Provider value={{ theme, setTheme }}>
      {children}
    </Theme.Provider>
  );
};

export const useTheme = () => {
  const { theme, setTheme } = useContext(ThemeProvider);
  return { theme, setTheme };
};
