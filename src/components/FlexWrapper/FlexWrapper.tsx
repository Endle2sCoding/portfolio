import styled from "styled-components";
type FlexWrapperPropsType = {
  directioin?: string;
  justify?: string;
  align?: string;
  wrap?: string;
  width?: string;
  section?: boolean;
};

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
  display: flex;
  flex-direction: ${(props) => props.directioin || "row"};
  justify-content: ${(props) => props.justify || "start"};
  align-items: ${(props) => props.align || "stretch"};
  flex-wrap: ${(props) => props.wrap || "nowrap"};
  width: ${(props) => props.width || "100%"};
`;
