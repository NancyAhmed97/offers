import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./RelatedBlog.css";
import { useSelector } from "react-redux";
function RelatedBlog({ related }) {
  const { currentLocal } = useSelector((state) => state.currentLocal);
  return (
    <div className="related_blog">
      <Container fluid className="p-0 m-0">
        <Row>
          {related &&
            related.map((blogDetails) => {
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
                        {" "}
                        {currentLocal.language === "English"
                          ? blogDetails.en_title
                          : blogDetails.ar_title}
                      </h5>
                      {/* <p className="product_desc">
                        {" "}
                        {currentLocal.language === "English"
                          ? blogDetails.en_short_description
                          : blogDetails.ar_short_description}
                      </p> */}
                    </div>
                  </Link>
                </Col>
              );
            })}
        </Row>
      </Container>
    </div>
  );
}

export default RelatedBlog;
