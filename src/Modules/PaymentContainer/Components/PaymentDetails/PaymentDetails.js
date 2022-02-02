import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import "react-datepicker/dist/react-datepicker.css";
import paymentimg from "../../../../Resources/Assets/img/Group 8168.png";
import madaImg from "../../../../Resources/Assets/img/Group 8175.png";
import appleImg from "../../../../Resources/Assets/img/Group 8177.png";
import stcImg from "../../../../Resources/Assets/img/Image 4.png";
import "./PaymentDetails.css";
function PaymentDetails() {
  const { currentLocal } = useSelector((state) => state.currentLocal);
  const [startDate, setStartDate] = useState(new Date());
  const [nameOnCard, setNameOnCard] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cvv, setCvv] = useState("");
  const saveData = (e) => {
    if (e.target.id === "nameOnCard") {
      setNameOnCard(e.target.value);
    } else if (e.target.id === "cardNumber") {
      setCardNumber(e.target.value);
    } else if (e.target.id === "cvv") {
        setCvv(e.target.value);
    }
  };
  console.log(startDate);
  return (
    <div
      className={
        currentLocal.language === "English"
          ? "payment_details mt-4 mb-5"
          : "payment_details mt-4 mb-5 ar_payment_details"
      }
    >
      <h1>{currentLocal.payment.paymentDetails}</h1>
      <form>
        <Container fluid className="p-0">
          <Row className="p-0 payment_check_container">
            <Col md={10} className="position-relative">
              <input type={"radio"} name="paymenType" className="mt-0" />
              <label className="checkbox_label">
                {currentLocal.payment.payWithBankCards}
              </label>
            </Col>
            <Col md={2}>
              <img src={paymentimg} alt="paymentimg" />
            </Col>
          </Row>
          <Row>
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
            <Col md={3} >
            <label htmlFor="expiryDate" className="mt-3">
                {currentLocal.payment.expiryDate}
              </label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
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
        </Container>
      </form>
      <div className="payment_type">
        <div className="mada_raio">
          <input type={"radio"} name="paymenType" className="mt-0" />
          <label className="mada_label">{currentLocal.payment.madaGateway}</label>
        </div>
        <div className="mada_img">
          <img src={madaImg} alt="madaImg" />
        </div>
      </div>
      <div className="payment_type">
        <div className="pay_raio">
          <input type={"radio"} name="paymenType" className="mt-0" />
          <label className="mada_label">{currentLocal.payment.applePay}</label>
        </div>
        <div className="mada_img">
          <img src={appleImg} alt="appleImg" />
        </div>
      </div>
      <div className="payment_type">
        <div className="pay_raio">
          <input type={"radio"} name="paymenType" className="mt-0" />
          <label className="mada_label">{currentLocal.payment.applePay}</label>
        </div>
        <div className="mada_img">
          <img src={stcImg} alt="stcImg" />
        </div>
      </div>
    </div>
  );
}

export default PaymentDetails;
