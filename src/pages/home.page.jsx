import React from "react";
import NavFirst from "../components/nav.first";
import NavSecond from "../components/nav.second";
import Carousel from "../components/carousel";
import FeaturedProducts from "../components/featured.product";
import LatestProduct from "../components/latest.product";
import Shopex from "../components/shopex.component";
import TrendingProduct from "../components/trending.product";
import TrendingProducts from "../components/trending.products";
import TrendingProductCard2 from "../components/cards/trending.product.card2";
import DiscountItem from "../components/discount.item";
import TopCategories from "../components/top.categories";
import LatestUpdate from "../components/latest.update";
import LogoComponent from "../components/logos.component";
import LatestBlogComponent from "../components/latest.blog.component";
import CarouselComponent from "../components/carousel";
import { Outlet } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="w-full">
      <Outlet />
      <CarouselComponent />
      <FeaturedProducts />
      <LatestProduct />
      <Shopex />
      <TrendingProduct />
      <TrendingProducts />
      <TrendingProductCard2 />
      <DiscountItem />
      <TopCategories />
      <LatestUpdate />
      <LogoComponent />
      <LatestBlogComponent />
      <Outlet />
    </div>
  );
}
