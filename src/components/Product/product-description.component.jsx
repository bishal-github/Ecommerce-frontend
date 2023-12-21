import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

export default function ProductDescriptionComponent() {
  return (
    <div className="w-full  bg-[#F9F8FE] pt-[107px] pb-[122px] flex flex-col">
      <div className="max-w-[1153px] px-4 xl:px-0 mx-auto">
        <div className=" mx-auto">
          <ul className="font-josef text-[#151875] text-[20px] sm:text-[24px] gap-5 sm:gap-0 font-[600] justify-between lg:justify-normal italic flex flex-row flex-wrap">
            <li className="mr-0 lg:mr-[85px]">Description</li>
            <li className="mr-0 lg:mr-[63px]">Additional Info</li>
            <li className="mr-0 lg:mr-[63px]">Reviews</li>
            <li>Video</li>
          </ul>
        </div>
        <div className="flex flex-col gap-[14px] mt-[61px]">
          <h1 className="font-josef text-[#151875] text-[22px] font-[600] italic">
            Varius Tempor
          </h1>
          <p className="text-[#A9ACC6] font-josef text-[16px] italic font-[600] flex flex-wrap">
            Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor
            ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris
            varius ac est bibendum. Scelerisque a, risus ac ante. Velit
            consectetur neque, elit, aliquet. Non varius proin sed urna, egestas
            consequat laoreet diam tincidunt. Magna eget faucibus cras justo,
            tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla
            lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui,
            massa viverr .
          </p>
        </div>

        <div className="flex flex-col gap-[16px] mt-[36px]">
          <h1 className="font-josef text-[#151875] text-[22px] font-[600] italic">
            More Details
          </h1>
          <div className="text-[#A9ACC6] font-josef text-[16px] italic font-[600]">
            <div className="flex flex-row gap-[8px]">
              <FaArrowRightLong color="#000000" />
              <p className="flex flex-wrap">
                Aliquam dis vulputate vulputate integer sagittis. Faucibus ds
                diam arcu, nulla lobortis justo netus dis. Eu in fringilla
                vulputate nunc nec. Dui, massa viverr .
              </p>
            </div>
            <div className="flex flex-row gap-[8px]">
              <FaArrowRightLong color="#2F1AC4" />
              <p className="flex flex-wrap">
                Aliquam dis vulputate vulputate integer sagittis. Faucibus ds
                diam arcu, nulla lobortis justo netus dis. Eu in fringilla
                vulputate nunc nec. Dui, massa viverr .
              </p>
            </div>
            <div className="flex flex-row  gap-[8px]">
              <FaArrowRightLong color="#000000" />
              <p className="flex flex-wrap">
                Aliquam dis vulputate vulputate integer sagittis. Faucibus ds
                diam arcu, nulla lobortis justo netus dis. Eu in fringilla
                vulputate nunc nec. Dui, massa viverr .
              </p>
            </div>
            <div className="flex flex-row  gap-[8px]">
              <FaArrowRightLong color="#000000" />
              <p className="flex-flex-wrap">
                Aliquam dis vulputate vulputate integer sagittis. Faucibus ds
                diam arcu, nulla lobortis justo netus dis. Eu in fringilla
                vulputate nunc nec. Dui, massa viverr .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
