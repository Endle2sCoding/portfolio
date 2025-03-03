import { ReactNode } from "react";
import styled from "styled-components";

export const FlexWrapper = ({
  children,
  directioin = "row",
  justify = "start",
  align = "stretch",
  wrap = "nowrap",
}: {
  children: ReactNode;
  directioin?: string;
  justify?: string;
  align?: string;
  wrap?: string;
}) => {
  return (
    <StyledFlexWrapper
      $directioin={directioin}
      $justify={justify}
      $align={align}
      $wrap={wrap}
    >
      {children}
    </StyledFlexWrapper>
  );
};
export const StyledFlexWrapper = styled.div<{
  $directioin?: string;
  $justify?: string;
  $align?: string;
  $wrap?: string;
}>`
  display: flex;
  flex-direction: ${(props) => props.$directioin || "row"};
  justify-content: ${(props) => props.$justify || "start"};
  align-items: ${(props) => props.$align || "stretch"};
  flex-wrap: ${(props) => props.$wrap || "nowrap"};
  width: 100%;
`;
