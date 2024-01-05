import React, { useEffect, useState } from "react";
import ShopexCard from "./cards/shopex.card";
import { shopexData } from "../assets/mokdata/mokdata";

export default function Shopex() {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(shopexData);
  }, []);
  return (
    <div className="w-full flex flex-col">
      <h1 className="text-[#151875] font-josef text-[42px] font-[500] text-center mb-[55px]">
        What Shopex Offer!
      </h1>
      <div>
        <div className="flex flex-row max-w-[1177px] w-full  mx-auto justify-evenly lg:justify-between flex-wrap gap-[35px] lg:gap-[15px]">
          {data &&
            data.map((item, index) => <ShopexCard key={index} data={item} />)}
        </div>
      </div>
    </div>
  );
}
