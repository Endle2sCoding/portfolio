import styled, { css } from "styled-components";
import { AppButton } from "../AppButton/AppButton";
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
            <AppButton
              onClick={() => {
                const element = document.getElementById(`${l.id}`);
                element?.scrollIntoView();
              }}
            >
              {l.title}
            </AppButton>
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
  /* gap: 40px; */
  button {
    padding: 10px 20px;
  }
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
