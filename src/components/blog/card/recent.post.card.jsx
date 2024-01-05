import React from "react";
import styled from "styled-components";
import girlImg from "../../../assets/images/recent-post.png";

export default function RecentPostCard(props) {
  const InsideRecentPostDiv = styled.div`
    display: flex;
    flex-direction: row;
    gap: 6px;
  `;

  const ImgDiv = styled.div`
    width: 70px;
    height: 51px;
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
    <InsideRecentPostDiv>
      <ImgDiv>
        <Image src={props?.data?.image} alt="" />
      </ImgDiv>
      <ImageSideDiv>
        <ImageSideT>{props?.data?.title}</ImageSideT>
        <ImageSideP>{props?.data?.date}</ImageSideP>
      </ImageSideDiv>
    </InsideRecentPostDiv>
  );
}
