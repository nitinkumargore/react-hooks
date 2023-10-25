import React, { useState, useContext, createContext } from "react";

const ThemeContext = createContext();

export const useThemeContext = () => useContext(ThemeContext);

const WrappedContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("red");

  return (
    <ThemeContext.Provider
      value={{ theme, updateTheme: (theme) => setTheme(theme) }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default WrappedContextProvider;
