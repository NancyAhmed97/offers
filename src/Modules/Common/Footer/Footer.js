import React from "react";
import "./Footer.css";
import FooterAccissabilty from "./Components/FooterAccissabilty/FooterAccissabilty";
import FooterLinks from "./Components/FooterLinks/FooterLinks";
function Footer() {
  return (
    <footer className="mt-5 pt-5">
      <FooterAccissabilty />
      <FooterLinks />
    </footer>
  );
}

export default Footer;
