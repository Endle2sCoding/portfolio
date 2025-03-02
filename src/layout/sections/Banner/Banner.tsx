import bannerPhoto from "@/assets/img/bannerPhoto.jpg";
import { Container } from "@/components/Container/Container";
import { FlexWrapper } from "@/components/FlexWrapper/FlexWrapper";
import { HOME_ID } from "@/layout/Header/Header";
import styled from "styled-components";
export const Banner = () => {
  return (
    <StyledBanner id={`${HOME_ID}`}>
      <Container>
        <FlexWrapper
          justify="space-around"
          align="center"
        >
          <div>
            <h4>Hi There</h4>
            <H2Title>I am Viacheslav</H2Title>
            <H1Title>A Web Developer. </H1Title>
          </div>
          <PhotoWrapper>
            <Photo
              src={bannerPhoto}
              alt="photo"
            />
          </PhotoWrapper>
        </FlexWrapper>
      </Container>
    </StyledBanner>
  );
};

const StyledBanner = styled.section`
  min-height: calc(60vh - var(--header-height));
`;
const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
`;
const PhotoWrapper = styled.div`
  width: 350px;
  height: 430px;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    width: 384px;
    height: 470px;
    border: 5px solid var(--accented-color);
    left: 24px;
    top: -24px;
  }
`;
const H1Title = styled.h1``;
const H2Title = styled.h2``;
