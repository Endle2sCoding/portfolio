import styled, { css } from "styled-components";
import iconsSprite from "../../assets/svg/iconsSprite.svg";

import { SVGProps } from "react";

export type IconPropsType = SVGProps<SVGSVGElement> & {
  iconId: string;
  width?: string;
  height?: string;
  viewBox?: string;
  className?: string;
  colorType?: "primary" | "secondary" | "accented" | "inverted";
  variant?: "clear" | "bgCircle" | "bgSquare";
};
export const Icon = (props: IconPropsType) => {
  const {
    iconId,
    width = "50",
    height = "50",
    viewBox = "0 0 50 50",
    colorType = "accented",
    variant = "clear",
    className,
    ...otherProps
  } = props;
  return (
    <SvgWrapper
      className={className}
      $variant={variant}
    >
      <SvgStyled
        {...otherProps}
        width={width}
        height={height}
        viewBox={viewBox}
        $colorType={colorType}
      >
        <use xlinkHref={`${iconsSprite}#${iconId}`} />
      </SvgStyled>
    </SvgWrapper>
  );
};
const SvgWrapper = styled.div<{
  $variant?: "clear" | "bgCircle" | "bgSquare";
}>`
  display: inline-block;
  ${(props) => {
    switch (props.$variant) {
      case "bgCircle":
        return css`
          position: relative;
          z-index: 0;
          padding: 8px 10px 6px;
          transition: all linear ${({ theme }) => theme.delay.transitionDelay};
          svg {
            transition: all linear ${({ theme }) => theme.delay.transitionDelay};
          }
          &:before {
            border-radius: 50%;
            position: absolute;
            z-index: -1;
            content: "";
            top: 0;
            bottom: 0;
            right: 0;
            left: 0;
            background: ${({ theme }) => theme.colors.bgSecondary};
            transition: all linear ${({ theme }) => theme.delay.transitionDelay};
          }
          &:hover {
            &:before {
              transform: translateY(-4px);
              background: ${({ theme }) => theme.colors.accentedColor};
            }
            svg {
              transform: translateY(-4px);
              fill: ${({ theme }) => theme.colors.bgPrimary};
            }
          }
        `;
      case "bgSquare":
        return css`
          padding: 40px;
          position: relative;
          z-index: 0;
          &:before {
            position: absolute;
            z-index: -1;
            width: 80px;
            height: 80px;
            transform-origin: top left;
            top: 50%;
            left: 50%;
            transform: rotate(45deg) translate3d(-50%, -50%, 0);
            content: "";
            background: ${({ theme }) => theme.colors.bgNotAccented};
            &:hover {
              transform: translateY(-4px);
              background: ${({ theme }) => theme.colors.accentedColor};
              svg {
                fill: ${({ theme }) => theme.colors.bgPrimary};
              }
            }
          }
        `;

      default:
        return css``;
    }
  }}
`;
const SvgStyled = styled.svg<{
  $colorType: "primary" | "secondary" | "accented" | "inverted";
}>`
  ${(props) => {
    switch (props.$colorType) {
      case "accented":
        return css`
          transition: all linear ${({ theme }) => theme.delay.transitionDelay};
          fill: ${({ theme }) => theme.colors.accentedColor};
        `;
      case "primary":
        return css`
          transition: all linear ${({ theme }) => theme.delay.transitionDelay};
          fill: ${({ theme }) => theme.colors.primaryColor};
          &:hover {
            fill: ${({ theme }) => theme.colors.accentedColor};
          }
        `;
      case "inverted":
        return css`
          transition: all linear ${({ theme }) => theme.delay.transitionDelay};
          fill: ${({ theme }) => theme.colors.bgSecondary};
          &:hover {
            fill: ${({ theme }) => theme.colors.accentedColor};
          }
        `;

      default:
        return css`
          transition: all linear ${({ theme }) => theme.delay.transitionDelay};
          fill: ${({ theme }) => theme.colors.secondaryColor};
        `;
    }
  }}
`;
