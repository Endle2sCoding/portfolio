import { AppButton } from "@/components/AppButton/AppButton";
import { AppLink } from "@/components/AppLink/AppLink";

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
        <div>
          <AppLink to={"/"}>Demo</AppLink>
          <AppLink to={"/"}>Code</AppLink>
        </div>
      </Info>
    </Work>
  );
};
const Work = styled.div`
  max-width: 540px;
  width: 100%;
  background: var(--bg-secondary);
`;

const ImgWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 260px;
`;

const Img = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
`;
const StyledButton = styled(AppButton)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
`;
const Info = styled.div`
  padding: 25px 20px;
`;
const Title = styled.h4`
  margin-bottom: 14px;
`;
const Text = styled.div`
  margin-bottom: 19px;
`;
