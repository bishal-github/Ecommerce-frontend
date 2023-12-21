import React, { useEffect, useState } from "react";
import TrendingProductCard from "./cards/trending.product.card";
import { trendingProductsData } from "../assets/mokdata/mokdata";

export default function TrendingProducts() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(trendingProductsData);
  }, []);
  return (
    <div className="w-full flex flex-col mt-[132px]">
      <h1 className="text-[#1A0B5B] font-josef text-[42px] font-[500] text-center mb-[39px]">
        Trending Products
      </h1>
      <div className="flex flex-row flex-wrap max-w-[1200px] w-full mx-auto justify-evenly gap-[35px] lg:gap-0 lg:justify-between">
        {data &&
          data.map((item, index) => (
            <TrendingProductCard key={index} data={item} />
          ))}
      </div>
    </div>
  );
}
