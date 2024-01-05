import React from "react";
import styled from "styled-components";
import girlImg from "../../../assets/images/sale-product.png";

export default function SaleProductCard(props) {
  console.log("aaa", props);
  const InsideSaleProductDiv = styled.div`
    display: flex;
    flex-direction: row;
    gap: 6px;
  `;

  const ImgDiv = styled.div`
    width: 70px;
    height: 57px;
  `;
  const Image = styled.img`
    max-width: 100%;
    height: auto;
  `;

  const ImageSideDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
  `;

  const ImageSideT = styled.h4`
    color: var(--sale-tage-coloe, #3f509e);
    font-family: Josefin Sans;
    font-size: 14px;
    font-weight: 400;
  `;

  const ImageSideP = styled.p`
    color: var(--sub-text-color, #8a8fb9);
    font-family: Lato;
    font-size: 11px;
    font-weight: 600;
  `;
  return (
    <InsideSaleProductDiv>
      <ImgDiv>
        <Image src={props?.data?.image} alt="" />
      </ImgDiv>
      <ImageSideDiv>
        <ImageSideT>{props?.data?.title}</ImageSideT>
        <ImageSideP>{props?.data?.date}</ImageSideP>
      </ImageSideDiv>
    </InsideSaleProductDiv>
  );
}
