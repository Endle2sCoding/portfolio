import { AppButton } from "@/components/AppButton/AppButton";
import { AppLink } from "@/components/AppLink/AppLink";
import { theme } from "@/styles/Theme";

import styled from "styled-components";
export type WorkType = {
  img: string;
  title: string;
  text: string;
  demo: string;
  code: string;
};

export const WorksItem = ({ w }: { w: WorkType }) => {
  return (
    <Work>
      <ImgWrapper>
        <StyledButton variant="filed">{`view project`}</StyledButton>
        <Img
          src={w.img}
          alt={w.title}
        />
      </ImgWrapper>
      <Info>
        <Title>{w.title}</Title>
        <Text>{w.text}</Text>
        <Links>
          <AppLink
            variant={"underlined"}
            to={"/"}
          >
            Demo
          </AppLink>
          <AppLink
            variant={"underlined"}
            to={"/"}
          >
            Code
          </AppLink>
        </Links>
      </Info>
    </Work>
  );
};
const Work = styled.div`
  max-width: 540px;
  width: 49%;
  background: ${theme.colors.bgSecondary};
`;

const ImgWrapper = styled.div`
  position: relative;
  z-index: 0;
  width: 100%;
  max-height: 260px;
  cursor: pointer;

  transition: opacity linear ${theme.delay.transitionDelay};
  &:before {
    transition: opacity linear ${theme.delay.transitionDelay};
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

  &:hover {
    &:before {
      opacity: 1;
    }
    button {
      opacity: 1;
    }
  }
`;

const Img = styled.img`
  width: 100%;
  max-height: 260px;
  object-fit: cover;
`;
const StyledButton = styled(AppButton)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  opacity: 0;

  transition: opacity background linear ${theme.delay.transitionDelay};
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
`;
