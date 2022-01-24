import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useSelector } from "react-redux";
import MostViewedimg from "../../../../Resources/Assets/img/MostViewed.png"
import "./MostViewed.css"
function MostViewed() {
  const { currentLocal } = useSelector((state) => state.currentLocal);
  const product=[
    {
    id:1,
    img:MostViewedimg,
    productName:currentLocal.blogDetails.productName,
    date:"5 September, 2022"
  },
    {
    id:1,
    img:MostViewedimg,
    productName:currentLocal.blogDetails.productName,
    date:"5 September, 2022"
  },
    {
    id:1,
    img:MostViewedimg,
    productName:currentLocal.blogDetails.productName,
    date:"5 September, 2022"
  },
    {
    id:1,
    img:MostViewedimg,
    productName:currentLocal.blogDetails.productName,
    date:"5 September, 2022"
  },
    {
    id:1,
    img:MostViewedimg,
    productName:currentLocal.blogDetails.productName,
    date:"5 September, 2022"
  },
    {
    id:1,
    img:MostViewedimg,
    productName:currentLocal.blogDetails.productName,
    date:"5 September, 2022"
  },

]
  return <div className={currentLocal.language==="English"?'most_viewed':'most_viewed ar_most_viewed'}>
    <p className='m-0 p-0 most_viewed_title'>{currentLocal.blogDetails.mostViewed}</p>
<Container fluid className='m-0 p-0'>
  <Row className='p-0 m-0'>
    {product.map((poductDetails)=>{
return(
  <Col md={12} className='p-0 mb-5' key={product.id}>
  <div className='most_viewed_container d-flex'>
    <div className='most_viewed_img '>
      <img src={poductDetails.img} alt="MostViewedimg" />
    </div>
    <div className='most_viewed_info'>
      <p className='most_viewed_info_title'>{poductDetails.productName}</p>
      <h6 className='m-0 p-0'>{poductDetails.date}</h6>
    </div>
  </div>
      </Col>
)
    })}
  </Row>
</Container>
  </div>;
}

export default MostViewed;
