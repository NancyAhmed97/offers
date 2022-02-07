import React from "react";
import { useSelector } from "react-redux";
import "./ShipmentDetails.css";
function ShipmentDetails() {
  const { currentLocal } = useSelector((state) => state.currentLocal);
  return (
    <div className="shipment_details">
      <h1>{currentLocal.track.shipmentDetails}</h1>
      <table>
        <tr>
          <th style={{width:"180px"}}>{currentLocal.track.Location}</th>
          <th>{currentLocal.track.Status}</th>
          <th>{currentLocal.track.Timestamp}</th>
        </tr>
        <tr>
          <td>{currentLocal.track.offerSiteStores}</td>

          <td>{currentLocal.track.orderPaced}</td>
          <td>2021-05-03 10:14</td>
        </tr>
        <tr>
          <td>{currentLocal.track.offerSiteStores}</td>
          <td>{currentLocal.track.orderConfirmed}</td>
          <td>2021-05-03 10:14</td>
        </tr>
        <tr>
          <td>{currentLocal.track.offerSiteStores}</td>
          <td>{currentLocal.track.orderProcessing}</td>
          <td>2021-05-03 10:14</td>
        </tr>
      </table>
    </div>
  );
}

export default ShipmentDetails;
