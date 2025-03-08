import styled from "styled-components";
import { Icon } from "../Icon/Icon";
import { theme } from "@/styles/Theme";
import { useEffect, useState } from "react";
import { HOME_ID } from "@/layout/Header/Header";

export const ScrollTop = () => {
  const [showBtn, setShowBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    });
  }, []);
  return (
    <>
      {showBtn && (
        <ScrollTopStyled href={`#${HOME_ID}`}>
          <Icon
            width="16px"
            height="16px"
            viewBox="0 0 16 16"
            fill="primary"
            iconId="arrow"
          />
        </ScrollTopStyled>
      )}
    </>
  );
};
const ScrollTopStyled = styled.a`
  background: none;
  border: none;
  position: fixed;
  bottom: 20px;
  right: 20px;
  color: ${theme.colors.primaryColor};
  cursor: pointer;
  padding: 8px;
`;
