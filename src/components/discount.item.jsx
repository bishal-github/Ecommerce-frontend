import React from "react";
import chairImg from "../assets/images/chairr.png";
import { IoCheckmarkSharp } from "react-icons/io5";

export default function DiscountItem() {
  return (
    <div className="mt-[126px] max-w-[1214px] flex flex-col gap-[26px]  mx-auto mb-[79px]">
      <h1 className="text-[#1A0B5B] font-josef text-[42px] font-[500] text-center">
        Discount Item
      </h1>
      <div className="flex flex-col w-full">
        <ul className="flex justify-center gap-[26px]">
          <li className="text-[#151875] text-[18px] font-[400] font-lato hover:text-[#FB2E86] group  hover:underline flex flex-row items-center gap-2">
            Wood Chair
            <p className="w-[5px] h-[5px] rounded-full bg-[#FB4997] hidden group-hover:block"></p>
          </li>
          <li className="text-[#151875] text-[18px] font-[400] font-lato hover:text-[#FB2E86] group hover:underline flex flex-row items-center gap-2">
            Plastic Chair
            <p className="w-[5px] h-[5px] rounded-full bg-[#FB4997] hidden group-hover:block"></p>
          </li>
          <li className="text-[#151875] text-[18px] font-[400] font-lato hover:text-[#FB2E86] group hover:underline flex flex-row items-center gap-2">
            Sofa Collection
            <p className="w-[5px] h-[5px] rounded-full bg-[#FB4997] hidden group-hover:block"></p>
          </li>
        </ul>
        <div className="flex flex-col md:flex-row w-full ">
          <div className="flex-1 flex flex-col pl-2 md:pl-6 xl:pl-0 items-center md:items-start justify-center">
            <h1 className="text-[#151875] text-[35px] font-josef font-[500] mb-[16px]">
              20% Discount Of All Products
            </h1>
            <p className="text-[#FB2E86] text-[21px] font-[400] font-josef mb-[20px]">
              Eams Sofa Compact
            </p>
            <p className="text-[#B7BACB] text-[17px] font-[400] font-lato lh-[30px] max-w-[450px] mb-[28px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
              feugiat habitasse nec, bibendum condimentum.
            </p>
            <div className="flex flex-row gap-[20px] sm:gap-[44px] mb-[37px]">
              <div className="flex flex-col gap-[10px]">
                <div className="flex flex-row gap-[6px] items-center text-[#B8B8DC] text-[16px] font-[400] font-lato">
                  <IoCheckmarkSharp />
                  Material expose like metals
                </div>
                <div className="flex flex-row gap-[6px] items-center text-[#B8B8DC] text-[16px] font-[400] font-lato">
                  <IoCheckmarkSharp />
                  Simple neutral colours.
                </div>
              </div>
              <div className="flex flex-col gap-[10px]">
                <div className="flex flex-row gap-[6px] items-center text-[#B8B8DC] text-[16px] font-[400] font-lato">
                  <IoCheckmarkSharp />
                  Clear lines and geomatric figures
                </div>
                <div className="flex flex-row gap-[6px] items-center text-[#B8B8DC] text-[16px] font-[400] font-lato">
                  <IoCheckmarkSharp />
                  Material expose like metals
                </div>
              </div>
            </div>
            <button className="bg-[#FB2E86] text-[17px] font-[400] font-josef text-[#FFF] py-[20px] px-[48px]">
              Shop Now
            </button>
          </div>
          <div className="flex-1 flex items-center content-center">
            <img src={chairImg} className="max-w-[100%]" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
