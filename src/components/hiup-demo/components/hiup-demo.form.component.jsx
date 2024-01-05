import React, { useEffect, useState } from "react";
import Styled from "../../../assets/modules/hiup-demo.module.css";
import LetterLikeFormComponent from "./letter-lile.form.component";
import SidebarCard from "../cards/sidebar.card";
import ProceedToCheckoutCard from "../cards/proceed-to-checkout.card";
import { demoData } from "../../../assets/mokdata/mokdata";

export default function HiupDemoFormComponent() {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(demoData);
  }, []);
  return (
    <div className={Styled.mainDivSecond}>
      <div className={Styled.insideMainDivSecond}>
        <h4 className={Styled.titleSecond}>Hiup Demo</h4>
        <p className={Styled.slug}>Cart/ Information/ Shipping/ Payment</p>
      </div>
      <div className={Styled.formDiv}>
        <LetterLikeFormComponent />
        <div className={Styled.sidebar}>
          <div className={Styled.sidebarFirstDiv}>
            {data &&
              data.map((item, index) => (
                <SidebarCard key={index} data={item} />
              ))}
          </div>
          <div className={Styled.secondCardDiv}>
            <ProceedToCheckoutCard />
          </div>
        </div>
      </div>
    </div>
  );
}
