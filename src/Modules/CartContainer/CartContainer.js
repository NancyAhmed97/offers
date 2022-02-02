import React from "react";
import Navbar from "../Common/Navbar/Navba";
import Footer from "../Common/Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import "./CartContainer.css";
// import CartDetails from "./Components/CartDetails/CartDetails";
import CartTotal from "../CartTotal/CartTotal";
function CartContainer() {
  return (
    <section className="cart_container">
      <Navbar />
      <Container fluid className="pr pl">
        <Row className="px-0">
          <Col md={9}>
            {/* <CartDetails /> */}
          </Col>
          <Col md={3}>
            <CartTotal />
          </Col>
        </Row>
      </Container>
      <Footer />
    </section>
  );
}

export default CartContainer;
