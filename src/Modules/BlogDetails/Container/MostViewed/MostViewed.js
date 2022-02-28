import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import MostViewedimg from "../../../../Resources/Assets/img/MostViewed.png";
import "./MostViewed.css";
function MostViewed({ mostViewed }) {
  const { currentLocal } = useSelector((state) => state.currentLocal);
  const product = [
    {
      id: 1,
      img: MostViewedimg,
      productName: currentLocal.blogDetails.productName,
      date: "5 September, 2022",
    },
    {
      id: 1,
      img: MostViewedimg,
      productName: currentLocal.blogDetails.productName,
      date: "5 September, 2022",
    },
    {
      id: 1,
      img: MostViewedimg,
      productName: currentLocal.blogDetails.productName,
      date: "5 September, 2022",
    },
    {
      id: 1,
      img: MostViewedimg,
      productName: currentLocal.blogDetails.productName,
      date: "5 September, 2022",
    },
    {
      id: 1,
      img: MostViewedimg,
      productName: currentLocal.blogDetails.productName,
      date: "5 September, 2022",
    },
    {
      id: 1,
      img: MostViewedimg,
      productName: currentLocal.blogDetails.productName,
      date: "5 September, 2022",
    },
  ];
  return (
    <div
      className={
        currentLocal.language === "English"
          ? "most_viewed"
          : "most_viewed ar_most_viewed"
      }
    >
      <p className="m-0 p-0 most_viewed_title">
        {currentLocal.blogDetails.mostViewed}
      </p>
      <Container fluid className="m-0 p-0">
        <Row className="p-0 m-0">
          {mostViewed &&
            mostViewed.map((poductDetails) => {
              return (
                <Link
                  to={`/blogDetails/:${poductDetails.id}`}
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                  className="text-decoration-none"
                >
                  <Col md={12} className="p-0 mb-5" key={product.id}>
                    <div className="most_viewed_container d-flex">
                      <div className="most_viewed_img ">
                        <img src={poductDetails.image} alt="MostViewedimg" />
                      </div>
                      <div className="most_viewed_info">
                        <p className="most_viewed_info_title">
                          {currentLocal.language === "English"
                            ? poductDetails.en_title
                            : poductDetails.ar_title}
                        </p>
                        <h6 className="m-0 p-0">{poductDetails.created_at}</h6>
                      </div>
                    </div>
                  </Col>
                </Link>
              );
            })}
        </Row>
      </Container>
    </div>
  );
}

export default MostViewed;
