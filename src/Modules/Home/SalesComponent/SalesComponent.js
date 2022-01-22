import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import weeklyOffer from "../../../Resources/Assets/img/Group 823.png";
import Banners from "../../../Resources/Assets/img/Banners.png";
import "./SalesComponent.css";

function SalesComponent() {
  return (
    <section className="sales_component pl pr">
      <Container fluid className="p-0">
        <Row>
          <Col md={6}>
            <img src={Banners} alt="Banners" className="w-100" />
          </Col>
          <Col md={6}>
            <img src={weeklyOffer} alt="weeklyOffer" className="w-100" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default SalesComponent;
