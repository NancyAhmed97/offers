import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import { Alert, Col, Container, Modal, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { addProduct } from "../../../../../../Redux/cartRedux";
import "./CurrentShipment.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import axios from "axios";
import closeIcon from "../../../../../../Resources/Assets/img/Group 8156.svg";
function CurrentShipment() {
  const { currentLocal } = useSelector((state) => state.currentLocal);
  var { auth } = useSelector((state) => state);
  const orderPath = window.location.href.lastIndexOf(":");
  const orderId = window.location.href.slice(orderPath + 1);
  const [activeStep, setActiveStep] = useState("");
  const [alertState, setAlertState] = useState("");
  const [products, setProducts] = useState([]);
  const matches = useMediaQuery("(min-width:600px)");
  const [modalShow, setModalShow] = React.useState(false);
  const [reviewNode, setReviewNode] = useState("");
  const [alert, setAlert] = useState("");
  const dispatch = useDispatch();

  const steps = [
    currentLocal.track.paymentPending,
    currentLocal.track.OrderPlaced,
    currentLocal.track.orderConfirmed,
    currentLocal.track.orderProcessing,
    currentLocal.track.OutOfDelivery,
    currentLocal.track.orderShipped,
    currentLocal.track.orderDelivered,
    currentLocal.track.orderCanceled,
  ];
  useEffect(() => {
    axios({
      method: "get",
      url: `https://offers.com.fig-leaf.net/api/v1/order_detail/${orderId}`,
      headers: { Authorization: `Bearer ${auth.authorization.access_token}` },
    }).then((res) => {
      if (res.data.success === true) {
        setProducts(res.data.data.products);
        if (res.data.data.status_name === "payment pending") {
          setActiveStep("0");
        } else if (res.data.data.status_name === "Order Placed") {
          setActiveStep("1");
        } else if (res.data.data.status_name === "confirmed") {
          setActiveStep("2");
        } else if (res.data.data.status_name === "processing") {
          setActiveStep("3");
        } else if (res.data.data.status_name === "out_of_delivery") {
          setActiveStep("4");
        } else if (res.data.data.status_name === "shipped") {
          setActiveStep("5");
        } else if (res.data.data.status_name === "delivered") {
          setActiveStep("6");
        } else if (res.data.data.status_name === "payment_pending") {
          setActiveStep("7");
        }
      }
      if (activeStep === "5") {
        setModalShow(true);
      }
    });
  }, [auth.authorization.access_token, activeStep, orderId]);
  const saveData = (e) => {
    setReviewNode(e.target.value);
  };
  return (
    <div
      className={
        currentLocal.language === "English"
          ? "current_shipment pt-3 px-4"
          : "current_shipment pt-3 ar_current_shipment px-4"
      }
    >
      <h1>{currentLocal.track.CurrentShipment}</h1>
      <Box sx={{ width: "100%" }}>
        <Stepper
          activeStep={activeStep}
          orientation={matches ? "horizontal" : "vertical"}
          alternativeLabel
        >
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
      <Modal
        show={modalShow}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title
            id="contained-modal-title-vcenter"
            className="d-flex justify-content-end w-100 "
          >
            <img
              src={closeIcon}
              alt="closeIcon"
              onClick={() => setModalShow(false)}
              style={{ cursor: "pointer" }}
            />{" "}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4 className="m-0">{currentLocal.rating.feedback}</h4>
          <p className="border-bottom pb-3">
            {currentLocal.rating.feedbackParagraph}
          </p>
          <p>
            <form>
              {alertState === "danger" && (
                <Alert className="alert alert-danger">{alert}</Alert>
              )}
              {alertState === "success" && (
                <Alert className="alert alert-success">{alert}</Alert>
              )}
              <Container fluid>
                {products &&
                  products.map((product, index) => {
                    const url = "https://offers.com.fig-leaf.net";
                    return (
                      <Row className="p-0 mt-3" key={index}>
                        <Col md={4}>
                          <div className="product_img w-50">
                            <img
                              src={url + product.image}
                              alt="productImg"
                              className="w-100"
                            />
                          </div>
                          <p className="product_img_name mx-3">
                            {currentLocal.language === "English"
                              ? product.en_name
                              : product.ar_name}
                          </p>
                        </Col>
                        <Col md={4}>
                          <span>{currentLocal.rating.rating}</span>
                          <textarea
                            id="orderNode"
                            name="orderNode"
                            rows="4"
                            cols="100"
                            className="w-100 pt-2"
                            onChange={saveData}
                          ></textarea>{" "}
                        </Col>
                        <Col md={4}>
                          <div className="d-flex justify-content-center mt-5">
                            <ReactStars
                              count={5}
                              onChange={(newRating) => {
                                axios({
                                  method: "post",
                                  url: `https://offers.com.fig-leaf.net/api/v1/rate`,
                                  data: {
                                    comment: reviewNode,
                                    product_id: product.id,
                                    rate: newRating,
                                    order_id: orderId && orderId,
                                  },
                                  headers: {
                                    Authorization: `Bearer ${auth.authorization.access_token}`,
                                  },
                                }).then((res) => {
                                  if (res.data.success === true) {
                                    setAlert(res.data.message);
                                    setAlertState("success");
                                    localStorage.removeItem("orderCode")
                                  } else {
                                    setAlertState("danger");
                                    setAlert(res.data.message);
                                  }
                                });
                              }}
                              size={24}
                              activeColor="#ffd700"
                            />
                          </div>
                        </Col>
                      </Row>
                    );
                  })}
                <div className="button d-flex justify-content-center mt-4">
                  <button
                    className="text-center justify-content-center"
                    onClick={(e) => {
                      e.preventDefault();
                      if (alertState === "success") {
                        setModalShow(false);
                        dispatch(addProduct());
                      }
                    }}
                  >
                    {currentLocal.forrgetPassword.send}
                  </button>
                </div>
              </Container>
            </form>
          </p>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default CurrentShipment;
