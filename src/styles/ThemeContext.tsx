import { createContext, ReactNode, useContext, useState } from "react";
import {
  DefaultTheme,
  ThemeProvider as StyledProvider,
} from "styled-components";
import { ThemeDark } from "./ThemeDark";
import { ThemeLight } from "./ThemeLight";

const PORFOLIO_LOCALSTORAGE_THEME_TYPE = "potfolio-theme-type";

interface ThemeContextProps {
  theme?: DefaultTheme;
  changeTheme?: () => void;
}
const ThemeContext = createContext<ThemeContextProps>({});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const localStorageThemeType = localStorage.getItem(
    PORFOLIO_LOCALSTORAGE_THEME_TYPE
  );
  const [theme, setTheme] = useState(
    localStorageThemeType === "light" ? ThemeLight : ThemeDark
  );
  const changeTheme = () => {
    setTheme(theme.type === "light" ? ThemeDark : ThemeLight);
    localStorage.setItem(
      PORFOLIO_LOCALSTORAGE_THEME_TYPE,
      theme.type === "light" ? "dark" : "light"
    );
  };

  return (
    <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>
      <StyledProvider theme={theme}>{children}</StyledProvider>
    </ThemeContext.Provider>
  );
};
export const useTheme = (): ThemeContextProps => {
  const { theme, changeTheme } = useContext(ThemeContext);
  return { theme, changeTheme };
};
