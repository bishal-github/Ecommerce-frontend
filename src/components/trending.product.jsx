import React from "react";
import sofaImage from "../assets/images/sofa.png";

export default function TrendingProduct() {
  return (
    <div className="mt-[135px] w-full h-auto bg-[#F1F0FF] flex flex-col md:flex-row">
      <div className="flex-1 flex justify-center md:justify-end py-[15px]">
        <img src={sofaImage} alt="" />
      </div>
      <div className="flex-1 flex flex-col justify-center md:items-start items-center px-3 sm:px-0">
        <h1 className="text-[#151875] font-josef text-[35px] font-[500] mb-[29px] max-w-[500px]">
          Unique Features Of leatest & Trending Poducts
        </h1>
        <div className="flex flex-col gap-[13px]">
          <div className="flex flex-row gap-[17px] items-center">
            <p className="bg-[#F52B70] w-[11px] h-[11px] rounded-full"></p>
            <p className="text-[16px] font-[500] font-lato">
              All frames constructed with hardwood solids and laminates
            </p>
          </div>
          <div className="flex flex-row gap-[17px] items-center">
            <p className="bg-[#2B2BF5] w-[11px] h-[11px] rounded-full"></p>
            <p className="text-[16px] font-[500] font-lato max-w-[450px]">
              Reinforced with double wood dowels, glue, screw - nails corner
              blocks and machine nails
            </p>
          </div>
          <div className="flex flex-row gap-[17px] items-center">
            <p className="bg-[#2BF5CC] w-[11px] h-[11px] rounded-full"></p>
            <p className="text-[16px] font-[500] font-lato">
              Arms, backs and seats are structurally reinforced
            </p>
          </div>
        </div>
        <div className="flex flex-row mt-[38px] gap-[50px] md:gap-[19px] items-center">
          <button className="bg-[#FB2E86] rounded-[2px] px-[24px] py-[14px] text-[#FFF] text-[17px] font-[600] font-josef italic">
            Add To Cart
          </button>
          <div>
            <p className="font-josef text-[#151875] italic font-[600] text-[14px]">
              B&B Italian Sofa{" "}
            </p>
            <p className="font-lato text-[14px] font-[400] text-[#151875]">
              $32.00
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
