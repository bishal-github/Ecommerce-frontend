import React from "react";
import rectImage from "../assets/images/rectangle.png";

export default function LatestUpdate() {
  return (
    <div className="w-[100%] h-auto mx-auto relative flex">
      <img src={rectImage} className="w-full h-[470px]" alt="" />
      <div className="absolute top-0 left-0 w-full flex items-center justify-center flex-col h-full gap-[28px] p-2 sm:p-0">
        <h1 className=" top-[20px] text-[#151875] font-josef text-[35px] font-[500] max-w-[575px] text-center leading-[155%]">
          Get Leatest Update By Subscribe 0ur Newslater
        </h1>
        <button className=" bg-[#FB2E86] font-josef font-[400] text-[#FFF] px-[34px] py-[16px]">
          Shop Now
        </button>
      </div>
    </div>
  );
}
