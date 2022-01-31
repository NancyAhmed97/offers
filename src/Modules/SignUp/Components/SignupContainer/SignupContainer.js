import React, { useState } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useSelector } from "react-redux";
import rightArrow from "../../../../Resources/Assets/img/Icon feather-arrow-left.svg";
import leftArrow from "../../../../Resources/Assets/img/leftArrow.svg";
import "./SignupContainer.css";
function SignupContainer() {
  const { currentLocal } = useSelector((state) => state.currentLocal);
  const [alert, setAlert] = useState(false);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [acceptTerms, setAcceptTerms] = useState("");
  const saveData = (e) => {
    if (e.target.id === "email") {
      setEmail(e.target.value);
      // setDangerAlert(false)
      // setSuccessAlert(false)
      setAlert(false);
      // setAlertMsg("")
    } else if (e.target.id === "firstName") {
      setFirstName(e.target.value);
      setAlert(false);
    } else if (e.target.id === "lastName") {
      setLastName(e.target.value);
      setAlert(false);
    
    } else if (e.target.id === "phone") {
      setPhone(e.target.value);
      setAlert(false);
    
    } 
    else if (e.target.id === "password") {
      setPassword(e.target.value);
      setAlert(false);
    } else if (e.target.id === "ConfirmPassword") {
      setConfirmPassword(e.target.value);
      setAlert(false);
    
    } else if (e.target.id === "acceptTerms") {
      setAcceptTerms(e.target.value);
      setAlert(false);
    }
  };
  const sendData = (e) => {
    e.preventDefault();
    if(!email||!firstName||!lastName||!password||!ConfirmPassword||!phone||!acceptTerms){
      setAlert(true)
    }else{
      console.log("hi");
      console.log(acceptTerms);
    }
  };
  console.log(email , firstName ,lastName,phone,password);
  return (
    <div className={currentLocal.language==="English"?"signup_container pr":"pl signup_container ar_signup_container"}>
      <form onSubmit={sendData}>
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
              <label htmlFor="phone" className="mt-3">{currentLocal.auth.phoneNumber}</label>
              <PhoneInput
                country={"eg"}
                dropdownStyle={{ textAlign:currentLocal.language==="English"? "left":"center" }}
                className="w-100 dark_input"
                id="phone"
                onChange={saveData}
                value={phone}
              />
            </Col>
            <Col md={12} className="p-0">
              <label htmlFor="password" className="mt-3">{currentLocal.auth.password}</label>
              <input
                className="dark_input w-100"
                type="password"
                id="password"
                onChange={saveData}
                value={password}
              />
            </Col>
            <Col md={12} className="p-0">
              <label htmlFor="Confirm Password" className="mt-3">{currentLocal.auth.ConfirmPassword}</label>
              <input
                className="dark_input w-100"
                type="password"
                id="Confirm Password"
                onChange={saveData}
                value={ConfirmPassword}
              />
            </Col>
            <Col md={12} className="p-0 d-flex mt-3">
      
              <input
                type="radio"
                id="acceptTerms"
                name="Remember"
                value="1"
                onChange={saveData}
                className="mt-0 radio_button"
              />
                      <label htmlFor="Confirm Password" className="Confirm_Password">{currentLocal.auth.gree}
              <span>{currentLocal.auth.terms}</span>
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
