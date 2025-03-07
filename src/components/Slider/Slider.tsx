import { WorksItem, WorkType } from "@/layout/sections/Works/WorksItem";
import { theme } from "@/styles/Theme";
import Slider from "react-slick";
import styled from "styled-components";

function SimpleSlider({ works }: { works: WorkType[] }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <StyledSlider className="slider-container">
      <Slider {...settings}>
        {works.map((w, i) => (
          <WorksItem
            key={w.title + i}
            w={w}
          />
        ))}
      </Slider>
    </StyledSlider>
  );
}

export default SimpleSlider;
const StyledSlider = styled.div`
  max-width: 1200px;
  width: 100%;
  padding: 0 30px;
  .slick-dots {
    bottom: -35px;
    li {
      button {
        &:before {
          background: ${theme.colors.accentedColor};
          border-radius: 50%;
          color: transparent;
        }
      }
    }
  }
`;
