import React from "react";
import ProductDetailComponent from "../components/Product/product-detail.component";
import ProductDetailCardComponent from "../components/Product/product-detail.card.component";
import ProductDescriptionComponent from "../components/Product/product-description.component";

export default function ProductPage() {
  return (
    <>
      <ProductDetailComponent />
      <ProductDetailCardComponent />
      <ProductDescriptionComponent />
    </>
  );
}
