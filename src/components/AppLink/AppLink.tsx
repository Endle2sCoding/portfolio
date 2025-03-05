import { theme } from "@/styles/Theme";
import { ReactNode } from "react";
import { Link, LinkProps } from "react-router-dom";
import styled, { css } from "styled-components";
type AppLinkVariant = "clear" | "underlined";
interface AppLinkProps extends LinkProps {
  children: ReactNode;
  variant?: AppLinkVariant;
}

export const AppLink = ({
  children,
  to = "/",
  variant = "clear",
  ...otherProps
}: AppLinkProps) => {
  return (
    <StyledLink
      to={to}
      $variant={variant}
      {...otherProps}
    >
      {children}
    </StyledLink>
  );
};

export const StyledLink = styled(Link)<{ $variant: AppLinkVariant }>`
  ${(props) => {
    switch (props.$variant) {
      case "underlined":
        return css`
          position: relative;
          z-index: 0;
          padding: 10px 0;
          outline: none;
          background: none;
          border: 1px solid transparent;
          transition: all linear ${theme.delay.transitionDelay};
          &:before {
            content: "";
            display: inline-block;
            position: absolute;
            z-index: -1;
            bottom: 4px;
            left: 0;
            right: 0;
            width: 100%;
            height: 10px;

            transition: all linear ${theme.delay.transitionDelay};
          }
          &:hover {
            &:before {
              background: ${theme.colors.accentedColor};
            }
          }
        `;

      default:
        return css`
          /* padding: 10px; */
        `;
    }
  }}
`;
