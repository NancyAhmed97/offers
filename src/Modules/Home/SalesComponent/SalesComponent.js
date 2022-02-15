import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./SalesComponent.css";
function SalesComponent({banner}) {
  const url = "https://offers.com.fig-leaf.net";
  return (
    <section className="sales_component pl pr">
      <Container fluid className="p-0">
        <Row>
          <Col md={6}>
            <img src={banner.right_banner_image!==undefined&&url+banner.left_banner_image} alt="Banners" className="w-100" />
          </Col>
          <Col md={6}>
          <img src={banner.right_banner_image!==undefined&&url+banner.right_banner_image} alt="Banners" className="w-100" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default SalesComponent;
