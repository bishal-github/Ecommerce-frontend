import React from "react";
import sofaSlidImg from "../../assets/images/sofa-slider.png";
import lampslidImg from "../../assets/images/lamp.png";

export default function CarouselCardComponent() {
  return (
    <div className="w-full flex flex-row bg-[#F2F0FF] px-2 lg:px-0 py-4 md:py-0">
      <div className="flex-1 flex flex-col items-end justify-center relative">
        <div className=" max-w-[400px] max-h-[400px] w-full h-full absolute top-0 left-[-5%] hidden lg:block">
          <img
            src={lampslidImg}
            className=" h-full w-full object-cover "
            alt=""
          />
        </div>
        <div className=" flex flex-col items-start relative ">
          <p
            className="w-[15px] h-[15px] bg-[#FB2E86] rounded-full absolute bottom-3 left-[-176px] hidden lg:block"
            // style={{
            //   display: "none",
            //   "@media (min-width: 1024px)": { display: "block" },
            // }}
          ></p>

          <p className="text-[#FB2E86] font-[700] font-lato text-[16px]">
            Best Furniture For Your Castle....
          </p>
          <h1 className="text-[30px] sm:text-[53px] text-[500] max-w-[618px] text-[#000] font-josef leading-[132%] my-[12px] ">
            New Furniture Collection Trends in 2023
          </h1>
          <p className="text-[#8A8FB9] font-[700] max-w-[559px] font-lato text-[16px] mb-[27px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
            est adipiscing in phasellus non in justo.
          </p>
          <button className="bg-[#FB2E86] text-[12px] sm:text-[17px] font-[600] font-josef text-[#FFF] py-[12px] sm:py-[17px] italic px-[25px] sm:px-[35px]">
            Shop Now
          </button>
        </div>
      </div>
      <div className="sm:flex-1 flex items-start">
        <div className="hidden max-w-[706px] sm:flex">
          <img
            src={sofaSlidImg}
            className="py-[36px] w-full"
            // style={{
            //   display: "none",
            //   "@media (min-width: 640px)": { display: "block" },
            // }}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
