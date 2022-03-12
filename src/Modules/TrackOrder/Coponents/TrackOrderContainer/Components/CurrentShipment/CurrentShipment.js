import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import "./CurrentShipment.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import axios from "axios";
import MyVerticallyCenteredModal from "../../../../../Common/MydModalWithGrid/MydModalWithGrid";
function CurrentShipment() {
  const { currentLocal } = useSelector((state) => state.currentLocal);
  var { auth } = useSelector((state) => state);
  const [activeStep, setActiveStep] = useState("5");
  const matches = useMediaQuery("(min-width:600px)");
  const [modalShow, setModalShow] = React.useState(false);
  const steps = [
    currentLocal.track.OrderPlaced,
    currentLocal.track.orderConfirmed,
    currentLocal.track.orderProcessing,
    currentLocal.track.OutOfDelivery,
    currentLocal.track.orderShipped,
    currentLocal.track.orderDelivered,
  ];
  useEffect(() => {
    axios({
      method: "post",
      url: `https://offers.com.fig-leaf.net/api/v1/search_for_order
      `,
      data: {
        order_number: "22030052",
      },
      headers: { Authorization: `Bearer ${auth.authorization.access_token}` },
    }).then((res) => {
      if (res.data.success === true) {
        if (res.data.data.status_name === "payment pending") {
          setActiveStep("0");
        } else if (res.data.data.status_name === "confirmed") {
          setActiveStep("1");
        } else if (res.data.data.status_name === "processing") {
          setActiveStep("2");
        } else if (res.data.data.status_name === "out_of_delivery") {
          setActiveStep("3");
        } else if (res.data.data.status_name === "shipped") {
          setActiveStep("4");
        } else if (res.data.data.status_name === "delivered") {
          setActiveStep("5");
        }
      }
    });
    if (activeStep === "5") {
      setModalShow(true)    }
  }, [auth.authorization.access_token, activeStep]);
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
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />{" "}
    </div>
  );
}

export default CurrentShipment;
