import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../Common/Footer/Footer";
import Navbar from "../Common/Navbar/Navba";
import LoginContainer from "./Components/LoginContainer/LoginContainer";
import SignupContainer from "./Components/SignupContainer/SignupContainer";
import homeIcon from "../../Resources/Assets/img/Icon awesome-home.svg";
import "./SignUp.css"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function SignUp() {
  const { currentLocal } = useSelector((state) => state.currentLocal);
  return (
    <section className="sign_up" style={{ backgroundColor: "#F3F3F3" }}>
      <Navbar />
      <div className={currentLocal.language==="English"?"path":"path ar_path"}>
        <div className="path_container pl pr">
          <img src={homeIcon} alt="homeIcon" />
          <Link to="/" className="text-decoration-none" >
            {currentLocal.auth.home}
          </Link>
          <p className="current_page d-inline-block">{currentLocal.home.login}/{currentLocal.home.signup} </p>
        </div>
      </div>
      <Container fluid className="m-0 p-0">
        <Row className="p-0 m-0">
          <Col md="6">
            <LoginContainer />
          </Col>
          <Col md="6">
            <SignupContainer />
          </Col>
        </Row>
      </Container>
      <Footer />
    </section>
  );
}

export default SignUp;
