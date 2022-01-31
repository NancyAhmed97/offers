import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import { useSelector } from "react-redux";
import Footer from "../Common/Footer/Footer";
import Navbar from "../Common/Navbar/Navba";
import rightArrow from "../../Resources/Assets/img/Icon feather-arrow-left.svg";
import leftArrow from "../../Resources/Assets/img/leftArrow.svg";
import "./ResetPassword.css";
function ResetPassword() {
  const { currentLocal } = useSelector((state) => state.currentLocal);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passState, setPassState] = useState(false);
  const [alert, setAlert] = useState(false);
  const saveData = (e) => {
    if (e.target.id === "password") {
      setPassword(e.target.value);
      setAlert(false);
    } else if (e.target.id === "confirmPassword") {
      setConfirmPassword(e.target.value);
    }
  };
  const sendData = (e) => {
    e.preventDefault();
    if (!password || !confirmPassword) {
      setAlert(true);
    } else {
      console.log("hi");
    }
  };
  return (
    <section
      className={
        currentLocal.language === "English"
          ? "reset_password"
          : "reset_password ar_reset_password"
      }
    >
      <Navbar />
      <h1 className="text-center">{currentLocal.resetPassword.title}</h1>
      <div className="form">
        <form onSubmit={sendData} className="reset_password_form">
          <div className="errorMsg">
            {alert && (
              <Alert
                className={currentLocal.language === "العربيه" && "text-right"}
                variant={"danger"}
              >
                *{currentLocal.auth.alert}
              </Alert>
            )}
            <label htmlFor="password">{currentLocal.auth.password}</label>
            <input
              className="dark_input w-100"
              type="password"
              id="password"
              onChange={saveData}
              value={password}
            />{" "}
            {passState&&
            <p className="mt-3 passState">{currentLocal.resetPassword.passMatch}</p>
            }
            <label htmlFor="email">{currentLocal.auth.ConfirmPassword}</label>
            <input
              className="dark_input w-100"
              type="password"
              id="confirmPassword"
              onChange={saveData}
              value={confirmPassword}
              onBlur={() => {
                if (password !==  confirmPassword) {
                  setPassState(true);
                } else {
                  setPassState(false);
                }
              }}
            />{" "}
            <div className="button mt-5">
              <button type="submit" className="reset_password_btn">
                {currentLocal.language === "English" ? (
                  <>
                    {currentLocal.conactus.submit}
                    <img src={rightArrow} alt="rightArrow" />
                  </>
                ) : (
                  <>
                    {currentLocal.conactus.submit}
                    <img src={leftArrow} alt="leftArrow" />
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </section>
  );
}

export default ResetPassword;
