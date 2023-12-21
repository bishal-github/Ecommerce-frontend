import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import FeaturedProductCard from "./cards/featured.product.card";
import { useEffect, useState } from "react";
import { featuredProductsData } from "../assets/mokdata/mokdata";

export default function FeaturedProducts() {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(featuredProductsData);
  }, []);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1280 },
      items: 4,
      slidesToSlide: 1,
    },
    laptop: {
      breakpoint: { max: 1280, min: 1024 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 558 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 558, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const CustomDot = ({ onClick, ...rest }) => {
    const { index, active } = rest;
    return (
      <button
        className={`custom-rectangle-button ${active ? "active" : "inactive"}`}
        onClick={() => onClick()}
        style={{
          width: active ? "16px" : "12px",
          height: "4px",
          marginRight: "4px",
          backgroundColor: active ? "#FB2E86" : "#FEBAD7",
        }}
      ></button>
    );
  };

  return (
    <div className=" flex flex-col mt-[129px]  mx-auto pb-[128px]">
      <h1 className="text-[#1A0B5B] font-josef sans text-[42px] font-[500] text-center mb-[48px] w-full h-auto">
        Featured Products
      </h1>
      <div
        className=" max-w-[1177px] w-full mx-auto pl-[30px] sm:[pl-0]"
        style={{
          paddingBottom: "50px",
          position: "relative",
          top: "10px",
        }}
      >
        <Carousel
          additionalTransfrom={0}
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="container"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside
          responsive={responsive}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots
          sliderClass=""
          slidesToSlide={1}
          swipeable
          customDot={<CustomDot />}
        >
          {data &&
            data.map((item, index) => (
              <div key={index}>
                <FeaturedProductCard data={item} />
              </div>
            ))}
        </Carousel>
      </div>
    </div>
  );
}
