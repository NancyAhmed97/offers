import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import aboutimg from "../../../../Resources/Assets/img/Union 2.png";
import technology from "../../../../Resources/Assets/img/omni-channel-technology-online-retail-business.png";
import { useSelector } from "react-redux";
import "./AboutInfo.css";
function AboutInfo() {
  const { currentLocal } = useSelector((state) => state.currentLocal);
  return (
    <div
      className={
        currentLocal.language === "English"
          ? " about_info en_about_info"
          : "ar_about_info about_info "
      }
    >
      <Container fluid className="pr pl">
        <Row className="p-0 m-0">
          <Col md={6} className="p-0 m-0">
            <div className="about_container">
              <div className="about_title">
                <h1>{currentLocal.footer.aboutus}</h1>
                <div className="about_title_question_answer">
                  <p className="about_title_question mb-2">
                    {currentLocal.aboutus.Whoweare}
                  </p>
                  <p className="about_title_answer">
                    {currentLocal.aboutus.aboutTitle}
                  </p>
                </div>
              </div>
              <div className="about_pragraph">
                <p className="p-0 m-0">{currentLocal.aboutus.pragraphOne}</p>
                <p className="p-0 m-0">{currentLocal.aboutus.pragraphTwo}</p>
                <p className="p-0 m-0">{currentLocal.aboutus.pragraphtThree}</p>
                <p className="p-0 m-0">{currentLocal.aboutus.pragraphfour}</p>
                <p className="p-0 m-0">{currentLocal.aboutus.pragraphFive}</p>
              </div>
            </div>
          </Col>
          <Col md={6} className="p-0 m-0">
            <div className="about_img ">
              <img src={aboutimg} alt="about_img" />
            </div>
          </Col>
        </Row>
      </Container>
      <div className="secont_about_container">
        <div className="about_img ">
          <img src={technology} alt="technology" />
        </div>
        <div className="secont_about_info">
          <p className="p-0 m-0">{currentLocal.aboutus.pragraphSix}</p>
          <p className="p-0 m-0">{currentLocal.aboutus.pragraphSeven}</p>
        </div>
      </div>
    </div>
  );
}

export default AboutInfo;
