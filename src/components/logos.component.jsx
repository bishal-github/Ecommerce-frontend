import React from "react";
import logoImg from "../assets/images/logos.png";

export default function LogoComponent() {
  return (
    <div className="mt-[96px] mb-[96px] max-w-[904px] h-auto mx-auto">
      <img src={logoImg} alt="" />
    </div>
  );
}
