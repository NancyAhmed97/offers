import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../Common/Footer/Footer";
import Navbar from "../Common/Navbar/Navba";
import Product from "../Common/Poduct/Product";
import increase from "../../Resources/Assets/img/Group 8140.svg";
import decrease from "../../Resources/Assets/img/Line 60.svg";
import "./WishList.css";

import { Col, Container, Row } from "react-bootstrap";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { addProduct } from "../../Redux/cartRedux";
function WishList() {
  const { currentLocal } = useSelector((state) => state.currentLocal);
  var { auth } = useSelector((state) => state);
  const [favorites, setFavrites] = useState([]);
  const [loading, setLoading] = useState(false);
  const [addToCartState, setAddToCartState] = useState(false);
  var authState = Object.keys(auth.authorization).length;
  const [counterNumber, setCounterNumber] = useState(0);
  const [clickName, setClickName] = useState("");
  const dispatch = useDispatch();
  const quantityCart = useSelector((state) => state.cart.quantity);
  const history = useHistory();
  useEffect(() => {
    axios({
      method: "get",
      url: `https://offers.com.fig-leaf.net/api/v1/favorites`,
      headers: { Authorization: `Bearer ${auth.authorization.access_token}` },
    }).then((res) => {
      if (res.data.success === true) {
        setFavrites(res.data.data.items);
        setLoading(true);
      }
    });
  }, [auth]);

  const increaseFun = (id) => {
    console.log(id);
    let i = favorites.find((item) => {
      if (item.id === id) {
        setCounterNumber(counterNumber + 1);
      }
    });
  };
  // const decreaseCount = () => {
  //   if (counterNumber !== 0 && addToCartState) {
  //     setCounterNumber(counterNumber - 1);
  //   }
  // };
  console.log(addToCartState && authState !== 0);
  console.log(authState !== 0);
  console.log(addToCartState);
  return (
    <section
      className={
        currentLocal.language === "English" ? "wish_list " : "ar_wish_list"
      }
    >
      {loading ? (
        <>
          <Navbar />
          <div className="wish_list_container pl pr mt-4 mb-5">
            <h1>
              {currentLocal.wishList.MYFAVORITES}
              <span>({favorites !== undefined && favorites.length})</span>
            </h1>
            <Container fluid className="m-0 p-0">
              <Row className="w-100 ">
                {favorites !== undefined &&
                  favorites.map((productDetails, index) => {
                    console.log(productDetails.id);
                    const url = "https://offers.com.fig-leaf.net";
                    const name =
                      currentLocal.language === "English"
                        ? productDetails.en_name
                        : productDetails.ar_name;
                    const addToCartStateActive =
                      clickName === name ? true : false;
                    console.log(clickName);
                    console.log(name);
                    console.log(addToCartStateActive);
                    return (
                      <Col md={3} className="mb-5" key={index}>
                        <Product
                          img={url + productDetails.image}
                          title={
                            currentLocal.language === "English"
                              ? productDetails.en_name
                              : productDetails.ar_name
                          }
                          rating={productDetails.rate}
                          price={productDetails.price}
                          id={productDetails.id}
                          is_favorite={productDetails.is_favorite}
                        />
                        <div className="product_info_number_product_container mt-2">
                          <p
                            className="p-0 m-0 decrease_container"
                            // onClick={decreaseCount}
                          >
                            <img src={decrease} alt="decrease" />
                          </p>
                          <p className="p-0 m-0 counter">{counterNumber}</p>
                          <p
                            className="p-0 m-0 increase_container"
                            onClick={(e) => {
                              setClickName(e.target.id);
                              console.log(addToCartStateActive);
                              if (addToCartStateActive) {
                                setCounterNumber(counterNumber + 1);
                              }
                            }}
                          >
                            <img
                              src={increase}
                              alt="increase"
                              id={
                                currentLocal.language === "English"
                                  ? productDetails.en_name
                                  : productDetails.ar_name
                              }
                            />
                          </p>
                        </div>
                        <div className="product_info_add_cart">
                          <div
                            className={
                              addToCartState
                                ? " added_to_cart"
                                : "product_info_add_cart_button"
                            }
                            id={
                              currentLocal.language === "English"
                                ? productDetails.en_name
                                : productDetails.ar_name
                            }
                            onClick={(e) => {
                              setClickName(e.target.id);
                              if (authState === 0) {
                                history.push(`/SignUp`);
                              } else if (
                                addToCartStateActive &&
                                authState !== 0
                              ) {
                                axios({
                                  method: "post",
                                  url: `https://offers.com.fig-leaf.net/api/v1/add_to_cart`,
                                  headers: {
                                    Authorization: `Bearer ${auth.authorization.access_token}`,
                                  },
                                  data: {
                                    product_id: productDetails.id,
                                    quantity: counterNumber,
                                  },
                                }).then((res) => {
                                  if (res.data.success === true) {
                                    setAddToCartState(true);
                                    dispatch(addProduct(quantityCart + 1));
                                  }
                                });
                              }
                            }}
                          >
                            {currentLocal.productDetails.addToCart}
                          </div>
                        </div>
                      </Col>
                    );
                  })}
              </Row>
            </Container>
          </div>
          <Footer />
        </>
      ) : (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
    </section>
  );
}

export default WishList;
