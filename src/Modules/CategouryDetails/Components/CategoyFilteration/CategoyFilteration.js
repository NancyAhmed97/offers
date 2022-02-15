import React , { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CategoryProduct from './Components/CategoryProduct/CategoryProduct';
import FilerBar from './Components/FilerBar/FilerBar';
import axios from 'axios';
function CategoyFilteration() {
    const [filterItem, setFilterItem] = useState([])
    useEffect(() => {
        axios({
          method: "get",
          url: `https://offers.com.fig-leaf.net/api/v1/categories`,
          // headers: { Authorization: `Bearer ${auth.authorization.access_token}` },
    
        }).then((res) => {
          if (res.data.success === true) {
            setFilterItem(res.data.data)
          }
        });
    
      }, []);
  return <div className='categoy_filteration pl pr'>
      <Container fluid className='p-0 m-0'>
          <Row className='p-0 m-0'>
              <Col className='p-0' md={2}>
                  <FilerBar filterItem={filterItem} />
              </Col>
              <Col className='p-0' md={10}>
                  <CategoryProduct  />
              </Col>
          </Row>
      </Container>

  </div>;
}

export default CategoyFilteration;
