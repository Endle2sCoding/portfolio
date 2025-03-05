import { FlexWrapper } from "@/components/FlexWrapper/FlexWrapper";
import { Icon } from "@/components/Icon/Icon";
import { Title } from "@/components/Title/Title";
import { TESTIMONY_ID } from "@/layout/Header/Header";
import { theme } from "@/styles/Theme";
import styled from "styled-components";
const reviews = [
  {
    name: "IVAN IVANOV",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
];

export const Testimony = () => {
  return (
    <StyledTestimony id={`${TESTIMONY_ID}`}>
      <FlexWrapper directioin="column">
        <Title>Testimony</Title>
        <FlexWrapper
          directioin="column"
          align="center"
        >
          {reviews.map((r, i) => (
            <ListItem key={r.name + i}>
              <Icon
                iconId="quote"
                variant="bgSquare"
              />
              <p>{r.text}</p>
              <Name>@{r.name}</Name>
            </ListItem>
          ))}
          <Pagination>
            <span></span>
            <span></span>
            <span></span>
          </Pagination>
        </FlexWrapper>
      </FlexWrapper>
    </StyledTestimony>
  );
};
const StyledTestimony = styled.section`
  text-align: center;
`;
const ListItem = styled.div`
  max-width: 500px;
  p {
    margin: 40px 0 20px;
  }
`;
const Name = styled.span`
  font-style: ${theme.fonts.josefinsansSemibold};
`;
const Pagination = styled.div`
  margin-top: 35px;
  span {
    content: "";
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin: 5px;
    background: ${theme.colors.primaryColor};

    cursor: pointer;
    &:hover {
      background: ${theme.colors.accentedColor};
    }
  }
`;
