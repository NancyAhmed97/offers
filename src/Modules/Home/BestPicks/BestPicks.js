import React from "react";
import { useSelector } from "react-redux";
import headphones from "../../../Resources/Assets/img/Apple-headphones.png";
import iphone from "../../../Resources/Assets/img/iphone.png";
import Apple from "../../../Resources/Assets/img/Apple.png";
import noteBook from "../../../Resources/Assets/img/noteBook.png";
import camera from "../../../Resources/Assets/img/camera.png";
import WiFi from "../../../Resources/Assets/img/WiFi.png";
import bag from "../../../Resources/Assets/img/bag.png";
import "./BestPicks.css";
import { Col, Container, Row } from "react-bootstrap";
import Product from "../../Common/Poduct/Product";
function BestPicks() {
  const { currentLocal } = useSelector((state) => state.currentLocal);
  const product = [
    {
      img: headphones,
      title: "Add product name here in this space and edit it",
      rating: 4,
      price: "SAR 3,099.00",
    },
    {
      img: Apple,
      title: "Add product name here in this space and edit it",
      rating: 4,
      price: "SAR 3,099.00",
    },
    {
      img: iphone,
      title: "Add product name here in this space and edit it",
      rating: 4,
      price: "SAR 3,099.00",
    },
    {
      img: noteBook,
      title: "Add product name here in this space and edit it",
      rating: 4,
      price: "SAR 3,099.00",
    },
    {
      img: camera,
      title: "Add product name here in this space and edit it",
      rating: 4,
      price: "SAR 3,099.00",
    },
    {
      img: WiFi,
      title: "Add product name here in this space and edit it",
      rating: 4,
      price: "SAR 3,099.00",
    },
    {
      img: bag,
      title: "Add product name here in this space and edit it",
      rating: 4,
      price: "SAR 3,099.00",
    },
    {
      img: noteBook,
      title: "Add product name here in this space and edit it",
      rating: 4,
      price: "SAR 3,099.00",
    },
  ];
  return (
    <section className="best_picks pr pl">
      <h2>{currentLocal.bestSeller.bestSeller}</h2>
      <p className="best_picks_pragrapg">{currentLocal.bestSeller.disc}</p>
      <div className="product_container">
        <Container fluid>
          <Row>
            {product.slice(0, 3).map((productDetails) => {
              return (
                <Col md={4}>
                  <Product
                    img={productDetails.img}
                    title={productDetails.title}
                    rating={productDetails.rating}
                    price={productDetails.price}
                  />
                </Col>
              );
            })}
          </Row>
        </Container>
        <div className="product_details_container">
          {product.slice(3).map((productDetails) => {
            return (
              <Product
                img={productDetails.img}
                title={productDetails.title}
                rating={productDetails.rating}
                price={productDetails.price}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default BestPicks;
