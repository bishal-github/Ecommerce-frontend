import React from "react";
import clockImg from "../../assets/images/watch.png";
import boxImg from "../../assets/images/box.png";
import ch1Img from "../../assets/images/c1.png";
import ch2Img from "../../assets/images/c2.png";
import ch3Img from "../../assets/images/c3.png";

export default function TrendingProductCard2() {
  return (
    <div className="mt-[39px] flex flex-row max-w-[1200px] w-full flex-wrap justify-evenly gap-[35px] xl:justify-between mx-auto">
      <div className="max-w-[420px] h-[270px] rounded-lg bg-[#FFF6FB] dark:border-gray-700 shadow-md flex flex-col  pt-[34px] pl-[25px] pr-[100px] relative">
        <h1 className="text-[#151875] text-[26px] font-[600] font-josef italic">
          23% off in all products
        </h1>
        <p className="text-[#FB2E86] text-[16px] font-[600] font-lato underline">
          Shop Now
        </p>
        <img
          className="absolute right-0 bottom-0 max-w-[213px]"
          src={clockImg}
          alt=""
        />
      </div>
      <div className=" only:max-w-[420px] h-[270px] rounded-lg bg-[#FFF6FB] dark:border-gray-700 shadow-md flex flex-col pr-[100px]  pt-[34px] pl-[25px] relative">
        <h1 className="text-[#151875] text-[26px] font-[600] font-josef italic">
          23% off in all products
        </h1>
        <p className="text-[#FB2E86] text-[16px] font-[600] font-lato underline">
          View Collection
        </p>
        <img
          className="absolute max-w-[312px] right-1 bottom-0"
          src={boxImg}
          alt=""
        />
      </div>
      <div className="max-w-[267px] h-[270px] flex flex-col justify-between">
        <div className="flex flex-row items-center gap-[9px]">
          <img src={ch1Img} className="w-[64px] h-[71px] bg-[#F5F6F8]" alt="" />
          <div className="flex flex-col">
            <p className="text-[#151875] text-[16px] font-[600] font-josef italic">
              Executive Seat chair
            </p>
            <p className="text-[#151875] text-[12px] font-[400] font-josef">
              $32.00
            </p>
          </div>
        </div>
        <div className="flex flex-row items-center gap-[9px]">
          <img src={ch2Img} className="w-[64px] h-[71px] bg-[#F5F6F8]" alt="" />
          <div className="flex flex-col">
            <p className="text-[#151875] text-[16px] font-[600] font-josef italic">
              Executive Seat chair
            </p>
            <p className="text-[#151875] text-[12px] font-[400] font-josef">
              $32.00
            </p>
          </div>
        </div>
        <div className="flex flex-row items-center gap-[9px]">
          <img src={ch3Img} className="w-[64px] h-[71px] bg-[#F5F6F8]" alt="" />
          <div className="flex flex-col">
            <p className="text-[#151875] text-[16px] font-[600] font-josef italic">
              Executive Seat chair
            </p>
            <p className="text-[#151875] text-[12px] font-[400] font-josef">
              $32.00
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
