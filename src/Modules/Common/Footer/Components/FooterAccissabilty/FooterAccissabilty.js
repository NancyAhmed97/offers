import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import shipping from "../../../../../Resources/Assets/img/Forma.svg"
import  moneyBack from "../../../../../Resources/Assets/img/Forma1.svg"
import  lowerPricing from "../../../../../Resources/Assets/img/Forma2.svg"
import  support from "../../../../../Resources/Assets/img/Forma3.svg"
import { useSelector } from "react-redux";
import "./FooterAccissabilty.css";
function FooterAccissabilty() {
  const { currentLocal } = useSelector((state) => state.currentLocal);
  return (
    <div className="footer_accissabilty">
      <Container fluid className="pl pr">
        <Row>
          <Col md={3}>
            <div className="footer_accissabilty_container">
                <img src={shipping} alt="shipping" />
              <p>{currentLocal.footer.freeShippig}</p>
            </div>
          </Col>
          <Col md={3}>
          <div className="footer_accissabilty_container">
                <img src={moneyBack} alt="moneyBack" />
              <p>{currentLocal.footer.moneyBack}</p>
            </div>
          </Col>
          <Col md={3}>
          <div className="footer_accissabilty_container">
                <img src={lowerPricing} alt="moneyBack" />
              <p>{currentLocal.footer.lowerPrice}</p>
            </div>
          </Col>
          <Col md={3}>
          <div className="footer_accissabilty_container">
                <img src={support} alt="moneyBack" />
              <p>{currentLocal.footer.support}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default FooterAccissabilty;
