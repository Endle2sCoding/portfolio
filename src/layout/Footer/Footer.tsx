import { AppLink } from "@/components/AppLink/AppLink";
import { Container } from "@/components/Container/Container";
import { FlexWrapper } from "@/components/FlexWrapper/FlexWrapper";
import { Icon } from "@/components/Icon/Icon";

import styled from "styled-components";
const listIcon = [
  // "instagram",
  {
    iconId: "telegram",
    link: "https://t.me/EndlessCoding",
  },
  // { iconId: "vk", link: "" },
  {
    iconId: "linkedin",
    link: "https://www.linkedin.com/in/viacheslav-ivanov-784337354/",
  },
];

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
              <Item key={item.iconId + i}>
                <AppLink
                  target="_blank"
                  to={item.link}
                >
                  <Icon
                    variant="bgCircle"
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    iconId={item.iconId}
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
    gap: 20px;
  }
`;
const Name = styled.span``;
const Item = styled.li``;
const Copyright = styled.p`
  color: rgba(255, 255, 255, 0.5);
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0%;
  text-align: center;
`;
