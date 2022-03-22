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
function CategoryProduct({ subCategoryArr }) {
  var { auth } = useSelector((state) => state);
  const [postsArr, setPostsArr] = useState([]);
  const { currentLocal } = useSelector((state) => state.currentLocal);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  // const [pageNumber, setPageNumber] = useState(0);
  const [pagination, setPagination] = useState("");
  const [pageCount, setPageCount] = useState("");
  const minPriceId = localStorage.getItem("min_price");
  const maxPriceId = localStorage.getItem("max_price");
  const sortBy=localStorage.getItem("sortBy")
  const subCategoryId = localStorage.getItem("subCateguryId");
  const usersPerPage = 12;
  const pageNumber = 0;
  const pagesVisited = pageNumber * usersPerPage;
  const open = Boolean(anchorEl);
  useEffect(() => {
    axios({
      method: "get",
      url: `https://offers.com.fig-leaf.net/api/v1/products?category_id=1`,
      headers: { Authorization: `Bearer ${auth.authorization.access_token}` },
    }).then((res) => {
      setPostsArr(
        subCategoryArr.items ? subCategoryArr.items : res.data.data.items
      );
      setPagination(
        subCategoryArr ? subCategoryArr.pagination : res.data.data.pagination
      );
      setPageCount(
        subCategoryArr
          ? subCategoryArr.pagination.last_page
          : res.data.data.pagination.last_page
      );
    });
  }, [auth.authorization.access_token, subCategoryArr]);
  var displayUsers =
    postsArr.length !== 0 ? (
      postsArr.slice(pagesVisited, pagesVisited + usersPerPage).map((user) => {
        const url = "https://offers.com.fig-leaf.net";
        return (
          <Col lg="3" md="6" className="mt-2">
            <Product
              img={url + user.image}
              title={
                currentLocal.language === "English"
                  ? user.en_name
                  : user.ar_name
              }
              key={user.id}
              rating={user.rate}
              price={user.price}
              id={user.id}
              is_favorite={user.is_favorite}
            />
          </Col>
        );
      })
    ) : (
      <p className="d-flex justify-content-center align-items-center w-100 h-100">
        No products
      </p>
    );
  const changePage = ({ selected }) => {
    axios({
      method: "get",
      url: `https://offers.com.fig-leaf.net/api/v1/products?category_id=${localStorage.getItem(
        "id"
      )}&sub_category_id=${subCategoryId ? subCategoryId : ""}&min_price=${
        minPriceId ? minPriceId : ""
      }&max_price=${
        maxPriceId ? maxPriceId : ""
      }&sort_by=${sortBy?sortBy:""}&page=${selected + 1}`,
      headers: { Authorization: `Bearer ${auth.authorization.access_token}` },
    }).then((res) => {
      setPostsArr(res.data.data.items);
      setPagination(
        subCategoryArr ? subCategoryArr.pagination : res.data.data.pagination
      );
    });
  };
  const handleClickListItem = (event, e) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuItemClick = (event, index) => {
    localStorage.setItem("sortBy", event.target.id);

    axios({
      method: "get",
      url: `https://offers.com.fig-leaf.net/api/v1/products?category_id=${localStorage.getItem(
        "id"
      )}&sub_category_id=${subCategoryId ? subCategoryId : ""}&min_price=${
        minPriceId ? minPriceId : ""
      }&max_price=${maxPriceId ? maxPriceId : ""}&sort_by=${event.target.id}`,
      headers: { Authorization: `Bearer ${auth.authorization.access_token}` },
    }).then((res) => {
      setPostsArr(subCategoryArr ? subCategoryArr.items : res.data.data.items);
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
            {pagination.first_page_url} - {pagination.first_page_url+11} out of{" "}
            {pagination.total} {currentLocal.shopByCategory.products}
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
      <Container className={postsArr.length === 0 && "handle_container"}>
        <Row className={postsArr.length === 0 && "h-100"}>{displayUsers}</Row>
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
