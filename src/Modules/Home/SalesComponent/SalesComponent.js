import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./SalesComponent.css";
function SalesComponent({ banner }) {
  const url = "https://offers.com.fig-leaf.net";
  return (
    <section className="sales_component pl pr mt-5">
      <Container fluid className="p-0">
        <Row>
          <Col md={6}>
            {banner.left_banner_redirect !== undefined ||
            banner.left_banner_redirect === null ? (
              <Link
                to={`/productcart/:${
                  banner.left_banner_redirect !== undefined &&
                  banner.left_banner_redirect.id
                }`}
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
                className="text-decoration-none"
              >
                <img
                  src={
                    banner.right_banner_image !== undefined &&
                    url + banner.left_banner_image
                  }
                  alt="Banners"
                  className="w-100"
                />
              </Link>
            ) : (
              <img
                src={
                  banner.right_banner_image !== undefined &&
                  url + banner.left_banner_image
                }
                alt="Banners"
                className="w-100"
              />
            )}
          </Col>
          <Col md={6}>
            {banner.right_banner_redirect !== undefined ||
            banner.right_banner_redirect === null ? (
              <Link
                to={`/productcart/:${
                  banner.right_banner_redirect !== undefined &&
                  banner.right_banner_redirect.id
                }`}
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
                className="text-decoration-none"
              >
                <img
                  src={
                    banner.right_banner_image !== undefined &&
                    url + banner.right_banner_image
                  }
                  alt="Banners"
                  className="w-100"
                />
              </Link>
            ) : (
              <img
                src={
                  banner.right_banner_image !== undefined &&
                  url + banner.right_banner_image
                }
                alt="Banners"
                className="w-100"
              />
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default SalesComponent;
