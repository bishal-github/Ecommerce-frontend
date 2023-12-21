import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TopCategoriesCard from "./cards/top.categories.card";
import { useEffect, useState } from "react";
import { topCategoriesData } from "../assets/mokdata/mokdata";

export default function TopCategories() {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(topCategoriesData);
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
      breakpoint: { max: 1024, min: 552 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 552, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const CustomDot = ({ onClick, ...rest }) => {
    const { index, active } = rest;
    // Customize the rectangular button based on index and active state
    return (
      <button
        className={`custom-rectangle-button ${active ? "active" : "inactive"}`}
        onClick={() => onClick()}
        style={{
          width: "14px",
          height: "14px",
          borderRadius: "50%",
          border: "1px solid #FB2E86",
          marginRight: "4px",
          backgroundColor: active ? "#FB2E86" : "transparent",
        }}
      ></button>
    );
  };
  return (
    <div className="w-full flex flex-col mb-[178px]">
      <h1 className="text-[#1A0B5B] font-josef text-[42px] font-[500] text-center mb-[56px]">
        Top Categories
      </h1>
      <div
        className="flex flex-row flex-wrap max-w-[1177px] w-full mx-auto justify-between"
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
          className="flex items-center mx-auto pl-5 lg:pl-3"
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
          arrows={false}
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
                <TopCategoriesCard data={item} />
              </div>
            ))}
        </Carousel>
      </div>
    </div>
  );
}
