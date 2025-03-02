import styled from "styled-components";
import { WorksItem, WorkType } from "./WorksItem";
import { Title } from "@/components/Title/Title";

import workImg from "@/assets/img/Rectangle 14.png";
import { FlexWrapper } from "@/components/FlexWrapper/FlexWrapper";
import { Container } from "@/components/Container/Container";
import { WORKS_ID } from "@/layout/Header/Header";
import { theme } from "@/styles/Theme";

const works: WorkType[] = [
  {
    img: workImg,
    title: "Social Network",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    demo: "",
    code: "",
  },
  {
    img: workImg,
    title: "Timer",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim",
    demo: "",
    code: "",
  },
];
export const Works = () => {
  return (
    <WorksStyled id={`${WORKS_ID}`}>
      <Container>
        <FlexWrapper
          directioin="column"
          align="center"
          justify="space-between"
        >
          <Title>Works</Title>
          <WorksItem w={works[0]} />
          {/* {works.map((w, i) => (
              <WorksItem
                key={w.title + i}
                w={w}
              />
            ))} */}
          <Pagination>
            <span></span>
            <span></span>
            <span></span>
          </Pagination>
        </FlexWrapper>
      </Container>
    </WorksStyled>
  );
};
const WorksStyled = styled.section``;
const Pagination = styled.div`
  span {
    content: "";
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin: 5px;
    background: ${theme.colors.primaryColor};
  }
`;
