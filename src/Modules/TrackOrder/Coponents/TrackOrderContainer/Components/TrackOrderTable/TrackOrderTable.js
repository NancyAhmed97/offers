import React, { useEffect, useState } from "react";
import "./TrackOrderTable.css";
// import productImg from "../../../../../../Resources/Assets/img/Appleheadphones.png";
import { useSelector } from "react-redux";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";

function TrackOrderTable() {
  const { currentLocal } = useSelector((state) => state.currentLocal);
  var { auth } = useSelector((state) => state);
  const [orderDetails, setOrderDetails] = useState("");
  useEffect(() => {
    const orderPath = window.location.href.lastIndexOf(":");
    const orderId = window.location.href.slice(orderPath + 1);
    axios({
      method: "get",
      url: `https://offers.com.fig-leaf.net/api/v1/order_detail/${orderId}`,
      headers: { Authorization: `Bearer ${auth.authorization.access_token}` },
    }).then((res) => {
      if (res.data.success === true) {
        setOrderDetails(res.data.data);
      }
    });
  }, [auth.authorization.access_token]);

  return (
    <div
      className={
        currentLocal.language === "English"
          ? "track_order_table mt-4"
          : "track_order_table ar_track_order_table mt-4"
      }
    >
      <Container fluid className="cart_details_container px-0">
        {/* <Container fluid className="p-0"> */}
        <Row className="track_order_table_title border-bottom">
          <Col md={6} xs={6}>
            <p className="mb-0 d-flex order_number">
              {currentLocal.track.Ordernumber} # {orderDetails.order_number}{" "}
            </p>
          </Col>
          <Col md={2} xs={3} className="px-0">
            {" "}
            <p className="mb-0 deliveryAddress">
              {currentLocal.track.deliveryAddress}
            </p>
          </Col>
          <Col md={4} xs={3} className="px-0">
            {" "}
            <p className="mb-0 trackpragraph">
              {orderDetails.address && orderDetails.address.city} ,{" "}
              {orderDetails.address && orderDetails.address.country}{" "}
            </p>
          </Col>
        </Row>
        {orderDetails.length !== 0 &&
          orderDetails.products.map((productItem, index) => {
            const url = "https://offers.com.fig-leaf.net";

            return (
              <Row className="mt-3" key={index}>
                <Col md={6} xs={6}>
                  <div className="d-flex">
                    <div className="product_img">
                      <img src={url+productItem.image} alt="productImg" />
                    </div>
                    <div>
                      <p className="product_img_name mx-3">
                        {currentLocal.language === "English"
                          ? productItem.en_name
                          : productItem.ar_name}
                      </p>
                      {productItem.color && (
                        <>
                          <span className="color mx-3">
                            {currentLocal.cart.Color}:
                          </span>
                          <span
                            className="product_color d-inline-block "
                            style={{
                              backgroundColor:
                                productItem.color && productItem.color,
                            }}
                          ></span>
                          <div className="product_color d-inline-block">
                            {currentLocal.language === "English"
                              ? productItem.color.en_name
                              : productItem.color.ar_name}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </Col>
                <Col md={2} xs={3} className="px-0">
                  <div className="deliveryAddress">
                    <p className="p-0 m-0 count">
                      {currentLocal.language === "English"
                        ? `x${productItem.quantity}`
                        : `${productItem.quantity} x`}
                    </p>{" "}
                  </div>
                </Col>
                <Col md={4} xs={3} className="px-0">
                  <p className="mb-0 price ">{productItem.price} SAR</p>
                </Col>
              </Row>
            );
          })}
      </Container>
    </div>
  );
}

export default TrackOrderTable;
