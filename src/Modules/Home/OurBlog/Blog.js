import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import blogImg from "../../../Resources/Assets/img/Educational-Toys-Store-in-Jakarta.png";
import "./Blog.css";
function Blog() {
  const blog = [
    {
      id: 1,

      img: blogImg,
      date: "5 September, 2022",
      title:
        " Add product name here in this space and edit it here in same Content",
      paragraph:
        "Rendered her for put improved concerns his. Ladies bed wisdom theirs mrs men months set. Everything so ",
    },
    {
      id: 2,

      img: blogImg,
      date: "5 September, 2022",
      title:
        " Add product name here in this space and edit it here in same Content",
      paragraph:
        "Rendered her for put improved concerns his. Ladies bed wisdom theirs mrs men months set. Everything so ",
    },
    {
      id: 3,
      img: blogImg,
      date: "5 September, 2022",
      title:
        " Add product name here in this space and edit it here in same Content",
      paragraph:
        "Rendered her for put improved concerns his. Ladies bed wisdom theirs mrs men months set. Everything so ",
    },
  ];
  const { currentLocal } = useSelector((state) => state.currentLocal);
  return (
    <section className="blog pr pl">
      <h2>{currentLocal.blog.blog}</h2>
      <p>{currentLocal.blog.disc}</p>
      <Container fluid className="p-0">
        <Row>
          {blog.map((blogDetails) => {
            return (
              <Col md={4} key={blogDetails.id}>
         <Link 
  to={`/blogDetails/:${blogDetails.id}`}         
         >
         <div className="blog_img">
                  <img
                    src={blogDetails.img}
                    alt={blogDetails.img}
                    className="w-100"
                  />
                </div>
                <div className="blog_content">
                  <p className="date px-2 py-1 mt-3">{blogDetails.date} </p>
                  <h5>{blogDetails.title}</h5>
                  <p className="paragrapg">{blogDetails.paragraph}</p>
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
