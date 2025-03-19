import styled from "styled-components";
import { WorkType } from "./WorksItem";
import { Title } from "@/components/Title/Title";

// import workImg from "@/assets/images/Rectangle 14.png";
import todolistImg from "@/assets/images/works/todolist.png";
import cryptoImg from "@/assets/images/works/crypto.png";
import sneakersImg from "@/assets/images/works/sneakers.png";
import { FlexWrapper } from "@/components/FlexWrapper/FlexWrapper";
import { Container } from "@/components/Container/Container";
import { WORKS_ID } from "@/layout/Header/Header";
import { Carousel } from "@/components/Slider/Slider";

import { useTranslation } from "react-i18next";

const works: WorkType[] = [
  {
    img: todolistImg,
    title: "Todolist",
    text: "Todolist for everyday use",
    // demo: "https://endle2scoding.github.io/portfolio/todolist",
    demo: "https://github.com/Endle2sCoding/todolist",
    code: "https://github.com/Endle2sCoding/todolist",
  },
  {
    img: sneakersImg,
    title: "sneakers store",
    text: "The sneaker store is one of the first projects at VUE",
    demo: "https://sneakers-store-kk25.vercel.app/",
    code: "https://github.com/Endle2sCoding/sneakers-store",
  },
  {
    img: cryptoImg,
    title: "Crypto",
    text: "Project to control your crypto package",
    demo: "https://crypto-xi-rust.vercel.app/",
    code: "https://github.com/Endle2sCoding/crypto",
  },
];
export const Works = () => {
  const { t } = useTranslation();

  return (
    <WorksStyled id={`${WORKS_ID}`}>
      <Container>
        <FlexWrapper
          directioin="column"
          align="center"
          justify="space-between"
        >
          <Title>{t(`${WORKS_ID}`)}</Title>
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
    transition: all linear ${({ theme }) => theme.delay.transitionDelay};
    &:hover {
      background: ${({ theme }) => theme.colors.accentedColor};
    }
  }
  .alice-carousel__dots-item:not(.__custom).__active {
    background: ${({ theme }) => theme.colors.accentedColor};
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
