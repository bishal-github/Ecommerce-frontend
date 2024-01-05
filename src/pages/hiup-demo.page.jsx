import React from "react";
import Styled from "../assets/modules/hiup-demo.module.css";
import HiupDemoHeroComponent from "../components/hiup-demo/components/hiup-demo.hero.component";
import HiupDemoFormComponent from "../components/hiup-demo/components/hiup-demo.form.component";

export default function HiupDemoPage() {
  return (
    <div className={Styled.pageMainDiv}>
      <HiupDemoHeroComponent />
      <HiupDemoFormComponent />
    </div>
  );
}
