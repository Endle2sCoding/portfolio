import bannerPhoto from "@/assets/img/bannerPhoto.jpg";
import { Container } from "@/components/Container/Container";

import { HOME_ID } from "@/layout/Header/Header";
import { theme } from "@/styles/Theme";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import Tilt from "react-parallax-tilt";
export const Banner = () => {
  return (
    <StyledBanner id={`${HOME_ID}`}>
      <Container>
        <ContentWrapper>
          <Content>
            <SupTitle>Hi There</SupTitle>
            <Name>
              I am <span>Viacheslav</span>
            </Name>
            <MainTitle>
              <p>A Web Developer</p>
              <p>A Fronted Developer</p>
              <Typewriter
                options={{
                  strings: ["A Web Developer", "A Fronted Developer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </MainTitle>
          </Content>
          <Tilt
            className="parallax-effect-img"
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            perspective={800}
            transitionSpeed={1500}
            scale={1.1}
            gyroscope={true}
          >
            <PhotoWrapper>
              <Photo
                src={bannerPhoto}
                alt="photo"
              />
            </PhotoWrapper>
          </Tilt>
        </ContentWrapper>
      </Container>
    </StyledBanner>
  );
};

const StyledBanner = styled.section`
  min-height: 60vh;
  display: flex;
  align-items: center;
  @media ${theme.media.tablet} {
    div {
      flex-direction: column;
    }
    @media ${theme.media.eReaders} {
      padding-bottom: 100px;
    }
  }
`;
const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media ${theme.media.tablet} {
    flex-direction: column;
    justify-content: center;
    gap: 65px;
    margin-left: 20px;
  }
`;

const PhotoWrapper = styled.div`
  width: 350px;
  height: 430px;
  position: relative;
  z-index: 0;
  transform: translateX(-24px);
  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    width: 350px;
    height: 470px;
    left: 24px;
    top: -20px;
    border: 5px solid ${theme.colors.accentedColor};
  }
  @media ${theme.media.laptop} {
    width: 300px;
    height: 380px;
    &::before {
      width: 300px;
      height: 420px;
    }
  }
  @media ${theme.media.eReaders} {
    width: 280px;
    height: 360px;
    &::before {
      width: 280px;
      height: 400px;
    }
  }
  @media ${theme.media.smartphone} {
    width: 240px;
    height: 320px;
    &::before {
      width: 240px;
      height: 360px;
    }
  }
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
  @media ${theme.media.laptop} {
    width: 300px;
    height: 380px;
  }
  @media ${theme.media.eReaders} {
    width: 280px;
    height: 360px;
  }
  @media ${theme.media.eReaders} {
    width: 280px;
    height: 360px;
  }
  @media ${theme.media.smartphone} {
    width: 240px;
    height: 320px;
  }
`;
const Content = styled.div`
  text-align: left;
`;
const SupTitle = styled.h4`
  text-align: left;
`;

const Name = styled.h2`
  font-size: ${theme.fonts.fontSize6xl48};
  font-family: ${theme.fonts.josefinsansBold};
  letter-spacing: 5%;
  margin: 10px 0;
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

  @media ${theme.media.laptop} {
    font-size: ${theme.fonts.fontSize5xl40};
  }
  @media ${theme.media.smartphone} {
    font-size: ${theme.fonts.fontSize4xl36};
  }
`;

const MainTitle = styled.h1`
  p {
    display: none;
  }
  font-size: ${theme.fonts.fontSize2xl28};
  text-align: left;
  color: transparent;

  background: ${theme.colors.bgGradient};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  @media ${theme.media.smartphone} {
    font-size: ${theme.fonts.fontSizeXl24};
  }
`;
