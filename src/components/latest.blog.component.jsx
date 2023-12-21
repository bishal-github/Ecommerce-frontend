import React, { useEffect, useState } from "react";
import LatestBlogCard from "./cards/latest.blog.card";
import { latestBlogData } from "../assets/mokdata/mokdata";

export default function LatestBlogComponent() {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(latestBlogData);
  }, []);
  return (
    <div className="w-full flex flex-col mb-[115px]">
      <h1 className="text-[#1A0B5B] font-josef text-[42px] font-[500] text-center mb-[80px]">
        Latest Blog
      </h1>
      <div className="flex flex-row flex-wrap max-w-[1200px] w-full mx-auto justify-evenly xl:justify-between gap-[35px]">
        {data &&
          data.map((item, index) => <LatestBlogCard key={index} data={item} />)}
      </div>
    </div>
  );
}
