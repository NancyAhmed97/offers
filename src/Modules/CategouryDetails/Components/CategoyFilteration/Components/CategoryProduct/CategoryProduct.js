import React, { useEffect } from "react";
import ReactPaginate from "react-paginate";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import leftArrow from "../../../../../../Resources/Assets/img/Icon feather-arrow-left.svg";
import rightArrow from "../../../../../../Resources/Assets/img/Icon feather-arrow-right.svg";
import axios from "axios";
import Product from "../../../../../Common/Poduct/Product";
import "./CategoryProduct.css";
function CategoryProduct() {
  const [postsArr, setPostsArr] = useState([]);
  const [pageCount, setPageCount] = useState("");
  const { currentLocal } = useSelector((state) => state.currentLocal);
  useEffect(() => {
    axios({
      method: "get",
      url: `https://offers.com.fig-leaf.net/api/v1/blogs`,
    }).then((res) => {
      setPostsArr(res.data.data.items);
      setPageCount(res.data.data.pagination.last_page);
    });
  }, []);
  var displayUsers = postsArr.map((user) => {
    return (
      <Col lg="3" md="6">
        <Product
          img={user.image}
          title={user.en_title}
          key={user.id}
          rating={"4"}
          Currency={"SAR"}
          price={"3,099.00"}
          id={user.id}
          is_favorite={false}
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
  return (
    <div className="category_product">
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
    </div>
  );
}

export default CategoryProduct;
