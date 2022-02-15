import React from "react";
import { Link } from "react-router-dom";
import "./OffersComponent.css";
function OffersComponent({ banner }) {
  const url = "https://offers.com.fig-leaf.net";
  return (
    <section className="OffersComponent pr pl">
      <Link to="/auction">
        <img
          src={url + banner.middle_banner_image}
          alt="offerBgImg"
          className="w-100"
        />
      </Link>
    </section>
  );
}

export default OffersComponent;
