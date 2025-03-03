import styled from "styled-components";
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
    <SvgStyled
      {...otherProps}
      width={width}
      height={height}
      viewBox={viewBox}
      $fill={fill}
      $variant={variant}
    >
      <use xlinkHref={`${iconsSprite}#${iconId}`} />
    </SvgStyled>
  );
};
const SvgStyled = styled.svg<{
  $fill: "primary" | "secondary" | "accented";
  $variant?: "clear" | "bgCircle" | "bgSquare";
}>`
  fill: ${(props) =>
    props.$fill === "accented"
      ? `${theme.colors.accentedColor}`
      : props.$fill === "primary"
      ? `${theme.colors.primaryColor}`
      : `${theme.colors.secondaryColor}`};
`;
