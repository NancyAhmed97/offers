import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import homeIcon from "../../../../Resources/Assets/img/Icon awesome-home.svg";
import Footer from "../../../Common/Footer/Footer";
import Navbar from "../../../Common/Navbar/Navba";
import CurrentShipment from "./Components/CurrentShipment/CurrentShipment";
// import ShipmentDetails from "./Components/ShipmentDetails/ShipmentDetails";
import TrackOrderTable from "./Components/TrackOrderTable/TrackOrderTable";
import "./TrackOrderContainer.css";
function TrackOrderProduct() {
  const { currentLocal } = useSelector((state) => state.currentLocal);

  return (
    <div className="track_order_Container">
      <Navbar />
      <div
        className={
          currentLocal.language === "English" ? "path" : "path ar_path"
        }
      >
        <div className="path_container pl pr">
          <img src={homeIcon} alt="homeIcon" />
          <Link to="/" className="text-decoration-none">
            {currentLocal.auth.home}
          </Link>
          <Link
            to="/trackorder"
            className="current_page d-inline-block text-decoration-none"
          >
            {currentLocal.footer.track}
          </Link>
        </div>
        <div className="track_order">
          <div className="order_container">
            <TrackOrderTable />
            {/* <CurrentShipment /> */}
            {/* <ShipmentDetails /> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default TrackOrderProduct;
