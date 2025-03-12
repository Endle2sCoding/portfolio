import { ReactNode } from "react";
import styled, { css } from "styled-components";

export function SuccessMessage({
  children,
  loading,
}: {
  children?: ReactNode;
  loading: boolean;
}) {
  return (
    <SuccessMessageStyled $loading={loading}>
      {children ? (
        <h3></h3>
      ) : (
        <>
          <h3>{`Your message has been sent.`}</h3>
          <h3>{`We will contact you shortly.`}</h3>
        </>
      )}
    </SuccessMessageStyled>
  );
}
const SuccessMessageStyled = styled.div<{ $loading: boolean }>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  color: ${({ theme }) => theme.colors.successColor};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 130px;
  transition: opacity linear ${({ theme }) => theme.delay.transitionDelay};
  ${(props) =>
    props.$loading == true
      ? css`
      opacity:1
      z-index: 2;`
      : css`
          opacity: 0;
          z-index: -1;
        `}
  div {
    box-shadow: 0px 0px 200px 3px ${({ theme }) => theme.colors.accentedColor};
  }
  h3 {
    font-size: ${({ theme }) => theme.fonts.fontSizeXl24};
    margin-top: 8px;
  }
`;
