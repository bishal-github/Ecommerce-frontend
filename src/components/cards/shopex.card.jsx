import React from "react";
import truckImg from "../../assets/images/truck.png";

export default function ShopexCard(props) {
  const { id, image, title, paragraph } = props?.data;
  return (
    <div className="max-w-[270px] max-h-[320px] rounded-lg bg-[#FFF] dark:border-gray-700 shadow-md flex flex-col items-center">
      <div className="w-full pt-6">
        <img
          className="max-w-[178px] h-auto rounded-t-lg mx-auto "
          src={image}
          alt=""
        />
      </div>
      <div className="p-5 w-full flex flex-col items-center justify-center gap-2">
        <h5 className=" text-[22px] text-[#151875] font-[600] font-josef italic mt-[10px] mb-[10px]">
          {title}
        </h5>
        <p className=" text-[16px] text-[#1A0B5B4D] font-lato font-[700] flex flex-wrap text-center">
          {paragraph}
        </p>
      </div>
    </div>
  );
}
