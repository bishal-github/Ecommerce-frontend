import React from "react";
import bagImg from "../../../assets/images/bag1.png";
import Styled from "../../../assets/modules/hiup-demo.module.css";

export default function SidebarCard(props) {
  return (
    <div className={Styled.card}>
      <div className={Styled.insideCard}>
        <div className={Styled.cardImgDiv}>
          <img className={Styled.imgCard} src={props?.data?.image} alt="" />
        </div>
        <div className={Styled.info}>
          <h4 className={Styled.prodName}>{props?.data?.name}</h4>
          <p className={Styled.prodColor}>
            Color: <span className={Styled.span1}>{props?.data?.color}</span>
          </p>
          <p className={Styled.prodSize}>
            Size: <span className={Styled.span1}>{props?.data?.size}</span>
          </p>
        </div>
      </div>
      <h4 className={Styled.prodPrice}>{props?.data?.price}</h4>
    </div>
  );
}
