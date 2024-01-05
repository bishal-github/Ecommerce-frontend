import React from "react";
import Styled from "../../../assets/modules/hiup-demo.module.css";

export default function ProceedToCheckoutCard() {
  return (
    <div className={Styled.cardSecond}>
      <div className={Styled.cardRow1}>
        <p>Subtotals:</p>
        <p>£219.00</p>
      </div>
      <div className={Styled.cardRow2}>
        <p>Totals:</p>
        <p>£325.00</p>
      </div>
      <div className={Styled.withCheckbox}>
        <input type="checkbox" id="abc" />
        <label htmlFor="abc">Shipping & taxes calculated at checkout</label>
      </div>
      <button className={Styled.cardSecondButton}>Proceed To Checkout</button>
    </div>
  );
}
