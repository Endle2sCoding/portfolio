import styled, { css } from "styled-components";
import iconsSprite from "../../assets/svg/iconsSprite.svg";

import { SVGProps } from "react";
import { theme } from "@/styles/Theme";

export type IconPropsType = SVGProps<SVGSVGElement> & {
  iconId: string;
  width?: string;
  height?: string;
  viewBox?: string;
  fill?: "primary" | "secondary" | "accented";
  variant?: "clear" | "bgCircle" | "bgSquare";
};
export const Icon = (props: IconPropsType) => {
  const {
    iconId,
    width = "50",
    height = "50",
    viewBox = "0 0 50 50",
    fill = "accented",
    variant = "clear",
    ...otherProps
  } = props;
  return (
    <SvgWrapper $variant={variant}>
      <SvgStyled
        {...otherProps}
        width={width}
        height={height}
        viewBox={viewBox}
        $fill={fill}
      >
        <use xlinkHref={`${iconsSprite}#${iconId}`} />
      </SvgStyled>
    </SvgWrapper>
  );
};
const SvgWrapper = styled.div<{
  $variant?: "clear" | "bgCircle" | "bgSquare";
}>`
  ${(props) => {
    switch (props.$variant) {
      case "bgCircle":
        return css`
          position: relative;
          &:before {
            position: absolute;
            top: 0;
            bottom: 0;
            right: 0;
            left: 0;
            content: "";
            background: ${theme.colors.bgSecondary};
            padding: 10px;
            margin: 0 10px;
            border-radius: 50%;
            transition: all linear ${theme.delay.transitionDelay};
            &:hover {
              transform: translateY(-4px);
              background: ${theme.colors.accentedColor};
              svg {
                fill: ${theme.colors.bgPrimary};
              }
            }
          }
        `;
      case "bgSquare":
        return css``;

      default:
        return css``;
    }
  }}
`;
const SvgStyled = styled.svg<{
  $fill: "primary" | "secondary" | "accented";
}>`
  fill: ${(props) =>
    props.$fill === "accented"
      ? `${theme.colors.accentedColor}`
      : props.$fill === "primary"
      ? `${theme.colors.primaryColor}`
      : `${theme.colors.secondaryColor}`};
`;
