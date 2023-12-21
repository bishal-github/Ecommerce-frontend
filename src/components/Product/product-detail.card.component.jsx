import React from "react";
import { FaRegStar } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import usBagImg from "../../assets/images/us-bag.png";
import handBagImg from "../../assets/images/hand-bag.png";
import lightImg from "../../assets/images/light.png";
import bagImg from "../../assets/images/bag.png";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function ProductDetailCardComponent() {
  return (
    <>
      <div
        className="max-w-[1177px] w-full h-auto mx-auto flex flex-col md:flex-row gap-[21px] p-[13px] mt-[121px] mb-[131px] rounded-lg bg-white"
        style={{ boxShadow: "0px 0px 25px 10px #F6F4FD" }}
      >
        <div className="hidden flex-col gap-[11px] lg:flex">
          <img src={usBagImg} alt="" />
          <img src={lightImg} alt="" />
          <img src={handBagImg} alt="" />
        </div>
        <div className="">
          <img src={bagImg} alt="" />
        </div>
        <div className="flex flex-col">
          <h1 className="text-[#0D134E] font-josef italic text-[36px] font-[600] mb-[13px]">
            Playwood arm chair
          </h1>
          <div className="flex flex-row items-center">
            <IoIosStar color="#FFC416" size={12} />
            <IoIosStar color="#FFC416" size={12} />
            <IoIosStar color="#FFC416" size={12} />
            <IoIosStar color="#FFC416" size={12} />
            <IoIosStar color="#FFC416" size={12} />
            <p className="ml-1 text-[14px] text-[#151875] font-josef font-[400]">
              (22)
            </p>
          </div>
          <div className="flex flex-row gap-[18px] mt-[26px]">
            <p className="text-[#151875] font-[400] text-[16px] font-josef">
              $32.00
            </p>
            <p className="text-[#FB2E86] font-[400] text-[16px] font-josef">
              $32.00
            </p>
          </div>
          <p className="text-[#0D134E] font-josef text-[16px] italic font-[600] mt-[12px] mb-[12px]">
            Color
          </p>
          <p className="text-[#A9ACC6] text-[16px] italic font-josef font-[600] mb-[34px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            tellus porttitor purus, et volutpat sit.
          </p>
          <div className="flex flex-row gap-[26px] mb-[17px] items-center  sm:ml-[115px]">
            <p className="text-[#151875] font-[400] text-[16px] font-josef">
              Add To Cart
            </p>
            <IoMdHeartEmpty color="#535399" size={18} />
          </div>
          <p className="text-[#151875] font-[400] text-[16px] font-josef mb-[10px]">
            Categories
          </p>
          <p className="text-[#151875] font-[400] text-[16px] font-josef mb-[10px]">
            Tags
          </p>
          <div className="flex flex-row gap-[16px] items-center">
            <p className="text-[#151875] font-[400] text-[16px] font-josef ">
              Share
            </p>
            <div className="flex flex-row gap-[10px]">
              <p className="w-[12px] h-[12px] rounded-full bg-[#151875] flex items-center justify-center p-[4px]">
                <FaFacebookF size={12} color="white" />
              </p>
              <p className="w-[12px] h-[12px] rounded-full bg-[#FB2E86] flex items-center justify-center p-[4px]">
                <FaInstagram size={12} color="white" />
              </p>
              <p className="w-[12px] h-[12px] rounded-full bg-[#151875] flex items-center justify-center p-[4px]">
                <FaTwitter size={12} color="white" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
