import React from "react";
import { FaSearchPlus } from "react-icons/fa";
import { BsCart } from "react-icons/bs";
import { IoIosHeartEmpty } from "react-icons/io";
import bannerImage from "../../assets/images/banner.png";

export default function LatestProductCard(props) {
  const { id, name, image, latestPrice, previousPrice } = props?.data;
  return (
    <div className="w-[360px] h-[306px] rounded-lg bg-[#FFFFFF] dark:border-gray-700 flex flex-col items-center group group-hover:max-w-[370px] group-hover:max-h-[313px]">
      <div className="bg-[#F6F7FB] w-full h-[270px] p-6 relative group-hover:bg-[#FFFFFF]">
        <div className="absolute flex-col gap-[14px] left-[20px] bottom-[38px] hidden group-hover:flex">
          <BsCart />
          <IoIosHeartEmpty />
          <FaSearchPlus />
        </div>
        <img
          className="absolute left-[18px] top-[15px] hidden group-hover:flex"
          src={bannerImage}
          alt=""
        />
        <img
          className="max-w-[178px] h-auto rounded-t-lg mx-auto "
          src={image}
          alt=""
        />
      </div>
      <div className="p-5 w-full flex flex-row items-center justify-between ">
        <p className=" text-[16px] text-[#151875] font-[400] font-josef ">
          {name}
        </p>
        {/* <img className='w-[54px] h-[4px]' src={dotImg} alt="" /> */}
        <div className="flex flex-row gap-[8px] items-center">
          <p className=" text-[14px] text-[#151875] font-josef font-[400] ">
            {latestPrice}
          </p>
          <p className=" text-[12px] text-[#FB2448] font-josef font-[400] line-through">
            {previousPrice}
          </p>
        </div>
      </div>
    </div>
  );
}
