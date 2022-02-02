import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import PhoneInput from "react-phone-input-2";
import { Link } from "react-router-dom";
import "react-phone-input-2/lib/style.css";
import "./BillingDetails.css";
function BillingDetails() {
  const { currentLocal } = useSelector((state) => state.currentLocal);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [AddressType, setAddressType] = useState("");
  const [orderNode, setOrderNode] = useState("");
  const [acceptTerms, setAcceptTerms] = useState("");
  const [alert, setAlert] = useState(false);
  const saveData = (e) => {
    if (e.target.id === "firstName") {
      setFirstName(e.target.value);
      setAlert(false);
    } else if (e.target.id === "lastName") {
      setLastName(e.target.value);
      setAlert(false);
    } else if (e.target.id === "country") {
      setCountry(e.target.value);
      setAlert(false);
    } else if (e.target.id === "city") {
      setCity(e.target.value);
      setAlert(false);
    } else if (e.target.id === "streetAddress") {
      setStreetAddress(e.target.value);
      setAlert(false);
    } else if (e.target.id === "email") {
      setEmail(e.target.value);
      setAlert(false);
    } else if (e.target.id === "orderNode") {
      setOrderNode(e.target.value);
      setAlert(false);
    } else if (e.target.id === "acceptTerms") {
      setAcceptTerms(e.target.value);
      setAlert(false);
    }
  };
  const sendData = (e) => {
    e.preventDefault();
    console.log(
      firstName,
      lastName,
      country,
      city,
      email,
      phone,
      orderNode,
      acceptTerms,
      alert
    );
    console.log(AddressType);
  };
  return (
    <div
      className={
        currentLocal.language === "English"
          ? "billing_details mt-4 mb-5"
          : "billing_details mt-4 mb-5 ar_billing_details"
      }
    >
      <h1>{currentLocal.billing.billingDetails}</h1>
      <form onSubmit={sendData}>
        {/* <div className="errorMsg">
          {alert && (
            <Alert
              className={currentLocal.language === "العربيه" && "text-right"}
              variant={"danger"}
            >
              *{currentLocal.auth.alert}
            </Alert>
          )}
        </div> */}
        <Container fluid className="p-0">
          <Row className="p-0">
            <Col md={6}>
              <label htmlFor="firstName" className="mt-3">
                {currentLocal.auth.firstName}
              </label>
              <input
                className="dark_input w-100"
                type="text"
                id="firstName"
                onChange={saveData}
                value={firstName}
              />{" "}
            </Col>
            <Col md={6}>
              <label htmlFor="lastName" className="mt-3">
                {currentLocal.auth.lastName}
              </label>
              <input
                className="dark_input w-100 "
                type="text"
                id="lastName"
                onChange={saveData}
                value={lastName}
              />{" "}
            </Col>
            <Col md={6}>
              <label htmlFor="country" className="mt-3">
                {currentLocal.billing.country}
              </label>
              <input
                className="dark_input w-100 "
                type="text"
                id="country"
                onChange={saveData}
                value={country}
              />{" "}
            </Col>
            <Col md={6}>
              <label htmlFor="city" className="mt-3">
                {currentLocal.billing.city}
              </label>
              <input
                className="dark_input w-100 "
                type="text"
                id="city"
                onChange={saveData}
                value={city}
              />{" "}
            </Col>
            <Col md={12}>
              <label htmlFor="streetAddress" className="mt-3">
                {currentLocal.billing.streetAddress}
              </label>
              <input
                className="dark_input w-100 "
                type="text"
                id="streetAddress"
                onChange={saveData}
                value={streetAddress}
              />{" "}
            </Col>
            <Col md={12}>
              <label htmlFor="addressType" className="mt-3">
                {currentLocal.billing.addressType}
              </label>

              <div>
                <input
                  className="dark_input w-100 "
                  type="radio"
                  id="AddressType "
                  onChange={(e) => {
                    setAddressType(e.target.value);
                    setAlert(false);
                  }}
                  value="1"
                  name="addressType"
                />{" "}
                <label className="billing_home">
                  {currentLocal.billing.home}
                </label>
                <input
                  className="dark_input w-100 "
                  type="radio"
                  id="AddressType "
                  onChange={(e) => {
                    setAddressType(e.target.value);
                    setAlert(false);
                  }}
                  value="2"
                  name="addressType"
                />{" "}
                <label className="billing_work">
                  {currentLocal.billing.work}
                </label>
              </div>
            </Col>
            <Col md={6}>
              <label htmlFor="orderNotes" className="mt-3">
                {currentLocal.billing.mobile}
              </label>
              <PhoneInput
                country={"eg"}
                dropdownStyle={{
                  textAlign:
                    currentLocal.language === "English" ? "left" : "center",
                }}
                className="w-100 dark_input"
                id="phone"
                onChange={(e) => {
                  setPhone(e);
                  setAlert(false);
                }}
                value={phone}
              />
            </Col>
            <Col md={6}>
              <label htmlFor="email" className="mt-3">
                {currentLocal.auth.email}
              </label>
              <input
                className="dark_input w-100 "
                type="email"
                id="email"
                onChange={saveData}
                value={email}
              />{" "}
            </Col>
            <Col md={12}>
              <label className="mt-3">{currentLocal.billing.orderNotes}</label>
              <textarea
                id="orderNode"
                name="orderNode"
                rows="5"
                cols="109"
                onChange={saveData}
              ></textarea>
            </Col>
            <Col md={12}>
              <input
                type={"checkbox"}
                className="mt-0"
                onChange={saveData}
                id="acceptTerms"
                value="1"
              />
              <label className="accept_terms">
                {currentLocal.billing.readAndAgree}
                <Link
                  to="/terms"
                  className="text-decoration-none"
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                >
                  <span>{currentLocal.auth.terms}</span>
                </Link>{" "}
              </label>
            </Col>
          </Row>
        </Container>
      </form>
    </div>
  );
}

export default BillingDetails;
