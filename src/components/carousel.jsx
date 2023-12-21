import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselCardComponent from "./cards/carousel.card.component";

function CarouselComponent() {
  const renderRectangularDot = (index, onClick, active) => (
    <div
      key={index}
      onClick={onClick}
      style={{
        marginTop: "-60px",
        width: "14px",
        height: "14px",
        zIndex: 10,
        border: "1px solid #FB2E86",
        backgroundColor: active ? "#FB2E86" : "white",
        cursor: "pointer",
        transform: "rotate(45deg)",
      }}
    />
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: (index, onClick) => renderRectangularDot(index, onClick),
  };
  return (
    <>
      <Slider {...settings} className="overflow-hidden">
        <div>
          <CarouselCardComponent />
        </div>
        <div>
          <CarouselCardComponent />
        </div>
        <div>
          <CarouselCardComponent />
        </div>
      </Slider>
    </>
  );
}

export default CarouselComponent;
