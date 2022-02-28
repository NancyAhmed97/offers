import React from "react";
import { Col, Container, Row } from "react-bootstrap";


import { useSelector } from "react-redux";
import "./RelatedProducts.css";
import Product from "../../../Common/Poduct/Product";
function RelatedProducts({ related }) {
  const { currentLocal } = useSelector((state) => state.currentLocal);
  return (
    <div className="related_products pr pl">
      <div className="related_products_title">
        <p>{currentLocal.productDetails.relatedProducts}</p>
      </div>
      <Container fluid className="m-0 p-0">
        <Row className="m-0 p-0">
          {related &&
            related.map((productDetails) => {
              const url = "https://offers.com.fig-leaf.net";
              return (
                <Col
                  md={2}
                  key={productDetails.id}
                  className="position-relative p-0"
                >
            
                    <Product
                      img={url + productDetails.image}
                      title={
                        currentLocal.language === "English"
                          ? productDetails.en_name
                          : productDetails.ar_name
                      }
                      price={productDetails.price}
                      rating={productDetails.rate}
                      is_favorite={productDetails.is_favorite}
                      id={productDetails.id}
                    />
                </Col>
              );
            })}
        </Row>
      </Container>
    </div>
  );
}

export default RelatedProducts;
