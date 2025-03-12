import { DefaultTheme } from "styled-components";
import { BaseTheme } from "./BaseTheme";
import { ThemeEnum } from "./Theme";

export const ThemeDark: DefaultTheme = {
  type: ThemeEnum.dark,
  ...BaseTheme,
  colors: {
    bgPrimary: "rgb(31, 31, 32)",
    bgSecondary: "rgb(37, 37, 39)",
    primaryColor: "#fff",
    secondaryColor: "#eee",
    accentedColor: "#579191",
    accentedColorOpacity: "#57919170",
    notAccentedColor: "#ffffff19",
    bgGradient: `linear-gradient(to right, #579191, gray);`,
    errorColor: "#ce2b2b",
    successColor: "#008000",
  }
};