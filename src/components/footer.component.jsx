import React from "react";
import logoImage from "../assets/images/logo.png";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function FooterComponent() {
  return (
    <div className="flex flex-col w-full h-auto">
      <div className="w-full bg-[#EEEFFB] px-4">
        <div className="max-w-[1177px] w-full gap-[35px] mx-auto flex flex-row flex-wrap justify-evenly sm:justify-between py-[94px]">
          <div className="flex flex-col">
            <img
              src={logoImage}
              className="w-[65px] h-[65px] mb-[16px]"
              alt=""
            />
            <form className="mb-4">
              <div className="bg-white p-[3px] rounded-sm sm:rounded-md flex items-center justify-between">
                <input
                  type="text"
                  placeholder="Enter Email Address"
                  className="bg-white text-gray-500 rounded-sm sm:rounded-md text-[12px] sm:text-[16px] flex-grow outline-none pl-4"
                />
                <button className="bg-pink-500 text-white py-[4px] sm:py-[10px] font-[500] font-roboto  px-[15px] sm:px-[40px] text-[12px] sm:text-[16px] rounded-sm sm:rounded-md">
                  Sign Up
                </button>
              </div>
            </form>

            <p className="text-[16px] text-[#8A8FB9] font-[400] font-lato mb-[10]">
              Contact Info
            </p>
            <p className="text-[16px] text-[#8A8FB9] font-[400] font-lato">
              Naranchour-01, Naxal, Kathmandu, Nepal
            </p>
          </div>

          <div>
            <h1 className="text-[#000000] font-josef text-[22px] font-[600] mb-[15px] sm:mb-[42px] italic">
              Catagories
            </h1>
            <div className="flex flex-col text-[#8A8FB9] font-lato font-[400] gap-[10px] sm:gap-[21px] items-start">
              <p>Laptops & Computers</p>
              <p>Cameras & Photography</p>
              <p>Video Games & Consoles</p>
              <p>Waterproof Headphones</p>
            </div>
          </div>
          <div>
            <h1 className="text-[#000000] font-josef italic text-[22px] font-[600] mb-[15px] sm:mb-[42px]">
              Customer Care
            </h1>
            <div className="flex flex-col text-[#8A8FB9] font-lato font-[400] gap-[10px] sm:gap-[21px] items-start">
              <p>My Account</p>
              <p>Discount</p>
              <p>Returns</p>
              <p>Orders History</p>
              <p>Order Tracking</p>
            </div>
          </div>
          <div>
            <h1 className="text-[#000000] font-josef italic text-[22px] font-[600] mb-[15px] sm:mb-[42px]">
              Pages
            </h1>
            <div className="flex flex-col text-[#8A8FB9] font-lato font-[400] gap-[10px] sm:gap-[21px] items-start">
              <p>Blog</p>
              <p>Browse the shop</p>
              <p>Category</p>
              <p>Pre-Built Pages</p>
              <p>Visual Composer Elements</p>
              <p>Visual Composer Elements</p>
              <p>WooCommerce Pages</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#E7E4F8] text-[#9DA0AE] text-[16px] font-[600] font-lato flex flex-wrap items-center flex-row justify-around py-[17px] px-2 gap-[20px]">
        <p>©OliveGroup - All Rights Reserved.</p>
        <ul className="flex flex-row gap-[11px]">
          <li>
            <p className="w-[20px] h-[20px] rounded-full bg-[#151875] flex items-center justify-center p-[4px]">
              <FaFacebookF size={10} className="text-[#FFFFFF]" />
            </p>
          </li>
          <li>
            <p className="w-[20px] h-[20px] rounded-full bg-[#151875] flex items-center justify-center p-[4px]">
              <FaInstagram size={10} className="text-[#FFFFFF]" />
            </p>
          </li>
          <li>
            <p className="w-[20px] h-[20px] rounded-full bg-[#151875] flex items-center justify-center p-[4px]">
              <FaTwitter size={10} className="text-[#FFFFFF]" />
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
