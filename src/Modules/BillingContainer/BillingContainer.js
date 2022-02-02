import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../Common/Footer/Footer";
import Navbar from "../Common/Navbar/Navba";
import BillingDetails from "./components/BillingDetails/BillingDetails";
import YourOrder from "./components/YourOrder/YourOrder";
import "./BillingContainer.css";
function BillingContainer() {
  return (
    <section className="billing_container">
      <Navbar />
      <Container fluid className="pr pl">
        <Row className="px-0">
          <Col md={9} >
            <BillingDetails />
          </Col>
          <Col md={3} >
            <YourOrder />
          </Col>
        </Row>
      </Container>
      <Footer />
    </section>
  );
}

export default BillingContainer;
