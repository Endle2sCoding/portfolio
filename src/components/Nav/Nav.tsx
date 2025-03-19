import styled, { css } from "styled-components";

export const Nav = ({
  className,
  isOpen,
  list,
  setIsOpen,
}: {
  list: Array<{ title: string; id: string }>;
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
            key={l.title + i}
          >
            <Link href={`#${l.id}`}>{l.title}</Link>
          </Item>
        ))}
      </List>
    </StyledNav>
  );
};
const StyledNav = styled.nav<{ $isOpen: boolean }>`
  transition: all linear ${({ theme }) => theme.delay.transitionDelay};
  @media ${({ theme }) => theme.media.tablet} {
    display: "flex";
    position: fixed;
    transition: all linear ${({ theme }) => theme.delay.transitionDelay};
    z-index: 10000;
    left: 0;
    right: 0;
    height: 100vh;
    top: 0;
    transform: translateY(-100%);
    ${(props) =>
      props.$isOpen
        ? css`
            transform: translateY(0);
            transition: all linear ${({ theme }) => theme.delay.transitionDelay};
          `
        : css`
            transition: all linear ${({ theme }) => theme.delay.transitionDelay};
          `}
  }
`;
const List = styled.ul<{ $isOpen: boolean }>`
  display: flex;
  justify-content: space-between;
  align-content: center;
  text-transform: capitalize;
  @media ${({ theme }) => theme.media.tablet} {
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.colors.bgSecondary};
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
`;
const Item = styled.li`
  @media ${({ theme }) => theme.media.tablet} {
    width: 80%;
    text-align: center;
    height: calc(100vh / 12);
  }
  @media ${({ theme }) => theme.media.tablet} {
    width: 70%;
  }
`;
const Link = styled.a`
  padding: 10px 20px;
  /* font-family: ${({ theme }) => theme.fonts.josefinsansMedium}; */
  font-family: "Josefin Sans", sans-serif;
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizeXl24};
  color: ${({ theme }) => theme.colors.primaryColor};
  transition: color linear ${({ theme }) => theme.delay.transitionDelay};
  &:hover {
    color: ${({ theme }) => theme.colors.accentedColor};
  }
  @media ${({ theme }) => theme.media.tablet} {
    padding: 20px 40px;
    display: flex;
    align-content: center;
    justify-content: center;
  }
`;
