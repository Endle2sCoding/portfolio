import { AppLink } from "@/components/AppLink/AppLink";

import { useTranslation } from "react-i18next";

import styled from "styled-components";
export type WorkType = {
  img: string;
  title: string;
  text: string;
  demo: string;
  code: string;
};
// const projects: Array<{
//   imgSrc: string;
//   title: string;
//   desc: string;
//   github: string;
//   link: string;
// }> = [{ imgSrc: "", title: "", desc: "", github: "", link: "" }];

export const WorksItem = ({ w }: { w: WorkType }) => {
  const { t } = useTranslation();
  return (
    <Work>
      <ImgWrapper>
        <AppLink
          target="_blank"
          to={w.demo}
          variant="filled"
        >
          {t(`view project`)}
        </AppLink>
        <Img
          src={w.img}
          alt={w.title}
        />
      </ImgWrapper>
      <Info>
        <Title>{t(w.title)}</Title>
        <Text>{t(w.text)}</Text>
        <Links>
          <AppLink
            target="_blank"
            variant={"underlined"}
            to={w.demo}
          >
            {t("Demo")}
          </AppLink>
          <AppLink
            target="_blank"
            variant={"underlined"}
            to={w.code}
          >
            {t("Code")}
          </AppLink>
        </Links>
      </Info>
    </Work>
  );
};
const Work = styled.div`
  width: 90%;
  margin: 0 auto;
  background: ${({ theme }) => theme.colors.bgSecondary};
`;

const ImgWrapper = styled.div`
  position: relative;
  z-index: 0;
  width: 100%;
  max-height: 260px;
  cursor: pointer;

  transition: opacity linear ${({ theme }) => theme.delay.transitionDelay};
  &:before {
    transition: opacity linear ${({ theme }) => theme.delay.transitionDelay};
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    backdrop-filter: blur(8px);
    background: rgba(0, 0, 0, 0.01);

    opacity: 0;
  }
  a {
    transition: opacity linear ${({ theme }) => theme.delay.transitionDelay};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
  }
  &:hover {
    transition: opacity linear ${({ theme }) => theme.delay.transitionDelay};
    &:before {
      opacity: 1;
    }
    a {
      transition: opacity linear ${({ theme }) => theme.delay.transitionDelay};
      opacity: 1;
    }
  }
`;

const Img = styled.img`
  width: 100%;
  max-height: 260px;
  object-fit: cover;
`;

const Links = styled.div`
  display: flex;
  gap: 20px;
`;
const Info = styled.div`
  padding: 25px 20px;
`;
const Title = styled.h4`
  margin-bottom: 14px;
  text-transform: capitalize;
`;
const Text = styled.div`
  margin-bottom: 19px;
  word-wrap: break-word;
  word-break: break-all;
`;
