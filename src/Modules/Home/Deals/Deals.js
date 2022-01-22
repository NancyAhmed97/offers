import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import PopularItems from './Components/PopularItems/PopularItems';

function Deals() {
  return <div className='deals pl pr mt-5 pt-3'>
<Container className='m-0 p-0' fluid>
    <Row className='m-0 p-0'>
        <Col md={3} className='m-0 p-0'>hi</Col>
        <Col md={9} className='m-0 p-0'>
          <PopularItems />
        </Col>
    </Row>
</Container>

  </div>;
}

export default Deals;
