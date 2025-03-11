import { FlexWrapper } from "@/components/FlexWrapper/FlexWrapper";
import { Title } from "@/components/Title/Title";
import styled from "styled-components";
import { SkillsItem, SkillsItemType } from "./SkillsItem";
import { Container } from "@/components/Container/Container";
import { SKILLS_ID } from "@/layout/Header/Header";
import { useTranslation } from "react-i18next";

const skills: SkillsItemType[] = [
  {
    iconId: "code",
    title: "html5",
  },
  {
    iconId: "css",
    title: "css3",
  },
  {
    iconId: "react",
    title: "REACT",
  },
  {
    iconId: "typescript",
    title: "typescript",
  },
  {
    iconId: "styled",
    title: "styled components",
  },
  {
    iconId: "figma",
    title: "WEB DESIgN  ",
  },
];

export const Skills = () => {
  const { t } = useTranslation();

  return (
    <StyledSection id={`${SKILLS_ID}`}>
      <Container>
        <FlexWrapper
          wrap="wrap"
          directioin="column"
          align="center"
        >
          <Title>{t(SKILLS_ID)}</Title>
          <FlexWrapper
            wrap="wrap"
            align="center"
          >
            {skills.map((s, i) => (
              <SkillsItem
                key={s.iconId + i}
                iconId={s.iconId}
                title={s.title}
              />
            ))}
          </FlexWrapper>
        </FlexWrapper>
      </Container>
    </StyledSection>
  );
};

const StyledSection = styled.section``;
