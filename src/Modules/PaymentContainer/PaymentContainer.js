import React from "react";
import Footer from "../Common/Footer/Footer";
import Navbar from "../Common/Navbar/Navba";
import { Col, Container, Row } from "react-bootstrap";
import PaymentDetails from "./Components/PaymentDetails/PaymentDetails";
import "./PaymentContainer.css";
import OrderSummery from "./Components/OrderSummery/OrderSummery";
function PaymentContainer() {
  return (
    <section className="payment_container">
      <Navbar />
      <Container fluid className="pr pl">
        <Row className="px-0">
          <Col md={9}>
            <PaymentDetails />
          </Col>
          <Col md={3} >
            <OrderSummery />
          </Col>
        </Row>
      </Container>
      <Footer />
    </section>
  );
}

export default PaymentContainer;