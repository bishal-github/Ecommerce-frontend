import React from "react";
import Styled from "../../../assets/modules/hiup-demo.module.css";
import { Link } from "react-router-dom";

export default function LetterLikeFormComponent() {
  return (
    <>
      <form className={Styled.form}>
        <div className={Styled.formFirst}>
          <h4 className={Styled.formTitle}>Contact Information</h4>
          <div className={Styled.formInfo}>
            <p>Already have an account?</p>
            <Link to="/login">
              <p className={Styled.login}>Log in</p>
            </Link>
          </div>
        </div>
        <input
          type="text"
          placeholder="Email or mobile phone number"
          className={Styled.formSecondLine}
        />

        <div className={Styled.formThirdLine}>
          <input type="checkbox" id="cb" />
          <label htmlFor="cb" className={Styled.insideFormThird}>
            Keep me up to date on news and excluive offers
          </label>
        </div>
        <h4 className={Styled.formFourthLine}>Shipping address</h4>
        <div className={Styled.formFifthLine}>
          <input
            type="text"
            placeholder="First name (optional)"
            className={Styled.formSecondLine}
          />
          <input
            type="text"
            placeholder="Last name"
            className={Styled.formSecondLine1}
          />
        </div>
        <input
          type="text"
          placeholder="Address"
          className={Styled.formInputLine}
        />
        <input
          type="text"
          placeholder="Appaetnentment,suit,e.t.c (optinal)"
          className={Styled.formInputLine}
        />
        <input
          type="text"
          placeholder="City"
          className={Styled.formInputLine}
        />

        <div className={Styled.formFifthLine}>
          <input
            type="text"
            placeholder="Bangladesh"
            className={Styled.formInputLine}
          />
          <input
            type="text"
            placeholder="Postal Code"
            className={Styled.formInputLine}
          />
        </div>
        <button
          className={Styled.formButton}
          style={{ background: "#FB2E86" }}
          type="submit"
        >
          Continue Shipping
        </button>
      </form>
    </>
  );
}
