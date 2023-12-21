import React, { useEffect, useState } from "react";
import LatestProductCard from "./cards/latest.product.card";
import { bestSellerData } from "../assets/mokdata/mokdata";

export default function BestSellerComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(bestSellerData);
  }, []);
  return (
    <div className="w-full flex flex-col mb-[58px]">
      <h1 className="text-[#151875] font-[Josefin Sans] text-[42px] font-[500] text-center">
        Latest Products
      </h1>
      <ul className="flex flex-row items-center justify-around max-w-[600px] mx-auto gap-[20px] flex-wrap sm:gap-[58px] mt-[19px] mb-[58px]">
        <li className="text-[18px] font-[Lato] font-[400] text-[#151875]">
          New Arrival
        </li>
        <li className="text-[18px] font-[Lato] font-[400] text-[#151875]">
          Best Seller
        </li>
        <li className="text-[18px] font-[Lato] font-[400] text-[#151875]">
          Featured
        </li>
        <li className="text-[18px] font-[Lato] font-[400] text-[#151875]">
          Special Offer
        </li>
      </ul>
      <div className="flex flex-row flex-wrap max-w-[1177px] w-full mx-auto justify-evenly xl:justify-between  border-2 border-black gap-[37px] lg:gap-0">
        {data &&
          data.map((item, index) => (
            <LatestProductCard key={index} data={item} />
          ))}
      </div>
    </div>
  );
}
