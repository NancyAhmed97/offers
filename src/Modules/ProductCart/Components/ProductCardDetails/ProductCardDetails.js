import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProductImg from "./Components/ProductImg/ProductImg";
import ProductInfo from "./Components/ProductInfo/ProductInfo";
function ProductCardDetails({ product ,reviews }) {
  return (
    <div className="product_card_details pr pl mt-5">
      <Container fluid className="m-0 p-0">
        <Row className="m-0 p-0">
          <Col className="p-0" md={5}>
            <ProductImg image={product.image} />
          </Col>
          <Col className="p-0" md={7}>
            <ProductInfo  product={product} reviews={reviews}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ProductCardDetails;
