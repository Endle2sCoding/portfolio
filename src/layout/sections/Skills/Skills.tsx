import { FlexWrapper } from "@/components/FlexWrapper/FlexWrapper";
import { Title } from "@/components/Title/Title";
import styled from "styled-components";
import { SkillsItem, SkillsItemType } from "./SkillsItem";
import { Container } from "@/components/Container/Container";
import { SKILLS_ID } from "@/layout/Header/Header";

const skills: SkillsItemType[] = [
  {
    iconId: "code",
    title: "html5",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
  },
  {
    iconId: "css",
    title: "css3",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
  },
  {
    iconId: "react",
    title: "REACT",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
  },
  {
    iconId: "typescript",
    title: "typescript",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
  },
  {
    iconId: "styled",
    title: "styled components",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
  },
  {
    iconId: "figma",
    title: "WEB DESIgN  ",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
  },
];

export const Skills = () => {
  return (
    <StyledSection id={`${SKILLS_ID}`}>
      <Container>
        <FlexWrapper
          wrap="wrap"
          directioin="column"
          align="center"
        >
          <Title>Skills</Title>
          <FlexWrapper
            wrap="wrap"
            align="center"
          >
            {skills.map((s, i) => (
              <SkillsItem
                key={s.iconId + i}
                iconId={s.iconId}
                title={s.title}
                text={s.text}
              />
            ))}
          </FlexWrapper>
        </FlexWrapper>
      </Container>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  min-height: 600px;
`;
