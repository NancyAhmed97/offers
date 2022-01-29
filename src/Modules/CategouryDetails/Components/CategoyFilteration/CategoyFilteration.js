import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CategoryProduct from './Components/CategoryProduct/CategoryProduct';
import FilerBar from './Components/FilerBar/FilerBar';

function CategoyFilteration() {
  return <div className='categoy_filteration pr pl'>
      <Container fluid className='p-0 m-0'>
          <Row className='p-0 m-0'>
              <Col className='p-0' md={3}>
                  <FilerBar />
              </Col>
              <Col className='p-0' md={9}>
                  <CategoryProduct />
              </Col>
          </Row>
      </Container>

  </div>;
}

export default CategoyFilteration;
