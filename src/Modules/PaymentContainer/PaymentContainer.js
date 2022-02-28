import React, { useState } from "react";
import Footer from "../Common/Footer/Footer";
import Navbar from "../Common/Navbar/Navba";
import { Col, Container, Row } from "react-bootstrap";
import PaymentDetails from "./Components/PaymentDetails/PaymentDetails";
import "./PaymentContainer.css";
import OrderSummery from "./Components/OrderSummery/OrderSummery";
function PaymentContainer() {
  const [paymentType, setPaymentType] = useState("");
  const [nameOnCard, setNameOnCard] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardExpiryMonth, setCardExpiryMonth] = useState("");
  const [expiryYear, setExpiryYear] = useState("");
  const [alert, setalert] = useState("");
  const [setuccessAlert, setSuccessAlert] = useState("");
    const [alertMsg, setAlertMsg] = useState("");
  const [dangerAlert, setDangerAlert] = useState(""); 
  const sendDataToParent = (val) => {
    setPaymentType(val);
  };
  const nameOnCardToParent = (val) => {
    setNameOnCard(val);
  };
  const cardNumberToParent = (val) => {
    setCardNumber(val);
  };
  const cvvToParent = (val) => {
    setCvv(val);
  };
  const expiryMonthToParent = (val) => {
    setCardExpiryMonth(val);
  };
  const expiryYearToParent=(val)=>{
    setExpiryYear(val)
  }
  const  alertState=(val)=>{
    setalert(val);
  }
  const SuccessAlert=(val)=>{
    setSuccessAlert(val)
  }
  const AlertMsg=(val)=>{
    setAlertMsg(val)
  }
  const DangerAlert=(val)=>{
    setDangerAlert(val)
  }
  return (
    <section className="payment_container">
      <Navbar />
      <Container fluid className="pr pl">
        <Row className="px-0">
          <Col md={9}>
            <PaymentDetails
              sendDataToParent={sendDataToParent}
              nameOnCardToParent={nameOnCardToParent}
              cardNumberToParent={cardNumberToParent}
              cvvToParent={cvvToParent}
              expiryMonthToParent={expiryMonthToParent}
              expiryYearToParent={expiryYearToParent}
              alert={alert}
              setuccessAlert={setuccessAlert}
              dangerAlert={dangerAlert}
              alertMsg={alertMsg}
            />
          </Col>
          <Col md={3}>
            <OrderSummery
              paymentType={paymentType}
              nameOnCard={nameOnCard}
              cardNumber={cardNumber}
              cvv={cvv}
              cardExpiryMonth={cardExpiryMonth}
              expiryYear={expiryYear}
              alertState={alertState}
              SuccessAlert={SuccessAlert}
              AlertMsg={AlertMsg}
              DangerAlert={DangerAlert}
            />
          </Col>
        </Row>
      </Container>
      <Footer />
    </section>
  );
}

export default PaymentContainer;
