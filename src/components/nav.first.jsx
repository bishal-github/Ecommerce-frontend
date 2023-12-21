import React from "react";
import { FaRegEnvelope } from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io";
import { GoChevronDown } from "react-icons/go";
import { FiPhoneCall } from "react-icons/fi";
import { RiUser3Line } from "react-icons/ri";
import { CgShoppingCart } from "react-icons/cg";

export default function NavFirst() {
  return (
    <div className="w-full bg-[#7E33E0] ">
      <nav className="w-full h-[44px] flex flex-row  max-w-[1177px] mx-auto px-3 xl:px-0">
        <div className="w-full mx-auto flex flex-row font-josef italic items-center justify-between text-[#F1F1f1] text-[16px] font-[600]">
          <div className="flex flex-row gap-[100px]">
            <p className="flex gap-2 items-center flex-row">
              <FaRegEnvelope />
              info@gmail.com
            </p>
            <p className="hidden md:flex gap-2 items-center flex-row">
              <FiPhoneCall /> (12345)67890
            </p>
          </div>
          <div className="flex flex-row gap-[15px]">
            <p className="hidden md:flex flex-row gap-1 items-center">
              English <GoChevronDown />
            </p>
            <p className="hidden md:flex flex-row gap-1 items-center">
              USD
              <GoChevronDown />
            </p>
            <p className="flex flex-row gap-1 items-center">
              Login <RiUser3Line />
            </p>
            <p className="hidden md:flex flex-row gap-1 items-center">
              Wishlist <IoMdHeartEmpty />
            </p>
            <p className="flex items-center">
              <CgShoppingCart size={20} />
            </p>
          </div>
        </div>
      </nav>
    </div>
  );
}
