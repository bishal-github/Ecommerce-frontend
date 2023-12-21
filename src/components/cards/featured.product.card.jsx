import React from "react";
import dotImg from "../../assets/images/dot.png";
import dotHImg from "../../assets/images/dot-hover.png";
import { BsCart } from "react-icons/bs";
import { IoIosHeartEmpty } from "react-icons/io";
import { FaSearchPlus } from "react-icons/fa";

export default function FeaturedProductCard(props) {
  console.log(props.data);
  return (
    <>
      <div className="max-w-[270px] h-[361px] rounded-lg bg-[#FFFFFF] dark:border-gray-700 shadow-md flex flex-col items-center transition ease-in-out delay-300 group relative">
        <div className="flex-row gap-3 absolute top-3 left-3 hidden group-hover:flex">
          <BsCart size={15} color="#2F1AC4" />
          <IoIosHeartEmpty
            size={12}
            style={{
              border: "linear-gradient(to right, #3498db, #2980b9)",
            }}
          />
          <FaSearchPlus
            size={10}
            style={{
              border: "linear-gradient(to right, #3498db, #2980b9)",
            }}
          />
        </div>
        <div className="bg-[#F6F7FB] w-full h-[270px] p-6">
          <img
            className="max-w-[178px] h-auto rounded-t-lg mx-auto group-hover:max-w-[125px]"
            src={props?.data?.image}
            alt=""
          />
          <div className="w-full hidden group-hover:flex">
            <button className=" px-[9px] py-[13px] font-josef text-[12px] font-[400] bg-[#08D15F] text-[white] mx-auto">
              View Details
            </button>
          </div>
        </div>
        <div className="p-5 w-full flex flex-col items-center justify-center gap-2 group-hover:bg-[#2F1AC4]">
          <h5 className=" text-[18px] text-[#FB2E86] font-[700] font-lato group-hover:text-white">
            {props?.data?.name}
          </h5>
          <img
            className="w-[54px] h-[4px] flex group-hover:hidden"
            src={dotImg}
            alt=""
          />
          <img
            className="w-[54px] h-[4px] hidden group-hover:flex"
            src={dotHImg}
            alt=""
          />

          <p className=" text-[14px] text-[#151875] font-josef font-[400] group-hover:text-white">
            {props?.data?.code}
          </p>
          <p className=" text-[14px] text-[#151875] font-lato font-[400] group-hover:text-white">
            {props?.data?.price}
          </p>
        </div>
      </div>
    </>
  );
}
