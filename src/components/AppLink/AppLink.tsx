import { ReactNode } from "react";
import { Link, LinkProps } from "react-router-dom";
import styled, { css } from "styled-components";
type AppLinkVariant = "clear" | "underlined" | "filled";
interface AppLinkProps extends LinkProps {
  children: ReactNode;
  variant?: AppLinkVariant;
  className?: string;
}

export const AppLink = ({
  children,
  to = "/",
  variant = "clear",
  className,
  ...otherProps
}: AppLinkProps) => {
  return (
    <StyledLink
      className={className}
      to={to}
      $variant={variant}
      {...otherProps}
    >
      {children}
    </StyledLink>
  );
};

export const StyledLink = styled(Link)<{ $variant: AppLinkVariant }>`
  text-transform: capitalize;
  transition: opacity linear ${({ theme }) => theme.delay.transitionDelay};
  ${(props) => {
    switch (props.$variant) {
      case "filled":
        return css`
          background: ${({ theme }) => theme.colors.accentedColor};
          padding: 10px 30px;
          border: 2px solid ${({ theme }) => theme.colors.accentedColor};
          border-radius: 1px;
          transition: background linear
            ${({ theme }) => theme.delay.transitionDelay};
          &:hover {
            background: ${({ theme }) => theme.colors.bgSecondary};
            color: ${({ theme }) => theme.colors.accentedColor};
          }
        `;
      case "underlined":
        return css`
          position: relative;
          z-index: 0;
          padding: 10px 0;
          outline: none;
          background: none;
          border: 1px solid transparent;
          transition: all linear ${({ theme }) => theme.delay.transitionDelay};
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

            transition: all linear ${({ theme }) => theme.delay.transitionDelay};
          }
          &:hover {
            &:before {
              background: ${({ theme }) => theme.colors.accentedColor};
            }
          }
        `;

      default:
        return css`
          transition: opacity linear
            ${({ theme }) => theme.delay.transitionDelay};
        `;
    }
  }}
`;
