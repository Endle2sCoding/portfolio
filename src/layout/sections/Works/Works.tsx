import styled from "styled-components";
import { WorksItem, WorkType } from "./WorksItem";
import { Title } from "@/components/Title/Title";

import workImg from "@/assets/img/Rectangle 14.png";
import { FlexWrapper } from "@/components/FlexWrapper/FlexWrapper";
import { Container } from "@/components/Container/Container";
import { WORKS_ID } from "@/layout/Header/Header";
import { AppButton } from "@/components/AppButton/AppButton";

const variants = ["all", "lanfing", "react", "spa"];

const works: WorkType[] = [
  {
    img: workImg,
    title: "Social Network",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
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
          <Btns>
            {variants.map((v, i) => (
              <li key={v + i}>
                <AppButton variant="underlined">{v}</AppButton>
              </li>
            ))}
          </Btns>
          <FlexWrapper
            justify="space-between"
            wrap="wrap"
            align="flex-start"
          >
            {works.map((w, i) => (
              <WorksItem
                key={w.title + i}
                w={w}
              />
            ))}
          </FlexWrapper>
          {/* <Pagination>
            <span></span>
            <span></span>
            <span></span>
          </Pagination> */}
        </FlexWrapper>
      </Container>
    </WorksStyled>
  );
};
const WorksStyled = styled.section``;
const Btns = styled.ul`
  display: flex;
  align-items: center;
  gap: 30px;
  margin-bottom: 40px;
`;
// const Pagination = styled.div`
//   span {
//     content: "";
//     display: inline-block;
//     width: 10px;
//     height: 10px;
//     border-radius: 50%;
//     margin: 5px;
//     background: ${theme.colors.primaryColor};
//   }
// `;
