import React from "react";
import { useSelector } from "react-redux";
import Footer from "../Common/Footer/Footer";
import Navbar from "../Common/Navbar/Navba";
import Product from "../Common/Poduct/Product";
import productImg from "../../Resources/Assets/img/poscomercializacion-350x500.png";
import secondproductImg from "../../Resources/Assets/img/img_pic_1605860884_0.png";
import "./WishList.css";
import { Col, Container, Row } from "react-bootstrap";
function WishList() {
  const { currentLocal } = useSelector((state) => state.currentLocal);
  const product = [
    {
      id: 1,
      img: productImg,
      title: "Add product name here in this space and edit it",
      rating: 4,
      price: "SAR 3,099.00",
    },
    {
      id: 1,
      img: secondproductImg,
      title: "Add product name here in this space and edit it",
      rating: 4,
      price: "SAR 3,099.00",
    },
    {
      id: 1,
      img: productImg,
      title: "Add product name here in this space and edit it",
      rating: 4,
      price: "SAR 3,099.00",
    },
    {
      id: 1,
      img: productImg,
      title: "Add product name here in this space and edit it",
      rating: 4,
      price: "SAR 3,099.00",
    },
    {
      id: 1,
      img: productImg,
      title: "Add product name here in this space and edit it",
      rating: 4,
      price: "SAR 3,099.00",
    },
  ];
  return (
    <section className="wish_list ">
      <Navbar />
      <div className="wish_list_container pl pr mt-4 mb-5">
        <h1>
          {currentLocal.wishList.MYFAVORITES}
          <span>(8)</span>
        </h1>
        <Container fluid className="m-0 p-0">
          <Row>
            {product.map((productDetails) => {
              return (
                <Col md={3} className="mb-4">
                  <Product
                    img={productDetails.img}
                    title={productDetails.title}
                    rating={productDetails.rating}
                    price={productDetails.price}
                  />
                  <div className="button">
                    <button className="w-100">{currentLocal.productDetails.addToCart}</button>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
      <Footer />
    </section>
  );
}

export default WishList;
