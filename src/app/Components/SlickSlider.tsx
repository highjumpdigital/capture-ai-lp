// components/ScrollSlider.tsx
import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SimpleSlider = () => {
  const sliderRef = useRef<Slider | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container || !sliderRef.current) return;

    let isScrolling = false;

    const handleScroll = () => {
      if (isScrolling) return;
      isScrolling = true;

      const scrollOffset = container.scrollTop; // Get the vertical scroll offset
      const slideHeight = 500; // Height of each slide
      const slideIndex = Math.round(scrollOffset / slideHeight); // Calculate the slide index

      if (sliderRef.current) {
        sliderRef.current.slickGoTo(slideIndex); // Move to the calculated slide
      }
      

      setTimeout(() => {
        isScrolling = false;
      }, 100); // Adjust delay for smooth scrolling
    };

    container.addEventListener("scroll", handleScroll);

    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    arrows: false,
  };

  return (
    <div
      ref={containerRef}
      className="h-[500px] w-[300px] overflow-y-scroll mx-auto"
      style={{ scrollSnapType: "y mandatory", scrollBehavior: "smooth" }}
    >
      <Slider {...settings} ref={sliderRef}>
        <div className="h-[300px] w-full bg-red-500 text-white flex items-center justify-center">
          Slide 1
        </div>
        <div className="h-[300px] w-full bg-blue-500 text-white flex items-center justify-center">
          Slide 2
        </div>
        <div className="h-[300px] w-full bg-green-500 text-white flex items-center justify-center">
          Slide 3
        </div>
        <div className="h-[300px] w-full bg-yellow-500 text-white flex items-center justify-center">
          Slide 4
        </div>
      </Slider>
    </div>
  );
};

export default SimpleSlider;
