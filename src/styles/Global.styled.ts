import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";
export const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: "Poppins-Medium";
  src: local("Poppins-Medium"), url(./src/assets/fonts/Poppins-Medium.eot?) format("eot"), url(./src/assets/fonts/Poppins-Medium.woff2) format("woff2"), url(./src/assets/fonts/Poppins-Medium.ttf) format("truetype");
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: "JosefinSans-Medium";
  src:
    local("JosefinSans-Medium"),
    url(./src/assets/fonts/JosefinSans-Medium.eot?) format("eot"), url(./src/assets/fonts/JosefinSans-Medium.woff2) format("woff2"), url(./src/assets/fonts/JosefinSans-Medium.ttf) format("truetype");
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: "JosefinSans-Bold";
  src:
    local("JosefinSans-Bold"), url(./src/assets/fonts/JosefinSans-Bold.eot?) format("eot"), url(./src/assets/fonts/JosefinSans-Bold.woff2) format("woff2"), url(./src/assets/fonts/JosefinSans-Bold.ttf) format("truetype");
  font-weight: 700;
  font-style: normal;
}

@font-face {
  font-family: "JosefinSans-SemiBold";
  src:
    local("JosefinSans-SemiBold"), url(./src/assets/fonts/JosefinSans-SemiBold.eot?) format("eot"), url(./src/assets/fonts/JosefinSans-SemiBold.woff2) format("woff2"), url(./src/assets/fonts/JosefinSans-SemiBold.ttf) format("truetype");
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
  font-size: ${theme.fonts.fontSizeM16};
  line-height: 1.2;
  font-weight: 400;

  scroll-padding-top: ${theme.sizes.headerHeight};
  scroll-behavior: smooth;

  *::-webkit-scrollbar {
  width: 12px; /* ширина scrollbar */
  height: 8px;
  
}

*::-webkit-scrollbar-track {
  background: ${theme.colors.primaryColor}; /* цвет дорожки */
}

*::-webkit-scrollbar-thumb {
  background-color: ${theme.colors.accentedColor}; /* цвет плашки */

  border-radius: 20px; /* закругления плашки */
  border: 2px solid ${theme.colors.primaryColor};; /* padding вокруг плашки */
}

}
.app {
  padding-top: ${theme.sizes.headerHeight};
}

section {
  &:not(#home){
  position: relative;

  }
  padding: calc(${theme.sizes.headerHeight} / 2) 0 ${theme.sizes.headerHeight};
  @media ${theme.media.eReaders}{
    padding: calc(${theme.sizes.headerHeight} / 4) 0 calc(${theme.sizes.headerHeight} / 2)
  }

}
section:nth-of-type(odd){
  background:${theme.colors.bgPrimary}
}
section:nth-of-type(even){
  background:${theme.colors.bgSecondary}
}
a {
  text-decoration: none;
  color: inherit;
}
ul{
  list-style: none;
}
h1,h2,h3,h4,h5,h6 {
  font-size: inherit;
  line-height: inherit;
}
`;
