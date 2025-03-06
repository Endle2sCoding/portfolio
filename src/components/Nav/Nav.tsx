import { theme } from "@/styles/Theme";
import styled from "styled-components";

export const Nav = ({
  className,
  isOpen,
  list,
  setIsOpen,
}: {
  list: string[];
  className?: string;
  isOpen: boolean;
  setIsOpen: (arg: boolean) => void;
}) => {
  return (
    <StyledNav
      $isOpen={isOpen}
      className={className}
    >
      <List $isOpen={isOpen}>
        {list.map((l, i) => (
          <Item
            onClick={() => setIsOpen(false)}
            key={l + i}
          >
            <Link href={`#${l}`}>{l}</Link>
          </Item>
        ))}
      </List>
    </StyledNav>
  );
};
const StyledNav = styled.nav<{ $isOpen: boolean }>`
  @media ${theme.media.tablet} {
    display: ${(props) => (props.$isOpen ? "flex" : "none")};
  }
`;
const List = styled.ul<{ $isOpen: boolean }>`
  display: flex;
  justify-content: space-between;
  align-content: center;
  position: fixed;

  transition: all linear 2s;
  @media ${theme.media.tablet} {
    transition: all linear 2s;
    z-index: 10000;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: ${(props) => (props.$isOpen ? "flex" : "none")};
    background: ${theme.colors.bgSecondary};
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
`;
const Item = styled.li`
  @media ${theme.media.tablet} {
    width: 80%;
    text-align: center;
    height: calc(100vh / 12);
  }
  @media ${theme.media.tablet} {
    width: 70%;
  }
`;
const Link = styled.a`
  padding: 10px 20px;
  font-family: ${theme.fonts.josefinsansMedium};
  font-size: ${theme.fonts.fontSizeXl};
  color: ${theme.colors.primaryColor};
  transition: color linear ${theme.delay.transitionDelay};
  &:hover {
    color: ${theme.colors.accentedColor};
  }
  @media ${theme.media.tablet} {
    height: 100%;
    width: 100%;
    display: flex;
    align-content: center;
    justify-content: center;
  }
`;
