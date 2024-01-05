import React from "react";
import { BsVectorPen } from "react-icons/bs";
import { LuCalendarDays } from "react-icons/lu";

export default function LatestBlogCard(props) {
  const { name, image, date, title, paragraph } = props?.data;
  return (
    <div className="max-w-[370px] max-h-[493px] rounded-lg bg-[#FFFFFF] dark:border-gray-700 shadow-md flex flex-col items-center group">
      <div className="bg-[#F6F7FB] w-full">
        <img
          className="w-full h-auto rounded-t-lg mx-auto "
          src={image}
          alt=""
        />
      </div>
      <div className="pl-[19px] w-full flex flex-col items-start justify-center gap-2 ">
        <div className="flex flex-row gap-[29px] mt-[19px]">
          <div className="flex items-center gap-2 text-[#151875] text-[14px] font-[400] font-josef">
            <BsVectorPen className="text-[#FB2E86]" />
            <p>{name}</p>
          </div>
          <div className="flex items-center gap-2 text-[#151875] text-[14px] font-[400] font-josef">
            <LuCalendarDays className="text-[#FFA454]" />
            <p>{date}</p>
          </div>
        </div>
        <h5 className=" text-[18px] text-[#151875] font-[500] font-josef mt-[31px] mb-[17px] group-hover:text-[#FB2E86]">
          {title}
        </h5>

        <p className=" text-[16px] text-[#72718F] font-lato font-[400]">
          {paragraph}
        </p>
        <p className="text-[16px] text-[#151875] font-lato font-[400] group-hover:text-[#FB2E86] group-hover:underline mt-[14px] mb-[35px]">
          Read More
        </p>
      </div>
    </div>
  );
}
