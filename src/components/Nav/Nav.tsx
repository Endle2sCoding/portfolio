import { theme } from "@/styles/Theme";
import styled, { css } from "styled-components";

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
  transition: all linear ${theme.delay.transitionDelay};
  @media ${theme.media.tablet} {
    display: "flex";
    position: fixed;
    transition: all linear ${theme.delay.transitionDelay};
    z-index: 10000;
    left: 0;
    right: 0;
    height: 100vh;
    top: -100vh;
    ${(props) =>
      props.$isOpen
        ? css`
            transform: translateY(100vh);
            transition: all linear ${theme.delay.transitionDelay};
          `
        : css`
            transition: all linear ${theme.delay.transitionDelay};
          `}
  }
`;
const List = styled.ul<{ $isOpen: boolean }>`
  display: flex;
  justify-content: space-between;
  align-content: center;
  @media ${theme.media.tablet} {
    width: 100%;
    height: 100%;
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
  font-size: ${theme.fonts.fontSizeXl24};
  color: ${theme.colors.primaryColor};
  transition: color linear ${theme.delay.transitionDelay};
  &:hover {
    color: ${theme.colors.accentedColor};
  }
  @media ${theme.media.tablet} {
    padding: 20px 40px;
    display: flex;
    align-content: center;
    justify-content: center;
  }
`;
