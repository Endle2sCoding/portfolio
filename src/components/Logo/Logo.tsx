import styled from "styled-components";
import { Icon } from "../Icon/Icon";
import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <StyledLogo
      to="/"
      onClick={() => window.scroll(0, 0)}
    >
      <Icon iconId="code" />
    </StyledLogo>
  );
};
const StyledLogo = styled(Link)`
  text-decoration: none;
  transition: transform linear ${({ theme }) => theme.delay.transitionDelay};
  &:hover {
    transform: scale(1.1);
  }
`;
