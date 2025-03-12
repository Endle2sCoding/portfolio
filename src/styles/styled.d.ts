import { ITheme, ThemeEnum } from "./Theme";

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {
    type: ThemeEnum;
  }
}