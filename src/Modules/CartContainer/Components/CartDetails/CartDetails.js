import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../../../Redux/cartRedux";
import closeIcon from "../../../../Resources/Assets/img/Group 8156.svg";
import increase from "../../../../Resources/Assets/img/Group 8203.png";
import decrease from "../../../../Resources/Assets/img/Group 8204.png";
import "./CartDetails.css";
function CartDetails() {
  const { currentLocal } = useSelector((state) => state.currentLocal);
  var { auth } = useSelector((state) => state);
  const dispatch = useDispatch();
  const quantityCart = useSelector((state) => state.cart.quantity);

  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: `https://offers.com.fig-leaf.net/api/v1/cart`,
      headers: { Authorization: `Bearer ${auth.authorization.access_token}` },
    }).then((res) => {
      if (res.data.success === true) {
        setProduct(res.data.data.cart.products);
      }
    });
  }, [auth.authorization.access_token]);

  // var productItems = useSelector(
  //   (state) => state.product.Product.cart.products
  // );
  // const [product, setProduct] = useState(productItems);

  const deleteProduct = (e) => {
    axios({
      method: "post",
      url: `https://offers.com.fig-leaf.net/api/v1/remove_cart_product`,
      headers: { Authorization: `Bearer ${auth.authorization.access_token}` },
      data: {
        cart_product_id: e.target.id,
      },
    }).then((res) => {
      if (res.data.success === true) {
        setProduct(res.data.data.cart.products);
        dispatch(addProduct(quantityCart - 1));

      }
    });
  };
  const decreaseFun = (id) => {
    let i = product.findIndex((item) => item.id === id);
    axios({
      method: "post",
      url: `https://offers.com.fig-leaf.net/api/v1/update_cart_product`,
      headers: { Authorization: `Bearer ${auth.authorization.access_token}` },
      data: {
        cart_product_id: id,
        quantity: product[i].quantity - 1,
        color_id: product[i].color.id,
      },
    }).then((res) => {
      if (res.data.success === true) {
        setProduct(res.data.data.cart.products);
      }
    });
  };
  const increaseFun = (id) => {
    let i = product.findIndex((item) => item.id === id);
    axios({
      method: "post",
      url: `https://offers.com.fig-leaf.net/api/v1/update_cart_product`,
      headers: { Authorization: `Bearer ${auth.authorization.access_token}` },
      data: {
        cart_product_id: id,
        quantity: product[i].quantity + 1,
        color_id: product[i].color.id,
      },
    }).then((res) => {
      if (res.data.success === true) {
        setProduct(res.data.data.cart.products);
      }
    });
  };
  return (
    <>
      <h1 className="cartDetails_title">{currentLocal.cart.cartDetails}</h1>
      <div
        className={
          currentLocal.language === "English"
            ? "cart_details mt-4 mb-5"
            : "cart_details ar_cart_details mt-4 mb-5"
        }
      >
        <div className="cart_details_container">
          <Container fluid className="p-0">
            <Row className="title">
              <Col md={4}>
                {" "}
                <p className="mb-0 d-flex justify-content-center">
                  {currentLocal.cart.product}
                </p>
              </Col>
              <Col md={2}>
                {" "}
                <p className="mb-0 price_label">{currentLocal.cart.price}</p>
              </Col>
              <Col md={2}>
                <p className="mb-0 quantity_label">
                  {currentLocal.cart.quantity}
                </p>
              </Col>
              <Col md={2}>
                <p className="mb-0 subtotal_title">
                  {currentLocal.cart.subtotal}
                </p>
              </Col>
            </Row>
            {product.length !== 0 &&
              product.map((productItem) => {
                const url = "https://offers.com.fig-leaf.net";
                return (
                  <Row className="p-0 mt-4 product_row" key={productItem.id}>
                    <Col xs={2} md={2}>
                      <div className="product_img">
                        <img
                          src={url + productItem.product.image}
                          alt="productImg"
                        />
                      </div>
                    </Col>
                    <Col xs={5} md={4}>
                      <div className="d-flex justify-content-between details">
                        <div className="product_img_details">
                          <p className="product_img_name mb-0">
                            {" "}
                            {currentLocal.language === "English"
                              ? productItem.product.en_name
                              : productItem.product.ar_name}
                          </p>
                          {productItem.color && (
                            <>
                              <span className="color">
                                {currentLocal.cart.Color}:
                              </span>
                              <div
                                className="product_color d-inline-block"
                                style={{
                                  backgroundColor:
                                    productItem.color.color &&
                                    productItem.color.color,
                                }}
                              ></div>
                              <div className="product_color d-inline-block">
                                {currentLocal.language === "English"
                                  ? productItem.color.en_name
                                  : productItem.color.ar_name}
                              </div>
                            </>
                          )}
                        </div>
                        <p className="mb-0 Price ">
                          {productItem.product.price} SAR
                        </p>
                      </div>
                    </Col>
                    <Col xs={4} md={4}>
                      <div className="d-flex justify-content-around details position-relative">
                        <div className="Quantity ">
                          <div className="product_info_number_product_container d-flex justify-content-between w-50">
                            <p
                              className="p-0 m-0 decrease_container"
                              id={productItem.id}
                              onClick={() => {
                                decreaseFun(productItem.id);
                              }}
                              style={{ cursor: "pointer" }}
                            >
                              <img
                                src={decrease}
                                alt="decrease"
                                className="mx-2"
                                id={productItem.id}
                              />
                            </p>
                            <p className="p-0 m-0 counter">
                              {productItem.quantity}
                            </p>
                            <p
                              className="p-0 m-0 increase_container"
                              onClick={() => {
                                increaseFun(productItem.id);
                              }}
                              style={{ cursor: "pointer" }}
                            >
                              <img
                                src={increase}
                                alt="increase"
                                id={productItem.id}
                                className="mx-2"
                              />
                            </p>
                          </div>
                        </div>{" "}
                        <p className="mb-0 Subtotal">
                          {productItem.total_price} SAR
                        </p>
                      </div>
                    </Col>
                    <Col xs={1} md={2}>
                      <div className="w-100  delete_product">
                        <img
                          src={closeIcon}
                          alt="closeIcon"
                          id={productItem.id}
                          onClick={deleteProduct}
                          style={{ cursor: "pointer" }}
                        />
                      </div>
                    </Col>
                  </Row>
                );
              })}
          </Container>
        </div>
      </div>
    </>
  );
}

export default CartDetails;
