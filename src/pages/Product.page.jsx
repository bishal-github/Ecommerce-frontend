import React from "react";
import styled from "styled-components";
import ProductDetailComponent from "../components/Product/product-detail.component";
import ProductDetailCardComponent from "../components/Product/product-detail.card.component";
import ProductDescriptionComponent from "../components/Product/product-description.component";

export default function ProductPage() {
  const MainDiv = styled.div`
    width: 100%;
  `;
  return (
    <MainDiv>
      <ProductDetailComponent />
      <ProductDetailCardComponent />
      <ProductDescriptionComponent />
    </MainDiv>
  );
}
