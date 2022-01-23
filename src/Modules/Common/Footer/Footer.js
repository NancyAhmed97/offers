import React from "react";
import "./Footer.css";
import FooterAccissabilty from "./Components/FooterAccissabilty/FooterAccissabilty";
import FooterLinks from "./Components/FooterLinks/FooterLinks";
function Footer() {
  return (
    <footer >
      <FooterAccissabilty />
      <FooterLinks />
    </footer>
  );
}

export default Footer;
