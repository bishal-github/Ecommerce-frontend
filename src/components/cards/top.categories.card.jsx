import React from "react";
import chairrImg from "../../assets/images/chair11.png";

export default function TopCategoriesCard(props) {
  const { id, name, image, price } = props?.data;
  return (
    <div className="max-w-[270px] max-h-[345px] bg-[#FFFFFF] flex flex-col items-center">
      <div className="bg-[#F6F7FB] transition ease-in-out delay-200 w-[269px] h-[269px] rounded-full flex justify-center items-center mgr">
        <img className="h-auto m-auto max-w-[178px]" src={image} alt="" />
      </div>

      <h1 className="text-[#151875] font-josef text-[20px] font-[400] mt-[27px] mb-[13px]">
        {name}
      </h1>
      <p className="text-[#151875] text-[16px] font-[400] font-josef">
        {price}
      </p>
    </div>
  );
}
