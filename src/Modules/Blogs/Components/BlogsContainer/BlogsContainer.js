import React, { useEffect } from 'react';
import ReactPaginate from "react-paginate";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import leftArrow from "../../../../Resources/Assets/img/Icon feather-arrow-left.svg"
import rightArrow from "../../../../Resources/Assets/img/Icon feather-arrow-right.svg"
import axios from "axios";
import "./BlogsContainer.css"
import Product from '../../../Common/Poduct/Product';
function BlogsContainer() {
  const [postsArr, setPostsArr] = useState([]);
  const [pageCount, setPageCount] = useState("");
  const { currentLocal } = useSelector((state) => state.currentLocal);
useEffect(() => {
axios({
  method: "get",
  url: `https://tascerp.com/api/v1/blogs`,
}).then((res) => {
  setPostsArr(res.data.data.items);
  setPageCount(res.data.data.pagination.last_page);

});
}, []);
var displayUsers = postsArr.map((user) => {
  return (
    <Col lg="4" md="6">

      <Product
        img={user.image}
        title={user.en_title}
        key={user.id}
        date={"5 September, 2022"}
        rating={"4"}
        id={user.id}
        desc={"Rendered her for put improved concerns his. Ladies bed wisdom theirs mrs men months set. Everything"}
      />
    </Col>
  );
});
const changePage = ({ selected }) => {
  axios({
    method: "get",
    url: `https://tascerp.com/api/v1/blogs?page=${selected + 1}`,
  }).then((res) => {
    setPostsArr(res.data.data.items);
  });
};

  return <div className='blog_container pl pr'>
      <Container>
        <Row>{displayUsers}</Row>
      </Container>
      <ReactPaginate
        previousLabel={
          currentLocal.language === "English" ? (
            <img src={leftArrow} alt="leftArrow" />
          ) : (
            <img src={rightArrow} alt="rightArrow" />
          )
        }
        nextLabel={
          currentLocal.language === "English" ? (
            <img src={rightArrow} alt="rightArrow" />
          ) : (
            <img src={leftArrow} alt="leftArrow" />
          )
        }
        pageCount={pageCount}
        breakLabel={"none"}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />  
      
      </div>;
}

export default BlogsContainer;
