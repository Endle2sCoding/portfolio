import { ITheme, ThemeEnum } from "./ThemeTypes.ts";

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {
    type: ThemeEnum;
    colors: {
      bgPrimary: string,
      bgSecondary: string,
      bgNotAccented: string,
      primaryColor: string,
      secondaryColor: string,
      accentedColor: string,
      accentedColorOpacity: string,
      bgGradient: string,
      errorColor: string,
      successColor: string,
      notAccentedColor: string,
    };
  }
}