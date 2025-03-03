import bannerPhoto from "@/assets/img/bannerPhoto.jpg";
import { Container } from "@/components/Container/Container";
import { FlexWrapper } from "@/components/FlexWrapper/FlexWrapper";
import { HOME_ID } from "@/layout/Header/Header";
import { theme } from "@/styles/Theme";
import styled from "styled-components";
export const Banner = () => {
  return (
    <StyledBanner id={`${HOME_ID}`}>
      <Container>
        <FlexWrapper
          wrap="wrap"
          justify="space-around"
          align="center"
        >
          <div>
            <SupTitle>Hi There</SupTitle>
            <Name>
              I am <span>Viacheslav</span>
            </Name>
            <MainTitle>A Web Developer</MainTitle>
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

const StyledBanner = styled.section``;
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
  z-index: 0;
  &:after {
    content: "";
    position: absolute;
    z-index: -1;
    width: 384px;
    height: 470px;
    border: 5px solid ${theme.colors.accentedColor};
    left: 24px;
    top: -24px;
  }
`;
const SupTitle = styled.h4`
  text-align: left;
`;

const Name = styled.h2`
  font-size: ${theme.fonts.fontSize6xl};
  font-family: ${theme.fonts.josefinsansBold};
  letter-spacing: 5%;
  margin: 10px 40px 10px 0;
  span {
    position: relative;
    z-index: 0;
    &:before {
      content: "";
      position: absolute;
      z-index: -1;
      bottom: 4px;
      width: 100%;
      height: 12px;
      background: ${theme.colors.bgGradient};
    }
  }
`;

const MainTitle = styled.h1`
  font-size: ${theme.fonts.fontSize2xl};
  text-align: left;
  color: transparent;

  background: ${theme.colors.bgGradient};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;
