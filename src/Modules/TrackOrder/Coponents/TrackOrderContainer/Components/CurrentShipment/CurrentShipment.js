import React from "react";
import { useSelector } from "react-redux";
// import dote from "../../../../../../Resources/Assets/img/Ellipse 600.svg";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

import "./CurrentShipment.css";
function CurrentShipment() {
  const { currentLocal } = useSelector((state) => state.currentLocal);
  const steps = [
    currentLocal.track.OrderPlaced,
    currentLocal.track.orderConfirmed,
    currentLocal.track.orderProcessing,
    currentLocal.track.OutOfDelivery,
    currentLocal.track.orderShipped,
    currentLocal.track.orderDelivered,
  ];
  return (
    <div
      className={
        currentLocal.language === "English"
          ? "current_shipment pt-3"
          : "current_shipment pt-3 ar_current_shipment"
      }
    >
      <h1>{currentLocal.track.CurrentShipment}</h1>
      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={2} alternativeLabel>
          {steps.map((label) => {
            console.log(label);
            return (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
      </Box>
    </div>
  );
}

export default CurrentShipment;
