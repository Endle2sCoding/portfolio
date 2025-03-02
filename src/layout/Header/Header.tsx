import { Container } from "@/components/Container/Container";
import { FlexWrapper } from "@/components/FlexWrapper/FlexWrapper";
import { Logo } from "@/components/Logo/Logo";
import { Nav } from "@/components/Nav/Nav";
import { theme } from "@/styles/Theme";
import styled from "styled-components";
export const HOME_ID = "Home";
export const SKILLS_ID = "Skills";
export const WORKS_ID = "Works";
export const CONTACTS_ID = "Contact";

const menu = [`${HOME_ID}`, `${SKILLS_ID}`, `${WORKS_ID}`, `${CONTACTS_ID}`];
export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper
          align="center"
          justify="space-between"
        >
          <Logo />
          <Nav list={menu} />
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
  opacity: 0.98;
  z-index: 1000;
  width: 100%;
  height: ${theme.sizes.headerHeight};
`;
