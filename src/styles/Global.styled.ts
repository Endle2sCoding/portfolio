import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";

export const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: "Poppins-Medium";
  src: local("Poppins-Medium"), url(./assets/fonts/Poppins-Medium.eot?) format("eot"), url(./assets/fonts/Poppins-Medium.woff2) format("woff2"), url(./assets/fonts/Poppins-Medium.ttf) format("truetype");
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: "JosefinSans-Medium";
  src:
    local("JosefinSans-Medium"),
    url(./assets/fonts/JosefinSans-Medium.eot?) format("eot"), url(./assets/fonts/JosefinSans-Medium.woff2) format("woff2"), url(./assets/fonts/JosefinSans-Medium.ttf) format("truetype");
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: "JosefinSans-Bold";
  src:
    local("JosefinSans-Bold"), url(./assets/fonts/JosefinSans-Bold.eot?) format("eot"), url(./assets/fonts/JosefinSans-Bold.woff2) format("woff2"), url(./assets/fonts/JosefinSans-Bold.ttf) format("truetype");
  font-weight: 700;
  font-style: normal;
}

@font-face {
  font-family: "JosefinSans-SemiBold";
  src:
    local("JosefinSans-SemiBold"), url(./assets/fonts/JosefinSans-SemiBold.eot?) format("eot"), url(./assets/fonts/JosefinSans-SemiBold.woff2) format("woff2"), url(./assets/fonts/JosefinSans-SemiBold.ttf) format("truetype");
  font-weight: 600;
  font-style: normal;
}

*,
::before,
::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body,
#root {
  min-height: 100vh;
  background: ${theme.colors.bgPrimary};
  color: ${theme.colors.primaryColor};
  font-family: ${theme.fonts.popinsMedium}, sans-serif;
  scroll-behavior: smooth;
}
a {
  text-decoration: none;
}
ul{
  list-style: none;
}
section {
  padding: 100px 0;
}
section:nth-of-type(odd){
  background:${theme.colors.bgPrimary}
}
section:nth-of-type(even){
  background:${theme.colors.bgSecondary}
}
`;