import React, { useEffect } from "react";
import ReactPaginate from "react-paginate";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import leftArrow from "../../../../../../Resources/Assets/img/categoryRightArrow.svg";
import rightArrow from "../../../../../../Resources/Assets/img/Icon feather-arrow-right.svg";
import DropdownArrow from "../../../../../../Resources/Assets/img/Icon awesome-caret-down.svg";
import axios from "axios";
import Product from "../../../../../Common/Poduct/Product";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import "./CategoryProduct.css";
function CategoryProduct() {
  var { auth } = useSelector((state) => state);
  const [postsArr, setPostsArr] = useState([]);
  // const [pageCount, setPageCount] = useState("");
  // const [currentPage, setCurrentPage] = useState("");
  // const [perPage, setPerPage] = useState("");
  const { currentLocal } = useSelector((state) => state.currentLocal);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 12;
  const pagesVisited = pageNumber * usersPerPage;
  const open = Boolean(anchorEl);
  useEffect(() => {
    axios({
      method: "get",
      url: `https://offers.com.fig-leaf.net/api/v1/products?category_id=${localStorage.getItem(
        "id"
      )}`,
      headers: { Authorization: `Bearer ${auth.authorization.access_token}` },
    }).then((res) => {
      // setPerPage(res.data.data.pagination.per_page);
      // setCurrentPage(res.data.data.pagination.current_page);
      // setTotal(res.data.data.pagination.total);
      setPostsArr(res.data.data.items);
      // setPageCount(res.data.data.pagination.last_page);
    });
  }, [auth.authorization.access_token, localStorage.getItem("id")]);
  var displayUsers = postsArr
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((user) => {
      const url = "https://offers.com.fig-leaf.net";
      return (
        <Col lg="3" md="6">
          <Product
            img={url + user.image}
            title={
              currentLocal.language === "English"
                ? user.en_title
                : user.ar_title
            }
            key={user.id}
            rating={user.rate}
            price={user.price}
            id={user.id}
            is_favorite={user.is_favorite}
          />
        </Col>
      );
    });
  const pageCount = Math.ceil(postsArr.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuItemClick = (event, index) => {
    axios({
      method: "get",
      url: `https://offers.com.fig-leaf.net/api/v1/products?category_id=${localStorage.getItem(
        "id"
      )}&sub_category_id=${localStorage.getItem(
        "subCateguryId"
      )}&min_price=${localStorage.getItem(
        "min_price"
      )}&max_price=${localStorage.getItem("min_price")}&sort_by=${event.target.id}`,
      headers: { Authorization: `Bearer ${auth.authorization.access_token}` },
    }).then((res) => {
      localStorage.setItem("silterArray", res.data.data);
    });
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const options = ["recent", "minimum_price", "fast_payment"];

  return (
    <div className="category_product">
      <div className="d-flex justify-content-between w-100 px-5 py-2 category_product_sorting">
        <div className="d-flex">
          <p className="showing">{currentLocal.shopByCategory.Showing}:</p>
          <p className="mb-0 pagination mx-2">
            {pageNumber + 1} - {pagesVisited + usersPerPage} out of{" "}
            {postsArr && postsArr.length} {currentLocal.shopByCategory.products}
          </p>
        </div>
        <div className="d-flex sort_by_container">
          <span className="sort_by  mx-2">
            {currentLocal.shopByCategory.sortBy}
          </span>
          <div className="d-flex sort_by_drop_down justify-content-between">
            <List
              component="nav"
              aria-label="Device settings "
              sx={{ bgcolor: "background.paper" }}
            >
              <ListItem
                button
                id="lock-button"
                aria-haspopup="listbox"
                aria-controls="lock-menu"
                aria-label="when device is locked"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClickListItem}
              >
                <ListItemText secondary={options[selectedIndex]} />
                <img src={DropdownArrow} alt="DropdownArrow" />
              </ListItem>
            </List>
            <Menu
              id="lock-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "lock-button",
                role: "listbox",
              }}
            >
              {options.map((option, index) => (
                <MenuItem
                  key={option}
                  // disabled={index === 0}
                  selected={index === selectedIndex}
                  id={option}
                  onClick={(event) => handleMenuItemClick(event, index)}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </div>
        </div>
      </div>
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
