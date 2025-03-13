import { DefaultTheme } from "styled-components";
import { BaseTheme } from "./BaseTheme";
import { ThemeEnum } from "./theme";

export const ThemeLight: DefaultTheme = {
  type: ThemeEnum.light,
  ...BaseTheme,
  colors: {
    primaryColor: "rgb(31, 31, 32)",
    secondaryColor: "rgb(37, 37, 39)",
    bgNotAccented: "rgb(37, 37, 39)",

    bgPrimary: "#fff",
    bgSecondary: "#eee",
    accentedColor: "#579191",
    accentedColorOpacity: "#579191",
    notAccentedColor: "rgb(31, 31, 32)",
    bgGradient: `linear-gradient(to right, #579191, gray);`,
    errorColor: "#ce2b2b",
    successColor: "#008000",
  }
};