import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../Common/Footer/Footer";
import Navbar from "../Common/Navbar/Navba";
import BillingDetails from "./components/BillingDetails/BillingDetails";
import YourOrder from "./components/YourOrder/YourOrder";
import "./BillingContainer.css";
function BillingContainer() {
  const [alert, setAlert] = useState("");
const alertState=(val)=>{
  setAlert(val);
}
  return (
    <section className="billing_container">
      <Navbar />
      <Container fluid className="pr pl">
        <Row className="px-0">
          <Col md={9}>
            <BillingDetails alert={alert} />
          </Col>
          <Col md={3}>
            <YourOrder alertState={alertState} />
          </Col>
        </Row>
      </Container>
      <Footer />
    </section>
  );
}

export default BillingContainer;
