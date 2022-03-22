import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../../../../../Resources/Assets/img/Logo.png";
import visaLogo from "../../../../../Resources/Assets/img/Group 5943.png";
import masterCardLogo from "../../../../../Resources/Assets/img/Group 5945.png";
import nadaLogo from "../../../../../Resources/Assets/img/Group 5947.png";
import payLogo from "../../../../../Resources/Assets/img/Group 5948.png";
import stcLogo from "../../../../../Resources/Assets/img/Group 5950.png";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import "./FooterLinks.css";
function FooterLinks() {
  const { currentLocal } = useSelector((state) => state.currentLocal);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div
      className={
        currentLocal.language === "English"
          ? "footer_links primary-color pr pl"
          : "right_footer_links primary-color pr pl"
      }
    >
      <Container fluid className="p-0 m-0">
        <Row className="p-0 m-0">
          <Col className="p-0 m-0" md={3}>
            <div className="footer_logo">
              <Link
                to="/"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                <img src={logo} alt="footer_logo" />
              </Link>
            </div>
            <div className="footer_pagraph">
              <p className="text-white mt-5 pr-5">
                {currentLocal.aboutus.pragraphTwo}
                {currentLocal.aboutus.pragraphFive}
              </p>
            </div>
          </Col>
          <Col className="p-0 m-0" md={2}>
            <ul className="about_offer_menu">
              <li
                className="menu_item text-white mb-4"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                {currentLocal.footer.aboutOffer}
              </li>
              <li className="menu_child_item mb-3 text-white">
                <Link
                  to="/aboutus"
                  className="text-white"
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                >
                  {currentLocal.footer.aboutus}
                </Link>
              </li>
              <li className="menu_child_item mb-3">
                <Link
                  to="/trackorder"
                  className="text-white"
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                >
                  {currentLocal.footer.track}
                </Link>
              </li>
              <li className="menu_child_item">
                <Link
                  to="/privacy"
                  className="text-white"
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                >
                  {currentLocal.footer.privacy}
                </Link>
              </li>
            </ul>
          </Col>
          <Col className="p-0 m-0" md={2}>
            <ul className="customer_care_menu">
              <li className="menu_item text-white mb-4">
                {currentLocal.footer.customer}
              </li>
              <li
                className="menu_child_item mb-3 text-white"
                onClick={handleClickOpen}
              >
                {currentLocal.footer.help}
              </li>
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title"></DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    Help
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>Disagree</Button>
                </DialogActions>
              </Dialog>
              <li className="menu_child_item mb-3">
                <Link
                  to="/terms"
                  className="text-white"
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                >
                  {currentLocal.footer.terms}
                </Link>
              </li>
              <li
                className="menu_child_item text-white"
                onClick={handleClickOpen}
              >
                {currentLocal.footer.returns}
              </li>
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title"></DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    return
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>Disagree</Button>
                </DialogActions>
              </Dialog>
            </ul>
          </Col>
          <Col className=" m-0 p-0 " md={2} style={{ paddingBottom: "25px" }}>
            <ul className="contact_us_menu p-0">
              <li className="menu_item text-white mb-4">
                {currentLocal.footer.getInTouch}
              </li>
              <li className="menu_child_item mb-3">
                <Link
                  to="/contactus"
                  className="text-white"
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                >
                  {currentLocal.footer.contect}
                </Link>
              </li>
              <li className="menu_child_item mb-3">
                <Link
                  to="/blogs"
                  className="text-white"
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                >
                  {currentLocal.footer.blog}
                </Link>
              </li>
              <li
                className="menu_child_item text-white"
                onClick={handleClickOpen}
              >
                {currentLocal.footer.askSupport}
              </li>
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title"></DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    ask support{" "}
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>Disagree</Button>
                </DialogActions>
              </Dialog>
            </ul>
          </Col>

          <Col
            className=" m-0 p-0 contact_us_menu_col"
            md={3}
            style={{ paddingBottom: "25px" }}
          >
            <ul className="contact_us_menu">
              <li className="menu_item text-white mb-4">
                {currentLocal.footer.payment}
              </li>
              <Container fluid>
                <Row className="p-0">
                  <Col xs={4} className="p-0">
                    <img src={visaLogo} alt="visaLogo" />
                  </Col>
                  <Col xs={4} className="p-0">
                    <img src={masterCardLogo} alt="masterCardLogo" />
                  </Col>
                  <Col xs={4} className="p-0">
                    <img src={nadaLogo} alt="nadaLogo" />
                  </Col>
                  <Col xs={4} className="p-0 mt-3">
                    <img src={payLogo} alt="payLogo" />
                  </Col>
                  <Col xs={4} className="p-0 mt-3">
                    <img src={stcLogo} alt="stcLogo" />
                  </Col>
                </Row>
              </Container>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default FooterLinks;
