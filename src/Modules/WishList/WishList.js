import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Footer from "../Common/Footer/Footer";
import Navbar from "../Common/Navbar/Navba";
import Product from "../Common/Poduct/Product";
import productImg from "../../Resources/Assets/img/poscomercializacion-350x500.png";
import secondproductImg from "../../Resources/Assets/img/img_pic_1605860884_0.png";
import "./WishList.css";
import { Col, Container, Row } from "react-bootstrap";
import axios from "axios";
function WishList() {
  const { currentLocal } = useSelector((state) => state.currentLocal);
  var { auth } = useSelector((state) => state);
  const [favorites, setFavrites] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: `https://offers.com.fig-leaf.net/api/v1/favorites`,
      headers: { Authorization: `Bearer ${auth.authorization.access_token}` },
    }).then((res) => {
      if (res.data.success === true) {
        console.log(res.data.data.items);
        setFavrites(res.data.data.items);
      }
    });
  }, [auth]);
  return (
    <section className="wish_list ">
      <Navbar />
      <div className="wish_list_container pl pr mt-4 mb-5">
        <h1>
          {currentLocal.wishList.MYFAVORITES}
          <span>({favorites !== undefined && favorites.length})</span>
        </h1>
        <Container fluid className="m-0 p-0">
          <Row className="w-100 ">
            {favorites !== undefined &&
              favorites.map((productDetails) => {
                const url = "https://offers.com.fig-leaf.net";

                return (
                  <Col md={3}className="mb-4">
                    <Product
                      img={url + productDetails.image}
                      title={
                        currentLocal.language === "English"
                          ? productDetails.en_name
                          : productDetails.ar_name
                      }                      rating={productDetails.rate}
                      price={productDetails.price}
                      id={productDetails.id}
                      is_favorite={productDetails.is_favorite}

                    />
                    <div className="button">
                      <button className="w-100">
                        {currentLocal.productDetails.addToCart}
                      </button>
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
