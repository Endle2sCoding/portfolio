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
      variant={variant}
    >
      {children}
    </StyledAppButton>
  );
};
const StyledAppButton = styled.button<{ variant: AppButtonVariant }>`
  cursor: pointer;
  text-transform: uppercase;
  color: var(--primary-color)
    ${(props) => {
      switch (props.variant) {
        case "filed":
          return css`
            font-family: Poppins;
            font-size: 14px;
            font-weight: 400;
            line-height: 21px;
            letter-spacing: 1px;
            text-align: left;

            background: var(--accented-color);
            padding: 10px 30px;
            border: 1px solid var(--accented-color);
            transition: background linear var(--transition-delay);
            &:hover {
              background: var(--bg-secondary);
            }
          `;
        default:
          return css`
            padding: 0;
            margin: 0 auto;
            background: none;
            border: none;
            transition: color linear var(--transition-delay);
            &:hover {
              color: var(--accented-color);
            }
          `;
      }
    }};
`;
