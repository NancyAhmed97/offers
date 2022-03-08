import React, { useEffect } from "react";
import "./Auction.css";
import ProductCart from "../../Modules/ProductCart/ProductCart";
import axios from "axios";
import { useSelector } from "react-redux";
function Auction() {
  var { auth } = useSelector((state) => state);

  return (
    <section className="auction">
      <ProductCart activeState="true" />
    </section>
  );
}

export default Auction;
