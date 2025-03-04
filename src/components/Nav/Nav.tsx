import { theme } from "@/styles/Theme";
import styled from "styled-components";

export const Nav = ({
  list,
  className,
}: {
  list: string[];
  className?: string;
}) => {
  return (
    <StyledNav className={className}>
      <ul>
        {list.map((l, i) => (
          <Item key={l + i}>
            <Link href={`#${l}`}>{l}</Link>
          </Item>
        ))}
      </ul>
    </StyledNav>
  );
};
const StyledNav = styled.div`
  ul {
    display: flex;
    justify-content: space-between;
    align-content: center;
  }
`;
const Item = styled.li``;
const Link = styled.a`
  padding: 10px 20px;
  font-family: ${theme.fonts.josefinsansMedium};
  font-size: ${theme.fonts.fontSizeXl};
  color: ${theme.colors.primaryColor};
  transition: color linear ${theme.delay.transitionDelay};
  &:hover {
    color: ${theme.colors.accentedColor};
  }
`;
