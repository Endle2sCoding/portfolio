import { theme } from "@/styles/Theme";
import { ButtonHTMLAttributes, ReactNode } from "react";
import styled, { css } from "styled-components";

type AppButtonVariant = "clear" | "filed";
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
          border: 1px solid ${theme.colors.accentedColor};
          transition: background linear ${theme.delay.transitionDelay};
          &:hover {
            background: ${theme.colors.bgSecondary};
            color: ${theme.colors.accentedColor};
          }
        `;
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
