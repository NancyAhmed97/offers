import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { Alert, Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import "react-datepicker/dist/react-datepicker.css";
import paymentimg from "../../../../Resources/Assets/img/Group 8168.png";
import madaImg from "../../../../Resources/Assets/img/Group 8175.png";
import appleImg from "../../../../Resources/Assets/img/Group 8177.png";
import stcImg from "../../../../Resources/Assets/img/Image 4.png";
import "./PaymentDetails.css";
function PaymentDetails({
  sendDataToParent,
  nameOnCardToParent,
  cardNumberToParent,
  cvvToParent,
  expiryMonthToParent,
  expiryYearToParent,
  alert,
}) {
  const { currentLocal } = useSelector((state) => state.currentLocal);
  const [startDate, setStartDate] = useState(new Date());
  const [nameOnCard, setNameOnCard] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [activeState, setActiveState] = useState("visa");
  const [cvv, setCvv] = useState("");
  const sentPaymentType = (e) => {
    sendDataToParent(e.target.value);
  };
  const saveData = (e) => {
    if (e.target.id === "nameOnCard") {
      setNameOnCard(e.target.value);
      nameOnCardToParent(e.target.value);
    } else if (e.target.id === "cardNumber") {
      setCardNumber(e.target.value);
      cardNumberToParent(e.target.value);
    } else if (e.target.id === "cvv") {
      setCvv(e.target.value);
      cvvToParent(e.target.value);
    }
  };
  console.log(activeState);
  return (
    <div
      className={
        currentLocal.language === "English"
          ? "payment_details mt-4 mb-5"
          : "payment_details mt-4 mb-5 ar_payment_details"
      }
    >
      <h1 className="my-4 px-2">{currentLocal.payment.paymentDetails}</h1>
      <form>
        {localStorage.getItem("orderCode") && (
          <div className="text-center">
            <p className="order_text">
              Please save the Code to can track your order
              <span className="orderNumbers">
                {" "}
                {localStorage.getItem("orderCode")}
              </span>
            </p>
          </div>
        )}
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
        <div
          className="bank_card_form"
          onClick={() => {
            setActiveState("visa");
      
            
          }}
        >
           {" "}
          <input
            type="radio"
            id="html"
            name="fav_language"
            value="visa"
            onChange={sentPaymentType}
          />
           {" "}
          <label htmlFor="html" className="payment_label">
            {currentLocal.payment.payWithBankCards}
          </label>
          <div className="image float-end mt-4">
            <img src={paymentimg} alt="paymentimg" />
          </div>
          <br />
          {activeState === "visa" && (
            <>
              <Row className="payment_check_container">
                <Col md={6}>
                  <label htmlFor="nameOnCard" className="mt-3">
                    {currentLocal.payment.nameOnCard}
                  </label>
                  <input
                    className="dark_input w-100"
                    type="text"
                    id="nameOnCard"
                    onChange={saveData}
                    value={nameOnCard}
                  />{" "}
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <label htmlFor="cardNumber" className="mt-3">
                    {currentLocal.payment.cardNumber}
                  </label>
                  <input
                    className="dark_input w-100"
                    type="number"
                    id="cardNumber"
                    onChange={saveData}
                    value={cardNumber}
                  />{" "}
                </Col>
              </Row>
              <Row>
                <Col md={3}>
                  <label htmlFor="expiryDate" className="mt-3">
                    {currentLocal.payment.expiryDate}
                  </label>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => {
                      const expiryMonth = new Date(date);
                      setStartDate(date);

                      const month = expiryMonth.getMonth() + 1;

                      const result =
                        expiryMonth.getMonth().toString().length === 1
                          ? "0" + month
                          : month;

                      expiryMonthToParent(result);
                      const d = new Date(startDate);
                      expiryYearToParent(d.getFullYear());
                    }}
                    className="dark_input w-100"
                    id="expiryDate"
                  />
                </Col>
                <Col md={9}>
                  <label htmlFor="cvv" className="mt-3 d-block">
                    {currentLocal.payment.cvv}
                  </label>
                  <input
                    className="dark_input w-25"
                    type="number"
                    id="cvv"
                    onChange={saveData}
                    value={cvv}
                  />{" "}
                </Col>
              </Row>
            </>
          )}
        </div>
        <div
          className="mda_form mt-3"
          onClick={() => {
            setActiveState("mada");
      
            
          }}
        >
           {" "}
          <input
            type="radio"
            id="madaGateway"
            name="fav_language"
            value="mada"
            onChange={sentPaymentType}
          />
           {" "}
          <label htmlFor="madaGateway" className="payment_label">
            {currentLocal.payment.madaGateway}
          </label>
          <div className="image float-end mt-4">
            <img src={madaImg} alt="madaImg" />
          </div>
          <br />
          {activeState === "mada" && (
            <>
              <Row className="payment_check_container">
                <Col md={6}>
                  <label htmlFor="nameOnCard" className="mt-3">
                    {currentLocal.payment.nameOnCard}
                  </label>
                  <input
                    className="dark_input w-100"
                    type="text"
                    id="nameOnCard"
                    onChange={saveData}
                    value={nameOnCard}
                  />{" "}
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <label htmlFor="cardNumber" className="mt-3">
                    {currentLocal.payment.cardNumber}
                  </label>
                  <input
                    className="dark_input w-100"
                    type="number"
                    id="cardNumber"
                    onChange={saveData}
                    value={cardNumber}
                  />{" "}
                </Col>
              </Row>
              <Row className="pb-3">
                <Col md={3}>
                  <label htmlFor="expiryDate" className="mt-3">
                    {currentLocal.payment.expiryDate}
                  </label>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => {
                      const expiryMonth = new Date(date);
                      setStartDate(date);

                      const month = expiryMonth.getMonth() + 1;

                      const result =
                        expiryMonth.getMonth().toString().length === 1
                          ? "0" + month
                          : month;

                      expiryMonthToParent(result);
                      const d = new Date(startDate);
                      expiryYearToParent(d.getFullYear());
                    }}
                    className="dark_input w-100"
                    id="expiryDate"
                  />
                </Col>
                <Col md={9}>
                  <label htmlFor="cvv" className="mt-3 d-block">
                    {currentLocal.payment.cvv}
                  </label>
                  <input
                    className="dark_input w-25"
                    type="number"
                    id="cvv"
                    onChange={saveData}
                    value={cvv}
                  />{" "}
                </Col>
              </Row>
            </>
          )}{" "}
        </div>
        <div
          className="apple_form mt-3"
          onClick={() => {
            setActiveState("apple");
      
            
          }}
        >
          <input
            type="radio"
            id="applePay"
            name="fav_language"
            value="applepay"
            onChange={sentPaymentType}
          />
           {" "}
          <label htmlFor="applePay" className="payment_label">
            {currentLocal.payment.applePay}
          </label>
          <div className="image float-end mt-4">
            <img src={appleImg} alt="appleImg" />
          </div>
          <br />
          {activeState === "apple" && (
            <>
              <Row className="payment_check_container">
                <Col md={6}>
                  <label htmlFor="nameOnCard" className="mt-3">
                    {currentLocal.payment.nameOnCard}
                  </label>
                  <input
                    className="dark_input w-100"
                    type="text"
                    id="nameOnCard"
                    onChange={saveData}
                    value={nameOnCard}
                  />{" "}
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <label htmlFor="cardNumber" className="mt-3">
                    {currentLocal.payment.cardNumber}
                  </label>
                  <input
                    className="dark_input w-100"
                    type="number"
                    id="cardNumber"
                    onChange={saveData}
                    value={cardNumber}
                  />{" "}
                </Col>
              </Row>
              <Row className="pb-3">
                <Col md={3}>
                  <label htmlFor="expiryDate" className="mt-3">
                    {currentLocal.payment.expiryDate}
                  </label>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => {
                      const expiryMonth = new Date(date);
                      setStartDate(date);

                      const month = expiryMonth.getMonth() + 1;

                      const result =
                        expiryMonth.getMonth().toString().length === 1
                          ? "0" + month
                          : month;

                      expiryMonthToParent(result);
                      const d = new Date(startDate);
                      expiryYearToParent(d.getFullYear());
                    }}
                    className="dark_input w-100"
                    id="expiryDate"
                  />
                </Col>
                <Col md={9}>
                  <label htmlFor="cvv" className="mt-3 d-block">
                    {currentLocal.payment.cvv}
                  </label>
                  <input
                    className="dark_input w-25"
                    type="number"
                    id="cvv"
                    onChange={saveData}
                    value={cvv}
                  />{" "}
                </Col>
              </Row>
            </>
          )}{" "}
        </div>
        <div
          className="stc_form mt-3"
          onClick={() => {
            setActiveState("stcPay");
        
            
          }}
        >
          <input
            type="radio"
            id="stcPay"
            name="fav_language"
            value="stc_pay"
            onChange={sentPaymentType}
          />
           {" "}
          <label htmlFor="stcPay" className="payment_label">
            {currentLocal.payment.stcPay}
          </label>
          <div className="image float-end mt-4">
            <img src={stcImg} alt="stcImg" />
          </div>
          {activeState === "stcPay" && (
            <>
              <Row className="payment_check_container">
                <Col md={6}>
                  <label htmlFor="nameOnCard" className="mt-3">
                    {currentLocal.payment.nameOnCard}
                  </label>
                  <input
                    className="dark_input w-100"
                    type="text"
                    id="nameOnCard"
                    onChange={saveData}
                    value={nameOnCard}
                  />{" "}
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <label htmlFor="cardNumber" className="mt-3">
                    {currentLocal.payment.cardNumber}
                  </label>
                  <input
                    className="dark_input w-100"
                    type="number"
                    id="cardNumber"
                    onChange={saveData}
                    value={cardNumber}
                  />{" "}
                </Col>
              </Row>
              <Row className="pb-3">
                <Col md={3}>
                  <label htmlFor="expiryDate" className="mt-3">
                    {currentLocal.payment.expiryDate}
                  </label>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => {
                      const expiryMonth = new Date(date);
                      setStartDate(date);

                      const month = expiryMonth.getMonth() + 1;

                      const result =
                        expiryMonth.getMonth().toString().length === 1
                          ? "0" + month
                          : month;

                      expiryMonthToParent(result);
                      const d = new Date(startDate);
                      expiryYearToParent(d.getFullYear());
                    }}
                    className="dark_input w-100"
                    id="expiryDate"
                  />
                </Col>
                <Col md={9}>
                  <label htmlFor="cvv" className="mt-3 d-block">
                    {currentLocal.payment.cvv}
                  </label>
                  <input
                    className="dark_input w-25"
                    type="number"
                    id="cvv"
                    onChange={saveData}
                    value={cvv}
                  />{" "}
                </Col>
              </Row>
            </>
          )}{" "}
        </div>
      </form>
    </div>
  );
}

export default PaymentDetails;
