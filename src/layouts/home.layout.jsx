import React from "react";
import { Outlet } from "react-router-dom";
import NavFirst from "../components/nav.first";
import NavSecond from "../components/nav.second";
import FooterComponent from "../components/footer.component";

export default function HomePageLayout() {
  return (
    <>
      <NavFirst />
      <NavSecond />
      <Outlet />
      <FooterComponent />
    </>
  );
}
