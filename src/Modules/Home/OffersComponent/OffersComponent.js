import React from "react";
import {useHistory } from "react-router-dom";
import "./OffersComponent.css";

function OffersComponent({ banner }) {
  const url = "https://offers.com.fig-leaf.net";
  const history = useHistory();
  const AuctionFunction = () => {
    if (banner.middle_banner_redirect) {
      history.push(`/auction/:${banner.middle_banner_redirect.id}`);
      window.scrollTo(0, 0);
    }
  };
  return (
    <section className="OffersComponent pr pl">
      <img
        src={url + banner.middle_banner_image}
        alt="offerBgImg"
        className="w-100"
        onClick={AuctionFunction}
        style={{ cursor: "pointer" }}
      />
    </section>
  );
}

export default OffersComponent;
