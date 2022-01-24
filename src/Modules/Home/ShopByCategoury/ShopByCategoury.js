import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
// import "../../../Resources/Assets/fonts/ font-family: "Helvetica Neue W23 for SKY";  Bd/ font-family: " Neue W23 for SKY";  Bd.ttf";
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
    <section className={currentLocal.language==="English"?"shop_by_category pr pl":"shop_by_category ar_shop_by_category pr pl"}>
      <h2>{currentLocal.home.shopByCategories}</h2>
      <p>{currentLocal.blog.disc}</p>
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
                <Link to={`/CategouryDetails/:${1}`} onClick={() => {
                      window.scrollTo(0, 0);
                    }}>
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
                  <Link to={`/CategouryDetails/:${2}`} onClick={() => {
                      window.scrollTo(0, 0);
                    }}>
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
                  <Link

to={`/CategouryDetails/:${3}`} 
onClick={() => {
  window.scrollTo(0, 0);
}}
>
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
                <p> {currentLocal.shopByCategory.toys} </p>
                <Link to={`/CategouryDetails/:${4}`} 
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
>
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
