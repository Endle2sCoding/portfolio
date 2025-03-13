import { createContext, ReactNode, useContext, useState } from "react";
import {
  DefaultTheme,
  ThemeProvider as StyledProvider,
} from "styled-components";
import { ThemeDark } from "./ThemeDark";
import { ThemeLight } from "./ThemeLight";

interface ThemeContextProps {
  theme?: DefaultTheme;
  changeTheme?: () => void;
}
const ThemeContext = createContext<ThemeContextProps>({});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState(ThemeDark);
  const changeTheme = () =>
    setTheme(theme.type === "dark" ? ThemeLight : ThemeDark);

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
