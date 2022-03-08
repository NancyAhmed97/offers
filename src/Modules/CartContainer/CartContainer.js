import React, { useEffect, useState } from "react";
import Navbar from "../Common/Navbar/Navba";
import Footer from "../Common/Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import "./CartContainer.css";
import CartDetails from "./Components/CartDetails/CartDetails";
import CartTotal from "../CartTotal/CartTotal";
import axios from "axios";
import {  useSelector } from "react-redux";
function CartContainer() {
  var { auth } = useSelector((state) => state);
  const [total, setTotal] = useState({});
  useEffect(() => {
    axios({
      method: "get",
      url: `https://offers.com.fig-leaf.net/api/v1/cart`,
      headers: { Authorization: `Bearer ${auth.authorization.access_token}` },
    }).then((res) => {
      if (res.data.success === true) {
        setTotal(res.data.data.cart)

      }
    });

  }, [auth]);

  return (
    <section className="cart_container">
      <Navbar />
      <Container fluid className="pr pl">
        <Row className="px-0">
          <Col md={9}>
            <CartDetails  />
          </Col>
          <Col md={3}>
            <CartTotal total={total} />
          </Col>
        </Row>
      </Container>
      <Footer />
    </section>
  );
}

export default CartContainer;
