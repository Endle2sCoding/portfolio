import styled from "styled-components";
import { Icon } from "../Icon/Icon";
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
        <ScrollTopStyled
          onClick={() => {
            const element = document.getElementById(`${HOME_ID}`);
            element?.scrollIntoView();
          }}
        >
          <Icon
            width="16px"
            height="16px"
            viewBox="0 0 16 16"
            colorType="primary"
            iconId="arrow"
          />
        </ScrollTopStyled>
      )}
    </>
  );
};
const ScrollTopStyled = styled.button`
  background: none;
  border: none;
  position: fixed;
  bottom: 20px;
  right: 20px;
  color: ${({ theme }) => theme.colors.primaryColor};
  cursor: pointer;
  padding: 8px;
`;
