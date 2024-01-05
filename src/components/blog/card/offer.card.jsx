import React from "react";
import styled from "styled-components";
import offerImg from "../../../assets/images/offer.png";

export default function OfferCard(props) {
  const OfferCard = styled.div`
    display: flex;
    flex-direction: column;
  `;

  const ImgDiv = styled.div`
    width: 115px;
    height: 80px;
  `;

  const ProductName = styled.p`
    color: var(--Text, #151875);
    text-align: center;
    font-family: Lato;
    font-size: 14px;
    font-weight: 600;
    margin: 9px 0 6px 0;
  `;

  const Price = styled.p`
    color: var(--sub-text-color, #8a8fb9);
    text-align: center;
    font-family: Lato;
    font-size: 12px;
    font-weight: 600;
  `;

  const Image = styled.img`
    max-width: 100%;
    height: auto;
  `;
  return (
    <OfferCard>
      <ImgDiv>
        <Image src={props?.data?.image} alt="" />
      </ImgDiv>
      <ProductName>{props?.data?.title}</ProductName>
      <Price>{props?.data?.pr}</Price>
    </OfferCard>
  );
}
