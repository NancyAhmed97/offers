import axios from "axios";
import React, { useState } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../../../../Redux/Authorization";
import rightArrow from "../../../../Resources/Assets/img/Icon feather-arrow-left.svg";
import leftArrow from "../../../../Resources/Assets/img/leftArrow.svg";
import "./LoginContainer.css";
function LoginContainer() {
  const { currentLocal } = useSelector((state) => state.currentLocal);
  const dispatch = useDispatch();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [remember, setRemember] = useState("");
  const [setuccessAlert, setSuccessAlert] = useState("");
  const [alertMsg, setAlertMsg] = useState("");
  const [dangerAlert, setDangerAlert] = useState("");
  const [alert, setAlert] = useState(false);
  const saveData = (e) => {
    if (e.target.id === "email") {
      setEmail(e.target.value);
      setDangerAlert(false);
      setSuccessAlert(false);
      setAlert(false);
      setAlertMsg("");
    } else if (e.target.id === "password") {
      setPassword(e.target.value);
      setDangerAlert(false);
      setSuccessAlert(false);
      setAlert(false);
      setAlertMsg("");
    } else if (e.target.id === "Remember") {
      setRemember(e.target.value);
      setDangerAlert(false);
      setSuccessAlert(false);
      setAlert(false);
      setAlertMsg("");
      setAlertMsg("");
    }
  };
  const sendData = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setAlert(true);
    } else {
      axios({
        method: "post",
        url: "https://offers.com.fig-leaf.net/api/v1/login",
        data: {
          email: email,
          password: password,
          remember_me: remember?remember:0,
        },
      })
        .then((res) => {
          if (res.data.success === true) {
            setSuccessAlert(true);
            setAlertMsg(res.data.message);
            dispatch(login(res.data.data));
            window.scrollTo(0, 0);
            setEmail("");
            setPassword("");
            setTimeout(() => {
              setSuccessAlert(false);
              setAlertMsg("");
            }, 3000);
          }
        })
        .catch((error) => {
          if (error.response) {
            setDangerAlert(true);
            setAlertMsg(error.response.data.message);
          }
        });
    }
  };
  return (
    <div
      className={
        currentLocal.language === "English"
          ? "login_container pl "
          : "pr login_container ar_login_container"
      }
    >
      <form onSubmit={sendData}>
        <Alert variant={setuccessAlert ? "success " : dangerAlert && "danger"}>
          {alertMsg}
        </Alert>
        <div className="errorMsg">
          {alert && (
            <Alert
              className={currentLocal.language === "العربيه" && "text-right"}
              variant={"danger"}
            >
              *{currentLocal.contactus.alert}
            </Alert>
          )}
        </div>
        <h1>{currentLocal.auth.Signin}</h1>
        <label htmlFor="email">{currentLocal.auth.email}</label>
        <input
          className="dark_input w-100"
          type="email"
          id="email"
          onChange={saveData}
          value={email}
        />
        <label htmlFor="passwod" className="mt-3">
          {currentLocal.auth.password}
        </label>
        <input
          className="dark_input w-100"
          type="password"
          id="password"
          onChange={saveData}
          value={password}
        />
        <Container fluid className="m-0 p-0">
          <Row className="m-0 p-0">
            <Col md={8} className="m-0 p-0">
              <input
                type="checkbox"
                id="Remember"
                name="Remember"
                value="1"
                onChange={saveData}
                className="mt-0 radio_button"
              />
              <label
                htmlFor="Remember"
                className={
                  currentLocal.language === "English"
                    ? "Remember"
                    : "ar_Remember"
                }
              >
                {currentLocal.auth.RememberPassword}
              </label>
            </Col>
            <Col md={4} className="m-0 p-0">
              <Link to="forgetpassword" className="text-decoration-none">
                <p className="forrget_password mt-3">
                  {currentLocal.auth.forgetPassword}
                </p>
              </Link>
            </Col>
          </Row>
        </Container>
        <div className="button mt-5">
          <button type="submit">
            {currentLocal.language === "English" ? (
              <>
                {currentLocal.auth.login}
                <img src={rightArrow} alt="rightArrow" />
              </>
            ) : (
              <>
                {currentLocal.auth.login}
                <img src={leftArrow} alt="leftArrow" />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginContainer;
