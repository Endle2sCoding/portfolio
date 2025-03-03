import { AppLink } from "@/components/AppLink/AppLink";
import { Container } from "@/components/Container/Container";
import { FlexWrapper } from "@/components/FlexWrapper/FlexWrapper";
import { Icon } from "@/components/Icon/Icon";
import { theme } from "@/styles/Theme";
import styled from "styled-components";
const listIcon = ["instagram", "telegram", "vk", "linkedin"];

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <FlexWrapper
          directioin="column"
          align="center"
        >
          <Name>Viacheslav</Name>
          <ul>
            {listIcon.map((item, i) => (
              <Item key={item + i}>
                <AppLink to="/">
                  <Icon
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    iconId={item}
                  />
                </AppLink>
              </Item>
            ))}
          </ul>
          <Copyright>
            © {new Date().getFullYear()}, All Rights Reserved.
          </Copyright>
        </FlexWrapper>
      </Container>
    </StyledFooter>
  );
};
const StyledFooter = styled.footer`
  padding: 40px 0;
  ul {
    display: flex;
    padding: 30px 0;
  }
`;
const Name = styled.span``;
const Item = styled.li`
  background: ${theme.colors.bgSecondary};
  padding: 10px;
  margin: 0 10px;
  border-radius: 50%;
  transition: all linear ${theme.delay.transitionDelay};
  &:hover {
    transform: translateY(-4px);
    background: ${theme.colors.accentedColor};
    a {
      svg {
        fill: ${theme.colors.bgPrimary};
      }
    }
  }
`;
const Copyright = styled.p`
  color: rgba(255, 255, 255, 0.5);
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0%;
  text-align: center;
`;
