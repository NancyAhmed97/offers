import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Blog.css";
function Blog({ bolgs }) {
  const { currentLocal } = useSelector((state) => state.currentLocal);
  return (
    <section className=    {currentLocal.language === "English"
    ?"blog pr pl mb-5"
    : "blog ar_blog pr pl mb-5"}>
      <h2>{currentLocal.blog.blog}</h2>
      <p>{currentLocal.blog.disc}</p>
      <Container fluid className="p-0">
        <Row>
          {bolgs.map((blogDetails) => {
            // const url = "https://offers.com.fig-leaf.net";
            return (
              <Col md={4} key={blogDetails.id}>
                <Link
                  to={`/blogDetails/:${blogDetails.id}`}
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                >
                  <div className="blog_img">
                    <img
                      src={blogDetails.image}
                      className="w-100"
                      alt="blogDetails"
                    />
                  </div>
                  <div className="blog_content">
                    <p className="date px-2 py-1 mt-3">
                      {blogDetails.created_at}{" "}
                    </p>
                    <h5>
                      {currentLocal.language === "English"
                        ? blogDetails.en_title
                        : blogDetails.ar_title}
                    </h5>
                    <p className="paragrapg">
                      {currentLocal.language === "English"
                        ? blogDetails.en_short_description
                        : blogDetails.ar_short_description}
                    </p>
                  </div>
                </Link>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}

export default Blog;
