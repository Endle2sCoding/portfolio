import { theme } from "@/styles/Theme";
import { ButtonHTMLAttributes, ReactNode } from "react";
import styled, { css } from "styled-components";

type AppButtonVariant = "clear" | "filed" | "underlined";
interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: AppButtonVariant;
}

export const AppButton = ({
  children,
  variant = "clear",
  ...otherProps
}: AppButtonProps) => {
  return (
    <StyledAppButton
      {...otherProps}
      $variant={variant}
    >
      {children}
    </StyledAppButton>
  );
};
const StyledAppButton = styled.button<{ $variant: AppButtonVariant }>`
  cursor: pointer;
  text-transform: uppercase;
  color: ${theme.colors.primaryColor};
  ${(props) => {
    switch (props.$variant) {
      case "filed":
        return css`
          background: ${theme.colors.accentedColor};
          padding: 10px 30px;
          border: 2px solid ${theme.colors.accentedColor};
          border-radius: 1px;
          transition: background linear ${theme.delay.transitionDelay};
          &:hover {
            background: ${theme.colors.bgSecondary};
            color: ${theme.colors.accentedColor};
          }
        `;
      case "underlined": {
        return css`
          position: relative;
          z-index: 0;
          padding: 10px;
          outline: none;
          background: none;
          border: 1px solid transparent;
          transition: all linear ${theme.delay.transitionDelay};
          &:before {
            content: "";
            display: inline-block;
            position: absolute;
            z-index: -1;
            bottom: 3px;
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
      }
      default:
        return css`
          padding: 0;
          margin: 0 auto;
          background: none;
          border: none;
          transition: color linear ${theme.delay.transitionDelay};
          &:hover {
            color: ${theme.colors.accentedColor};
          }
        `;
    }
  }};
`;
