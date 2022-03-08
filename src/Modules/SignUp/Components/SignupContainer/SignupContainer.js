import axios from "axios";
import React, { useState } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import rightArrow from "../../../../Resources/Assets/img/Icon feather-arrow-left.svg";
import leftArrow from "../../../../Resources/Assets/img/leftArrow.svg";
import "./SignupContainer.css";
function SignupContainer() {
  const { currentLocal } = useSelector((state) => state.currentLocal);
  const [alert, setAlert] = useState(false);
  const [passState, setPassState] = useState(false);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [successAlert, setSuccessAlert] = useState("");
  const [alertMsg, setAlertMsg] = useState("");
  const [dangerAlert, setDangerAlert] = useState("");
  const [countryId, setCountryId] = useState("");
  const [phone, setPhone] = useState("");
  const [acceptTerms, setAcceptTerms] = useState("");
  const saveData = (e) => {
    if (e.target.id === "email") {
      setEmail(e.target.value);
      setDangerAlert(false);
      setSuccessAlert(false);
      setAlert(false);
      setAlertMsg("");
    } else if (e.target.id === "firstName") {
      setFirstName(e.target.value);
      setDangerAlert(false);
      setSuccessAlert(false);
      setAlert(false);
      setAlertMsg("");
      setAlert(false);
    } else if (e.target.id === "lastName") {
      setLastName(e.target.value);
      setDangerAlert(false);
      setSuccessAlert(false);
      setAlert(false);
      setAlertMsg("");
      setAlert(false);
    } else if (e.target.id === "phone") {
      setPhone(e.target.value);
      setDangerAlert(false);
      setSuccessAlert(false);
      setAlert(false);
      setAlertMsg("");
      setAlert(false);
    } else if (e.target.id === "password") {
      setPassword(e.target.value);
      setDangerAlert(false);
      setSuccessAlert(false);
      setAlert(false);
      setAlertMsg("");
      setAlert(false);
    } else if (e.target.id === "ConfirmPassword") {
      setConfirmPassword(e.target.value);
      setDangerAlert(false);
      setSuccessAlert(false);
      setAlert(false);
      setAlertMsg("");
      setAlert(false);
    } else if (e.target.id === "acceptTerms") {
      setAcceptTerms(e.target.value);
      setDangerAlert(false);
      setSuccessAlert(false);
      setAlert(false);
      setAlertMsg("");
      setAlert(false);
    }
  };
  const sendData = (e) => {
    e.preventDefault();
    if (
      !email ||
      !firstName ||
      !lastName ||
      !password ||
      !ConfirmPassword ||
      !phone ||
      !acceptTerms
    ) {
      setAlert(true);
    } else {
      axios({
        method: "post",
        url: "https://offers.com.fig-leaf.net/api/v1/signup",
        data: {
          name: firstName,
          surname: firstName + lastName,
          email: email,
          mobile: phone,
          password: password,
          phone_code:countryId ,
        },
      })
        .then((res) => {
          if (res.data.success === true) {
            setSuccessAlert(true);
            setAlertMsg(res.data.message);
            window.scrollTo(0, 0);
            setEmail("");
            setLastName("");
            setFirstName("");
            setConfirmPassword("");
            setPassword("");
            setAcceptTerms("");
          }
        })
        .catch((error) => {
          if (error.response) {
            window.scrollTo(0, 0);
          }
        });
    }
  };
  return (
    <div
      className={
        currentLocal.language === "English"
          ? "signup_container pr"
          : "pl signup_container ar_signup_container"
      }
    >
      <form onSubmit={sendData}>
        <Alert variant={successAlert ? "success " : dangerAlert && "danger"}>
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
        <h1>{currentLocal.auth.signup}</h1>

        <Container fluid className="p-0 m-0">
          <Row className="m-0 p-0">
            <Col md={12} className="p-0 m-0">
              <label htmlFor="email">{currentLocal.auth.email}</label>
              <input
                className="dark_input w-100"
                type="email"
                id="email"
                onChange={saveData}
                value={email}
              />{" "}
            </Col>
            <Col md={6} className="p-0 m-0">
              <label htmlFor="firstName" className="mt-3">
                {currentLocal.auth.firstName}
              </label>
              <input
                className="dark_input w-100"
                type="text"
                id="firstName"
                onChange={saveData}
                value={firstName}
              />
            </Col>
            <Col md={6} className="last_name">
              <label htmlFor="lastName" className="mt-3">
                {currentLocal.auth.lastName}
              </label>
              <input
                className="dark_input w-100 "
                type="text"
                id="lastName"
                onChange={saveData}
                value={lastName}
              />
            </Col>
            <Col md={12} className="p-0">
              <label htmlFor="phone" className="mt-3">
                {currentLocal.auth.phoneNumber}
              </label>
              <PhoneInput
                country={"eg"}
                dropdownStyle={{
                  textAlign:
                    currentLocal.language === "English" ? "left" : "center",
                }}
                className="w-100 dark_input"
                id="phone"
                onChange={(value, country) => {
                  setCountryId(country.dialCode);
                  setPhone(value);
                  setAlert(false);
                }}
                value={phone}
              />

            </Col>
            <Col md={12} className="p-0">
              <label htmlFor="password" className="mt-3">
                {currentLocal.auth.password}
              </label>
              <input
                className="dark_input w-100"
                type="password"
d              />
            </Col>
            <Col md={12} className="p-0">
              {passState && (
                <p className="mt-3 passState">
                  {currentLocal.resetPassword.passMatch}
                </p>
              )}
              <label htmlFor="Confirm Password" className="mt-3">
                {currentLocal.auth.ConfirmPassword}
              </label>
              <input
                className="dark_input w-100"
                type="password"
                id="ConfirmPassword"
                onChange={saveData}
                value={ConfirmPassword}
                onBlur={() => {
                  if (password !== ConfirmPassword) {
                    setPassState(true);
                  } else {
                    setPassState(false);
                  }
                }}
              />
            </Col>
            <Col md={12} className="p-0 d-flex mt-3">
              <input
                type="checkbox"
                id="acceptTerms"
                name="Remember"
                value="1"
                onChange={saveData}
                className="mt-0 radio_button"
              />
              <label htmlFor="Confirm Password" className="Confirm_Password">
                {currentLocal.auth.gree}
                <Link
                  to="/terms"
                  className="text-decoration-none"
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                >
                  <span>{currentLocal.auth.terms}</span>
                </Link>
                {currentLocal.auth.seePrivacy}
              </label>
            </Col>
            <Col md={12}>
              <div className="button mt-5">
                <button type="submit">
                  {currentLocal.language === "English" ? (
                    <>
                      {currentLocal.auth.signup}
                      <img src={rightArrow} alt="rightArrow" />
                    </>
                  ) : (
                    <>
                      {currentLocal.auth.signup}
                      <img src={leftArrow} alt="leftArrow" />
                    </>
                  )}
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </form>
    </div>
  );
}

export default SignupContainer;
