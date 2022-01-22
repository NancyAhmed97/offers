import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Footer  from "../../Modules/Common/Footer/Footer"
import Navbar  from "../../Modules/Common/Navbar/Navba"
import BlogInfo from './Container/BlogInfo/BlogInfo';
import MostViewed from './Container/MostViewed/MostViewed';
function BlogDetails() {
  return <div className='blog_details'> 
      <Navbar />
      <Container fluid className='m-0 pr pl mt-5'>
          <Row className='m-0 p-0'>
              <Col md={9} className="p-0 m-0">
                  <BlogInfo />
              </Col>
              <Col md={3} className="p-0 m-0">
                  <MostViewed />
              </Col>          </Row>
      </Container>
      <Footer />
  </div>
  ;
}

export default BlogDetails;
