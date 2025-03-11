import { theme } from "@/styles/Theme";
import styled from "styled-components";

export const Title = ({ children }: { children: string }) => {
  return <StyledTitle>{children}</StyledTitle>;
};

const StyledTitle = styled.h2`
  text-transform: capitalize;
  text-align: center;
  margin-bottom: 80px;
  font-size: ${theme.fonts.fontSize4xl36};

  position: relative;
  padding: 30px;

  &:before {
    content: "";
    width: 60px;
    height: 2px;
    background: ${theme.colors.accentedColor};

    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`;
