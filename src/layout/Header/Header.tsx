import { Container } from "@/components/Container/Container";
import { FlexWrapper } from "@/components/FlexWrapper/FlexWrapper";
import { Logo } from "@/components/Logo/Logo";
import { Nav } from "@/components/Nav/Nav";
import { theme } from "@/styles/Theme";
import { useState } from "react";
import styled, { css } from "styled-components";

export const HOME_ID = "home";
export const SKILLS_ID = "skills";
export const WORKS_ID = "works";
export const CONTACTS_ID = "contact";
export const TESTIMONY_ID = "testimony";

const list = [
  { title: `${HOME_ID}`, id: `${HOME_ID}` },
  { title: `${SKILLS_ID}`, id: `${SKILLS_ID}` },
  { title: `${WORKS_ID}`, id: `${WORKS_ID}` },
  // { title: `${TESTIMONY_ID}`, id: `${TESTIMONY_ID}` },
  { title: `${CONTACTS_ID}`, id: `${CONTACTS_ID}` },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper
          align="center"
          justify="space-between"
        >
          <Logo />
          <Nav
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            list={list}
            className="nav"
          />
          <Burger
            $isOpen={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <span></span>
          </Burger>
        </FlexWrapper>
      </Container>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: ${theme.colors.bgPrimary};
  opacity: 0.99;
  z-index: 1000;
  height: ${theme.sizes.headerHeight};
`;
const Burger = styled.span<{ $isOpen: boolean }>`
  display: none;
  @media ${theme.media.tablet} {
    display: block;
    position: ${(props) => props.$isOpen && "fixed"};
    z-index: ${(props) => props.$isOpen && "10001"};
    top: ${(props) => props.$isOpen && "48px"};
    right: ${(props) => props.$isOpen && "16px"};
  }
  ${(props) => {
    switch (props.$isOpen) {
      case true:
        return css`
          span {
            position: relative;
            display: block;
            width: 30px;
            height: 4px;
            background: none;

            &::before {
              transition: all linear ${theme.delay.transitionDelay};
              transform: rotate(-45deg);
              position: absolute;
              content: "";
              display: block;
              width: 30px;
              height: 4px;
              background: ${theme.colors.primaryColor};
            }
            &::after {
              transition: all linear ${theme.delay.transitionDelay};
              transform: rotate(45deg);
              position: absolute;
              content: "";
              display: block;
              width: 30px;
              height: 4px;
              background: ${theme.colors.primaryColor};
            }
          }
        `;
      case false:
        return css`
          span {
            transition: all linear ${theme.delay.transitionDelay};
            position: relative;
            display: block;
            width: 30px;
            height: 4px;
            background: ${theme.colors.primaryColor};
            &::before {
              transition: all linear ${theme.delay.transitionDelay};
              position: absolute;
              top: -10px;
              content: "";
              display: block;
              width: 30px;
              height: 4px;
              background: ${theme.colors.primaryColor};
            }
            &::after {
              transition: all linear ${theme.delay.transitionDelay};
              position: absolute;
              top: 10px;
              content: "";
              display: block;
              width: 30px;
              height: 4px;
              background: ${theme.colors.primaryColor};
            }
          }
        `;
      default:
        return css``;
    }
  }}
`;
