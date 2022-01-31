import React, { useState } from "react";
import { useSelector } from "react-redux";
import Footer from "../Common/Footer/Footer";
import Navbar from "../Common/Navbar/Navba";
import rightArrow from "../../Resources/Assets/img/Icon feather-arrow-left.svg";
import leftArrow from "../../Resources/Assets/img/leftArrow.svg";

import "./ForgetPassword.css";
import { Alert } from "react-bootstrap";
function ForgetPassword() {
  const { currentLocal } = useSelector((state) => state.currentLocal);
  const [email, setEmail] = useState("");
  const [alert, setAlert] = useState(false);
  const saveData = (e) => {
    if (e.target.id === "email") {
      setEmail(e.target.value);
      setAlert(false);
    }
  };
  const sendData = (e) => {
    e.preventDefault();
    if (!email) {
      setAlert(true);
    }else{
      console.log("hi");
    }
  };
  return (
    <section className={currentLocal.language==="English"?"forget_password":"forget_password ar_forget_password"}>
      <Navbar />
      <h1 className="text-center">{currentLocal.forrgetPassword.title}</h1>
      <div className="form">
        <form onSubmit={sendData} className="forget_password_form">
        <div className="errorMsg">
          {alert && (
            <Alert
              className={currentLocal.language === "العربيه" && "text-right"}
              variant={"danger"}
            >
              *{currentLocal.auth.alert}
            </Alert>
          )}
        </div>
          <label htmlFor="email">{currentLocal.auth.email}</label>
          <input
            className="dark_input w-100"
            type="email"
            id="email"
            onChange={saveData}
            value={email}
          />{" "}
          <div className="button mt-5">
          <button type="submit" className="forget_password_btn">
              {currentLocal.language === "English" ? (
                <>
                  {currentLocal.forrgetPassword.send}
                  <img src={rightArrow} alt="rightArrow" />
                </>
              ) : (
                <>
                  {currentLocal.forrgetPassword.send}
                  <img src={leftArrow} alt="leftArrow" />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </section>
  );
}

export default ForgetPassword;