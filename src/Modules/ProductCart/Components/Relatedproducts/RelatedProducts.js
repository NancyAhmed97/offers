import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import likeIcon from "../../../../Resources/Assets/img/Group 5931.svg";
import background from "../../../../Resources/Assets/img/Ellipse 129.svg";
import LikedHear from "../../../../Resources/Assets/img/LikedHear.svg";

import { useSelector } from "react-redux";
import "./RelatedProducts.css";
import Product from "../../../Common/Poduct/Product";
import { Link } from "react-router-dom";
function RelatedProducts({ related }) {
  const { currentLocal } = useSelector((state) => state.currentLocal);
  const [toggleFavorite, setToggleFavorite] = useState(false);
  const likeProduct = (e) => {
    console.log(e.target.id);
    // axios({
    //   method: "get",
    //   url: `https://offers.com.fig-leaf.net/api/v1/toggleFavorite/${e.target.id}`,
    // }).then((res) => {
    //   if (res.data.success === true) {
    //     console.log(res);
    //     console.log(res.data);
    //     console.log(res.data.data);
    //   }
    // });
  };
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
                  <Link
                    to={`/productcart/:${productDetails.id}`}
                    onClick={() => {
                      window.scrollTo(0, 0);
                    }}
                    className="text-decoration-none"
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
                    />
                  </Link>
                  <div className="icons" id={productDetails.id}>
                    {!toggleFavorite ? (
                      <img
                        src={likeIcon}
                        alt="likeIcon"
                        className="like_icon"
                        onClick={likeProduct}
                        id={productDetails.id}
                      />
                    ) : (
                      <div
                        className="likedIcone"
                        onClick={() => {
                          setToggleFavorite(false);
                        }}
                      >
                        <img
                          src={background}
                          alt="background"
                          className="background"
                        />
                        <img
                          src={LikedHear}
                          alt="LikedHear"
                          className="LikedHear"
                        />
                      </div>
                    )}
                  </div>
                </Col>
              );
            })}
        </Row>
      </Container>
    </div>
  );
}

export default RelatedProducts;
