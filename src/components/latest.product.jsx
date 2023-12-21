import React, { useState } from "react";
import LatestProductCard from "./cards/latest.product.card";
import {
  bestSellerData,
  latestProductsData,
  specialOfferData,
  featuredData,
} from "../assets/mokdata/mokdata";

export default function LatestProduct() {
  const [data, setData] = useState(latestProductsData);
  const [activeCategory, setActiveCategory] = useState("New Arrival");

  const handleCategoryClick = (category) => {
    let newData;
    switch (category) {
      case "New Arrival":
        newData = latestProductsData;
        break;
      case "Best Seller":
        newData = bestSellerData;
        break;
      case "Featured":
        newData = featuredData;
        break;
      case "Special Offer":
        newData = specialOfferData;
        break;
      default:
        console.error("Invalid category:", category);
        return;
    }
    setData(newData);
    setActiveCategory(category);
  };

  return (
    <div className="w-full flex flex-col mb-[58px]">
      <h1 className="text-[#151875] font-josef text-[42px] font-[500] text-center">
        Latest Products
      </h1>
      <ul className="flex flex-row items-center justify-around max-w-[600px] mx-auto gap-[20px] flex-wrap sm:gap-[58px] mt-[19px] mb-[58px]">
        <li
          className={`text-[18px] font-lato font-[400] text-[#151875] cursor-pointer ${
            activeCategory === "New Arrival" ? "text-[#FB2E86] underline" : ""
          }`}
          onClick={() => handleCategoryClick("New Arrival")}
        >
          New Arrival
        </li>
        <li
          className={`text-[18px] font-lato font-[400] text-[#151875] cursor-pointer ${
            activeCategory === "Best Seller" ? "text-[#FB2E86] underline" : ""
          }`}
          onClick={() => {
            handleCategoryClick("Best Seller");
          }}
        >
          Best Seller
        </li>
        <li
          className={`text-[18px] font-lato font-[400] text-[#151875] cursor-pointer ${
            activeCategory === "Featured" ? "text-[#FB2E86] underline" : ""
          }`}
          onClick={() => handleCategoryClick("Featured")}
        >
          Featured
        </li>
        <li
          className={`text-[18px] font-lato font-[400] text-[#151875] cursor-pointer ${
            activeCategory === "Special Offer" ? "text-[#FB2E86] underline" : ""
          }`}
          onClick={() => handleCategoryClick("Special Offer")}
        >
          Special Offer
        </li>
      </ul>
      <div className="flex flex-row flex-wrap max-w-[1177px] w-full mx-auto justify-evenly xl:justify-between gap-[37px] lg:gap-0">
        {data &&
          data.map((item, index) => (
            <LatestProductCard key={index} data={item} />
          ))}
      </div>
    </div>
  );
}
