import React from "react";

export default function ProductDetailComponent() {
  return (
    <>
      <div className="w-full h-[286px] flex bg-[#F6F5FF] justify-center lg:justify-start pl-0 lg:pl-[374px] items-center">
        <div className="flex flex-col ">
          <h1 className="text-[#101750] text-[36px] font-josef font-[500]">
            Product Details
          </h1>
          <ul className="flex flex-row gap-[13px]">
            <li className="font-lato text-[#000] text-[16px] font-[500]">
              Home
            </li>
            <li className="font-lato text-[#000] text-[16px] font-[500]">
              . Pages
            </li>
            <li className="font-lato text-[#FB2E86] text-[16px] font-[500] ">
              . Product Details
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
