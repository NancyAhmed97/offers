import React from "react";
import Footer from "../Common/Footer/Footer";
import Navbar from "../Common/Navbar/Navba";
import homeIcon from "../../Resources/Assets/img/Icon awesome-home.svg";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./TravkOrder.css";
import TrackOrderBox from "./Coponents/TrackOrderBox/TrackOrderBox";
function TrackOrder() {
  const { currentLocal } = useSelector((state) => state.currentLocal);
  return (
    <section className="track_order">
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
          <p className="current_page d-inline-block">
            {currentLocal.footer.track}
          </p>
        </div>
      </div>
<TrackOrderBox />
      <Footer />
    </section>
  );
}

export default TrackOrder;
