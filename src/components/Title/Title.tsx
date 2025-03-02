import styled from "styled-components";

export const Title = ({ children }: { children: string }) => {
  return <StyledTitle>{children}</StyledTitle>;
};

const StyledTitle = styled.h2`
  text-align: center;
  margin-bottom: 80px;
`;
