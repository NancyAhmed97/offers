import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import blogImg from "../../../../../../Resources/Assets/img/Educational-Toys-Store-in-Jakarta.png";
import "./RelatedBlog.css"
function RelatedBlog() {
    const blog = [
        {
          id: 1,
    
          img: blogImg,
          date: "5 September, 2022",
          title:
            " Add product name here in this space and edit it here in same Content",
        },
        {
          id: 2,
    
          img: blogImg,
          date: "5 September, 2022",
          title:
            " Add product name here in this space and edit it here in same Content",
        }
      ];
  return <div className='related_blog'>
      <Container fluid className='p-0 m-0'>
          <Row>
          {blog.map((blogDetails) => {
            return (
              <Col md={4} key={blogDetails.id}>
         <Link to="/blogDetails">
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
                </div>
         </Link>
              </Col>
            );
          })}
        </Row>
      </Container>
  </div>;
}

export default RelatedBlog;
