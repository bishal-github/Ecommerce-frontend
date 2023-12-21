import React from "react";
import tredChair from "../../assets/images/trending-chair.png";

export default function TrendingProductCard(props) {
  const { id, name, image, previousPrice, latestPrice } = props?.data;
  return (
    <div className="max-w-[270px] max-h-[351px] rounded-lg bg-[#FFFFFF] dark:border-gray-700 shadow-md flex flex-col items-center p-[12px]">
      <div className="bg-[#F6F7FB] w-full p-6">
        <img
          className="max-w-[171px] h-auto rounded-t-lg mx-auto"
          src={image}
          alt=""
        />
      </div>
      <div className="p-5 w-full flex flex-col items-center justify-center gap-2 ">
        <h5 className=" text-[16px] text-[#151875] font-[700] font-lato">
          {name}
        </h5>
        <div className="flex flex-row gap-[12px] items-center">
          <p className="text-[#151875] text-[14px] font-[400] font-josef">
            {latestPrice}
          </p>
          <p className=" text-[12px] text-[#1518754D] font-josef font-[400] ">
            {previousPrice}
          </p>
        </div>
      </div>
    </div>
  );
}
