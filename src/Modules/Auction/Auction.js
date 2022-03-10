import React from "react";
import "./Auction.css";
import ProductCart from "../../Modules/ProductCart/ProductCart";
function Auction() {
  return (
    <section className="auction">
      <ProductCart activeState="true" />
    </section>
  );
}

export default Auction;
