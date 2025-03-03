import styled from "styled-components";
import { Icon } from "../Icon/Icon";
import { HOME_ID } from "@/layout/Header/Header";
import { theme } from "@/styles/Theme";

export const Logo = () => {
  return (
    <StyledLogo href={`#${HOME_ID}`}>
      <Icon iconId="code" />
    </StyledLogo>
  );
};
const StyledLogo = styled.a`
  text-decoration: none;
  transition: transform linear ${theme.delay.transitionDelay};
  &:hover {
    transform: scale(1.1);
  }
`;
