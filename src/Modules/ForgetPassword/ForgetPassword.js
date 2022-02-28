import React, { useState } from "react";
import { useSelector } from "react-redux";
import Footer from "../Common/Footer/Footer";
import Navbar from "../Common/Navbar/Navba";
import rightArrow from "../../Resources/Assets/img/Icon feather-arrow-left.svg";
import leftArrow from "../../Resources/Assets/img/leftArrow.svg";
import "./ForgetPassword.css";
import { Alert } from "react-bootstrap";
import axios from "axios";
function ForgetPassword() {
  const { currentLocal } = useSelector((state) => state.currentLocal);
  const [email, setEmail] = useState("");
  const [alert, setAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");
  const [setuccessAlert, setSuccessAlert] = useState("");
  const [dangerAlert, setDangerAlert] = useState("");
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
      setAlert(false);
      axios({
        method: "post",
        url: "https://offers.com.fig-leaf.net/api/v1/forgetPassowd",
        data: {
        email: email,
        },
      }).then((res) => {
		if(res.data.success===true){
			setSuccessAlert(true);
			setAlertMsg(res.data.message);
			setEmail("")
      console.log(res.data.message);
		}
      }).catch((error) => {
        if (error) {
          setDangerAlert(true);
          setAlertMsg(error.response.data.message);

        }
      });    }
  };
  return (
    <section className={currentLocal.language==="English"?"forget_password":"forget_password ar_forget_password"}>
      <Navbar />
      <h1 className="text-center">{currentLocal.forrgetPassword.title}</h1>
      <div className="form">
        <form onSubmit={sendData} className="forget_password_form">
        <div className="errorMsg">
                    <Alert
                      variant={
                        setuccessAlert ? "success " : dangerAlert && "danger"
                      }
                    >
                      {alertMsg}
                    </Alert>
                    {alert && (
                      <Alert
                        className={
                          currentLocal.language === "العربيه" && "text-right"
                        }
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
