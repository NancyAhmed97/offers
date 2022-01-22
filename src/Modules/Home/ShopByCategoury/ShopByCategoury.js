import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import "../../../Resources/Assets/fonts/Helvetica Neue W23 for SKY Bd/Helvetica Neue W23 for SKY Bd.ttf";
import electoronics from "../../../Resources/Assets/img/Rectangle 1155.png";
import toys from "../../../Resources/Assets/img/Rectangle 1153.png";
import school from "../../../Resources/Assets/img/Rectangle 1154.png";
import comanication from "../../../Resources/Assets/img/Rectangle 1156.png";
import WhiteseeMore from "../../../Resources/Assets/img/Icon feather-chevron-right.svg";
import blueSeeMore from "../../../Resources/Assets/img/blueSeeMore.svg";
import blackSeeMore from "../../../Resources/Assets/img/blackSeeMore.svg";
import "./ShopByCategoury.css";
import { Link } from "react-router-dom";
function ShopByCategoury() {
  const { currentLocal } = useSelector((state) => state.currentLocal);
  return (
    <section className="shop_by_category pr pl">
      <h2>Shop By Categories</h2>
      <p>Shop the best prices and set your prefect outdoor vibe</p>
      <Container fluid>
        <Row>
          <Col md={3}>
            <div
              className="shop_by_electronics"
              style={{
                backgroundImage: `url('${electoronics}')`,
                height: "491px",
              }}
            >
              <div className="shop_by_electronics_content">
                <p className="text-white">
                  {currentLocal.shopByCategory.electronics}
                </p>
                <Link to="/productDetails">
                  <p className="text-white">
                    {currentLocal.shopByCategory.seeMore}
                    <img src={WhiteseeMore} alt="WhiteseeMore"   />
                  </p>
                </Link>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div>
              <div
                className="shop_by_school"
                style={{ backgroundImage: `url('${school}')`, height: "220px" }}
              >
                <div className="shop_by_school_content">
                  <p className="text-white">{currentLocal.shopByCategory.schoolSupplies}</p>
                  <Link to="/productDetails">
                  <p className="text-white">{currentLocal.shopByCategory.seeMore}
                  <img src={WhiteseeMore} alt="WhiteseeMore"  />
                  </p>
                  </Link>
                </div>
              </div>
              <div
                className="shop_by_comanication"
                style={{
                  backgroundImage: `url('${comanication}')`,
                  height: "220px",
                  marginTop: "51px",
                }}
              >
                <div className="shop_by_comanication_content">
                  <p>{currentLocal.shopByCategory.communications}</p>
                  <Link to="/productDetails">
                  <p >{currentLocal.shopByCategory.seeMore}
                  <img src={blueSeeMore} alt="blueSeeMore" />
                  </p>
                  </Link>
                </div>
              </div>
            </div>
          </Col>
          <Col md={3}>
            <div
              className="shop_by_toys"
              style={{ backgroundImage: `url('${toys}')`, height: "491px" }}
            >
              <div className="shop_by_toys_content">
                <p>{currentLocal.shopByCategory.toys}</p>
                <Link to="/productDetails">
                <p>{currentLocal.shopByCategory.seeMore}
                <img src={blackSeeMore} alt="blackSeeMore" />
                </p>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ShopByCategoury;
