import { WorksItem, WorkType } from "@/layout/sections/Works/WorksItem";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const responsive = {
  0: { items: 1 },
  960: { items: 3 },
  1024: { items: 3 },
};

export const Carousel = ({ works }: { works: WorkType[] }) => {
  return (
    <AliceCarousel
      infinite
      mouseTracking
      items={works.map((w, i) => (
        <WorksItem
          w={w}
          key={w.title + i}
        />
      ))}
      responsive={responsive}
      controlsStrategy="alternate"
    />
  );
};
