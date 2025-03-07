import styled from "styled-components";
import { WorkType } from "./WorksItem";
import { Title } from "@/components/Title/Title";

import workImg from "@/assets/img/Rectangle 14.png";
import { FlexWrapper } from "@/components/FlexWrapper/FlexWrapper";
import { Container } from "@/components/Container/Container";
import { WORKS_ID } from "@/layout/Header/Header";
import { theme } from "@/styles/Theme";
import CenterMode from "@/components/Slider/Slider";

const works: WorkType[] = [
  {
    img: workImg,
    title: "Social Network",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    demo: "https://github.com/Endle2sCoding",
    code: "https://github.com/Endle2sCoding",
  },
  {
    img: workImg,
    title: "Timer",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim",
    demo: "https://github.com/Endle2sCoding",
    code: "https://github.com/Endle2sCoding",
  },
  {
    img: workImg,
    title: "Social Network",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    demo: "https://github.com/Endle2sCoding",
    code: "https://github.com/Endle2sCoding",
  },
  {
    img: workImg,
    title: "Timer",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim",
    demo: "https://github.com/Endle2sCoding",
    code: "https://github.com/Endle2sCoding",
  },
  {
    img: workImg,
    title: "Social Network",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    demo: "https://github.com/Endle2sCoding",
    code: "https://github.com/Endle2sCoding",
  },
  {
    img: workImg,
    title: "Timer",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim",
    demo: "https://github.com/Endle2sCoding",
    code: "https://github.com/Endle2sCoding",
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

          <CenterMode works={works} />
        </FlexWrapper>
      </Container>
    </WorksStyled>
  );
};
const WorksStyled = styled.section``;
