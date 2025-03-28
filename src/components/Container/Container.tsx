import { ReactNode } from "react";
import styled from "styled-components";

export const Container = ({ children }: { children: ReactNode }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

const StyledContainer = styled.div`
  max-width: 1460px;
  width: 100%;
  padding: 0 30px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media ${({ theme }) => theme.media.desctop} {
    max-width: 1200px;
    padding: 0 15px;
  }

  /* border: 1px solid red; */
`;
