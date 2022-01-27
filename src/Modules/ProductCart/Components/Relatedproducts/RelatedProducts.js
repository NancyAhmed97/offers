import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import toy from "../../../../Resources/Assets/img/52856.png"
import mobile from "../../../../Resources/Assets/img/smallMobile.png"
import bag from "../../../../Resources/Assets/img/smallBag.png"
import book from "../../../../Resources/Assets/img/smallBook.png"
import camera from "../../../../Resources/Assets/img/smallCamer.png"
import { useSelector } from "react-redux";
import "./RelatedProducts.css"
import Product from '../../../Common/Poduct/Product';
function RelatedProducts() {
    const { currentLocal } = useSelector((state) => state.currentLocal);
    const product=[{
        id:"1",
        img:toy,
        title:"Add product name here in this space ",
        rating:"4",
        price:"SAR 3,099.00"
    },{
        id:"2",
        img:mobile,
        title:"Add product name here in this space ",
        rating:"4",
        price:"SAR 3,099.00"
    },{
        id:"3",
        img:bag,
        title:"Add product name here in this space ",
        rating:"4",
        price:"SAR 3,099.00"
    },{
        id:"4",
        img:book,
        title:"Add product name here in this space ",
        rating:"4",
        price:"SAR 3,099.00"
    },{
        id:"5",
        img:camera,
        title:"Add product name here in this space ",
        rating:"4",
        price:"SAR 3,099.00"
    },{
        id:"6",
        img:camera,
        title:"Add product name here in this space ",
        rating:"4",
        price:"SAR 3,099.00"    
    }]
  return <div className='related_products pr pl'>
<div className='related_products_title'>
<p>{currentLocal.productDetails.relatedProducts}</p>
</div>
<Container fluid className='m-0 p-0' >
    <Row className='m-0 p-0'>
        {product.map((productDetails)=>{
            return(
                <Col md={2} className='p-0' key={productDetails.id}>
                    <Product
                    img={productDetails.img}
                    title={productDetails.title}
                    price={productDetails.price}
                    rating={productDetails.rating}
                    />
                </Col>

            )
        })}
    
    </Row>
</Container>
  </div>;
}

export default RelatedProducts;
