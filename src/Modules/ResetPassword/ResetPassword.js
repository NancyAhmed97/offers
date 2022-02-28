import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import { useSelector } from "react-redux";
import Footer from "../Common/Footer/Footer";
import Navbar from "../Common/Navbar/Navba";
import rightArrow from "../../Resources/Assets/img/Icon feather-arrow-left.svg";
import leftArrow from "../../Resources/Assets/img/leftArrow.svg";
import "./ResetPassword.css";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
function ResetPassword() {
  const { currentLocal } = useSelector((state) => state.currentLocal);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passState, setPassState] = useState(false);
  const [alert, setAlert] = useState(false);
  const [setuccessAlert, setSuccessAlert] = useState("");
  const [dangerAlert, setDangerAlert] = useState("");
  const [alertMsg, setAlertMsg] = useState("");
  const history = useHistory();
  const index = history.location.pathname.search(":");
  const twoVariable = history.location.pathname.slice(index + 1);
  const indexOne = twoVariable.search(":");
  const variableOne = twoVariable.substring(0, indexOne - 1);
  const variableTwo = twoVariable.substring(indexOne + 1);
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
      axios({
        method: "post",
        url: "https://offers.com.fig-leaf.net/api/v1/changePassword",
        data: {
          new_password: password,
          confirm_password: confirmPassword,
          forgetCode: variableOne,
          email: variableTwo,
        },
      }).then((res) => {
        if (res.data.success === true) {
          setSuccessAlert(true);
          setAlertMsg(res.data.message);
          setPassword("");
          setConfirmPassword("");
        } else {
          setDangerAlert(true);
          setAlertMsg(res.data.message);
        }
      });
    }
  };
  console.log(alert);
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
            <Alert
              variant={setuccessAlert ? "success " : dangerAlert && "danger"}
            >
              {alertMsg}
            </Alert>
            {alert && (
              <Alert
                className={currentLocal.language === "العربيه" && "text-right"}
                variant={"danger"}
              >
                *{currentLocal.auth.alert}
              </Alert>
            )}
          </div>
          <label htmlFor="password">{currentLocal.auth.password}</label>
          <input
            className="dark_input w-100"
            type="password"
            id="password"
            onChange={saveData}
            value={password}
          />{" "}
          {passState && (
            <p className="mt-3 passState">
              {currentLocal.resetPassword.passMatch}
            </p>
          )}
          <label htmlFor="email">{currentLocal.auth.ConfirmPassword}</label>
          <input
            className="dark_input w-100"
            type="password"
            id="confirmPassword"
            onChange={saveData}
            value={confirmPassword}
            onBlur={() => {
              console.log("hi");
              if (password !== confirmPassword) {
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
        </form>
      </div>
      <Footer />
    </section>
  );
}

export default ResetPassword;
