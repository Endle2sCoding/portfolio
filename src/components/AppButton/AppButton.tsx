import { ButtonHTMLAttributes, ReactNode } from "react";
import styled, { css } from "styled-components";

type AppButtonVariant = "clear" | "filled" | "theme" | "underlined";
interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: AppButtonVariant;
  disabled?: boolean;
  colorType?: "primary" | "inverted";
  textTransform?: "uppercase" | "capitalize";
}

export const AppButton = ({
  children,
  variant = "clear",
  textTransform = "uppercase",
  disabled,
  colorType = "primary",
  ...otherProps
}: AppButtonProps) => {
  return (
    <StyledAppButton
      $disabled={disabled}
      $colorType={colorType}
      $textTransform={textTransform}
      {...otherProps}
      $variant={variant}
    >
      {children}
    </StyledAppButton>
  );
};
const StyledAppButton = styled.button<{
  $variant: AppButtonVariant;
  $disabled?: boolean;
  $colorType?: "primary" | "inverted";
  $textTransform?: "uppercase" | "capitalize";
}>`
  cursor: pointer;
  text-transform: ${(props) => props.$textTransform};
  color: ${(props) =>
    props.$colorType === "primary"
      ? ({ theme }) => theme.colors.primaryColor
      : ({ theme }) => theme.colors.bgPrimary};

  opacity: ${(props) =>
    props.$disabled === true
      ? ({ theme }) => theme.opacity.opacityDisabled
      : `1`};
  ${(props) => {
    switch (props.$variant) {
      case "filled":
        return css`
          background: ${({ theme }) => theme.colors.accentedColor};
          padding: 10px 30px;
          border: 2px solid ${({ theme }) => theme.colors.accentedColor};
          border-radius: 1px;
          transition: all linear ${({ theme }) => theme.delay.transitionDelay};
          &:hover {
            transition: all linear ${({ theme }) => theme.delay.transitionDelay};
            background: ${({ theme }) => theme.colors.bgSecondary};
            color: ${({ theme }) => theme.colors.accentedColor};
          }
        `;
      case "theme":
        return css`
          background: ${({ theme }) => theme.colors.accentedColor};
          color: ${({ theme }) => theme.colors.primaryColor};
          padding: 11px;
          border-radius: 50%;
          border: 2px solid ${({ theme }) => theme.colors.bgPrimary};
          transition: all linear ${({ theme }) => theme.delay.transitionDelay};
          &:hover {
            color: ${({ theme }) => theme.colors.accentedColor};
            border: 2px solid ${({ theme }) => theme.colors.accentedColor};
            background: ${({ theme }) => theme.colors.bgPrimary};
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
          transition: all linear ${({ theme }) => theme.delay.transitionDelay};
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

            transition: all linear ${({ theme }) => theme.delay.transitionDelay};
          }
          &:hover {
            &:before {
              background: ${({ theme }) => theme.colors.accentedColor};
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
          transition: color linear ${({ theme }) => theme.delay.transitionDelay};
          &:hover {
            color: ${({ theme }) => theme.colors.accentedColor};
          }
        `;
    }
  }};
`;
