import React, { useEffect } from "react";
import ReactPaginate from "react-paginate";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import leftArrow from "../../../../Resources/Assets/img/categoryRightArrow.svg";
import rightArrow from "../../../../Resources/Assets/img/Icon feather-arrow-right.svg";
import axios from "axios";
import "./BlogsContainer.css";
import Product from "../../../Common/Poduct/Product";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
function BlogsContainer() {
  const [postsArr, setPostsArr] = useState([]);
  const [pageCount, setPageCount] = useState("");
  const { currentLocal } = useSelector((state) => state.currentLocal);
  const location = useLocation();
  const searchInPath = location.pathname.indexOf("/:");
  const id = location.pathname.slice(searchInPath + 2);
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 12;
  const pagesVisited = pageNumber * usersPerPage;
  
  useEffect(() => {
    axios({
      method: "get",
      url:
        searchInPath > 0
          ? `https://offers.com.fig-leaf.net/api/v1/blogs?field_id=${id}`
          : `https://offers.com.fig-leaf.net/api/v1/blogs`,
    }).then((res) => {
      setPostsArr(res.data.data.items);
      setPageCount(res.data.data.pagination.last_page);
    });
  }, [id, searchInPath]);
  var displayUsers = postsArr
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((user) => {
      return (
        <Col lg="4" md="6" >
          <Link
            to={`/blogDetails/:${user.id}`}
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            className="text-decoration-none"
          >
            <Product
              img={user.image}
              title={
                currentLocal.language === "English"
                  ? user.en_title
                  : user.ar_title
              }
              key={user.id}
              date={user.created_at}
              id={user.id}
              desc={
                currentLocal.language === "English"
                  ? user.en_short_description
                  : user.ar_short_description
              }
              currentState={true}
            />
          </Link>
        </Col>
      );
    });
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="blog_container pl pr">
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

export default BlogsContainer;
