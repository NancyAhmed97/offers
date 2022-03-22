import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import { useSelector } from "react-redux";
import "./ProductDesc.css";
function ProductDesc({ reviews, product }) {
  const { currentLocal } = useSelector((state) => state.currentLocal);
  const [activeState, setActiveState] = useState("desc");
  return (
    <div
      className={
        currentLocal.language === "English"
          ? "product_des pr pl"
          : "product_des ar_product_des  pr pl"
      }
    >
      <div className="product_desc_categoury d-flex mb-4">
        <p
          id="desc"
          onClick={(e) => {
            setActiveState(e.target.id);
          }}
          className={activeState === "desc" && "active desc"}
          style={{ cursor: "pointer" }}
        >
          {currentLocal.productDetails.Description}
        </p>
        <p
          id="reviwes"
          onClick={(e) => {
            setActiveState(e.target.id);
          }}
          className={activeState === "reviwes" && "reviwes active"}
          style={{ cursor: "pointer" }}
        >
          {currentLocal.productDetails.Reviews} (
          {reviews && reviews.items.length})
        </p>
      </div>
      {activeState === "desc" && (
        <div className="product_desc_container">
          <p className="descPragraph">
            {currentLocal.language === "English"
              ? product.en_desc
              : product.ar_desc}
          </p>
        </div>
      )}
      {activeState === "reviwes" && (
        <div className="product_reviwes_container">
          <Container fluid>
            {reviews &&
              reviews.items.map((review,index) => {
                return (
                  <Row className="my-3" key={index}>
                    <Col md={2} className="px-0">
                      <p className="name">{review.user}</p>
                      <p className="date">{review.created_at}</p>
                    </Col>
                    <Col md={10} className="px-0">
                      <ReactStars
                        count={5}
                        value={review.rate}
                        size={24}
                        color2={"#FABB27"}
                        edit={false}
                        id="stars"
                      />
                      <p>{review.comment}</p>
                    </Col>
                  </Row>
                );
              })}
          </Container>
        </div>
      )}
    </div>
  );
}

export default ProductDesc;
