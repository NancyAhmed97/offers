import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../../Resources/Assets/img/Logo.png";
import smallLogo from "../../../../Resources/Assets/img/Group 5929.png";
import sideMenu from "../../../../Resources/Assets/img/Group 5911.svg";
import cart from "../../../../Resources/Assets/img/Icon feather-shopping-cart.svg";
import heart from "../../../../Resources/Assets/img/Icon feather-heart.svg";
import searchIcon from "../../../../Resources/Assets/img/Icon feather-search.svg";
import categouryArrow from "../../../../Resources/Assets/img/categouryArrow.svg";
import menuArrow from "../../../../Resources/Assets/img/menuArrow.svg";
import "./HeaderMain.css";
import { Col, Container, Dropdown, Offcanvas, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { changeLocal } from "../../../../Redux/Localization";
import axios from "axios";
import ReactStars from "react-rating-stars-component";
import { logout } from "../../../../Redux/Authorization";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { addProductWishList } from "../../../../Redux/wishListRedux";
import { addProduct } from "../../../../Redux/cartRedux";
function HeaderMain() {
  const { currentLocal } = useSelector((state) => state.currentLocal);
  var { auth } = useSelector((state) => state);
  var authState = Object.keys(auth.authorization).length;
  const [categories, setcategories] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [categoryId, setcategoryId] = useState("");
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();
 const quantityWishList = useSelector(state=>state.wishlist.quantity)
  const history = useHistory();
  const [show, setShow] = useState(false);
  const [showSubCategoury, setShowSubCategoury] = useState(false);
  const [SubCategoury, setSubCategoury] = useState([]);
  const [subCategouryId, setSubCategouryId] = useState(false);
  const [categoriesItemId, setCategoriesItemId] = useState("");
  const [cartCount, setCartCount] = useState("");
  const [showAllCategoury, setShowAllCategoury] = useState(false);
  const handleClose = () => setShow(false);
  // const [open, setOpen] = useState(false);
  const handleShow = () => setShow(true);
  const quantity = useSelector((state) => state.cart.quantity);
  const url = "https://offers.com.fig-leaf.net";
  useEffect(() => {
    axios({
      method: "get",
      url: "https://offers.com.fig-leaf.net/api/v1/categories",
    }).then((res) => {
      if (res.data.success === true) {
        setcategories(res.data.data);
        // setErrorState(false)
      }
    });
    axios({
      method: "get",
      url: `https://offers.com.fig-leaf.net/api/v1/favorites`,
      headers: { Authorization: `Bearer ${auth.authorization.access_token}` },
    }).then((res) => {
      dispatch(addProductWishList(res.data.data.items.length));
    });
    axios({
      method: "get",
      url: `https://offers.com.fig-leaf.net/api/v1/cart`,
      headers: { Authorization: `Bearer ${auth.authorization.access_token}` },
    }).then((res) => {
      if (res.data.success === true) {
        setCartCount(res.data.data.cart.products.length);
        dispatch(addProduct(res.data.data.cart.products.length));

      }
    });
  }, [auth, cartCount]);
  const louaut = () => {
    axios({
      method: "get",
      url: `https://offers.com.fig-leaf.net/api/v1/logout`,
      headers: { Authorization: `Bearer ${auth.authorization.access_token}` },
    }).then((res) => {
      if (res.data.success === true) {
        dispatch(logout({}));
        localStorage.deleteItem("firstName");
        localStorage.deleteItem("lastName");
        localStorage.deleteItem("country");
        localStorage.deleteItem("city");
        localStorage.deleteItem("streetAddress");
        localStorage.deleteItem("email");
        localStorage.deleteItem("orderNode");
        localStorage.deleteItem("acceptTerms");
        localStorage.deleteItem("AddressType");
        localStorage.deleteItem("countryPhoneId");
        localStorage.deleteItem("mobile");
        localStorage.deleteItem("finalPrice");
      }
    });
  };
  const getData = (e) => {
    setSearchText(e.target.value);
    if (categoryId) {
      // setErrorState(true)
      if (e.target.value.length >= 3 && categoryId) {
        axios({
          method: "get",
          url: `https://offers.com.fig-leaf.net/api/v1/search?search=${e.target.value}&category_id=${categoryId}`,
        }).then((res) => {
          if (res.data.success === true) {
            setSearchResult(res.data.data.items);
          }
        });
      }
    }
  };

  return (
    // <div className={currentLocal.language==="English"?'contact_form pr pl':"ar_contact_form contact_form pr pl"}>
    <div
      className={
        currentLocal.language === "English"
          ? "header_main_container en_header_main_container "
          : "header_main_container ar_header_main_container "
      }
    >
      <div
        className={
          currentLocal.language === "English"
            ? "header_main pr pl"
            : "header_main ar_header_main pr pl"
        }
      >
        <Container fluid className="m-0 p-0">
          <Row className="p-0 m-0">
            <Col md={2} className="m-0 p-0">
              <div className="header_main_logo d-flex">
                <img
                  src={sideMenu}
                  alt="sideMenu"
                  onClick={handleShow}
                  className="mx-3 sideMenu"
                />
                <Link to="/">
                  <img src={logo} alt="footer_logo" />
                </Link>{" "}
              </div>
            </Col>
            <Col md={7} className="m-0 p-0">
              <div className="search position-relative">
                <form>
                  {/* {errorState&&
                <p className="mb-0">please choose category</p>
                } */}
                  <input
                    type="search"
                    placeholder={currentLocal.home.search}
                    className="w-100"
                    value={searchText}
                    onChange={getData}
                  />
                  <button type="submit" className="search_icon">
                    <img src={searchIcon} alt="searchIcon" />
                  </button>
                  <select name="cars" id="cars">
                    <option value="volvo">all categories</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                  </select>
                  {/* <Dropdown>
                    <Dropdown.Toggle
                      variant="transparent"
                      className="text-white"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginTop: "5px",
                      }}
                    >
                      <div>{currentLocal.home.category}</div>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      {categories.map((categoriesItem) => {
                        return (
                          <Dropdown.Item
                            onClick={() => {
                              setcategoryId(categoriesItem.id);
                            }}
                            key={categoriesItem.id}
                          >
                            {currentLocal.language === "English"
                              ? categoriesItem.en_name
                              : categoriesItem.ar_name}
                        
                          </Dropdown.Item>
                        );
                      })}
                    </Dropdown.Menu>
                  </Dropdown> */}
                </form>
              </div>
            </Col>
            <Col md={3} className="m-0 p-0">
              <div className="w-100 d-flex mt-3 authantication">
                <ul className="list_inline d-flex m-0 p-0">
                  <Link to={"/cart"}>
                    <li className="shopping d-flex mx-3">
                      <p className="count_items  mt-3">
                        {authState !== 0 ? quantity : 0}
                      </p>
                      <img src={cart} alt="cart" />
                    </li>
                  </Link>
                  <Link to={"/wishlist"}>
                    <li className="wish_list d-flex">
                      <p className="count_items mt-3">
                        {authState !== 0 ? quantityWishList : 0}
                      </p>
                      <img src={heart} alt="heart" />
                    </li>
                  </Link>
                </ul>
                <div className="header_auth text-white">
                  {authState !== 0 ? (
                    <span onClick={louaut} style={{ cursor: "pointer" }}>
                      {currentLocal.home.logout}
                    </span>
                  ) : (
                    <Link to="/signup"> {currentLocal.home.login}</Link>
                  )}
                  {authState === 0 && (
                    <Link to="/signup">/{currentLocal.home.signup} </Link>
                  )}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              <Link to="/">
                <img src={smallLogo} alt="smallLogo" />
              </Link>
              <span className="p-3">{currentLocal.home.welcome}</span>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            {!showSubCategoury && (
              <>
                <h5>{currentLocal.home.ourMainCategories}</h5>
                {categories.map((categoriesItem) => {
                  return (
                    <div
                      id={
                        currentLocal.language === "English"
                          ? categoriesItem.en_name
                          : categoriesItem.ar_name
                      }
                      className="d-flex w-100 justify-content-between my-3"
                      onClick={(e) => {
                        setSubCategouryId(e.target.id);
                        setShowSubCategoury(true);
                        setCategoriesItemId(categoriesItem.id);
                        axios({
                          method: "get",
                          url: `https://offers.com.fig-leaf.net/api/v1/sub_categories/${categoriesItem.id}`,
                          headers: {
                            Authorization: `Bearer ${auth.authorization.access_token}`,
                          },
                        }).then((res) => {
                          setSubCategoury(res.data.data);
                        });
                      }}
                      style={{ cursor: "pointer" }}
                      key={categoriesItem.id}
                    >
                      <div
                        id={
                          currentLocal.language === "English"
                            ? categoriesItem.en_name
                            : categoriesItem.ar_name
                        }
                        className="categouryId"
                      >
                        {currentLocal.language === "English"
                          ? categoriesItem.en_name
                          : categoriesItem.ar_name}
                      </div>
                      <img
                        id={
                          currentLocal.language === "English"
                            ? categoriesItem.en_name
                            : categoriesItem.ar_name
                        }
                        src={menuArrow}
                        alt="menuArrow"
                      />
                    </div>
                  );
                })}
                <h5>{currentLocal.home.OfferSiteLinks}</h5>
                <ul className="p-0">
                  <li className="list-unstyled mb-3">
                    {" "}
                    <Link
                      to="/aboutus"
                      onClick={() => {
                        window.scrollTo(0, 0);
                      }}
                    >
                      {currentLocal.footer.aboutus}
                    </Link>
                  </li>
                  <li className="list-unstyled mb-3">
                    {" "}
                    <Link
                      to="/contactus"
                      onClick={() => {
                        window.scrollTo(0, 0);
                      }}
                    >
                      {currentLocal.footer.contect}
                    </Link>
                  </li>
                  <li className="list-unstyled mb-3">
                    {" "}
                    <Link
                      to="/blogs"
                      onClick={() => {
                        window.scrollTo(0, 0);
                      }}
                    >
                      {currentLocal.blog.blog}
                    </Link>
                  </li>
                  <li className="list-unstyled mb-3">
                    {" "}
                    <Link
                      to="/privacy"
                      onClick={() => {
                        window.scrollTo(0, 0);
                      }}
                    >
                      {currentLocal.home.privacyAndPolicy}
                    </Link>
                  </li>
                </ul>
              </>
            )}
            {showSubCategoury && (
              <>
                <div
                  onClick={() => {
                    setShowSubCategoury(false);
                    setSubCategoury([]);
                  }}
                  style={{ cursor: "pointer" }}
                  className="showSubCategoury"
                >
                  <div className="d-flex py-4">
                    <img src={categouryArrow} alt="menuArrow" />
                    <div className="subCategouryId" onClick={() => {}}>
                      {subCategouryId}
                    </div>
                  </div>{" "}
                </div>
                {SubCategoury &&
                  SubCategoury.map((supCategoriesItem, index) => {
                    return (
                      <div
                        className="d-flex  justify-content-between"
                        onClick={() => {
                          history.push(
                            `/CategouryDetails/:${categoriesItemId}`
                          );
                          window.location.reload(false);
                        }}
                        key={index}
                      >
                        <div className="categouryId">
                          {" "}
                          {currentLocal.language === "English"
                            ? supCategoriesItem.en_name
                            : supCategoriesItem.ar_name}
                        </div>
                        <img src={menuArrow} alt="menuArrow" />
                      </div>
                    );
                  })}
              </>
            )}
            <div className="langouage">
              <p>
                <span
                  onClick={(e) => {
                    dispatch(changeLocal("en"));
                  }}
                >
                  Eng |
                </span>
                <span
                  onClick={(e) => {
                    dispatch(changeLocal("ar"));
                  }}
                >
                  العربية
                </span>
              </p>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
      {searchResult.length !== 0 && (
        <div className="searchResult px-3 p-3">
          {searchResult.slice(0, 3).map((searchResultItem) => {
            return (
              <Link
                to={`/productcart/:${
                  searchResultItem.id !== undefined && searchResultItem.id
                }`}
                key={searchResult.id}
              >
                <div className="searchResultItem mb-3 d-flex">
                  <div className="img">
                    <img
                      src={url + searchResultItem.image}
                      alt="searchResultItem"
                    />
                  </div>
                  <div className="description mx-4">
                    <p className="mb-0">
                      {currentLocal.language === "English"
                        ? searchResultItem.en_name
                        : searchResultItem.ar_name}
                    </p>
                    <ReactStars
                      count={5}
                      value={searchResultItem.rate}
                      size={24}
                      color2={"#FABB27"}
                      edit={false}
                      id="stars"
                    />
                    <p>
                      <span className="crancy">SAR</span>
                      <span className="price"> {searchResultItem.price}</span>
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
          {!showAllCategoury && (
            <div
              className="text-center drop_down_arrow  mb-2"
              style={{ cursor: "pointer" }}
              onClick={() => {
                setShowAllCategoury(true);
              }}
            >
              <ArrowDropDownIcon />
            </div>
          )}
          {showAllCategoury && (
            <>
              {searchResult.slice(5).map((searchResultItem) => {
                return (
                  <Link
                    to={`/productcart/:${
                      searchResultItem.id !== undefined && searchResultItem.id
                    }`}
                    key={searchResult.id}
                  >
                    <div className="searchResultItem mb-3 d-flex">
                      <div className="img">
                        <img
                          src={url + searchResultItem.image}
                          alt="searchResultItem"
                        />
                      </div>
                      <div className="description mx-4">
                        <p className="mb-0">
                          {currentLocal.language === "English"
                            ? searchResultItem.en_name
                            : searchResultItem.ar_name}
                        </p>
                        <ReactStars
                          count={5}
                          value={searchResultItem.rate}
                          size={24}
                          color2={"#FABB27"}
                          edit={false}
                          id="stars"
                        />
                        <p>
                          <span className="crancy">SAR</span>
                          <span className="price">
                            {" "}
                            {searchResultItem.price}
                          </span>
                        </p>
                      </div>
                    </div>
                  </Link>
                );
              })}
              {showAllCategoury && (
                <div
                  className="text-center drop_down_arrow  mb-2"
                  onClick={() => {
                    setShowAllCategoury(false);
                  }}
                  style={{ cursor: "pointer" }}
                >
                  <ArrowDropUpIcon />
                </div>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default HeaderMain;
