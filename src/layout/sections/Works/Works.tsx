import styled from "styled-components";
import { WorkType } from "./WorksItem";
import { Title } from "@/components/Title/Title";

import workImg from "@/assets/img/Rectangle 14.png";
import { FlexWrapper } from "@/components/FlexWrapper/FlexWrapper";
import { Container } from "@/components/Container/Container";
import { WORKS_ID } from "@/layout/Header/Header";
import { Carousel } from "@/components/Slider/Slider";
import { theme } from "@/styles/Theme";

const works: WorkType[] = [
  {
    img: workImg,
    title: "Todolist",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et",
    demo: "https://github.com/Endle2sCoding",
    code: "https://github.com/Endle2sCoding/todolist",
  },
  {
    img: workImg,
    title: "sneakers store",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do ",
    demo: "https://github.com/Endle2sCoding",
    code: "https://github.com/Endle2sCoding/sneakers-store",
  },
  {
    img: workImg,
    title: "Crypto",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et ",
    demo: "https://github.com/Endle2sCoding",
    code: "https://github.com/Endle2sCoding/crypto",
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
          <Carousel works={works} />
        </FlexWrapper>
      </Container>
    </WorksStyled>
  );
};
const WorksStyled = styled.section`
  .alice-carousel__stage {
  }
  .alice-carousel__dot {
    margin-top: 60px;
  }
  .alice-carousel__dots-item {
    padding: 7px;
    transition: all linear ${theme.delay.transitionDelay};
    &:hover {
      background: ${theme.colors.accentedColor};
    }
  }
  .alice-carousel__dots-item:not(.__custom).__active {
    background: ${theme.colors.accentedColor};
  }
  .alice-carousel__dots-item:not(.__custom).__active {
    height: 14px;
    width: 30px;
    border-radius: 25px;
  }
  .alice-carousel__next-btn-item,
  .alice-carousel__prev-btn-item {
    display: none;
  }
`;
