import { AppLink } from "@/components/AppLink/AppLink";
import { Container } from "@/components/Container/Container";
import { FlexWrapper } from "@/components/FlexWrapper/FlexWrapper";
import { Icon } from "@/components/Icon/Icon";
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
              <li key={item + i}>
                <AppLink to="/">
                  <Icon
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    iconId={item}
                  />
                </AppLink>
              </li>
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
const StyledFooter = styled.footer``;
const Name = styled.span``;
const Copyright = styled.p`
  color: rgba(255, 255, 255, 0.5);
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0%;
  text-align: center;
`;
